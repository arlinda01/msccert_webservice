from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Admin router for form management
admin_router = DefaultRouter()
admin_router.register(r'templates', views.FormTemplateViewSet, basename='form-template')
admin_router.register(r'sections', views.FormSectionViewSet, basename='form-section')
admin_router.register(r'questions', views.FormQuestionViewSet, basename='form-question')
admin_router.register(r'submissions', views.FormSubmissionViewSet, basename='form-submission')

# Public router for form retrieval and submission
public_router = DefaultRouter()
public_router.register(r'forms', views.PublicFormViewSet, basename='public-form')
public_router.register(r'submit', views.PublicFormSubmissionView, basename='public-submit')

urlpatterns = [
    # Admin endpoints: /api/forms/admin/...
    path('admin/', include(admin_router.urls)),

    # Public endpoints: /api/forms/public/...
    path('public/', include(public_router.urls)),

    # Contact form endpoint: /api/forms/contact/
    path('contact/', views.ContactFormView.as_view(), name='contact-form'),
]
