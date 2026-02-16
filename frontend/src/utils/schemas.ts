const SITE_URL = 'https://msc-cert.com';
const ORG_NAME = 'MSC Certifications';
const ORG_LOGO = `${SITE_URL}/logo.png`;
const ORG_EMAIL = 'info@msc-cert.com';
const ORG_PHONE = '+355672063632';
const ORG_ADDRESS = {
  '@type': 'PostalAddress' as const,
  streetAddress: 'Ismail Qemali Street',
  addressLocality: 'Tirana',
  addressCountry: 'AL',
};

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORG_NAME,
    url: SITE_URL,
    logo: ORG_LOGO,
    email: ORG_EMAIL,
    telephone: ORG_PHONE,
    address: ORG_ADDRESS,
    sameAs: [
      'https://www.instagram.com/msc_certifications',
      'https://www.linkedin.com/company/msc-certifications/',
    ],
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: ORG_NAME,
    url: SITE_URL,
    logo: ORG_LOGO,
    image: ORG_LOGO,
    email: ORG_EMAIL,
    telephone: ORG_PHONE,
    address: ORG_ADDRESS,
    openingHours: 'Mo-Fr 09:00-17:00',
    priceRange: '$$',
    sameAs: [
      'https://www.instagram.com/msc_certifications',
      'https://www.linkedin.com/company/msc-certifications/',
    ],
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: {
      '@type': 'Organization',
      name: ORG_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Place',
      name: 'International',
    },
    serviceType: 'Certification',
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(questions: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  url: string;
  image?: string | null;
  author: string;
  publishedAt: string;
  updatedAt: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}${post.url}`,
    image: post.image || ORG_LOGO,
    author: {
      '@type': 'Organization',
      name: post.author || ORG_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      logo: { '@type': 'ImageObject', url: ORG_LOGO },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
  };
}

export function webPageSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${SITE_URL}${path}`,
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      url: SITE_URL,
    },
  };
}

export function itemListSchema(name: string, path: string, items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    url: `${SITE_URL}${path}`,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: `${SITE_URL}${item.url}`,
    })),
  };
}
