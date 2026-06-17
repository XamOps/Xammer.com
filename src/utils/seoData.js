/* ─────────────────────────────────────────────────────────────
   seoData.js — Centralised SEO meta for every page
   Format mirrors the agreed meta-tag template:
     title · description (150-160 chars) · keywords · canonical
     ogImage · robots (default: index,follow)
   ───────────────────────────────────────────────────────────── */

export const SITE_URL  = 'https://xammer.com';
export const SITE_NAME = 'Xammer';
export const OG_IMAGE  = `${SITE_URL}/images/og-default.jpg`;

/* ── Shared organisation schema ─────────────────────────────── */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Xammer',
  legalName: 'Xammer IT Solutions Pvt Ltd',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  foundingDate: '2019',
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
  email: 'operations@xammer.com',
  sameAs: [
    'https://x.com/XammerUni',
    'https://www.linkedin.com/company/xammer/',
    'https://www.instagram.com/xammeruni',
  ],
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 180 },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
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
      'End-to-end cloud managed services including AWS, Azure, and Google Cloud management, cost optimisation, 24/7 monitoring, and SLA-backed uptime for enterprises in India.',
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
      'Comprehensive digital transformation roadmaps for legacy modernisation, cloud migration, process automation, and data-driven decision making for Indian enterprises.',
    areaServed: 'IN',
  },
];

/* ══════════════════════════════════════════════════════════════
   PAGE-LEVEL SEO DATA
   ══════════════════════════════════════════════════════════════ */

/* ── Home ("/") ─────────────────────────────────────────────── */
export const HOME_SEO = {
  title: 'Xammer — Cloud Managed Services, DevOps & Digital Transformation | Delhi, India',
  description:
    'Xammer is a premier cloud managed services company in Delhi. We specialise in AWS, Azure, Google Cloud, DevOps automation, cyber security, and digital transformation for Indian enterprises.',
  keywords:
    'cloud managed services India, AWS consulting Delhi, DevOps automation company, digital transformation India, cloud cost optimisation, IT consulting Delhi, Azure consulting India, Google Cloud partner',
  canonical: `${SITE_URL}/`,
  ogImage: OG_IMAGE,
};

/* ── About ("/about") ───────────────────────────────────────── */
export const ABOUT_SEO = {
  title: "About Xammer | India's Trusted Cloud Managed Services Partner",
  description:
    "Xammer is a Delhi-based cloud managed services company with 5+ years experience, 1,000+ projects, and 180+ certified cloud engineers. AWS Select Tier, Azure Expert MSP, Google Cloud Partner.",
  keywords:
    'about Xammer, cloud managed services company India, AWS consulting partner Delhi, IT consulting company India, cloud MSP Delhi, Xammer about us',
  canonical: `${SITE_URL}/about`,
  ogImage: OG_IMAGE,
};

/* ── AWS ("/services/aws") ──────────────────────────────────── */
export const AWS_SEO = {
  title: 'AWS Managed Services India | Cut Cloud Costs by 80% | Xammer',
  description:
    'Xammer is an AWS Select Tier Consulting Partner in India. We reduce AWS costs by 50–80%, automate cloud operations, and deliver 99.9% uptime SLA. Free AWS cost audit.',
  keywords:
    'AWS managed services India, AWS consulting partner India, cloud cost reduction AWS, AWS Systems Manager India, cloud migration AWS India, AWS Select Tier partner Delhi',
  canonical: `${SITE_URL}/services/aws`,
  ogImage: OG_IMAGE,
};

/* ── Azure ("/services/azure") ──────────────────────────────── */
export const AZURE_SEO = {
  title: 'Microsoft Azure Managed Services India | Azure Expert MSP | Xammer',
  description:
    'Xammer is a Microsoft Azure Expert MSP in India. We architect, migrate, and manage Azure environments — reducing costs by 35–55% and delivering 24x7 managed operations.',
  keywords:
    'Microsoft Azure managed services India, Azure consulting partner India, Azure Expert MSP Delhi, Azure cloud migration India, Azure cost optimisation, Azure Advanced MSP India',
  canonical: `${SITE_URL}/services/azure`,
  ogImage: OG_IMAGE,
};

