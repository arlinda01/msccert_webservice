"""
Management command to update notification emails on all form templates.
Run with: python manage.py update_notification_emails
"""
from django.core.management.base import BaseCommand
from apps.forms.models import FormTemplate


class Command(BaseCommand):
    help = 'Updates notification emails on all form templates'

    def handle(self, *args, **options):
        notification_emails = 'info@msc-cert.com,eneriko.h@msc-cert.com,contact@msc-cert.com'

        updated_count = FormTemplate.objects.update(
            notification_emails=notification_emails,
            send_confirmation_email=True
        )

        self.stdout.write(
            self.style.SUCCESS(f'Updated {updated_count} form templates with notification emails')
        )
