from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'categories', views.BlogCategoryViewSet, basename='blog-category')
router.register(r'posts', views.BlogPostViewSet, basename='blog-post')

urlpatterns = [
    path('', include(router.urls)),
]
