import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

interface BlogPost {
  id: string;
  title: string;
  title_sq: string;
  title_it: string;
  slug: string;
  excerpt: string;
  excerpt_sq: string;
  excerpt_it: string;
  featured_image_url: string | null;
  featured_image_alt: string;
  category: BlogCategory | null;
  tags_list: string[];
  author: string;
  published_at: string;
  view_count: number;
}

const Blog: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, categoriesRes] = await Promise.all([
          api.get('/blog/posts/'),
          api.get('/blog/categories/')
        ]);

        setPosts(postsRes.data.results || postsRes.data || []);
        setCategories(categoriesRes.data.results || categoriesRes.data || []);
      } catch (err) {
        console.error('Error fetching blog data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getLocalizedText = (en: string, sq: string, it: string): string => {
    if (currentLang === 'sq') return sq || en;
    if (currentLang === 'it') return it || en;
    return en;
  };

  const getCategoryName = (category: BlogCategory): string => {
    return getLocalizedText(category.name, category.name_sq, category.name_it);
  };

  const getPostTitle = (post: BlogPost): string => {
    return getLocalizedText(post.title, post.title_sq, post.title_it);
  };

  const getPostExcerpt = (post: BlogPost): string => {
    return getLocalizedText(post.excerpt, post.excerpt_sq, post.excerpt_it);
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLang === 'sq' ? 'sq-AL' : currentLang === 'it' ? 'it-IT' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getBlogPostUrl = (slug: string): string => {
    return routes.blogPost[currentLang].replace(':slug', slug);
  };

  const filteredPosts = selectedCategory
    ? posts.filter(post => post.category?.slug === selectedCategory)
    : posts;

  return (
    <div className="blog-page">
      <Helmet>
        <title>{t('blog.title')} | MSC Certifications</title>
        <meta name="description" content={t('blog.subtitle')} />
      </Helmet>

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1>{t('blog.title')}</h1>
          <p className="blog-subtitle">{t('blog.subtitle')}</p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">
        <div className="container">
          {/* Categories Filter */}
          {categories.length > 0 && (
            <div className="blog-categories">
              <button
                className={`category-btn ${!selectedCategory ? 'active' : ''}`}
                onClick={() => setSelectedCategory(null)}
              >
                {t('blog.allPosts')}
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.slug ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.slug)}
                >
                  {getCategoryName(category)}
                </button>
              ))}
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="blog-loading">
              <div className="spinner"></div>
              <p>{t('common.loading')}</p>
            </div>
          )}

          {/* Posts Grid */}
          {!loading && filteredPosts.length > 0 && (
            <div className="blog-grid">
              {filteredPosts.map(post => (
                <article key={post.id} className="blog-card">
                  <Link to={getBlogPostUrl(post.slug)} className="blog-card-image">
                    {post.featured_image_url ? (
                      <img src={post.featured_image_url} alt={post.featured_image_alt || getPostTitle(post)} />
                    ) : (
                      <div className="blog-card-placeholder">
                        <img src="/logo.svg" alt="MSC Certifications" className="blog-card-logo" />
                      </div>
                    )}
                  </Link>
                  <div className="blog-card-content">
                    {post.category && (
                      <span className="blog-card-category">{getCategoryName(post.category)}</span>
                    )}
                    <h2 className="blog-card-title">
                      <Link to={getBlogPostUrl(post.slug)}>{getPostTitle(post)}</Link>
                    </h2>
                    <p className="blog-card-excerpt">{getPostExcerpt(post)}</p>
                    <div className="blog-card-meta">
                      <span className="blog-card-date">{formatDate(post.published_at)}</span>
                      <span className="blog-card-author">{post.author}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* No Posts */}
          {!loading && filteredPosts.length === 0 && (
            <div className="blog-empty">
              <h3>{t('blog.noPosts')}</h3>
              <p>{t('blog.noPostsDescription')}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