/* ── Google Cloud ("/services/google-cloud") ────────────────── */
export const GCP_SEO = {
  title: 'Google Cloud Managed Services India | Certified GCP Partner | Xammer',
  description:
    'Xammer is a certified Google Cloud Partner in India. We deliver GCP cloud transformation, BigQuery data warehousing, Google Maps Platform, and cost optimisation. Free GCP assessment.',
  keywords:
    'Google Cloud managed services India, GCP partner India, Google Cloud consulting Delhi, BigQuery implementation India, GCP cost optimisation, Google Maps Platform partner',
  canonical: `${SITE_URL}/services/google-cloud`,
  ogImage: OG_IMAGE,
};

/* ── Oracle Cloud ("/services/oracle-cloud") ────────────────── */
export const ORACLE_SEO = {
  title: 'Oracle Cloud (OCI) Managed Services India | Premier Partner | Xammer',
  description:
    'Xammer is an Oracle Cloud OCI Premier Partner in India. We manage Autonomous Database, OCI migrations, and multi-cloud Oracle workloads. Free OCI assessment available.',
  keywords:
    'Oracle Cloud India, OCI managed services, Oracle Autonomous Database, OCI migration India, Oracle Cloud Premier Partner, Oracle ERP cloud India',
  canonical: `${SITE_URL}/services/oracle-cloud`,
  ogImage: OG_IMAGE,
};

/* ── Cyber Security ("/services/cyber-security") ────────────── */
export const CYBER_SEO = {
  title: 'Cyber Security Managed Services India | Proactive Cloud Security | Xammer',
  description:
    'Xammer delivers Cyber Security Managed Services in India — CSPM, zero-trust IAM, 24x7 threat detection, penetration testing, and compliance automation. Free security assessment.',
  keywords:
    'cyber security managed services India, cloud security services India, managed security services provider Delhi, zero-trust security India, CSPM India, VAPT services India',
  canonical: `${SITE_URL}/services/cyber-security`,
  ogImage: OG_IMAGE,
};

/* ── DevOps ("/services/devops") ────────────────────────────── */
export const DEVOPS_SEO = {
  title: 'DevOps Automation Services India | CI/CD, Kubernetes, IaC | Xammer',
  description:
    'Xammer delivers DevOps automation in India — CI/CD pipelines, Terraform IaC, Kubernetes, DevSecOps, and observability. Deploy faster with fewer failures. Free DevOps assessment.',
  keywords:
    'DevOps services India, CI/CD pipeline India, Kubernetes managed services, DevSecOps India, Terraform IaC India, DevOps automation Delhi, SRE services India',
  canonical: `${SITE_URL}/services/devops`,
  ogImage: OG_IMAGE,
};

/* ── Digital Transformation ("/services/digital-transformation") */
export const DIGITAL_SEO = {
  title: 'Digital Transformation Services India | Cloud-Native Modernisation | Xammer',
  description:
    'Xammer is India\'s trusted Digital Transformation partner. We modernise legacy systems, automate processes, and adopt AI, cloud, and DevOps for competitive enterprise advantage.',
  keywords:
    'digital transformation services India, cloud digital transformation consulting Delhi, legacy system modernisation India, enterprise digital transformation, IT modernisation services India',
  canonical: `${SITE_URL}/services/digital-transformation`,
  ogImage: OG_IMAGE,
};

