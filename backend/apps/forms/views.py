from rest_framework import viewsets, status, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, AllowAny
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Count, Prefetch
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string
from django.utils.html import strip_tags
import logging

from .models import (
    FormTemplate, FormSection, FormQuestion,
    FormSubmission, FormAnswer, FormSubmissionLog,
    ISOStandard
)
from .serializers import (
    FormTemplateListSerializer, FormTemplateDetailSerializer, FormTemplateAdminSerializer,
    FormSectionSerializer, FormQuestionSerializer,
    FormSubmissionListSerializer, FormSubmissionDetailSerializer,
    PublicFormTemplateSerializer, PublicFormSubmissionSerializer,
    FormSubmissionStatusUpdateSerializer, FormAnswerSerializer
)

logger = logging.getLogger(__name__)


class FormTemplateViewSet(viewsets.ModelViewSet):
    """
    Admin ViewSet for managing form templates.
    """
    permission_classes = [IsAdminUser]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['iso_standard', 'form_type', 'is_active', 'is_public']
    search_fields = ['name', 'name_sq', 'description']
    ordering_fields = ['name', 'iso_standard', 'created_at', 'updated_at']
    ordering = ['-created_at']

    def get_queryset(self):
        return FormTemplate.objects.annotate(
            questions_count=Count('sections__questions', distinct=True),
            submissions_count=Count('submissions', distinct=True)
        ).prefetch_related(
            Prefetch(
                'sections',
                queryset=FormSection.objects.order_by('order').prefetch_related(
                    Prefetch(
                        'questions',
                        queryset=FormQuestion.objects.order_by('order')
                    )
                )
            )
        )

    def get_serializer_class(self):
        if self.action == 'list':
            return FormTemplateListSerializer
        elif self.action == 'retrieve':
            return FormTemplateDetailSerializer
        return FormTemplateAdminSerializer

    @action(detail=True, methods=['post'])
    def duplicate(self, request, pk=None):
        """Duplicate a form template with all its sections and questions"""
        original = self.get_object()

        # Create new template
        new_template = FormTemplate.objects.create(
            name=f"{original.name} (Copy)",
            name_sq=f"{original.name_sq} (Kopje)" if original.name_sq else '',
            description=original.description,
            description_sq=original.description_sq,
            iso_standard=original.iso_standard,
            form_type=original.form_type,
            is_active=False,  # Start as inactive
            is_public=original.is_public,
            requires_auth=original.requires_auth,
            allow_multiple_submissions=original.allow_multiple_submissions,
            send_confirmation_email=original.send_confirmation_email,
            notification_emails=original.notification_emails
        )

        # Duplicate sections and questions
        for section in original.sections.all():
            new_section = FormSection.objects.create(
                form_template=new_template,
                title=section.title,
                title_sq=section.title_sq,
                description=section.description,
                description_sq=section.description_sq,
                order=section.order,
                is_active=section.is_active
            )

            for question in section.questions.all():
                FormQuestion.objects.create(
                    section=new_section,
                    question_text=question.question_text,
                    question_text_sq=question.question_text_sq,
                    help_text=question.help_text,
                    help_text_sq=question.help_text_sq,
                    question_type=question.question_type,
                    is_required=question.is_required,
                    options=question.options,
                    validation_rules=question.validation_rules,
                    conditional_logic=question.conditional_logic,
                    order=question.order,
                    is_active=question.is_active
                )

        serializer = FormTemplateDetailSerializer(new_template)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['get'])
    def iso_standards(self, request):
        """Get list of available ISO standards"""
        standards = [
            {'value': choice[0], 'label': choice[1]}
            for choice in ISOStandard.choices
        ]
        return Response(standards)

    @action(detail=False, methods=['get'])
    def stats(self, request):
        """Get form statistics"""
        total_forms = FormTemplate.objects.count()
        active_forms = FormTemplate.objects.filter(is_active=True).count()
        total_submissions = FormSubmission.objects.count()
        pending_submissions = FormSubmission.objects.filter(
            status=FormSubmission.SubmissionStatus.PENDING
        ).count()

        # Submissions by ISO standard
        by_standard = FormSubmission.objects.values(
            'form_template__iso_standard'
        ).annotate(count=Count('id')).order_by('-count')

        return Response({
            'total_forms': total_forms,
            'active_forms': active_forms,
            'total_submissions': total_submissions,
            'pending_submissions': pending_submissions,
            'submissions_by_standard': list(by_standard)
        })


