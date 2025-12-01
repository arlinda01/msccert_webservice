from django.contrib import admin
from django.http import HttpResponse
from django.urls import reverse
from django.utils.html import format_html
from .models import Certificate, CertificateSite
import os


class CertificateSiteInline(admin.TabularInline):
    model = CertificateSite
    extra = 1
    fields = ['site_number', 'name', 'scope_activity', 'address']


@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = [
        'certificate_number',
        'company_name',
        'standard',
        'status',
        'expiry_date',
        'next_maintenance_date',
        'is_maintenance_due',
        'download_pdf_link',
        'created_at'
    ]
    list_filter = ['status', 'standard', 'created_at']
    search_fields = ['certificate_number', 'company_name', 'scope_activity']
    readonly_fields = [
        'certificate_number',
        'secure_id',
        'qr_code_preview',
        'is_maintenance_due',
        'days_until_expiry',
        'download_pdf_button',
        'created_at',
        'updated_at'
    ]
    fieldsets = (
        ('Certificate Information', {
            'fields': (
                'certificate_number',
                'secure_id',
                'status',
                'standard',
                'company_name',
            )
        }),
        ('Dates', {
            'fields': (
                'first_issue_date',
                'expiry_date',
                'next_maintenance_date',
                'last_maintenance_date',
            )
        }),
        ('Details', {
            'fields': (
                'scope_activity',
                'iaf_code',
            )
        }),
        ('QR Code & PDF', {
            'fields': ('qr_code_preview', 'download_pdf_button',)
        }),
        ('Status Information', {
            'fields': (
                'is_maintenance_due',
                'days_until_expiry',
            )
        }),
        ('Metadata', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    inlines = [CertificateSiteInline]
    actions = ['perform_maintenance_action', 'download_pdf_action', 'regenerate_qr_code_action']

    def qr_code_preview(self, obj):
        """Safely display QR code preview with download link"""
        if obj.qr_code:
            try:
                # Check if file exists before trying to display
                if obj.qr_code.name and os.path.exists(obj.qr_code.path):
                    # Use API endpoint for download to ensure proper content-disposition headers
                    download_url = f'/api/certificates/{obj.pk}/download_qr/'
                    return format_html(
                        '<div>'
                        '<img src="{}" style="max-width: 200px; max-height: 200px; display: block; margin-bottom: 10px;" />'
                        '<a href="{}" class="button" '
                        'style="padding: 8px 12px; background-color: #28a745; color: white; '
                        'text-decoration: none; border-radius: 4px; display: inline-block;">'
                        'Download QR Code</a>'
                        '</div>',
                        obj.qr_code.url,
                        download_url
                    )
                else:
                    return format_html(
                        '<span style="color: orange;">QR code file missing. '
                        'Use "Regenerate QR Code" action to fix.</span>'
                    )
            except Exception as e:
                return format_html(
                    '<span style="color: red;">Error loading QR code: {}</span>',
                    str(e)
                )
        return format_html('<span style="color: gray;">No QR code generated yet</span>')
    qr_code_preview.short_description = 'QR Code'

    def regenerate_qr_code_action(self, request, queryset):
        """Admin action to regenerate QR codes for selected certificates"""
        count = 0
        for certificate in queryset:
            try:
                certificate.qr_code.delete(save=False)  # Delete old file if exists
                certificate.generate_qr_code()
                certificate.save(update_fields=['qr_code'])
                count += 1
            except Exception as e:
                self.message_user(request, f'Error regenerating QR for {certificate}: {e}', level='error')
        self.message_user(request, f'Regenerated QR codes for {count} certificate(s)')
    regenerate_qr_code_action.short_description = 'Regenerate QR Code for selected certificates'

    def download_pdf_link(self, obj):
        """Display download link in list view"""
        # Use the DRF router generated URL name (api/certificates/{pk}/download_pdf/)
        url = f'/api/certificates/{obj.pk}/download_pdf/'
        return format_html('<a href="{}" target="_blank" class="button">Download PDF</a>', url)
    download_pdf_link.short_description = 'PDF'

    def download_pdf_button(self, obj):
        """Display download button in detail view"""
        if obj.pk:
            url = f'/api/certificates/{obj.pk}/download_pdf/'
            return format_html(
                '<a href="{}" target="_blank" class="button" '
                'style="padding: 10px 15px; background-color: #417690; color: white; '
                'text-decoration: none; border-radius: 4px; display: inline-block;">'
                'Download Certificate PDF</a>',
                url
            )
        return '-'
    download_pdf_button.short_description = 'Download PDF'

    def download_pdf_action(self, request, queryset):
        """Admin action to download PDFs (downloads first selected)"""
        if queryset.count() > 1:
            self.message_user(request, 'Please select only one certificate to download', level='warning')
            return

        certificate = queryset.first()
        from django.shortcuts import redirect
        return redirect(f'/api/certificates/{certificate.pk}/download_pdf/')
    download_pdf_action.short_description = 'Download PDF for selected certificate'

    def perform_maintenance_action(self, request, queryset):
        """Admin action to perform maintenance on selected certificates"""
        count = 0
        for certificate in queryset:
            certificate.perform_maintenance()
            count += 1
        self.message_user(request, f'Performed maintenance on {count} certificate(s)')
    perform_maintenance_action.short_description = 'Perform maintenance on selected certificates'


@admin.register(CertificateSite)
class CertificateSiteAdmin(admin.ModelAdmin):
    list_display = [
        'certificate',
        'site_number',
        'name',
        'address',
        'created_at'
    ]
    list_filter = ['certificate__standard', 'created_at']
    search_fields = ['name', 'address', 'certificate__certificate_number']
    fields = [
        'certificate',
        'site_number',
        'name',
        'scope_activity',
        'address',
        'created_at',
        'updated_at'
    ]
    readonly_fields = ['created_at', 'updated_at']
