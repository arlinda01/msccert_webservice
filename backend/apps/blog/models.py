import uuid
from django.db import models
from django.utils.text import slugify
from django.utils import timezone


class BlogCategory(models.Model):
    """Categories for blog posts"""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    name = models.CharField(max_length=100)
    name_sq = models.CharField(max_length=100, blank=True, help_text="Name in Albanian")
    name_it = models.CharField(max_length=100, blank=True, help_text="Name in Italian")

    slug = models.SlugField(max_length=100, unique=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        ordering = ['name']

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)


class BlogPost(models.Model):
    """Blog posts with multi-language support"""

    class Status(models.TextChoices):
        DRAFT = 'DRAFT', 'Draft'
        PUBLISHED = 'PUBLISHED', 'Published'
        ARCHIVED = 'ARCHIVED', 'Archived'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    # English content (default)
    title = models.CharField(max_length=255, help_text="Title in English")
    slug = models.SlugField(max_length=255, unique=True)
    excerpt = models.TextField(max_length=500, blank=True, help_text="Short summary for listings")
    content = models.TextField(help_text="Full blog content in English")

    # Albanian content
    title_sq = models.CharField(max_length=255, blank=True, help_text="Title in Albanian")
    excerpt_sq = models.TextField(max_length=500, blank=True, help_text="Excerpt in Albanian")
    content_sq = models.TextField(blank=True, help_text="Content in Albanian")

    # Italian content
    title_it = models.CharField(max_length=255, blank=True, help_text="Title in Italian")
    excerpt_it = models.TextField(max_length=500, blank=True, help_text="Excerpt in Italian")
    content_it = models.TextField(blank=True, help_text="Content in Italian")

    # Featured image
    featured_image = models.ImageField(
        upload_to='blog/images/%Y/%m/',
        null=True,
        blank=True,
        help_text="Featured image for the post"
    )
    featured_image_alt = models.CharField(max_length=255, blank=True, help_text="Alt text for image")

    # Categorization
    category = models.ForeignKey(
        BlogCategory,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='posts'
    )
    tags = models.CharField(max_length=255, blank=True, help_text="Comma-separated tags")

    # Meta
    author = models.CharField(max_length=100, default="MSC Certifications")
    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.DRAFT,
        db_index=True
    )

    # SEO
    meta_title = models.CharField(max_length=70, blank=True, help_text="SEO title (max 70 chars)")
    meta_description = models.CharField(max_length=160, blank=True, help_text="SEO description (max 160 chars)")

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published_at = models.DateTimeField(null=True, blank=True)

    # Stats
    view_count = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name = 'Blog Post'
        verbose_name_plural = 'Blog Posts'
        ordering = ['-published_at', '-created_at']
        indexes = [
            models.Index(fields=['status', 'published_at']),
            models.Index(fields=['slug']),
        ]

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        # Auto-generate slug from title
        if not self.slug:
            self.slug = slugify(self.title)

        # Set published_at when status changes to published
        if self.status == self.Status.PUBLISHED and not self.published_at:
            self.published_at = timezone.now()

        super().save(*args, **kwargs)

    @property
    def is_published(self):
        return self.status == self.Status.PUBLISHED

    def get_tags_list(self):
        """Return tags as a list"""
        if self.tags:
            return [tag.strip() for tag in self.tags.split(',') if tag.strip()]
        return []
