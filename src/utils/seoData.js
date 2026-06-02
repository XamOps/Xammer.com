export const SITE_URL = 'https://xammer.in';
export const SITE_NAME = 'Xammer';
export const SITE_TAGLINE = 'Cloud Managed Services & IT Consulting in India';

export const DEFAULT_SEO = {
  title: 'Xammer — Cloud Managed Services, DevOps & Digital Transformation | Delhi, India',
  description:
    'Xammer is a premier IT consulting and managed services company based in Delhi, India. We specialize in AWS, Azure, Google Cloud, DevOps automation, cyber security, and digital transformation for enterprises across India.',
  keywords:
    'cloud managed services India, AWS consulting Delhi, DevOps automation company, digital transformation services India, cloud cost optimization, IT consulting Delhi, managed cloud services, Azure consulting India, Google Cloud partner, DevOps services India',
  ogImage: `${SITE_URL}/images/og-default.jpg`,
  canonical: SITE_URL,
};

export const HOME_SEO = {
  ...DEFAULT_SEO,
  canonical: SITE_URL,
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Xammer',
  legalName: 'Xammer IT Solutions Pvt Ltd',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  foundingDate: '2014',
  description:
    'Xammer is a Delhi-based IT consulting and managed services company specializing in cloud automation, DevOps, digital transformation, and enterprise IT solutions.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Delhi',
    addressRegion: 'Delhi',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-87692-54249',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  email: 'operations@xammer.in',
  sameAs: [
    'https://www.linkedin.com/company/xammer',
    'https://twitter.com/xammer_in',
    'https://www.facebook.com/xammer.in',
  ],
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 180,
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_SEO.description,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export const serviceSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cloud Managed Services India',
    provider: { '@type': 'Organization', name: 'Xammer' },
    serviceType: 'Cloud Infrastructure Management',
    description:
      'End-to-end cloud managed services including AWS, Azure, and Google Cloud management, cost optimization, 24/7 monitoring, and SLA-backed uptime for enterprises in India.',
    areaServed: 'IN',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'DevOps Automation Services',
    provider: { '@type': 'Organization', name: 'Xammer' },
    serviceType: 'DevOps & CI/CD Automation',
    description:
      'Enterprise-grade DevOps automation, CI/CD pipeline design, Kubernetes orchestration, and infrastructure-as-code services that cut deployment cycles by up to 70%.',
    areaServed: 'IN',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Digital Transformation Consulting',
    provider: { '@type': 'Organization', name: 'Xammer' },
    serviceType: 'Digital Transformation',
    description:
      'Comprehensive digital transformation roadmaps for legacy modernization, cloud migration, process automation, and data-driven decision making for Indian enterprises.',
    areaServed: 'IN',
  },
];
