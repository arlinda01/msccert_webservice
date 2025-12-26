from rest_framework import serializers
from django.core.validators import validate_email
from django.core.exceptions import ValidationError as DjangoValidationError
import re

from .models import (
    FormTemplate, FormSection, FormQuestion,
    FormSubmission, FormAnswer, FormSubmissionLog,
    ISOStandard, QuestionType
)


class FormQuestionSerializer(serializers.ModelSerializer):
    """Serializer for form questions"""

    class Meta:
        model = FormQuestion
        fields = [
            'id', 'question_text', 'question_text_sq', 'question_text_it',
            'help_text', 'help_text_sq', 'help_text_it',
            'question_type', 'is_required', 'options', 'validation_rules',
            'conditional_logic', 'order', 'is_active'
        ]
        read_only_fields = ['id']


class FormSectionSerializer(serializers.ModelSerializer):
    """Serializer for form sections with nested questions"""
    questions = FormQuestionSerializer(many=True, read_only=True)

    class Meta:
        model = FormSection
        fields = [
            'id', 'title', 'title_sq', 'title_it',
            'description', 'description_sq', 'description_it',
            'order', 'is_active', 'questions'
        ]
        read_only_fields = ['id']


class FormTemplateListSerializer(serializers.ModelSerializer):
    """Lightweight serializer for listing forms"""
    iso_standard_display = serializers.CharField(source='get_iso_standard_display', read_only=True)
    total_questions = serializers.IntegerField(read_only=True)
    total_submissions = serializers.IntegerField(read_only=True)

    class Meta:
        model = FormTemplate
        fields = [
            'id', 'name', 'name_sq', 'name_it',
            'description', 'description_sq', 'description_it',
            'iso_standard', 'iso_standard_display', 'form_type',
            'is_active', 'is_public', 'total_questions', 'total_submissions',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']


class FormTemplateDetailSerializer(serializers.ModelSerializer):
    """Full serializer for form template with sections and questions"""
    sections = FormSectionSerializer(many=True, read_only=True)
    iso_standard_display = serializers.CharField(source='get_iso_standard_display', read_only=True)
    total_questions = serializers.IntegerField(read_only=True)

    class Meta:
        model = FormTemplate
        fields = [
            'id', 'name', 'name_sq', 'name_it',
            'description', 'description_sq', 'description_it',
            'iso_standard', 'iso_standard_display', 'form_type',
            'is_active', 'is_public', 'requires_auth', 'allow_multiple_submissions',
            'send_confirmation_email', 'notification_emails',
            'total_questions', 'sections',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']


class FormTemplateAdminSerializer(serializers.ModelSerializer):
    """Admin serializer with all fields for form template management"""
    sections = FormSectionSerializer(many=True, read_only=True)
    iso_standard_display = serializers.CharField(source='get_iso_standard_display', read_only=True)
    total_questions = serializers.IntegerField(read_only=True)
    total_submissions = serializers.IntegerField(read_only=True)

    class Meta:
        model = FormTemplate
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at']


class FormAnswerSerializer(serializers.ModelSerializer):
    """Serializer for individual form answers"""
    question_text = serializers.CharField(source='question.question_text', read_only=True)
    question_type = serializers.CharField(source='question.question_type', read_only=True)
    display_value = serializers.CharField(read_only=True)

    class Meta:
        model = FormAnswer
        fields = [
            'id', 'question', 'question_text', 'question_type',
            'answer_text', 'answer_json', 'answer_file', 'display_value'
        ]
        read_only_fields = ['id']


class FormSubmissionListSerializer(serializers.ModelSerializer):
    """Lightweight serializer for listing submissions"""
    form_name = serializers.CharField(source='form_template.name', read_only=True)
    iso_standard = serializers.CharField(source='form_template.iso_standard', read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)

    class Meta:
        model = FormSubmission
        fields = [
            'id', 'submission_number', 'form_name', 'iso_standard',
            'submitter_name', 'submitter_email', 'company_name',
            'status', 'status_display', 'language',
            'submitted_at', 'reviewed_at'
        ]
        read_only_fields = ['id', 'submission_number', 'submitted_at']


class FormSubmissionDetailSerializer(serializers.ModelSerializer):
    """Full serializer for submission with answers"""
    form_template = FormTemplateListSerializer(read_only=True)
    answers = FormAnswerSerializer(many=True, read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)
    logs = serializers.SerializerMethodField()

    class Meta:
        model = FormSubmission
        fields = [
            'id', 'submission_number', 'form_template',
            'submitter_name', 'submitter_email', 'submitter_phone', 'company_name',
            'status', 'status_display', 'ip_address', 'user_agent', 'language',
            'internal_notes', 'answers', 'logs',
            'submitted_at', 'reviewed_at', 'updated_at'
        ]
        read_only_fields = [
            'id', 'submission_number', 'ip_address', 'user_agent',
            'submitted_at', 'updated_at'
        ]

    def get_logs(self, obj):
        logs = obj.logs.all()[:10]  # Last 10 logs
        return FormSubmissionLogSerializer(logs, many=True).data


class FormSubmissionLogSerializer(serializers.ModelSerializer):
    """Serializer for submission audit logs"""

    class Meta:
        model = FormSubmissionLog
        fields = [
            'id', 'previous_status', 'new_status',
            'changed_by', 'notes', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']


# ============================================
# Public Form Submission Serializers
# ============================================

class AnswerInputSerializer(serializers.Serializer):
    """Serializer for answer input in public form submission"""
    question = serializers.UUIDField(required=False)  # Support both 'question' and 'question_id'
    question_id = serializers.UUIDField(required=False)
    answer_value = serializers.CharField(required=False, allow_blank=True)  # Frontend sends answer_value
    answer_text = serializers.CharField(required=False, allow_blank=True)
    answer_json = serializers.JSONField(required=False, allow_null=True)

    def validate(self, data):
        # Support both question and question_id
        question_id = data.get('question') or data.get('question_id')
        if not question_id:
            raise serializers.ValidationError("question or question_id is required")
        data['question_id'] = question_id

        # Support both answer_value and answer_text
        answer_text = data.get('answer_value') or data.get('answer_text', '')
        data['answer_text'] = answer_text
        return data


class PublicFormSubmissionSerializer(serializers.Serializer):
    """
    Serializer for public form submissions.
    Validates and processes form submissions from the frontend.
    """
    form_template = serializers.UUIDField(required=False)  # Support both names
    form_template_id = serializers.UUIDField(required=False)

    # Submitter info - support both naming conventions
    submitter_name = serializers.CharField(max_length=255, required=False)
    contact_person = serializers.CharField(max_length=255, required=False)  # Frontend naming
    submitter_email = serializers.EmailField(required=False)
    email = serializers.EmailField(required=False)  # Frontend naming
    submitter_phone = serializers.CharField(max_length=50, required=False, allow_blank=True)
    phone = serializers.CharField(max_length=50, required=False, allow_blank=True)  # Frontend naming
    company_name = serializers.CharField(max_length=255, required=False, allow_blank=True)
    address = serializers.CharField(max_length=500, required=False, allow_blank=True)
    additional_notes = serializers.CharField(required=False, allow_blank=True)

    # Language
    language = serializers.CharField(max_length=5, default='en')

    # Answers
    answers = serializers.ListField(
        child=AnswerInputSerializer(),
        allow_empty=True  # Allow empty since assessment is optional
    )

    def validate(self, data):
        """
        Validate the entire submission.
        """
        # Normalize field names - support both conventions
        form_template_id = data.get('form_template') or data.get('form_template_id')
        if not form_template_id:
            raise serializers.ValidationError({'form_template': 'Form template ID is required'})
        data['form_template_id'] = form_template_id

        submitter_name = data.get('contact_person') or data.get('submitter_name')
        if not submitter_name:
            raise serializers.ValidationError({'contact_person': 'Contact person name is required'})
        data['submitter_name'] = submitter_name

        submitter_email = data.get('email') or data.get('submitter_email')
        if not submitter_email:
            raise serializers.ValidationError({'email': 'Email is required'})
        data['submitter_email'] = submitter_email.lower()

        submitter_phone = data.get('phone') or data.get('submitter_phone', '')
        data['submitter_phone'] = submitter_phone

        # Validate form template exists
        try:
            form_template = FormTemplate.objects.get(id=form_template_id, is_active=True, is_public=True)
        except FormTemplate.DoesNotExist:
            raise serializers.ValidationError({'form_template': 'Form not found or not available.'})

        # Check if multiple submissions are allowed
        if not form_template.allow_multiple_submissions:
            existing = FormSubmission.objects.filter(
                form_template=form_template,
                submitter_email=data['submitter_email']
            ).exists()
            if existing:
                raise serializers.ValidationError({
                    'email': 'You have already submitted this form.'
                })

        # Validate answers if provided
        answers = data.get('answers', [])
        if answers:
            answer_map = {str(a['question_id']): a for a in answers}
            questions = FormQuestion.objects.filter(
                section__form_template=form_template,
                is_active=True,
                section__is_active=True
            )

            errors = {}
            for question in questions:
                q_id = str(question.id)
                if q_id in answer_map:
                    answer = answer_map[q_id]
                    error = self._validate_answer(question, answer)
                    if error:
                        errors[q_id] = error

            if errors:
                raise serializers.ValidationError({'answer_errors': errors})

        data['form_template'] = form_template
        data['answers'] = answers  # Ensure answers is set
        return data

    def _validate_answer(self, question, answer):
        """Validate individual answer based on question type and rules"""
        answer_text = answer.get('answer_text', '')
        answer_json = answer.get('answer_json')
        rules = question.validation_rules or {}

        if question.question_type == QuestionType.EMAIL:
            if answer_text:
                try:
                    validate_email(answer_text)
                except DjangoValidationError:
                    return 'Invalid email address'

        elif question.question_type == QuestionType.NUMBER:
            if answer_text:
                try:
                    num = float(answer_text)
                    if 'min' in rules and num < rules['min']:
                        return f'Value must be at least {rules["min"]}'
                    if 'max' in rules and num > rules['max']:
                        return f'Value must be at most {rules["max"]}'
                except ValueError:
                    return 'Must be a valid number'

        elif question.question_type in [QuestionType.TEXT, QuestionType.TEXTAREA]:
            if answer_text:
                if 'min_length' in rules and len(answer_text) < rules['min_length']:
                    return f'Must be at least {rules["min_length"]} characters'
                if 'max_length' in rules and len(answer_text) > rules['max_length']:
                    return f'Must be at most {rules["max_length"]} characters'

        elif question.question_type in [QuestionType.SELECT, QuestionType.RADIO]:
            if answer_text and question.options:
                valid_values = [opt.get('value') for opt in question.options]
                if answer_text not in valid_values:
                    return 'Invalid selection'

        elif question.question_type == QuestionType.CHECKBOX:
            if answer_json and question.options:
                valid_values = [opt.get('value') for opt in question.options]
                if isinstance(answer_json, list):
                    for val in answer_json:
                        if val not in valid_values:
                            return f'Invalid selection: {val}'

        return None

    def create(self, validated_data):
        """Create the submission and answers"""
        form_template = validated_data['form_template']
        answers_data = validated_data.pop('answers')

        # Get request context for IP/user agent
        request = self.context.get('request')
        ip_address = None
        user_agent = ''

        if request:
            # Get IP address
            x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
            if x_forwarded_for:
                ip_address = x_forwarded_for.split(',')[0].strip()
            else:
                ip_address = request.META.get('REMOTE_ADDR')

            user_agent = request.META.get('HTTP_USER_AGENT', '')[:500]

        # Create submission
        submission = FormSubmission.objects.create(
            form_template=form_template,
            submitter_name=validated_data['submitter_name'],
            submitter_email=validated_data['submitter_email'],
            submitter_phone=validated_data.get('submitter_phone', ''),
            company_name=validated_data.get('company_name', ''),
            language=validated_data.get('language', 'en'),
            ip_address=ip_address,
            user_agent=user_agent
        )

        # Create answers
        for answer_data in answers_data:
            try:
                question = FormQuestion.objects.get(id=answer_data['question_id'])
                FormAnswer.objects.create(
                    submission=submission,
                    question=question,
                    answer_text=answer_data.get('answer_text', ''),
                    answer_json=answer_data.get('answer_json')
                )
            except FormQuestion.DoesNotExist:
                continue  # Skip invalid question IDs

        # Create initial log entry
        FormSubmissionLog.objects.create(
            submission=submission,
            previous_status='',
            new_status=FormSubmission.SubmissionStatus.PENDING,
            notes='Form submitted'
        )

        return submission


class FormSubmissionStatusUpdateSerializer(serializers.Serializer):
    """Serializer for updating submission status"""
    status = serializers.ChoiceField(choices=FormSubmission.SubmissionStatus.choices)
    notes = serializers.CharField(required=False, allow_blank=True)

    def update(self, instance, validated_data):
        """Update submission status and create log entry"""
        previous_status = instance.status
        new_status = validated_data['status']

        if previous_status != new_status:
            instance.status = new_status

            # Set reviewed_at if moving to review-related status
            if new_status in [
                FormSubmission.SubmissionStatus.UNDER_REVIEW,
                FormSubmission.SubmissionStatus.APPROVED,
                FormSubmission.SubmissionStatus.REJECTED,
                FormSubmission.SubmissionStatus.COMPLETED
            ]:
                from django.utils import timezone
                instance.reviewed_at = timezone.now()

            instance.save()

            # Create log entry
            request = self.context.get('request')
            changed_by = ''
            if request and request.user.is_authenticated:
                changed_by = request.user.get_full_name() or request.user.username

            FormSubmissionLog.objects.create(
                submission=instance,
                previous_status=previous_status,
                new_status=new_status,
                changed_by=changed_by,
                notes=validated_data.get('notes', '')
            )

        return instance


# ============================================
# Public Form Retrieval Serializers
# ============================================

class PublicFormQuestionSerializer(serializers.ModelSerializer):
    """Public serializer for questions - excludes admin-only fields"""

    class Meta:
        model = FormQuestion
        fields = [
            'id', 'question_text', 'question_text_sq', 'question_text_it',
            'help_text', 'help_text_sq', 'help_text_it',
            'question_type', 'is_required', 'options', 'validation_rules',
            'conditional_logic', 'order'
        ]


class PublicFormSectionSerializer(serializers.ModelSerializer):
    """Public serializer for sections"""
    questions = PublicFormQuestionSerializer(many=True, read_only=True)

    class Meta:
        model = FormSection
        fields = [
            'id', 'title', 'title_sq', 'title_it',
            'description', 'description_sq', 'description_it',
            'order', 'questions'
        ]

    def to_representation(self, instance):
        """Only include active questions - questions are already filtered in queryset"""
        data = super().to_representation(instance)
        # Questions are pre-filtered via prefetch in the viewset, so no extra query needed
        return data


class PublicFormTemplateSerializer(serializers.ModelSerializer):
    """Public serializer for form template - for displaying to users"""
    sections = serializers.SerializerMethodField()
    iso_standard_display = serializers.CharField(source='get_iso_standard_display', read_only=True)

    class Meta:
        model = FormTemplate
        fields = [
            'id', 'name', 'name_sq', 'name_it',
            'description', 'description_sq', 'description_it',
            'iso_standard', 'iso_standard_display', 'form_type',
            'requires_auth', 'sections'
        ]

    def get_sections(self, obj):
        """Get only active sections with active questions"""
        sections = obj.sections.filter(is_active=True).order_by('order')
        return PublicFormSectionSerializer(sections, many=True).data