/* ── ERP ("/services/erp") ──────────────────────────────────── */
export const ERP_SEO = {
  title: 'ERP Implementation Services India | SAP, Odoo, Dynamics 365 | Xammer',
  description:
    'Xammer delivers end-to-end ERP Implementation in India — selection, implementation, data migration, integrations, and 24x7 support for SAP, Odoo, NetSuite, and Dynamics 365.',
  keywords:
    'ERP implementation services India, enterprise ERP consulting India, ERP system implementation Delhi, ERP cloud migration India, SAP consulting India, cloud ERP managed services',
  canonical: `${SITE_URL}/services/erp`,
  ogImage: OG_IMAGE,
};

/* ── Odoo ("/services/odoo") ────────────────────────────────── */
export const ODOO_SEO = {
  title: 'Odoo ERP Implementation India | MeitY-Compliant Cloud-Native | Xammer',
  description:
    'Xammer delivers Odoo ERP implementation in India with MeitY-compliant sovereign cloud hosting. Full Indian localisation, GST compliance, e-invoicing, and 24x7 support. Free Odoo demo.',
  keywords:
    'Odoo ERP implementation India, Odoo cloud deployment India, Odoo implementation partner Delhi, Odoo on cloud India, Odoo customisation services, Odoo managed hosting India',
  canonical: `${SITE_URL}/services/odoo`,
  ogImage: OG_IMAGE,
};

/* ── XamCloud ("/products/xamcloud") ───────────────────────── */
export const XAMCLOUD_SEO = {
  title: 'XamCloud — Managed Multi-Cloud Operations Platform | Xammer',
  description:
    'XamCloud manages AWS, Azure, GCP, and OCI under one SLA — unified cost governance, security, observability, and 24x7 SRE operations for Indian enterprises.',
  keywords:
    'managed multi-cloud India, multi-cloud management platform, AWS Azure GCP managed services, cloud operations India, FinOps multi-cloud, XamCloud product',
  canonical: `${SITE_URL}/products/xamcloud`,
  ogImage: OG_IMAGE,
};

/* ── XamOps ("/products/xamops") ────────────────────────────── */
export const XAMOPS_SEO = {
  title: 'Xamops — DevOps-as-a-Service Platform | Xammer',
  description:
    'Xamops is Xammer\'s fully managed DevOps-as-a-Service. We build and manage CI/CD pipelines, Kubernetes, IaC, DevSecOps, and 24x7 SRE operations. Free DevOps assessment.',
  keywords:
    'DevOps as a Service India, managed DevOps platform, CI/CD pipeline management, Kubernetes managed service, SRE as a service India, XamOps product',
  canonical: `${SITE_URL}/products/xamops`,
  ogImage: OG_IMAGE,
};

/* ── Contact ("/contact") ───────────────────────────────────── */
export const CONTACT_SEO = {
  title: 'Contact Xammer | Get a Free Cloud Audit | Delhi, India',
  description:
    'Contact Xammer for a free AWS, Azure, or Google Cloud cost audit. Based in Delhi, India. Reach us at operations@xammer.com or call +91 87692 54249.',
  keywords:
    'contact Xammer, free cloud audit India, AWS consulting contact Delhi, cloud cost audit, cloud managed services enquiry, Xammer phone email',
  canonical: `${SITE_URL}/contact`,
  ogImage: OG_IMAGE,
};

/* ── Case Studies ("/case-studies") ─────────────────────────── */
export const CASE_STUDIES_SEO = {
  title: 'Case Studies | Cloud Transformation Success Stories | Xammer',
  description:
    'Explore Xammer client success stories — 62% AWS cost reduction, RBI-compliant sovereign cloud migration, Odoo ERP rollout, and more across 1,000+ projects.',
  keywords:
    'Xammer case studies, cloud cost reduction India, AWS success story, cloud transformation India, ERP implementation case study, DevOps success story India',
  canonical: `${SITE_URL}/case-studies`,
  ogImage: OG_IMAGE,
};

