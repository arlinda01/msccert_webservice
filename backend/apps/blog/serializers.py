from rest_framework import serializers
from .models import BlogCategory, BlogPost


class BlogCategorySerializer(serializers.ModelSerializer):
    """Serializer for blog categories"""

    class Meta:
        model = BlogCategory
        fields = ['id', 'name', 'name_sq', 'name_it', 'slug']


class BlogPostListSerializer(serializers.ModelSerializer):
    """Lightweight serializer for blog post listings"""
    category = BlogCategorySerializer(read_only=True)
    tags_list = serializers.SerializerMethodField()
    featured_image_url = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = [
            'id', 'title', 'title_sq', 'title_it',
            'slug', 'slug_sq', 'slug_it',
            'excerpt', 'excerpt_sq', 'excerpt_it',
            'featured_image_url', 'featured_image_alt',
            'category', 'tags_list', 'author',
            'published_at', 'view_count'
        ]

    def get_tags_list(self, obj):
        return obj.get_tags_list()

    def get_featured_image_url(self, obj):
        if obj.featured_image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.featured_image.url)
            return obj.featured_image.url
        return None


class BlogPostDetailSerializer(serializers.ModelSerializer):
    """Full serializer for blog post detail view"""
    category = BlogCategorySerializer(read_only=True)
    tags_list = serializers.SerializerMethodField()
    featured_image_url = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = [
            'id', 'title', 'title_sq', 'title_it',
            'slug', 'slug_sq', 'slug_it',
            'excerpt', 'excerpt_sq', 'excerpt_it',
            'content', 'content_sq', 'content_it',
            'featured_image_url', 'featured_image_alt',
            'category', 'tags_list', 'author',
            'meta_title', 'meta_description',
            'published_at', 'updated_at', 'view_count'
        ]

    def get_tags_list(self, obj):
        return obj.get_tags_list()

    def get_featured_image_url(self, obj):
        if obj.featured_image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.featured_image.url)
            return obj.featured_image.url
        return None