class FormSectionViewSet(viewsets.ModelViewSet):
    """
    Admin ViewSet for managing form sections.
    """
    permission_classes = [IsAdminUser]
    serializer_class = FormSectionSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['form_template', 'is_active']
    ordering_fields = ['order', 'title']
    ordering = ['order']

    def get_queryset(self):
        return FormSection.objects.prefetch_related(
            Prefetch(
                'questions',
                queryset=FormQuestion.objects.order_by('order')
            )
        )

    def perform_create(self, serializer):
        # Auto-set order if not provided
        form_template = serializer.validated_data.get('form_template')
        if form_template and 'order' not in serializer.validated_data:
            max_order = FormSection.objects.filter(
                form_template=form_template
            ).aggregate(max_order=models.Max('order'))['max_order'] or 0
            serializer.save(order=max_order + 1)
        else:
            serializer.save()


class FormQuestionViewSet(viewsets.ModelViewSet):
    """
    Admin ViewSet for managing form questions.
    """
    permission_classes = [IsAdminUser]
    serializer_class = FormQuestionSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['section', 'question_type', 'is_required', 'is_active']
    search_fields = ['question_text', 'question_text_sq']
    ordering_fields = ['order', 'question_type']
    ordering = ['order']

    def get_queryset(self):
        return FormQuestion.objects.select_related('section', 'section__form_template')


class FormSubmissionViewSet(viewsets.ModelViewSet):
    """
    Admin ViewSet for managing form submissions.
    """
    permission_classes = [IsAdminUser]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['form_template', 'status', 'language', 'form_template__iso_standard']
    search_fields = ['submission_number', 'submitter_name', 'submitter_email', 'company_name']
    ordering_fields = ['submitted_at', 'reviewed_at', 'status', 'submitter_name']
    ordering = ['-submitted_at']

    def get_queryset(self):
        return FormSubmission.objects.select_related(
            'form_template'
        ).prefetch_related(
            'answers', 'answers__question', 'logs'
        )

    def get_serializer_class(self):
        if self.action == 'list':
            return FormSubmissionListSerializer
        return FormSubmissionDetailSerializer

    @action(detail=True, methods=['post'])
    def update_status(self, request, pk=None):
        """Update submission status"""
        submission = self.get_object()
        serializer = FormSubmissionStatusUpdateSerializer(
            submission,
            data=request.data,
            context={'request': request}
        )
        serializer.is_valid(raise_exception=True)
        submission = serializer.update(submission, serializer.validated_data)
        return Response(FormSubmissionDetailSerializer(submission).data)

    @action(detail=True, methods=['post'])
    def add_note(self, request, pk=None):
        """Add internal note to submission"""
        submission = self.get_object()
        note = request.data.get('note', '')

        if note:
            if submission.internal_notes:
                submission.internal_notes += f"\n\n---\n{note}"
            else:
                submission.internal_notes = note
            submission.save()

        return Response(FormSubmissionDetailSerializer(submission).data)

    @action(detail=False, methods=['get'])
    def export(self, request):
        """Export submissions as CSV (basic implementation)"""
        import csv
        from django.http import HttpResponse

        submissions = self.filter_queryset(self.get_queryset())

        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="submissions.csv"'

        writer = csv.writer(response)
        writer.writerow([
            'Submission Number', 'Form Name', 'ISO Standard',
            'Submitter Name', 'Email', 'Company', 'Status',
            'Submitted At', 'Language'
        ])

        for sub in submissions:
            writer.writerow([
                sub.submission_number,
                sub.form_template.name,
                sub.form_template.iso_standard,
                sub.submitter_name,
                sub.submitter_email,
                sub.company_name,
                sub.status,
                sub.submitted_at.isoformat(),
                sub.language
            ])

        return response


