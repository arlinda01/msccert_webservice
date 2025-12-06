from django.contrib import admin
from django.utils.html import format_html
from django.urls import reverse
from django.db.models import Count
from .models import (
    FormTemplate, FormSection, FormQuestion,
    FormSubmission, FormAnswer, FormSubmissionLog
)


class FormQuestionInline(admin.TabularInline):
    """Inline admin for questions within a section"""
    model = FormQuestion
    extra = 1
    ordering = ['order']
    fields = [
        'order', 'question_text', 'question_type', 'is_required', 'is_active'
    ]
    show_change_link = True


class FormSectionInline(admin.TabularInline):
    """Inline admin for sections within a form template"""
    model = FormSection
    extra = 0
    ordering = ['order']
    fields = ['order', 'title', 'is_active']
    show_change_link = True


class FormAnswerInline(admin.TabularInline):
    """Inline admin for answers within a submission"""
    model = FormAnswer
    extra = 0
    readonly_fields = ['question', 'answer_text', 'answer_json', 'answer_file', 'display_value']
    fields = ['question', 'display_value']
    can_delete = False

    def has_add_permission(self, request, obj=None):
        return False


class FormSubmissionLogInline(admin.TabularInline):
    """Inline admin for submission logs"""
    model = FormSubmissionLog
    extra = 0
    readonly_fields = ['previous_status', 'new_status', 'changed_by', 'notes', 'created_at']
    can_delete = False

    def has_add_permission(self, request, obj=None):
        return False


