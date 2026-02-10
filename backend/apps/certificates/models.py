from django.db import models
from django.core.exceptions import ValidationError
from django.utils import timezone
import qrcode
from io import BytesIO
from django.core.files import File
import uuid

# Constants for QR code generation
QR_CODE_VERSION = 1
QR_CODE_BOX_SIZE = 10
QR_CODE_BORDER = 4

# Constants for expiry checks
EXPIRING_SOON_DAYS = 90
MAINTENANCE_INTERVAL_YEARS = 1


class Certificate(models.Model):
    """
    Model representing an ISO Certificate
    """

    # Status choices
    STATUS_CHOICES = [
        ('VALID', 'Valid/Active'),
        ('SUSPENDED', 'Suspended'),
        ('WITHDRAWN', 'Withdrawn'),
        ('EXPIRED', 'Expired'),
    ]

    # Standard choices
    STANDARD_CHOICES = [
        ('ISO_9001_2015', 'ISO 9001:2015'),
        ('ISO_14001_2015', 'ISO 14001:2015'),
        ('ISO_22000_2018', 'ISO 22000:2018'),
        ('ISO_22301_2019', 'ISO 22301:2019'),
        ('ISO_27001_2022', 'ISO 27001:2022'),
        ('ISO_37001_2025', 'ISO 37001:2025'),
        ('ISO_39001_2012', 'ISO 39001:2012'),
        ('ISO_45001_2023', 'ISO 45001:2023'),
        ('ISO_50001_2018', 'ISO 50001:2018'),
        ('HACCP', 'HACCP: Hazard Analysis and Critical Control Points'),
    ]

    # Certificate fields
    certificate_number = models.CharField(
        max_length=100,
        unique=True,
        help_text="Unique certificate number (e.g., MSC/ISO9001/2024/001)"
    )
    secure_id = models.UUIDField(
        default=uuid.uuid4,
        unique=True,
        editable=False,
        help_text="Secure UUID for public certificate verification (non-guessable)"
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='VALID'
    )
    standard = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        help_text="ISO Standard or certification type"
    )
    company_name = models.CharField(
        max_length=255,
        help_text="Name of the certified company"
    )
    first_issue_date = models.DateField(
        help_text="Date when certificate was first issued"
    )
    expiry_date = models.DateField(
        help_text="Certificate expiration date"
    )
    scope_activity = models.TextField(
        help_text="Scope of certification or business activity"
    )
    iaf_code = models.CharField(
        max_length=50,
        help_text="IAF (International Accreditation Forum) code"
    )
    address = models.TextField(
        blank=True,
        help_text="Company address shown on certificate"
    )
    modification_date = models.DateField(
        null=True,
        blank=True,
        help_text="Data e Modifikimit - modification date shown on certificate"
    )

    # Maintenance tracking
    next_maintenance_date = models.DateField(
        null=True,
        blank=True,
        help_text="Next scheduled maintenance date (annual). Auto-calculated if not provided."
    )
    last_maintenance_date = models.DateField(
        null=True,
        blank=True,
        help_text="Date of last maintenance"
    )

    # QR Code
    qr_code = models.ImageField(
        upload_to='certificate_qr_codes/',
        blank=True,
        null=True
    )

    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Certificate'
        verbose_name_plural = 'Certificates'

    def __str__(self):
        return f"{self.certificate_number} - {self.company_name}"

    def clean(self):
        """
        Validate certificate data before saving
        """
        super().clean()

        # Validate that expiry_date is after first_issue_date
        if self.first_issue_date and self.expiry_date:
            if self.expiry_date <= self.first_issue_date:
                raise ValidationError({
                    'expiry_date': 'Expiry date must be after first issue date.'
                })

        # Validate that next_maintenance_date is reasonable
        if self.first_issue_date and self.next_maintenance_date:
            if self.next_maintenance_date < self.first_issue_date:
                raise ValidationError({
                    'next_maintenance_date': 'Next maintenance date cannot be before first issue date.'
                })

    def save(self, *args, **kwargs):
        # Generate certificate number if not exists
        if not self.certificate_number:
            self.certificate_number = self.generate_certificate_number()

        # Auto-calculate next_maintenance_date if not provided
        if not self.next_maintenance_date and self.first_issue_date:
            # Set to 1 year from first issue date
            self.next_maintenance_date = self.first_issue_date.replace(
                year=self.first_issue_date.year + MAINTENANCE_INTERVAL_YEARS
            )

        # Check and update status based on maintenance and expiry
        self.update_status()

        # Save first to get an ID
        super().save(*args, **kwargs)

        # Generate QR code if not exists
        if not self.qr_code:
            self.generate_qr_code()
            # Save again to store QR code (without triggering infinite loop)
            super().save(update_fields=['qr_code'])

    def generate_certificate_number(self):
        """
        Generate a unique certificate number
        Format: CERT-YYYY-XXXXXXXX (year + 8 random chars)
        """
        year = timezone.now().year
        unique_id = str(uuid.uuid4().hex[:8]).upper()
        return f"CERT-{year}-{unique_id}"

    def update_status(self):
        """
        Automatically update certificate status based on maintenance and expiry dates
        """
        today = timezone.now().date()

        # Check if certificate has expired
        if self.expiry_date and today > self.expiry_date:
            self.status = 'EXPIRED'
        # Check if maintenance is overdue (and not already suspended/withdrawn/expired)
        elif self.next_maintenance_date and today > self.next_maintenance_date and self.status == 'VALID':
            self.status = 'EXPIRED'  # or could be 'SUSPENDED' based on business rules

    def generate_qr_code(self):
        """
        Generate QR code for the certificate
        QR code contains secure URL to view live certificate status using UUID
        """
        from django.conf import settings

        # Create QR code with secure UUID-based URL (non-guessable)
        # Uses FRONTEND_URL from settings (set via environment variable)
        frontend_url = getattr(settings, 'FRONTEND_URL', 'http://localhost:3000')
        qr_data = f"{frontend_url}/certificate/{self.secure_id}"

        # Generate QR code with configured settings
        qr = qrcode.QRCode(
            version=QR_CODE_VERSION,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=QR_CODE_BOX_SIZE,
            border=QR_CODE_BORDER,
        )
        qr.add_data(qr_data)
        qr.make(fit=True)

        # Create image
        img = qr.make_image(fill_color="black", back_color="white")

        # Save to BytesIO
        buffer = BytesIO()
        img.save(buffer, format='PNG')
        buffer.seek(0)

        # Save to model
        file_name = f'qr_{self.certificate_number}.png'
        self.qr_code.save(file_name, File(buffer), save=False)

    def perform_maintenance(self):
        """
        Mark certificate as maintained and update dates
        """
        today = timezone.now().date()
        self.last_maintenance_date = today
        self.next_maintenance_date = today.replace(year=today.year + 1)

        # Reset status to VALID if it was expired due to maintenance
        if self.status == 'EXPIRED' and self.expiry_date and today <= self.expiry_date:
            self.status = 'VALID'

        self.save()

    @property
    def is_maintenance_due(self):
        """Check if maintenance is due"""
        if not self.next_maintenance_date:
            return False
        return timezone.now().date() > self.next_maintenance_date

    @property
    def days_until_expiry(self):
        """Calculate days until certificate expires"""
        if not self.expiry_date:
            return None
        delta = self.expiry_date - timezone.now().date()
        return delta.days


class CertificateSite(models.Model):
    """
    Model representing a site/location associated with a certificate
    A certificate can have multiple sites
    """

    certificate = models.ForeignKey(
        Certificate,
        on_delete=models.CASCADE,
        related_name='sites'
    )
    site_number = models.PositiveIntegerField(
        help_text="Site sequence number"
    )
    name = models.CharField(
        max_length=255,
        help_text="Site/location name"
    )
    scope_activity = models.TextField(
        help_text="Scope of activities at this site"
    )
    address = models.TextField(
        help_text="Complete address of the site"
    )

    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['certificate', 'site_number']
        verbose_name = 'Certificate Site'
        verbose_name_plural = 'Certificate Sites'
        unique_together = ['certificate', 'site_number']

    def __str__(self):
        return f"Site {self.site_number} - {self.name} ({self.certificate.certificate_number})"
