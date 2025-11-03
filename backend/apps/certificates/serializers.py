from rest_framework import serializers
from .models import Certificate, CertificateSite


class CertificateSiteSerializer(serializers.ModelSerializer):
    """
    Serializer for Certificate Sites
    """

    class Meta:
        model = CertificateSite
        fields = [
            'id',
            'certificate',
            'site_number',
            'name',
            'scope_activity',
            'address',
            'created_at',
            'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']


class CertificateSerializer(serializers.ModelSerializer):
    """
    Serializer for Certificates with nested sites
    """
    sites = CertificateSiteSerializer(many=True, read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)
    standard_display = serializers.CharField(source='get_standard_display', read_only=True)
    is_maintenance_due = serializers.BooleanField(read_only=True)
    days_until_expiry = serializers.IntegerField(read_only=True)

    class Meta:
        model = Certificate
        fields = [
            'id',
            'certificate_number',
            'status',
            'status_display',
            'standard',
            'standard_display',
            'company_name',
            'first_issue_date',
            'expiry_date',
            'scope_activity',
            'iaf_code',
            'next_maintenance_date',
            'last_maintenance_date',
            'qr_code',
            'is_maintenance_due',
            'days_until_expiry',
            'sites',
            'created_at',
            'updated_at'
        ]
        read_only_fields = [
            'id',
            'certificate_number',
            'qr_code',
            'created_at',
            'updated_at'
        ]


class CertificateCreateSerializer(serializers.ModelSerializer):
    """
    Serializer for creating certificates with nested sites
    """
    sites = CertificateSiteSerializer(many=True, required=False)

    class Meta:
        model = Certificate
        fields = [
            'standard',
            'company_name',
            'first_issue_date',
            'expiry_date',
            'scope_activity',
            'iaf_code',
            'next_maintenance_date',
            'sites'
        ]

    def create(self, validated_data):
        sites_data = validated_data.pop('sites', [])
        certificate = Certificate.objects.create(**validated_data)

        # Create associated sites
        for site_data in sites_data:
            CertificateSite.objects.create(certificate=certificate, **site_data)

        return certificate


class CertificateMaintenanceSerializer(serializers.Serializer):
    """
    Serializer for performing maintenance on a certificate
    """
    message = serializers.CharField(read_only=True)
    next_maintenance_date = serializers.DateField(read_only=True)
    status = serializers.CharField(read_only=True)