from rest_framework import viewsets, filters
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import F, Q
from django.shortcuts import get_object_or_404

from .models import BlogCategory, BlogPost
from .serializers import (
    BlogCategorySerializer,
    BlogPostListSerializer,
    BlogPostDetailSerializer
)


class BlogCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Public ViewSet for blog categories.
    """
    queryset = BlogCategory.objects.all()
    serializer_class = BlogCategorySerializer
    permission_classes = [AllowAny]
    lookup_field = 'slug'


class BlogPostViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Public ViewSet for blog posts.
    Only shows published posts.
    """
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category__slug']
    search_fields = ['title', 'title_sq', 'title_it', 'content', 'tags']
    ordering_fields = ['published_at', 'view_count', 'title']
    ordering = ['-published_at']
    lookup_field = 'slug'

    def get_queryset(self):
        return BlogPost.objects.filter(
            status=BlogPost.Status.PUBLISHED
        ).select_related('category')

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return BlogPostDetailSerializer
        return BlogPostListSerializer

    def get_object(self):
        """Override to support lookup by any language slug (en, sq, it)"""
        queryset = self.get_queryset()
        slug = self.kwargs.get('slug')

        # Try to find by any of the three slug fields
        obj = queryset.filter(
            Q(slug=slug) | Q(slug_sq=slug) | Q(slug_it=slug)
        ).first()

        if obj is None:
            from rest_framework.exceptions import NotFound
            raise NotFound('Blog post not found')

        return obj

    def retrieve(self, request, *args, **kwargs):
        """Get post detail and increment view count"""
        instance = self.get_object()

        # Increment view count
        BlogPost.objects.filter(pk=instance.pk).update(view_count=F('view_count') + 1)
        instance.refresh_from_db()

        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured/latest posts for homepage"""
        posts = self.get_queryset()[:3]
        serializer = BlogPostListSerializer(posts, many=True, context={'request': request})
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def by_tag(self, request):
        """Get posts by tag"""
        tag = request.query_params.get('tag', '')
        if not tag:
            return Response({'error': 'tag parameter is required'}, status=400)

        posts = self.get_queryset().filter(tags__icontains=tag)
        serializer = BlogPostListSerializer(posts, many=True, context={'request': request})
        return Response(serializer.data)
