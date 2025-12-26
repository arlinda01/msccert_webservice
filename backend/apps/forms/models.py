import uuid
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator, EmailValidator
from django.utils import timezone


class ISOStandard(models.TextChoices):
    """ISO Standards supported for forms"""
    ISO_9001 = 'ISO_9001', 'ISO 9001:2015 - Quality Management'
    ISO_14001 = 'ISO_14001', 'ISO 14001:2015 - Environmental Management'
    ISO_22000 = 'ISO_22000', 'ISO 22000:2018 - Food Safety'
    ISO_22301 = 'ISO_22301', 'ISO 22301:2019 - Business Continuity'
    ISO_27001 = 'ISO_27001', 'ISO 27001:2022 - Information Security'
    ISO_37001 = 'ISO_37001', 'ISO 37001:2016 - Anti-Bribery'
    ISO_39001 = 'ISO_39001', 'ISO 39001:2012 - Road Traffic Safety'
    ISO_45001 = 'ISO_45001', 'ISO 45001:2018 - Occupational Health & Safety'
    ISO_50001 = 'ISO_50001', 'ISO 50001:2018 - Energy Management'
    HACCP = 'HACCP', 'HACCP - Food Safety'
    GENERAL = 'GENERAL', 'General Inquiry'


class QuestionType(models.TextChoices):
    """Types of questions supported in forms"""
    TEXT = 'TEXT', 'Short Text'
    TEXTAREA = 'TEXTAREA', 'Long Text'
    EMAIL = 'EMAIL', 'Email Address'
    PHONE = 'PHONE', 'Phone Number'
    NUMBER = 'NUMBER', 'Number'
    SELECT = 'SELECT', 'Single Choice (Dropdown)'
    RADIO = 'RADIO', 'Single Choice (Radio)'
    CHECKBOX = 'CHECKBOX', 'Multiple Choice (Checkbox)'
    DATE = 'DATE', 'Date'
    FILE = 'FILE', 'File Upload'
    HEADING = 'HEADING', 'Section Heading (Display Only)'


class FormTemplate(models.Model):
    """
    Template for ISO certification forms.
    Each ISO standard can have multiple form templates (e.g., initial assessment, full application).
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    # Basic info
    name = models.CharField(max_length=255, help_text="Form name (e.g., 'ISO 9001 Initial Assessment')")
    name_sq = models.CharField(max_length=255, blank=True, help_text="Form name in Albanian")
    name_it = models.CharField(max_length=255, blank=True, help_text="Form name in Italian")
    description = models.TextField(blank=True, help_text="Form description")
    description_sq = models.TextField(blank=True, help_text="Form description in Albanian")
    description_it = models.TextField(blank=True, help_text="Form description in Italian")

    # Classification
    iso_standard = models.CharField(
        max_length=20,
        choices=ISOStandard.choices,
        db_index=True,
        help_text="ISO standard this form is for"
    )
    form_type = models.CharField(
        max_length=50,
        default='assessment',
        help_text="Type of form (assessment, application, feedback, etc.)"
    )

    # Status
    is_active = models.BooleanField(default=True, help_text="Whether this form is currently accepting submissions")
    is_public = models.BooleanField(default=True, help_text="Whether this form is visible to public users")

    # Settings
    requires_auth = models.BooleanField(default=False, help_text="Whether user must be logged in to submit")
    allow_multiple_submissions = models.BooleanField(default=True, help_text="Allow same email to submit multiple times")
    send_confirmation_email = models.BooleanField(default=True, help_text="Send confirmation email after submission")
    notification_emails = models.TextField(
        blank=True,
        help_text="Comma-separated email addresses to notify on new submissions"
    )

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['iso_standard', 'name']
        verbose_name = 'Form Template'
        verbose_name_plural = 'Form Templates'

    def __str__(self):
        return f"{self.get_iso_standard_display()} - {self.name}"

    @property
    def total_questions(self):
        return self.sections.aggregate(
            total=models.Count('questions')
        )['total'] or 0

    @property
    def total_submissions(self):
        return self.submissions.count()


class FormSection(models.Model):
    """
    Sections within a form template for organizing questions.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    form_template = models.ForeignKey(
        FormTemplate,
        on_delete=models.CASCADE,
        related_name='sections'
    )

    # Section info
    title = models.CharField(max_length=255, help_text="Section title")
    title_sq = models.CharField(max_length=255, blank=True, help_text="Section title in Albanian")
    title_it = models.CharField(max_length=255, blank=True, help_text="Section title in Italian")
    description = models.TextField(blank=True, help_text="Section description/instructions")
    description_sq = models.TextField(blank=True, help_text="Section description in Albanian")
    description_it = models.TextField(blank=True, help_text="Section description in Italian")

    # Ordering
    order = models.PositiveIntegerField(default=0, help_text="Display order (lower = first)")

    # Visibility
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['form_template', 'order']
        verbose_name = 'Form Section'
        verbose_name_plural = 'Form Sections'

    def __str__(self):
        return f"{self.form_template.name} - {self.title}"


