from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CertificateViewSet, CertificateSiteViewSet

app_name = 'certificates'

router = DefaultRouter()
router.register(r'certificates', CertificateViewSet, basename='certificate')
router.register(r'sites', CertificateSiteViewSet, basename='certificate-site')

urlpatterns = [
    path('', include(router.urls)),
]