from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from .models import Certificate, CertificateSite
from .serializers import (
    CertificateSerializer,
    CertificateCreateSerializer,
    CertificateSiteSerializer,
    CertificateMaintenanceSerializer
)


class CertificateViewSet(viewsets.ModelViewSet):
    """
    ViewSet for Certificate CRUD operations

    List, Create, Retrieve, Update, Delete certificates

    Additional actions:
    - perform_maintenance: Mark certificate as maintained
    - get_qr_code: Retrieve QR code for a certificate
    """
    queryset = Certificate.objects.all()
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
        """
        certificate = self.get_object()

        if certificate.qr_code:
            return Response({
                'certificate_number': certificate.certificate_number,
                'qr_code_url': request.build_absolute_uri(certificate.qr_code.url),
                'company_name': certificate.company_name,
                'status': certificate.get_status_display()
            })
        else:
            return Response({
                'error': 'QR code not generated yet'
            }, status=status.HTTP_404_NOT_FOUND)

    @action(detail=False, methods=['get'])
    def expiring_soon(self, request):
        """
        Get certificates expiring within 90 days

        GET /api/certificates/expiring_soon/
        """
        from django.utils import timezone
        from datetime import timedelta

        ninety_days_from_now = timezone.now().date() + timedelta(days=90)
        certificates = self.queryset.filter(
            expiry_date__lte=ninety_days_from_now,
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
        """
        from django.utils import timezone

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
        """
        from django.http import HttpResponse
        from reportlab.lib.pagesizes import A4
        from reportlab.lib import colors
        from reportlab.lib.units import inch
        from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, Image
        from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
        from reportlab.lib.enums import TA_CENTER, TA_LEFT
        import os

        certificate = self.get_object()

        # Create PDF response
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = f'attachment; filename="certificate_{certificate.certificate_number}.pdf"'

        # Create PDF
        doc = SimpleDocTemplate(response, pagesize=A4)
        elements = []
        styles = getSampleStyleSheet()

        # Title
        title_style = ParagraphStyle(
            'CustomTitle',
            parent=styles['Heading1'],
            fontSize=24,
            textColor=colors.HexColor('#2c3e50'),
            alignment=TA_CENTER,
            spaceAfter=30,
        )
        elements.append(Paragraph("ISO CERTIFICATE", title_style))
        elements.append(Spacer(1, 0.3*inch))

        # Certificate Number
        cert_num_style = ParagraphStyle(
            'CertNumber',
            parent=styles['Heading2'],
            fontSize=16,
            textColor=colors.HexColor('#3498db'),
            alignment=TA_CENTER,
        )
        elements.append(Paragraph(f"Certificate No: {certificate.certificate_number}", cert_num_style))
        elements.append(Spacer(1, 0.3*inch))

        # Certificate details table
        data = [
            ['Company Name:', certificate.company_name],
            ['Standard:', certificate.get_standard_display()],
            ['Status:', certificate.get_status_display()],
            ['IAF Code:', certificate.iaf_code],
            ['First Issue Date:', str(certificate.first_issue_date)],
            ['Expiry Date:', str(certificate.expiry_date)],
            ['Next Maintenance:', str(certificate.next_maintenance_date)],
            ['Scope/Activity:', certificate.scope_activity],
        ]

        table = Table(data, colWidths=[2*inch, 4.5*inch])
        table.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (0, -1), colors.HexColor('#ecf0f1')),
            ('TEXTCOLOR', (0, 0), (-1, -1), colors.HexColor('#2c3e50')),
            ('ALIGN', (0, 0), (0, -1), 'LEFT'),
            ('ALIGN', (1, 0), (1, -1), 'LEFT'),
            ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
            ('FONTNAME', (1, 0), (1, -1), 'Helvetica'),
            ('FONTSIZE', (0, 0), (-1, -1), 11),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 12),
            ('TOPPADDING', (0, 0), (-1, -1), 12),
            ('GRID', (0, 0), (-1, -1), 1, colors.HexColor('#bdc3c7')),
            ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ]))

        elements.append(table)
        elements.append(Spacer(1, 0.5*inch))

        # QR Code
        if certificate.qr_code:
            qr_title_style = ParagraphStyle(
                'QRTitle',
                parent=styles['Heading3'],
                fontSize=14,
                textColor=colors.HexColor('#2c3e50'),
                alignment=TA_CENTER,
            )
            elements.append(Paragraph("Scan for Live Status", qr_title_style))
            elements.append(Spacer(1, 0.2*inch))

            qr_path = certificate.qr_code.path
            if os.path.exists(qr_path):
                qr_img = Image(qr_path, width=2*inch, height=2*inch)
                qr_img.hAlign = 'CENTER'
                elements.append(qr_img)

        # Build PDF
        doc.build(elements)
        return response


class CertificateSiteViewSet(viewsets.ModelViewSet):
    """
    ViewSet for Certificate Site CRUD operations

    Manage sites/locations associated with certificates
    """
    queryset = CertificateSite.objects.all()
    serializer_class = CertificateSiteSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['certificate', 'site_number']
    search_fields = ['name', 'address', 'scope_activity']
    ordering_fields = ['site_number', 'created_at']
    ordering = ['certificate', 'site_number']
