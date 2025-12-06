from django.contrib import admin
from django.utils.html import format_html
from django.db.models import Count
from .models import (
    FormTemplate, FormSection, FormQuestion,
    FormSubmission, FormAnswer, FormSubmissionLog
)


# ============================================
# Inline classes (used within other admins)
# ============================================

class FormAnswerInline(admin.TabularInline):
    """Inline admin for answers within a submission"""
    model = FormAnswer
    extra = 0
    readonly_fields = ['section_name', 'question_text_display', 'display_value']
    fields = ['section_name', 'question_text_display', 'display_value']
    can_delete = False
    verbose_name = "Answer"
    verbose_name_plural = "Form Responses"
    ordering = ['question__section__order', 'question__order']

    def section_name(self, obj):
        return obj.question.section.title
    section_name.short_description = 'Section'

    def question_text_display(self, obj):
        return obj.question.question_text
    question_text_display.short_description = 'Question'

    def has_add_permission(self, request, obj=None):
        return False


# ============================================
# Form Templates (read-only overview)
# ============================================

@admin.register(FormTemplate)
class FormTemplateAdmin(admin.ModelAdmin):
    """Admin interface for Form Templates - View available forms"""
    list_display = [
        'name', 'iso_standard', 'is_active', 'is_public',
        'questions_count', 'submissions_count', 'created_at'
    ]
    list_filter = ['iso_standard', 'is_active', 'is_public']
    search_fields = ['name', 'name_sq', 'description']
    ordering = ['iso_standard', 'name']

    fieldsets = (
        ('Form Information', {
            'fields': ('name', 'name_sq', 'description', 'description_sq', 'iso_standard', 'form_type')
        }),
        ('Status', {
            'fields': ('is_active', 'is_public')
        }),
        ('Email Settings', {
            'fields': ('send_confirmation_email', 'notification_emails'),
            'classes': ('collapse',)
        }),
    )

    readonly_fields = ['created_at', 'updated_at']

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
    submissions_count.short_description = 'Filled Forms'
    submissions_count.admin_order_field = '_submissions_count'


# ============================================
# Form Submissions (main view for filled forms)
# ============================================

@admin.register(FormSubmission)
class FormSubmissionAdmin(admin.ModelAdmin):
    """Admin interface for Form Submissions - View all filled forms"""
    list_display = [
        'submission_number', 'form_name_display', 'submitter_name', 'company_name',
        'answers_count', 'status_badge', 'submitted_at'
    ]
    list_filter = [
        'status', 'form_template__iso_standard',
        'form_template', 'submitted_at'
    ]
    search_fields = [
        'submission_number', 'submitter_name', 'submitter_email', 'company_name'
    ]
    ordering = ['-submitted_at']
    date_hierarchy = 'submitted_at'
    list_per_page = 25

    fieldsets = (
        ('Form Submission', {
            'fields': ('submission_number', 'form_template', 'status'),
            'description': 'Each submission represents one complete form filled by a user. All answers are shown below.'
        }),
        ('Submitter Information', {
            'fields': ('submitter_name', 'submitter_email', 'submitter_phone', 'company_name')
        }),
        ('Internal Notes', {
            'fields': ('internal_notes',),
        }),
        ('Technical Details', {
            'fields': ('language', 'ip_address', 'submitted_at', 'reviewed_at'),
            'classes': ('collapse',)
        }),
    )

    readonly_fields = [
        'submission_number', 'form_template', 'submitter_name', 'submitter_email',
        'submitter_phone', 'company_name', 'language', 'ip_address',
        'submitted_at', 'reviewed_at'
    ]

    inlines = [FormAnswerInline]

    actions = ['mark_as_under_review', 'mark_as_approved', 'mark_as_rejected', 'mark_as_completed']

    def get_queryset(self, request):
        return super().get_queryset(request).select_related('form_template').annotate(
            _answers_count=Count('answers')
        )

    def form_name_display(self, obj):
        return obj.form_template.name
    form_name_display.short_description = 'Form'
    form_name_display.admin_order_field = 'form_template__name'

    def answers_count(self, obj):
        return format_html('<strong>{}</strong> answers', obj._answers_count)
    answers_count.short_description = 'Responses'
    answers_count.admin_order_field = '_answers_count'

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