# ============================================
# Public API Views
# ============================================

class PublicFormViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Public ViewSet for retrieving available forms.
    No authentication required.
    """
    permission_classes = [AllowAny]
    serializer_class = PublicFormTemplateSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['iso_standard', 'form_type']

    def get_queryset(self):
        return FormTemplate.objects.filter(
            is_active=True,
            is_public=True
        ).prefetch_related(
            Prefetch(
                'sections',
                queryset=FormSection.objects.filter(is_active=True).order_by('order').prefetch_related(
                    Prefetch(
                        'questions',
                        queryset=FormQuestion.objects.filter(is_active=True).order_by('order')
                    )
                )
            )
        )

    @action(detail=False, methods=['get'])
    def by_standard(self, request):
        """Get forms grouped by ISO standard"""
        standard = request.query_params.get('standard')
        if not standard:
            return Response(
                {'error': 'standard parameter is required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        forms = self.get_queryset().filter(iso_standard=standard)
        serializer = self.get_serializer(forms, many=True)
        return Response(serializer.data)


class PublicFormSubmissionView(viewsets.GenericViewSet):
    """
    Public ViewSet for submitting forms.
    No authentication required (unless form requires it).
    """
    permission_classes = [AllowAny]
    parser_classes = [JSONParser, MultiPartParser, FormParser]
    serializer_class = PublicFormSubmissionSerializer

    @action(detail=False, methods=['post'])
    def submit(self, request):
        """
        Submit a form.
        Expects JSON with form_template_id, submitter info, and answers array.
        """
        serializer = PublicFormSubmissionSerializer(
            data=request.data,
            context={'request': request}
        )

        if serializer.is_valid():
            submission = serializer.save()

            # Send confirmation email if enabled
            form_template = submission.form_template
            if form_template.send_confirmation_email:
                self._send_confirmation_email(submission)

            # Send notification to admin emails
            if form_template.notification_emails:
                self._send_admin_notification(submission)

            return Response({
                'success': True,
                'submission_number': submission.submission_number,
                'message': 'Form submitted successfully. You will receive a confirmation email shortly.'
            }, status=status.HTTP_201_CREATED)

        return Response({
            'success': False,
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['get'])
    def check_submission(self, request):
        """
        Check if user has already submitted a form (by email).
        """
        form_id = request.query_params.get('form_id')
        email = request.query_params.get('email')

        if not form_id or not email:
            return Response({
                'error': 'form_id and email parameters are required'
            }, status=status.HTTP_400_BAD_REQUEST)

        exists = FormSubmission.objects.filter(
            form_template_id=form_id,
            submitter_email=email.lower()
        ).exists()

        return Response({'has_submitted': exists})

    def _send_confirmation_email(self, submission):
        """Send confirmation email to submitter"""
        try:
            subject = f"Form Submission Received - {submission.submission_number}"

            # Simple text email (can be enhanced with HTML template)
            message = f"""
Dear {submission.submitter_name},

Thank you for submitting the {submission.form_template.name} form.

Your submission reference number is: {submission.submission_number}

Our team will review your submission and get back to you within 2-3 business days.

If you have any questions, please reply to this email or contact us at info@msc-certifications.com.

Best regards,
MSC Certifications Team
            """

            send_mail(
                subject=subject,
                message=message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[submission.submitter_email],
                fail_silently=True
            )
            logger.info(f"Confirmation email sent for submission {submission.submission_number}")
        except Exception as e:
            logger.error(f"Failed to send confirmation email: {str(e)}")

    def _send_admin_notification(self, submission):
        """Send notification email to admin"""
        try:
            emails = [
                e.strip()
                for e in submission.form_template.notification_emails.split(',')
                if e.strip()
            ]

            if not emails:
                return

            subject = f"New Form Submission - {submission.submission_number}"

            message = f"""
