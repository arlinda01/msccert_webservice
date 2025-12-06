"""
Management command to seed ISO self-assessment forms.
Run with: python manage.py seed_iso_forms
"""
from django.core.management.base import BaseCommand
from apps.forms.models import FormTemplate, FormSection, FormQuestion, QuestionType
from apps.forms.fixtures.iso_forms_data import ALL_FORMS_DATA, ANSWER_OPTIONS


class Command(BaseCommand):
    help = 'Seeds the database with ISO self-assessment forms'

    def add_arguments(self, parser):
        parser.add_argument(
            '--clear',
            action='store_true',
            help='Clear existing forms before seeding',
        )
        parser.add_argument(
            '--forms',
            nargs='+',
            type=str,
            help='Specific forms to seed (e.g., ISO_9001 ISO_14001). Seeds all if not specified.',
        )

    def handle(self, *args, **options):
        if options['clear']:
            self.stdout.write('Clearing existing forms...')
            FormTemplate.objects.all().delete()

        self.stdout.write('Seeding ISO forms...')

        # Determine which forms to seed
        forms_to_seed = options.get('forms') or list(ALL_FORMS_DATA.keys())

        seeded_count = 0
        for iso_code in forms_to_seed:
            if iso_code not in ALL_FORMS_DATA:
                self.stdout.write(self.style.WARNING(f'  Unknown form type: {iso_code}, skipping...'))
                continue

            form_data = ALL_FORMS_DATA[iso_code]
            if self.create_form(iso_code, form_data):
                seeded_count += 1

        self.stdout.write(self.style.SUCCESS(f'Successfully seeded {seeded_count} forms'))

    def create_form(self, iso_code, form_data):
        # Check if form already exists
        if FormTemplate.objects.filter(iso_standard=iso_code, form_type='assessment').exists():
            self.stdout.write(f'  Form for {iso_code} already exists, skipping...')
            return False

        # Create form template
        form = FormTemplate.objects.create(
            name=form_data['name'],
            name_sq=form_data['name_sq'],
            description=form_data['description'],
            description_sq=form_data['description_sq'],
            iso_standard=iso_code,
            form_type='assessment',
            is_active=True,
            is_public=True,
            send_confirmation_email=True,
            notification_emails='info@msc-cert.com,eneriko.h@msc-cert.com,contact@msc-cert.com'
        )

        # Create sections and questions
        for section_order, section_data in enumerate(form_data['sections'], start=1):
            section = FormSection.objects.create(
                form_template=form,
                title=section_data['title'],
                title_sq=section_data['title_sq'],
                order=section_order
            )

            for q_order, q_data in enumerate(section_data['questions'], start=1):
                FormQuestion.objects.create(
                    section=section,
                    question_text=q_data['q'],
                    question_text_sq=q_data['q_sq'],
                    question_type=QuestionType.RADIO,
                    is_required=True,
                    options=ANSWER_OPTIONS,
                    order=q_order
                )

        self.stdout.write(f'  Created form: {form_data["name"]}')
        return True
