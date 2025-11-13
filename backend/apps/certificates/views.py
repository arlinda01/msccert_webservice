from django.utils import timezone
from datetime import timedelta
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from django.shortcuts import get_object_or_404
from .models import Certificate, CertificateSite, EXPIRING_SOON_DAYS
from .serializers import (
    CertificateSerializer,
    CertificateCreateSerializer,
    CertificateSiteSerializer,
    CertificateMaintenanceSerializer
)
from .utils.pdf_generator import CertificatePDFGenerator


class CertificateViewSet(viewsets.ModelViewSet):
    """
    ViewSet for Certificate CRUD operations (Admin only)

    List, Create, Retrieve, Update, Delete certificates

    Additional actions:
    - perform_maintenance: Mark certificate as maintained (admin)
    - qr_code: Get QR code info (admin)
    - download_pdf: Download certificate PDF (admin)
    - expiring_soon: List certificates expiring within 90 days (admin)
    - maintenance_due: List certificates with overdue maintenance (admin)
    - verify: Public endpoint to verify certificate by UUID (no auth required)
    """
    queryset = Certificate.objects.select_related().prefetch_related('sites')
    permission_classes = [IsAdminUser]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['status', 'standard', 'company_name']
    search_fields = ['certificate_number', 'company_name', 'scope_activity']
    ordering_fields = ['created_at', 'expiry_date', 'next_maintenance_date']
    ordering = ['-created_at']

    def get_serializer_class(self):
        """Use different serializers for different actions"""
        if self.action == 'create':
            return CertificateCreateSerializer
        elif self.action == 'perform_maintenance':
            return CertificateMaintenanceSerializer
        return CertificateSerializer

    @action(detail=True, methods=['post'])
    def perform_maintenance(self, request, pk=None):
        """
        Custom action to perform maintenance on a certificate

        POST /api/certificates/{id}/perform_maintenance/
        Headers: Authorization: Token <admin_token>
        """
        certificate = self.get_object()
        certificate.perform_maintenance()

        return Response({
            'message': 'Maintenance performed successfully',
            'next_maintenance_date': certificate.next_maintenance_date,
            'status': certificate.get_status_display()
        }, status=status.HTTP_200_OK)

    @action(detail=True, methods=['get'])
    def qr_code(self, request, pk=None):
        """
        Get QR code information for a certificate

        GET /api/certificates/{id}/qr_code/
        Headers: Authorization: Token <admin_token>
        """
        certificate = self.get_object()

        if certificate.qr_code:
            return Response({
                'certificate_number': certificate.certificate_number,
                'qr_code_url': request.build_absolute_uri(certificate.qr_code.url),
                'company_name': certificate.company_name,
                'status': certificate.get_status_display(),
                'secure_url': f"{request.scheme}://{request.get_host()}/api/certificates/verify/{certificate.secure_id}/"
            })
        else:
            return Response({
                'error': 'QR code not generated yet'
            }, status=status.HTTP_404_NOT_FOUND)

    @action(detail=False, methods=['get'], url_path='verify/(?P<secure_id>[^/.]+)', permission_classes=[AllowAny])
    def verify(self, request, secure_id=None):
        """
        Public endpoint to verify certificate by secure UUID

        GET /api/certificates/verify/{uuid}/
        No authentication required - this is the public verification endpoint

        Returns certificate details for display on frontend
        """
        try:
            certificate = get_object_or_404(Certificate, secure_id=secure_id)

            # Return limited public information
            return Response({
                'certificate_number': certificate.certificate_number,
                'company_name': certificate.company_name,
                'standard': certificate.get_standard_display(),
                'status': certificate.get_status_display(),
                'first_issue_date': certificate.first_issue_date,
                'expiry_date': certificate.expiry_date,
                'scope_activity': certificate.scope_activity,
                'iaf_code': certificate.iaf_code,
                'is_valid': certificate.status == 'VALID',
                'sites': CertificateSiteSerializer(certificate.sites.all(), many=True).data
            }, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({
                'error': 'Certificate not found or invalid UUID'
            }, status=status.HTTP_404_NOT_FOUND)

    @action(detail=False, methods=['get'])
    def expiring_soon(self, request):
        """
        Get certificates expiring within configured days (default 90)

        GET /api/certificates/expiring_soon/
        Headers: Authorization: Token <admin_token>
        """
        expiry_threshold = timezone.now().date() + timedelta(days=EXPIRING_SOON_DAYS)
        certificates = self.queryset.filter(
            expiry_date__lte=expiry_threshold,
            expiry_date__gte=timezone.now().date(),
            status='VALID'
        )

        serializer = self.get_serializer(certificates, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def maintenance_due(self, request):
        """
        Get certificates with maintenance due

        GET /api/certificates/maintenance_due/
        Headers: Authorization: Token <admin_token>
        """
        certificates = self.queryset.filter(
            next_maintenance_date__lte=timezone.now().date(),
            status='VALID'
        )

        serializer = self.get_serializer(certificates, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def download_pdf(self, request, pk=None):
        """
        Download certificate as PDF with QR code

        GET /api/certificates/{id}/download_pdf/
        Headers: Authorization: Token <admin_token>
        """
        certificate = self.get_object()

        # Use PDF generator service
        pdf_generator = CertificatePDFGenerator(certificate)
        return pdf_generator.generate()


class CertificateSiteViewSet(viewsets.ModelViewSet):
    """
    ViewSet for Certificate Site CRUD operations (Admin only)

    Manage sites/locations associated with certificates
    """
    queryset = CertificateSite.objects.select_related('certificate')
    serializer_class = CertificateSiteSerializer
    permission_classes = [IsAdminUser]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['certificate', 'site_number']
    search_fields = ['name', 'address', 'scope_activity']
    ordering_fields = ['site_number', 'created_at']
    ordering = ['certificate', 'site_number']