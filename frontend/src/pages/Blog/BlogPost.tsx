import { FC, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { routes, SupportedLanguage } from '../../config/routes';
import api from '../../services/api';
import './Blog.css';

interface BlogCategory {
  id: string;
  name: string;
  name_sq: string;
  name_it: string;
  slug: string;
}

interface BlogPostData {
  id: string;
  title: string;
  title_sq: string;
  title_it: string;
  slug: string;
  excerpt: string;
  excerpt_sq: string;
  excerpt_it: string;
  content: string;
  content_sq: string;
  content_it: string;
  featured_image_url: string | null;
  featured_image_alt: string;
  category: BlogCategory | null;
  tags_list: string[];
  author: string;
  meta_title: string;
  meta_description: string;
  published_at: string;
  updated_at: string;
  view_count: number;
}

const BlogPost: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setError('Post not found');
        setLoading(false);
        return;
      }

      try {
        const response = await api.get(`/blog/posts/${slug}/`);
        setPost(response.data);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Post not found');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const getLocalizedText = (en: string, sq: string, it: string): string => {
    if (currentLang === 'sq') return sq || en;
    if (currentLang === 'it') return it || en;
    return en;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLang === 'sq' ? 'sq-AL' : currentLang === 'it' ? 'it-IT' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="blog-page">
        <div className="container">
          <div className="blog-loading">
            <div className="spinner"></div>
            <p>{t('common.loading')}</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="blog-page">
        <div className="container">
          <div className="blog-error">
            <h2>{t('blog.postNotFound')}</h2>
            <p>{t('blog.postNotFoundDescription')}</p>
            <Link to={routes.blog[currentLang]} className="btn btn-primary">
              {t('blog.backToBlog')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const title = getLocalizedText(post.title, post.title_sq, post.title_it);
  const content = getLocalizedText(post.content, post.content_sq, post.content_it);
  const categoryName = post.category
    ? getLocalizedText(post.category.name, post.category.name_sq, post.category.name_it)
    : null;

  return (
    <div className="blog-page blog-post-page">
      <Helmet>
        <title>{post.meta_title || title} | MSC Certifications</title>
        <meta name="description" content={post.meta_description || getLocalizedText(post.excerpt, post.excerpt_sq, post.excerpt_it)} />
      </Helmet>

      {/* Post Header */}
      <header className="blog-post-header">
        <div className="container">
          <div className="blog-post-breadcrumb">
            <Link to={routes.blog[currentLang]}>{t('blog.title')}</Link>
            <span>/</span>
            {categoryName && <span>{categoryName}</span>}
          </div>
          <h1>{title}</h1>
          <div className="blog-post-meta">
            <span className="blog-post-author">{post.author}</span>
            <span className="blog-post-date">{formatDate(post.published_at)}</span>
            <span className="blog-post-views">{post.view_count} {t('blog.views')}</span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {post.featured_image_url && (
        <div className="blog-post-image">
          <div className="container">
            <img src={post.featured_image_url} alt={post.featured_image_alt || title} />
          </div>
        </div>
      )}

      {/* Post Content */}
      <article className="blog-post-content">
        <div className="container">
          <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: content }} />

          {/* Tags */}
          {post.tags_list.length > 0 && (
            <div className="blog-post-tags">
              <span className="tags-label">{t('blog.tags')}:</span>
              {post.tags_list.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          )}

          {/* Back to Blog */}
          <div className="blog-post-footer">
            <Link to={routes.blog[currentLang]} className="btn btn-secondary">
              {t('blog.backToBlog')}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
