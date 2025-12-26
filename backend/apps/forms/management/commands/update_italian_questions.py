"""
Management command to update form questions with Italian translations.
Run with: python manage.py update_italian_questions
"""
from django.core.management.base import BaseCommand
from apps.forms.models import FormTemplate, FormSection, FormQuestion
from apps.forms.fixtures.iso_forms_data import ALL_FORMS_DATA


class Command(BaseCommand):
    help = 'Updates existing form questions with Italian translations from fixture data'

    def handle(self, *args, **options):
        self.stdout.write('Updating form questions with Italian translations...')

        updated_forms = 0
        updated_sections = 0
        updated_questions = 0

        for iso_code, form_data in ALL_FORMS_DATA.items():
            # Find the form
            try:
                form = FormTemplate.objects.get(iso_standard=iso_code, form_type='assessment')
            except FormTemplate.DoesNotExist:
                self.stdout.write(f'  Form for {iso_code} not found, skipping...')
                continue

            # Update form name and description
            if 'name_it' in form_data:
                form.name_it = form_data['name_it']
            if 'description_it' in form_data:
                form.description_it = form_data['description_it']
            form.save()
            updated_forms += 1

            # Update sections and questions
            sections = list(form.sections.order_by('order'))

            for i, section_data in enumerate(form_data.get('sections', [])):
                if i >= len(sections):
                    break

                section = sections[i]

                # Update section title
                if 'title_it' in section_data:
                    section.title_it = section_data['title_it']
                    section.save()
                    updated_sections += 1

                # Update questions
                questions = list(section.questions.order_by('order'))

                for j, q_data in enumerate(section_data.get('questions', [])):
                    if j >= len(questions):
                        break

                    question = questions[j]

                    if 'q_it' in q_data:
                        question.question_text_it = q_data['q_it']
                        question.save()
                        updated_questions += 1

            self.stdout.write(f'  Updated form: {form.name}')

        self.stdout.write(self.style.SUCCESS(
            f'Successfully updated {updated_forms} forms, {updated_sections} sections, {updated_questions} questions with Italian translations'
        ))