@admin.register(FormTemplate)
class FormTemplateAdmin(admin.ModelAdmin):
    """Admin interface for Form Templates"""
    list_display = [
        'name', 'iso_standard', 'form_type', 'is_active', 'is_public',
        'questions_count', 'submissions_count', 'created_at'
    ]
    list_filter = ['iso_standard', 'form_type', 'is_active', 'is_public', 'created_at']
    search_fields = ['name', 'name_sq', 'description']
    ordering = ['-created_at']
    date_hierarchy = 'created_at'

    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'name_sq', 'description', 'description_sq')
        }),
        ('Classification', {
            'fields': ('iso_standard', 'form_type')
        }),
        ('Status', {
            'fields': ('is_active', 'is_public')
        }),
        ('Settings', {
            'fields': (
                'requires_auth', 'allow_multiple_submissions',
                'send_confirmation_email', 'notification_emails'
            ),
            'classes': ('collapse',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

    readonly_fields = ['created_at', 'updated_at']
    inlines = [FormSectionInline]

    def get_queryset(self, request):
        return super().get_queryset(request).annotate(
            _questions_count=Count('sections__questions', distinct=True),
            _submissions_count=Count('submissions', distinct=True)
        )

    def questions_count(self, obj):
        return obj._questions_count
    questions_count.short_description = 'Questions'
    questions_count.admin_order_field = '_questions_count'

    def submissions_count(self, obj):
        return obj._submissions_count
    submissions_count.short_description = 'Submissions'
    submissions_count.admin_order_field = '_submissions_count'


@admin.register(FormSection)
class FormSectionAdmin(admin.ModelAdmin):
    """Admin interface for Form Sections"""
    list_display = ['title', 'form_template', 'order', 'questions_count', 'is_active']
    list_filter = ['form_template__iso_standard', 'is_active', 'form_template']
    search_fields = ['title', 'title_sq', 'description']
    ordering = ['form_template', 'order']

    fieldsets = (
        ('Basic Information', {
            'fields': ('form_template', 'title', 'title_sq', 'description', 'description_sq')
        }),
        ('Settings', {
            'fields': ('order', 'is_active')
        }),
    )

    inlines = [FormQuestionInline]

    def get_queryset(self, request):
        return super().get_queryset(request).annotate(
            _questions_count=Count('questions')
        )

    def questions_count(self, obj):
        return obj._questions_count
    questions_count.short_description = 'Questions'
    questions_count.admin_order_field = '_questions_count'


@admin.register(FormQuestion)
class FormQuestionAdmin(admin.ModelAdmin):
    """Admin interface for Form Questions"""
    list_display = [
        'short_question', 'section', 'question_type', 'is_required', 'order', 'is_active'
    ]
    list_filter = [
        'question_type', 'is_required', 'is_active',
        'section__form_template__iso_standard', 'section__form_template'
    ]
    search_fields = ['question_text', 'question_text_sq', 'help_text']
    ordering = ['section__form_template', 'section__order', 'order']

    fieldsets = (
        ('Question Content', {
            'fields': ('section', 'question_text', 'question_text_sq', 'help_text', 'help_text_sq')
        }),
        ('Question Type & Validation', {
            'fields': ('question_type', 'is_required', 'options', 'validation_rules')
        }),
        ('Display Settings', {
            'fields': ('order', 'conditional_logic', 'is_active')
        }),
    )

    def short_question(self, obj):
        text = obj.question_text
        return text[:50] + '...' if len(text) > 50 else text
    short_question.short_description = 'Question'


@admin.register(FormSubmission)
class FormSubmissionAdmin(admin.ModelAdmin):
    """Admin interface for Form Submissions"""
    list_display = [
        'submission_number', 'form_template', 'submitter_name', 'submitter_email',
        'company_name', 'status_badge', 'language', 'submitted_at'
    ]
    list_filter = [
        'status', 'language', 'form_template__iso_standard',
        'form_template', 'submitted_at'
    ]
    search_fields = [
        'submission_number', 'submitter_name', 'submitter_email', 'company_name'
    ]
    ordering = ['-submitted_at']
    date_hierarchy = 'submitted_at'

    fieldsets = (
        ('Submission Info', {
            'fields': ('submission_number', 'form_template', 'status')
        }),
        ('Submitter Details', {
            'fields': ('submitter_name', 'submitter_email', 'submitter_phone', 'company_name')
        }),
        ('Metadata', {
            'fields': ('language', 'ip_address', 'user_agent'),
            'classes': ('collapse',)
        }),
        ('Internal', {
            'fields': ('internal_notes',)
        }),
        ('Timestamps', {
            'fields': ('submitted_at', 'reviewed_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

    readonly_fields = [
        'submission_number', 'form_template', 'submitter_name', 'submitter_email',
        'submitter_phone', 'company_name', 'language', 'ip_address', 'user_agent',
        'submitted_at', 'updated_at'
    ]

    inlines = [FormAnswerInline, FormSubmissionLogInline]

    actions = ['mark_as_under_review', 'mark_as_approved', 'mark_as_rejected', 'mark_as_completed']

    def status_badge(self, obj):
        colors = {
            'PENDING': '#FFA500',
            'UNDER_REVIEW': '#2196F3',
            'APPROVED': '#4CAF50',
            'REJECTED': '#F44336',
            'COMPLETED': '#9C27B0',
        }
        color = colors.get(obj.status, '#666')
        return format_html(
            '<span style="background-color: {}; color: white; padding: 3px 8px; '
            'border-radius: 3px; font-size: 11px;">{}</span>',
            color, obj.get_status_display()
        )
    status_badge.short_description = 'Status'
    status_badge.admin_order_field = 'status'

    def save_model(self, request, obj, form, change):
        """Log status changes"""
        if change and 'status' in form.changed_data:
            previous_status = FormSubmission.objects.get(pk=obj.pk).status
            super().save_model(request, obj, form, change)

            # Create log entry
            FormSubmissionLog.objects.create(
                submission=obj,
                previous_status=previous_status,
                new_status=obj.status,
                changed_by=request.user.get_full_name() or request.user.username,
                notes='Status changed via admin'
            )

            # Update reviewed_at if moving to review status
            if obj.status in ['UNDER_REVIEW', 'APPROVED', 'REJECTED', 'COMPLETED']:
                from django.utils import timezone
                obj.reviewed_at = timezone.now()
                obj.save(update_fields=['reviewed_at'])
        else:
            super().save_model(request, obj, form, change)

    def _update_status(self, request, queryset, new_status, notes):
        """Helper method for status update actions"""
        from django.utils import timezone
        count = 0
        for submission in queryset:
            if submission.status != new_status:
                previous_status = submission.status
                submission.status = new_status
                submission.reviewed_at = timezone.now()
                submission.save()

                FormSubmissionLog.objects.create(
                    submission=submission,
                    previous_status=previous_status,
                    new_status=new_status,
                    changed_by=request.user.get_full_name() or request.user.username,
                    notes=notes
                )
                count += 1

        self.message_user(request, f'{count} submission(s) updated to {new_status}.')

    @admin.action(description='Mark selected as Under Review')
    def mark_as_under_review(self, request, queryset):
        self._update_status(request, queryset, 'UNDER_REVIEW', 'Bulk action: marked as under review')

    @admin.action(description='Mark selected as Approved')
    def mark_as_approved(self, request, queryset):
        self._update_status(request, queryset, 'APPROVED', 'Bulk action: marked as approved')

    @admin.action(description='Mark selected as Rejected')
    def mark_as_rejected(self, request, queryset):
        self._update_status(request, queryset, 'REJECTED', 'Bulk action: marked as rejected')

    @admin.action(description='Mark selected as Completed')
    def mark_as_completed(self, request, queryset):
        self._update_status(request, queryset, 'COMPLETED', 'Bulk action: marked as completed')


@admin.register(FormAnswer)
class FormAnswerAdmin(admin.ModelAdmin):
    """Admin interface for Form Answers (read-only)"""
    list_display = ['submission', 'question_short', 'display_value_short']
    list_filter = ['submission__form_template', 'question__question_type']
    search_fields = ['submission__submission_number', 'answer_text']
    ordering = ['-submission__submitted_at']

    readonly_fields = [
        'submission', 'question', 'answer_text', 'answer_json', 'answer_file', 'display_value'
    ]

    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False

    def question_short(self, obj):
        text = obj.question.question_text
        return text[:40] + '...' if len(text) > 40 else text
    question_short.short_description = 'Question'

    def display_value_short(self, obj):
        value = obj.display_value
        return value[:50] + '...' if len(value) > 50 else value
    display_value_short.short_description = 'Answer'


@admin.register(FormSubmissionLog)
class FormSubmissionLogAdmin(admin.ModelAdmin):
    """Admin interface for Submission Logs (read-only)"""
    list_display = ['submission', 'previous_status', 'new_status', 'changed_by', 'created_at']
    list_filter = ['new_status', 'created_at']
    search_fields = ['submission__submission_number', 'changed_by', 'notes']
    ordering = ['-created_at']
    date_hierarchy = 'created_at'

    readonly_fields = [
        'submission', 'previous_status', 'new_status', 'changed_by', 'notes', 'created_at'
    ]

    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False

    def has_delete_permission(self, request, obj=None):
        return False