/* ── Partners ("/partners") ─────────────────────────────────── */
export const PARTNERS_SEO = {
  title: 'Partner With Xammer | Cloud Reseller & Referral Programme India',
  description:
    'Join Xammer\'s partner programme — referral partners, resellers, technology vendors, and strategic alliances. Revenue sharing, co-marketing, and dedicated partner support.',
  keywords:
    'Xammer partner programme, cloud reseller India, AWS partner referral India, IT partner programme Delhi, cloud partnership opportunities India',
  canonical: `${SITE_URL}/partners`,
  ogImage: OG_IMAGE,
};

/* ── Careers ("/careers") ───────────────────────────────────── */
export const CAREERS_SEO = {
  title: 'Careers at Xammer | Cloud Engineering Jobs in Delhi, India',
  description:
    'Join Xammer\'s cloud engineering team in Delhi. We\'re hiring AWS architects, DevOps engineers, cloud security experts, and SREs. Funded certifications, remote-friendly.',
  keywords:
    'careers Xammer, cloud engineering jobs Delhi, AWS architect job India, DevOps engineer hiring, cloud jobs India, IT jobs Delhi 2025',
  canonical: `${SITE_URL}/careers`,
  ogImage: OG_IMAGE,
};

/* ── Blog ("/blog") ─────────────────────────────────────────── */
export const BLOG_SEO = {
  title: 'Cloud Blog & Insights | AWS, Azure, DevOps, Security | Xammer',
  description:
    'In-depth articles on AWS cost optimisation, Azure migration, DevOps best practices, cloud security, and digital transformation from Xammer\'s engineering team.',
  keywords:
    'cloud blog India, AWS cost optimisation blog, Azure migration guide, DevOps best practices India, cloud security blog, Xammer engineering blog',
  canonical: `${SITE_URL}/blog`,
  ogImage: OG_IMAGE,
};

/* ── Events ("/events") ─────────────────────────────────────── */
export const EVENTS_SEO = {
  title: 'Events & Webinars | Cloud, DevOps & Security | Xammer',
  description:
    'Join Xammer\'s free webinars and workshops on AWS, Azure, Google Cloud, DevOps, cybersecurity, and Odoo ERP. Live sessions for Indian IT leaders and enterprises.',
  keywords:
    'cloud webinars India, AWS webinar India, DevOps workshop Delhi, cloud events India, Xammer events, IT webinar India 2025',
  canonical: `${SITE_URL}/events`,
  ogImage: OG_IMAGE,
};

/* ── Privacy Policy ("/privacy-policy") ────────────────────── */
export const PRIVACY_SEO = {
  title: 'Privacy Policy | Xammer IT Solutions',
  description:
    'Read Xammer\'s Privacy Policy — how we collect, store, use, and protect your personal data in compliance with India\'s Digital Personal Data Protection Act (DPDPA) 2023.',
  keywords:
    'Xammer privacy policy, data protection policy, DPDPA compliance, personal data policy, IT services privacy India',
  canonical: `${SITE_URL}/privacy-policy`,
  ogImage: OG_IMAGE,
  noIndex: false,
};

/* ── Terms of Service ("/terms") ────────────────────────────── */
export const TERMS_SEO = {
  title: 'Terms of Service | Xammer IT Solutions',
  description:
    'Read Xammer\'s Terms of Service governing the use of our website and cloud managed services. Applicable to all clients and visitors of xammer.com.',
  keywords:
    'Xammer terms of service, website terms, cloud services agreement, IT services terms India, Xammer legal',
  canonical: `${SITE_URL}/terms`,
  ogImage: OG_IMAGE,
  noIndex: false,
};

/* ── Sitemap ("/sitemap") ───────────────────────────────────── */
export const SITEMAP_SEO = {
  title: 'Sitemap | All Pages — Xammer IT Solutions',
  description:
    'Full sitemap of Xammer\'s website. Browse all service pages, product pages, blog articles, and resources for cloud managed services, DevOps, ERP, and more.',
  keywords:
    'Xammer sitemap, all pages Xammer, cloud services sitemap, website navigation',
  canonical: `${SITE_URL}/sitemap`,
  ogImage: OG_IMAGE,
  noIndex: false,
};
