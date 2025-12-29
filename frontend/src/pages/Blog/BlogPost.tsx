import { FC, useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { routes, SupportedLanguage } from '../../config/routes';
import api from '../../services/api';
import './Blog.css';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

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
  slug_sq: string;
  slug_it: string;
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

interface RelatedPost {
  id: string;
  title: string;
  title_sq: string;
  title_it: string;
  slug: string;
  slug_sq: string;
  slug_it: string;
  excerpt: string;
  excerpt_sq: string;
  excerpt_it: string;
  featured_image_url: string | null;
  category: BlogCategory | null;
  published_at: string;
}

const BlogPost: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

  const [post, setPost] = useState<BlogPostData | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
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

        // Fetch related posts
        const relatedRes = await api.get('/blog/posts/', {
          params: { limit: 3 }
        });
        const allPosts = relatedRes.data.results || relatedRes.data || [];
        setRelatedPosts(allPosts.filter((p: RelatedPost) => p.slug !== slug).slice(0, 3));
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

  const getRelatedPostSlug = (relPost: RelatedPost): string => {
    if (currentLang === 'sq') return relPost.slug_sq || relPost.slug;
    if (currentLang === 'it') return relPost.slug_it || relPost.slug;
    return relPost.slug;
  };

  const getBlogPostUrl = (relPost: RelatedPost): string => {
    return routes.blogPost[currentLang].replace(':slug', getRelatedPostSlug(relPost));
  };

  // Calculate reading time
  const readingTime = useMemo(() => {
    if (!post) return 0;
    const content = getLocalizedText(post.content, post.content_sq, post.content_it);
    const text = content.replace(/<[^>]*>/g, '');
    const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
    return Math.max(1, Math.ceil(wordCount / 200));
  }, [post, currentLang]);

  // Extract table of contents from content (only h2 main headers)
  const tableOfContents = useMemo((): TocItem[] => {
    if (!post) return [];
    const content = getLocalizedText(post.content, post.content_sq, post.content_it);
    const headingRegex = /<h2[^>]*>([^<]+)<\/h2>/gi;
    const toc: TocItem[] = [];
    let match;
    let index = 0;

    while ((match = headingRegex.exec(content)) !== null) {
      const text = match[1].trim();
      const id = `heading-${index}`;
      toc.push({ id, text, level: 2 });
      index++;
    }

    return toc;
  }, [post, currentLang]);

  // Process content to add IDs to headings, insert featured image and CTA
  const processedContent = useMemo(() => {
    if (!post) return '';
    let content = getLocalizedText(post.content, post.content_sq, post.content_it);
    let index = 0;

    // Add IDs only to h2 headings for ToC navigation
    content = content.replace(/<h2([^>]*)>([^<]+)<\/h2>/gi, (match, attrs, text) => {
      const id = `heading-${index}`;
      index++;
      return `<h2 id="${id}"${attrs}>${text}</h2>`;
    });

    // Featured image box to insert after first section
    const featuredImageBox = post.featured_image_url ? `
      <figure class="blog-featured-figure">
        <img src="${post.featured_image_url}" alt="${post.featured_image_alt || title}" />
      </figure>
    ` : '';

    // Insert CTA box
    const ctaBox = `
      <div class="blog-cta-box">
        <h4>${currentLang === 'it' ? 'Hai bisogno di certificazione?' : currentLang === 'sq' ? 'Keni nevojë për certifikim?' : 'Need Certification?'}</h4>
        <p>${currentLang === 'it' ? 'Contattaci per una consulenza gratuita sui tuoi requisiti di certificazione.' : currentLang === 'sq' ? 'Na kontaktoni për një konsultë falas mbi kërkesat tuaja të certifikimit.' : 'Contact us for a free consultation on your certification requirements.'}</p>
        <a href="${routes.contact[currentLang]}" class="blog-cta-btn">${currentLang === 'it' ? 'Richiedi Preventivo' : currentLang === 'sq' ? 'Kërko Ofertë' : 'Get a Quote'}</a>
      </div>
    `;

    // Count total h2s first
    const h2Matches = content.match(/<h2/gi);
    const totalH2s = h2Matches ? h2Matches.length : 0;

    // Insert featured image after first h2 section, and CTA before last h2
    if (totalH2s > 1) {
      let h2Count = 0;
      content = content.replace(/<h2/gi, (match) => {
        h2Count++;
        if (h2Count === 2 && featuredImageBox) {
          // Insert featured image before second h2 (after intro section)
          return featuredImageBox + match;
        }
        if (h2Count === totalH2s) {
          // Insert CTA before last h2 (conclusion)
          return ctaBox + match;
        }
        return match;
      });
    } else if (featuredImageBox) {
      // If only one or no h2, append image at the end
      content += featuredImageBox;
    }

    return content;
  }, [post, currentLang]);

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
  const categoryName = post.category
    ? getLocalizedText(post.category.name, post.category.name_sq, post.category.name_it)
    : null;

  const readingTimeLabel = currentLang === 'it' ? 'min di lettura' : currentLang === 'sq' ? 'min lexim' : 'min read';
  const tocTitle = currentLang === 'it' ? 'Indice' : currentLang === 'sq' ? 'Përmbajtja' : 'Table of Contents';
  const relatedTitle = currentLang === 'it' ? 'Articoli Correlati' : currentLang === 'sq' ? 'Artikuj të Ngjashëm' : 'Related Articles';

  return (
    <div className="blog-page blog-post-page">
      <Helmet>
        <title>{post.meta_title || title} | MSC Certifications</title>
        <meta name="description" content={post.meta_description || getLocalizedText(post.excerpt, post.excerpt_sq, post.excerpt_it)} />
      </Helmet>

      {/* Post Header */}
      <header
        className="blog-post-header"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(1, 67, 79, 0.92) 0%, rgba(8, 87, 102, 0.92) 100%), url('/images/iso-certifications.jpg')`
        }}
      >
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
            <span className="blog-post-reading-time">⏱ {readingTime} {readingTimeLabel}</span>
          </div>
        </div>
      </header>

      {/* Post Content with Sidebar */}
      <article className="blog-post-content">
        <div className="container">
          <div className={`blog-post-layout ${tableOfContents.length > 2 ? 'has-toc' : ''}`}>
            {/* Main Content */}
            <div className="blog-post-main">
              <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: processedContent }} />

              {/* Tags */}
              {post.tags_list.length > 0 && (
                <div className="blog-post-tags">
                  <span className="tags-label">{t('blog.tags')}:</span>
                  {post.tags_list.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>

            {/* Table of Contents Sidebar - Right Side */}
            {tableOfContents.length > 2 && (
              <aside className="blog-toc">
                <h4>{tocTitle}</h4>
                <nav>
                  <ul>
                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`}>{item.text}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            )}
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="blog-related">
              <h3>{relatedTitle}</h3>
              <div className="blog-related-grid">
                {relatedPosts.map((relPost) => (
                  <Link key={relPost.id} to={getBlogPostUrl(relPost)} className="blog-related-card">
                    <div className="blog-related-image">
                      {relPost.featured_image_url ? (
                        <img src={relPost.featured_image_url} alt={getLocalizedText(relPost.title, relPost.title_sq, relPost.title_it)} />
                      ) : (
                        <div className="blog-card-placeholder">
                          <img src="/logo.svg" alt="MSC" className="blog-card-logo" />
                        </div>
                      )}
                    </div>
                    <h4>{getLocalizedText(relPost.title, relPost.title_sq, relPost.title_it)}</h4>
                  </Link>
                ))}
              </div>
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
