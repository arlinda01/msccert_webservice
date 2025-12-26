"""
Management command to update ISO forms with Italian translations.
Run with: python manage.py update_italian_forms
"""
from django.core.management.base import BaseCommand
from apps.forms.models import FormTemplate, FormSection, FormQuestion


# Italian translations for form content
ITALIAN_TRANSLATIONS = {
    # Form names and descriptions
    'ISO_45001': {
        'name_it': 'Checklist di Autovalutazione ISO 45001:2018',
        'description_it': 'Sistema di Gestione della Salute e Sicurezza sul Lavoro',
    },
    'ISO_22000': {
        'name_it': 'Checklist di Autovalutazione ISO 22000:2018',
        'description_it': 'Sistema di Gestione della Sicurezza Alimentare',
    },
    'ISO_9001': {
        'name_it': 'Checklist di Autovalutazione ISO 9001:2015',
        'description_it': 'Sistema di Gestione della Qualità',
    },
    'ISO_14001': {
        'name_it': 'Checklist di Autovalutazione ISO 14001:2015',
        'description_it': 'Sistema di Gestione Ambientale',
    },
    'ISO_27001': {
        'name_it': 'Checklist di Autovalutazione ISO 27001:2022',
        'description_it': 'Sistema di Gestione della Sicurezza delle Informazioni',
    },
    'ISO_22301': {
        'name_it': 'Checklist di Autovalutazione ISO 22301:2019',
        'description_it': 'Sistema di Gestione della Continuità Operativa',
    },
    'ISO_37001': {
        'name_it': 'Checklist di Autovalutazione ISO 37001:2016',
        'description_it': 'Sistema di Gestione Anti-Corruzione',
    },
    'ISO_39001': {
        'name_it': 'Checklist di Autovalutazione ISO 39001:2012',
        'description_it': 'Sistema di Gestione della Sicurezza Stradale',
    },
    'ISO_50001': {
        'name_it': 'Checklist di Autovalutazione ISO 50001:2018',
        'description_it': 'Sistema di Gestione dell\'Energia',
    },
    'HACCP': {
        'name_it': 'Checklist di Autovalutazione HACCP',
        'description_it': 'Analisi dei Rischi e Punti Critici di Controllo',
    },
}

# Section title translations (English -> Italian)
SECTION_TRANSLATIONS = {
    'Context of the Organization': 'Contesto dell\'Organizzazione',
    'Leadership': 'Leadership',
    'Leadership and Worker Participation': 'Leadership e Partecipazione dei Lavoratori',
    'Planning': 'Pianificazione',
    'Support': 'Supporto',
    'Operation': 'Operazioni',
    'Performance Evaluation': 'Valutazione delle Prestazioni',
    'Improvement': 'Miglioramento',
    # Additional HACCP sections
    'Preliminary Steps': 'Fasi Preliminari',
    'Hazard Analysis': 'Analisi dei Pericoli',
    'Critical Control Points': 'Punti Critici di Controllo',
    'Documentation and Verification': 'Documentazione e Verifica',
}


class Command(BaseCommand):
    help = 'Updates existing ISO forms with Italian translations'

    def handle(self, *args, **options):
        self.stdout.write('Updating forms with Italian translations...')

        updated_forms = 0
        updated_sections = 0
        updated_questions = 0

        # Update form templates
        for form in FormTemplate.objects.all():
            iso_code = form.iso_standard
            if iso_code in ITALIAN_TRANSLATIONS:
                trans = ITALIAN_TRANSLATIONS[iso_code]
                form.name_it = trans.get('name_it', form.name)
                form.description_it = trans.get('description_it', form.description)
                form.save()
                updated_forms += 1
                self.stdout.write(f'  Updated form: {form.name}')

        # Update sections
        for section in FormSection.objects.all():
            if section.title in SECTION_TRANSLATIONS:
                section.title_it = SECTION_TRANSLATIONS[section.title]
                section.save()
                updated_sections += 1

        # Update questions (use English as fallback for now)
        # Questions are more complex - we'll leave them in English for now
        # and they'll fall back gracefully in the frontend
        for question in FormQuestion.objects.filter(question_text_it=''):
            question.question_text_it = question.question_text  # English fallback
            question.save()
            updated_questions += 1

        # Also update the answer options in questions to include Italian
        for question in FormQuestion.objects.all():
            if question.options:
                updated_options = []
                for opt in question.options:
                    if 'label_it' not in opt:
                        if opt.get('value') == 'yes':
                            opt['label_it'] = 'Sì'
                        elif opt.get('value') == 'no':
                            opt['label_it'] = 'No'
                        elif opt.get('value') == 'in_progress':
                            opt['label_it'] = 'In corso'
                        elif opt.get('value') == 'not_applicable':
                            opt['label_it'] = 'Non applicabile'
                        else:
                            opt['label_it'] = opt.get('label', '')
                    updated_options.append(opt)
                question.options = updated_options
                question.save()

        self.stdout.write(self.style.SUCCESS(
            f'Successfully updated {updated_forms} forms, {updated_sections} sections, {updated_questions} questions'
        ))
