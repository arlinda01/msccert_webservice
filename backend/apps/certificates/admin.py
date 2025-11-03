from django.contrib import admin
from .models import Certificate, CertificateSite


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
        'created_at'
    ]
    list_filter = ['status', 'standard', 'created_at']
    search_fields = ['certificate_number', 'company_name', 'scope_activity']
    readonly_fields = [
        'certificate_number',
        'qr_code',
        'is_maintenance_due',
        'days_until_expiry',
        'created_at',
        'updated_at'
    ]
    fieldsets = (
        ('Certificate Information', {
            'fields': (
                'certificate_number',
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
        ('QR Code', {
            'fields': ('qr_code',)
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
    actions = ['perform_maintenance_action']

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
