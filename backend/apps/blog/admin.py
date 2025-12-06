from django.contrib import admin
from django.utils.html import format_html
from .models import BlogCategory, BlogPost


@admin.register(BlogCategory)
class BlogCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'name_sq', 'name_it', 'slug', 'posts_count']
    search_fields = ['name', 'name_sq', 'name_it']
    prepopulated_fields = {'slug': ('name',)}

    def posts_count(self, obj):
        return obj.posts.count()
    posts_count.short_description = 'Posts'


@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'author', 'status_badge', 'published_at', 'view_count']
    list_filter = ['status', 'category', 'created_at', 'published_at']
    search_fields = ['title', 'title_sq', 'title_it', 'content', 'tags']
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'created_at'
    ordering = ['-created_at']

    fieldsets = (
        ('English Content', {
            'fields': ('title', 'slug', 'excerpt', 'content')
        }),
        ('Albanian Content', {
            'fields': ('title_sq', 'excerpt_sq', 'content_sq'),
            'classes': ('collapse',)
        }),
        ('Italian Content', {
            'fields': ('title_it', 'excerpt_it', 'content_it'),
            'classes': ('collapse',)
        }),
        ('Media', {
            'fields': ('featured_image', 'featured_image_alt')
        }),
        ('Categorization', {
            'fields': ('category', 'tags', 'author')
        }),
        ('SEO', {
            'fields': ('meta_title', 'meta_description'),
            'classes': ('collapse',)
        }),
        ('Status', {
            'fields': ('status', 'published_at')
        }),
        ('Stats', {
            'fields': ('view_count', 'created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

    readonly_fields = ['view_count', 'created_at', 'updated_at']

    def status_badge(self, obj):
        colors = {
            'DRAFT': '#FFA500',
            'PUBLISHED': '#4CAF50',
            'ARCHIVED': '#9E9E9E',
        }
        color = colors.get(obj.status, '#666')
        return format_html(
            '<span style="background-color: {}; color: white; padding: 3px 8px; '
            'border-radius: 3px; font-size: 11px;">{}</span>',
            color, obj.get_status_display()
        )
    status_badge.short_description = 'Status'
    status_badge.admin_order_field = 'status'

    actions = ['publish_posts', 'archive_posts', 'draft_posts']

    @admin.action(description='Publish selected posts')
    def publish_posts(self, request, queryset):
        from django.utils import timezone
        count = queryset.filter(status__in=['DRAFT', 'ARCHIVED']).update(
            status='PUBLISHED',
            published_at=timezone.now()
        )
        self.message_user(request, f'{count} post(s) published.')

    @admin.action(description='Archive selected posts')
    def archive_posts(self, request, queryset):
        count = queryset.exclude(status='ARCHIVED').update(status='ARCHIVED')
        self.message_user(request, f'{count} post(s) archived.')

    @admin.action(description='Set selected posts to draft')
    def draft_posts(self, request, queryset):
        count = queryset.exclude(status='DRAFT').update(status='DRAFT')
        self.message_user(request, f'{count} post(s) set to draft.')