New form submission received:

Form: {submission.form_template.name}
ISO Standard: {submission.form_template.get_iso_standard_display()}
Submission Number: {submission.submission_number}

Submitter Details:
- Name: {submission.submitter_name}
- Email: {submission.submitter_email}
- Phone: {submission.submitter_phone or 'N/A'}
- Company: {submission.company_name or 'N/A'}

Submitted at: {submission.submitted_at.strftime('%Y-%m-%d %H:%M:%S')}

Please log in to the admin panel to review this submission.
            """

            send_mail(
                subject=subject,
                message=message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=emails,
                fail_silently=True
            )
            logger.info(f"Admin notification sent for submission {submission.submission_number}")
        except Exception as e:
            logger.error(f"Failed to send admin notification: {str(e)}")


class ContactFormView(APIView):
    """
    Simple contact form submission endpoint.
    No authentication required.
    """
    permission_classes = [AllowAny]

    def post(self, request):
        """
        Submit a contact form message.
        """
        name = request.data.get('name', '').strip()
        email = request.data.get('email', '').strip()
        phone = request.data.get('phone', '').strip()
        company = request.data.get('company', '').strip()
        subject = request.data.get('subject', '').strip()
        message = request.data.get('message', '').strip()

        # Validate required fields
        errors = {}
        if not name:
            errors['name'] = 'Name is required'
        if not email:
            errors['email'] = 'Email is required'
        if not subject:
            errors['subject'] = 'Subject is required'
        if not message:
            errors['message'] = 'Message is required'

        if errors:
            return Response({
                'success': False,
                'errors': errors
            }, status=status.HTTP_400_BAD_REQUEST)

        # Subject line mapping
        subject_labels = {
            'certification': 'ISO Certification Inquiry',
            'ce-marking': 'CE Marking Inquiry',
            'training': 'Training Inquiry',
            'quote': 'Quote Request',
            'other': 'General Inquiry'
        }
        subject_label = subject_labels.get(subject, subject)

        try:
            # Send email to admin
            admin_subject = f"New Contact Form Submission: {subject_label}"
            admin_message = f"""
New contact form submission received:

Subject: {subject_label}

Contact Details:
- Name: {name}
- Email: {email}
- Phone: {phone or 'N/A'}
- Company: {company or 'N/A'}

Message:
{message}

---
This message was sent from the MSC Certifications website contact form.
            """

            admin_emails = getattr(settings, 'CONTACT_FORM_EMAILS', ['info@msc-certifications.com'])
            if isinstance(admin_emails, str):
                admin_emails = [admin_emails]

            send_mail(
                subject=admin_subject,
                message=admin_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=admin_emails,
                fail_silently=False
            )

            # Send confirmation to user
            user_subject = "Thank you for contacting MSC Certifications"
            user_message = f"""
Dear {name},

Thank you for contacting MSC Certifications. We have received your message regarding "{subject_label}".

Our team will review your inquiry and get back to you within 1-2 business days.

Your message:
{message}

Best regards,
MSC Certifications Team

---
MSC Certifications
Email: info@msc-certifications.com
Phone: +355 67 206 3632
            """

            send_mail(
                subject=user_subject,
                message=user_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[email],
                fail_silently=True
            )

            logger.info(f"Contact form submitted by {email}")

            return Response({
                'success': True,
                'message': 'Your message has been sent successfully. We will get back to you soon.'
            }, status=status.HTTP_201_CREATED)

        except Exception as e:
            logger.error(f"Failed to send contact form email: {str(e)}")
            return Response({
                'success': False,
                'message': 'Failed to send message. Please try again or contact us directly at info@msc-certifications.com'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