class FormQuestion(models.Model):
    """
    Individual questions within a form section.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    section = models.ForeignKey(
        FormSection,
        on_delete=models.CASCADE,
        related_name='questions'
    )

    # Question content
    question_text = models.TextField(help_text="The question text")
    question_text_sq = models.TextField(blank=True, help_text="Question text in Albanian")
    question_text_it = models.TextField(blank=True, help_text="Question text in Italian")
    help_text = models.TextField(blank=True, help_text="Additional help/instructions for the question")
    help_text_sq = models.TextField(blank=True, help_text="Help text in Albanian")
    help_text_it = models.TextField(blank=True, help_text="Help text in Italian")

    # Question type and validation
    question_type = models.CharField(
        max_length=20,
        choices=QuestionType.choices,
        default=QuestionType.TEXT
    )
    is_required = models.BooleanField(default=True, help_text="Whether this question must be answered")

    # For SELECT, RADIO, CHECKBOX types - JSON array of options
    # Format: [{"value": "opt1", "label": "Option 1", "label_sq": "Opsioni 1"}, ...]
    options = models.JSONField(
        null=True,
        blank=True,
        help_text="Options for choice-type questions (JSON array)"
    )

    # Validation settings (stored as JSON)
    # Examples: {"min_length": 10, "max_length": 500}, {"min": 1, "max": 100}
    validation_rules = models.JSONField(
        null=True,
        blank=True,
        help_text="Validation rules (JSON object)"
    )

    # Conditional display (JSON format)
    # Format: {"question_id": "uuid", "operator": "equals", "value": "yes"}
    conditional_logic = models.JSONField(
        null=True,
        blank=True,
        help_text="Show this question only if condition is met"
    )

    # Ordering
    order = models.PositiveIntegerField(default=0, help_text="Display order within section")

    # Status
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['section', 'order']
        verbose_name = 'Form Question'
        verbose_name_plural = 'Form Questions'

    def __str__(self):
        return f"{self.section.title} - Q{self.order}: {self.question_text[:50]}..."


class FormSubmission(models.Model):
    """
    A submission of a form by a user/client.
    """
    class SubmissionStatus(models.TextChoices):
        PENDING = 'PENDING', 'Pending Review'
        UNDER_REVIEW = 'UNDER_REVIEW', 'Under Review'
        APPROVED = 'APPROVED', 'Approved'
        REJECTED = 'REJECTED', 'Rejected'
        COMPLETED = 'COMPLETED', 'Completed'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    form_template = models.ForeignKey(
        FormTemplate,
        on_delete=models.PROTECT,  # Don't delete submissions if template is deleted
        related_name='submissions'
    )

    # Submitter info (collected regardless of login status)
    submitter_email = models.EmailField(
        validators=[EmailValidator()],
        help_text="Email of the person submitting the form"
    )
    submitter_name = models.CharField(max_length=255, help_text="Name of the submitter")
    submitter_phone = models.CharField(max_length=50, blank=True, help_text="Phone number")
    company_name = models.CharField(max_length=255, blank=True, help_text="Company name")

    # Submission metadata
    submission_number = models.CharField(
        max_length=50,
        unique=True,
        editable=False,
        help_text="Auto-generated submission reference number"
    )
    status = models.CharField(
        max_length=20,
        choices=SubmissionStatus.choices,
        default=SubmissionStatus.PENDING,
        db_index=True
    )

    # IP and tracking (for security)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    user_agent = models.TextField(blank=True)

    # Language used when submitting
    language = models.CharField(max_length=5, default='en')

    # Admin notes
    internal_notes = models.TextField(blank=True, help_text="Internal notes (not visible to submitter)")

    # Timestamps
    submitted_at = models.DateTimeField(auto_now_add=True)
    reviewed_at = models.DateTimeField(null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-submitted_at']
        verbose_name = 'Form Submission'
        verbose_name_plural = 'Form Submissions'
        indexes = [
            models.Index(fields=['submitter_email']),
            models.Index(fields=['submission_number']),
            models.Index(fields=['status', 'submitted_at']),
        ]

    def __str__(self):
        return f"{self.submission_number} - {self.submitter_name} ({self.form_template.name})"

    def save(self, *args, **kwargs):
        if not self.submission_number:
            self.submission_number = self.generate_submission_number()
        super().save(*args, **kwargs)

    def generate_submission_number(self):
        """Generate a unique submission number: SUB-YYYYMMDD-XXXXX"""
        today = timezone.now().strftime('%Y%m%d')
        prefix = f"SUB-{today}-"

        # Get the count of submissions today
        today_count = FormSubmission.objects.filter(
            submission_number__startswith=prefix
        ).count()

        return f"{prefix}{str(today_count + 1).zfill(5)}"


class FormAnswer(models.Model):
    """
    Individual answers within a form submission.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    submission = models.ForeignKey(
        FormSubmission,
        on_delete=models.CASCADE,
        related_name='answers'
    )
    question = models.ForeignKey(
        FormQuestion,
        on_delete=models.PROTECT,  # Don't delete answers if question is deleted
        related_name='answers'
    )

    # Answer value - stored as text, interpreted based on question type
    # For CHECKBOX type, stored as JSON array of selected values
    answer_text = models.TextField(blank=True, help_text="Text answer")
    answer_json = models.JSONField(
        null=True,
        blank=True,
        help_text="JSON answer for complex types (checkboxes, etc.)"
    )

    # For FILE type questions
    answer_file = models.FileField(
        upload_to='form_uploads/%Y/%m/',
        null=True,
        blank=True,
        help_text="Uploaded file"
    )

    class Meta:
        verbose_name = 'Form Answer'
        verbose_name_plural = 'Form Answers'
        # Ensure one answer per question per submission
        unique_together = ['submission', 'question']

    def __str__(self):
        return f"{self.submission.submission_number} - {self.question.question_text[:30]}..."

    @property
    def display_value(self):
        """Return human-readable answer value"""
        if self.answer_file:
            return self.answer_file.name
        if self.answer_json:
            if isinstance(self.answer_json, list):
                return ', '.join(str(v) for v in self.answer_json)
            return str(self.answer_json)
        return self.answer_text or '(No answer)'


class FormSubmissionLog(models.Model):
    """
    Audit log for form submission status changes.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    submission = models.ForeignKey(
        FormSubmission,
        on_delete=models.CASCADE,
        related_name='logs'
    )

    # Change info
    previous_status = models.CharField(max_length=20, blank=True)
    new_status = models.CharField(max_length=20)
    changed_by = models.CharField(max_length=255, blank=True, help_text="User who made the change")
    notes = models.TextField(blank=True)

    # Timestamp
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Submission Log'
        verbose_name_plural = 'Submission Logs'

    def __str__(self):
        return f"{self.submission.submission_number}: {self.previous_status} → {self.new_status}"
