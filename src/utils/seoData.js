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
    'Xammer is a Delhi NCR-based IT consulting and managed services company (serving Delhi, Noida & Gurgaon) specializing in cloud automation, DevOps, digital transformation, and enterprise IT solutions.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Delhi',
    addressRegion: 'Delhi',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'City', name: 'Noida' },
    { '@type': 'City', name: 'Gurgaon' },
    { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
  ],
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
  title: 'Xammer — Cloud Managed Services & DevOps Company | Delhi NCR',
  description:
    'Cloud managed services company serving Delhi, Noida & Gurgaon (Delhi NCR). AWS, Azure, Google Cloud, DevOps automation, cyber security & digital transformation.',
  keywords:
    'cloud managed services Delhi NCR, cloud managed services Noida, cloud managed services Gurgaon, AWS consulting Delhi, DevOps automation company, digital transformation India, cloud cost optimisation, IT consulting Delhi, IT consulting Noida, IT consulting Gurgaon, Azure consulting India, Google Cloud partner',
  canonical: `${SITE_URL}/`,
  ogImage: OG_IMAGE,
};

/* ── About ("/about") ───────────────────────────────────────── */
export const ABOUT_SEO = {
  title: 'About Xammer | Cloud Managed Services Partner in Delhi NCR',
  description:
    "Xammer is a Delhi NCR-based cloud managed services company (Delhi, Noida, Gurgaon) with 5+ years' experience, 1,000+ projects & 180+ certified cloud engineers.",
  keywords:
    'about Xammer, cloud managed services company Delhi NCR, AWS consulting partner Delhi, AWS consulting partner Noida, IT consulting company Gurgaon, cloud MSP Delhi, cloud MSP Noida, Xammer about us',
  canonical: `${SITE_URL}/about`,
  ogImage: OG_IMAGE,
};

/* ── AWS ("/services/aws") ──────────────────────────────────── */
export const AWS_SEO = {
  title: 'AWS Managed Services in Delhi NCR | Cut Cloud Costs 80% | Xammer',
  description:
    'AWS Select Tier Partner serving Delhi, Noida & Gurgaon. We cut AWS costs 50–80%, automate cloud ops, and deliver 99.9% uptime SLA. Free AWS cost audit.',
  keywords:
    'AWS managed services Delhi NCR, AWS consulting partner Delhi, AWS consulting partner Noida, AWS managed services Gurgaon, cloud cost reduction AWS, AWS Systems Manager India, cloud migration AWS India, AWS Select Tier partner Delhi',
  canonical: `${SITE_URL}/services/aws`,
  ogImage: OG_IMAGE,
};

/* ── Azure ("/services/azure") ──────────────────────────────── */
export const AZURE_SEO = {
  title: 'Microsoft Azure Managed Services | Delhi NCR | Xammer',
  description:
    'Azure Expert MSP serving Delhi, Noida & Gurgaon. We architect, migrate, and manage Azure environments — cutting costs 35–55% with 24x7 managed operations.',
  keywords:
    'Microsoft Azure managed services Delhi NCR, Azure consulting partner Delhi, Azure consulting partner Noida, Azure Expert MSP Gurgaon, Azure cloud migration India, Azure cost optimisation, Azure Advanced MSP India',
  canonical: `${SITE_URL}/services/azure`,
  ogImage: OG_IMAGE,
};

/* ── Google Cloud ("/services/google-cloud") ────────────────── */
export const GCP_SEO = {
  title: 'Google Cloud Managed Services | Delhi NCR | Xammer',
  description:
    'Certified Google Cloud Partner serving Delhi, Noida & Gurgaon. GCP cloud transformation, BigQuery data warehousing, and cost optimisation. Free GCP assessment.',
  keywords:
    'Google Cloud managed services Delhi NCR, GCP partner Delhi, Google Cloud consulting Noida, Google Cloud consulting Gurgaon, BigQuery implementation India, GCP cost optimisation, Google Maps Platform partner',
  canonical: `${SITE_URL}/services/google-cloud`,
  ogImage: OG_IMAGE,
};

/* ── Oracle Cloud ("/services/oracle-cloud") ────────────────── */
export const ORACLE_SEO = {
  title: 'Oracle Cloud (OCI) Managed Services | Delhi NCR | Xammer',
  description:
    'Oracle Cloud OCI Premier Partner serving Delhi, Noida & Gurgaon. We manage Autonomous Database, OCI migrations & multi-cloud Oracle workloads. Free assessment.',
  keywords:
    'Oracle Cloud Delhi NCR, OCI managed services Delhi, OCI managed services Noida, Oracle Autonomous Database, OCI migration Gurgaon, Oracle Cloud Premier Partner, Oracle ERP cloud India',
  canonical: `${SITE_URL}/services/oracle-cloud`,
  ogImage: OG_IMAGE,
};

/* ── Cyber Security ("/services/cyber-security") ────────────── */
export const CYBER_SEO = {
  title: 'Cyber Security Managed Services | Delhi NCR | Xammer',
  description:
    'Cyber Security Managed Services for Delhi, Noida & Gurgaon — CSPM, zero-trust IAM, 24x7 threat detection, penetration testing & compliance. Free assessment.',
  keywords:
    'cyber security managed services Delhi NCR, cloud security services Delhi, managed security services provider Noida, zero-trust security Gurgaon, CSPM India, VAPT services India',
  canonical: `${SITE_URL}/services/cyber-security`,
  ogImage: OG_IMAGE,
};

/* ── DevOps ("/services/devops") ────────────────────────────── */
export const DEVOPS_SEO = {
  title: 'DevOps Automation Services | Delhi NCR | Xammer',
  description:
    'DevOps automation for Delhi, Noida & Gurgaon — CI/CD pipelines, Terraform IaC, Kubernetes, DevSecOps & observability. Deploy faster. Free DevOps assessment.',
  keywords:
    'DevOps services Delhi NCR, CI/CD pipeline Delhi, Kubernetes managed services Noida, DevSecOps Gurgaon, Terraform IaC India, DevOps automation Delhi, SRE services India',
  canonical: `${SITE_URL}/services/devops`,
  ogImage: OG_IMAGE,
};

/* ── Digital Transformation ("/services/digital-transformation") */
export const DIGITAL_SEO = {
  title: 'Digital Transformation Services | Delhi NCR | Xammer',
  description:
    'Trusted Digital Transformation partner for Delhi, Noida & Gurgaon enterprises. We modernise legacy systems, automate processes, and adopt AI, cloud & DevOps.',
  keywords:
    'digital transformation services Delhi NCR, digital transformation consulting Delhi, digital transformation Noida, legacy system modernisation Gurgaon, enterprise digital transformation, IT modernisation services India',
  canonical: `${SITE_URL}/services/digital-transformation`,
  ogImage: OG_IMAGE,
};

/* ── ERP ("/services/erp") ──────────────────────────────────── */
export const ERP_SEO = {
  title: 'ERP Implementation Services | Delhi NCR | Xammer',
  description:
    'End-to-end ERP implementation for Delhi, Noida & Gurgaon — selection, migration, integrations & 24x7 support for SAP, Odoo, NetSuite & Dynamics 365.',
  keywords:
    'ERP implementation services Delhi NCR, enterprise ERP consulting Delhi, ERP system implementation Noida, ERP cloud migration Gurgaon, SAP consulting India, cloud ERP managed services',
  canonical: `${SITE_URL}/services/erp`,
  ogImage: OG_IMAGE,
};

/* ── Odoo ("/services/odoo") ────────────────────────────────── */
export const ODOO_SEO = {
  title: 'Odoo ERP Implementation | Delhi NCR | Xammer',
  description:
    'Odoo ERP implementation for Delhi, Noida & Gurgaon with MeitY-compliant sovereign cloud hosting, GST compliance, e-invoicing & 24x7 support. Free demo.',
  keywords:
    'Odoo ERP implementation Delhi NCR, Odoo cloud deployment Delhi, Odoo implementation partner Noida, Odoo on cloud Gurgaon, Odoo customisation services, Odoo managed hosting India',
  canonical: `${SITE_URL}/services/odoo`,
  ogImage: OG_IMAGE,
};

/* ── XamCloud ("/products/xamcloud") ───────────────────────── */
export const XAMCLOUD_SEO = {
  title: 'XamCloud — Managed Multi-Cloud Platform | Delhi NCR | Xammer',
  description:
    'XamCloud manages AWS, Azure, GCP & OCI under one SLA — unified cost governance, security & 24x7 SRE operations for enterprises across Delhi, Noida & Gurgaon.',
  keywords:
    'managed multi-cloud Delhi NCR, multi-cloud management platform Delhi, AWS Azure GCP managed services Noida, cloud operations Gurgaon, FinOps multi-cloud, XamCloud product',
  canonical: `${SITE_URL}/products/xamcloud`,
  ogImage: OG_IMAGE,
};

/* ── XamOps ("/products/xamops") ────────────────────────────── */
export const XAMOPS_SEO = {
  title: 'Xamops — DevOps-as-a-Service Platform | Delhi NCR | Xammer',
  description:
    "Xamops is Xammer's fully managed DevOps-as-a-Service for Delhi NCR enterprises. CI/CD, Kubernetes, IaC, DevSecOps & 24x7 SRE. Free DevOps assessment.",
  keywords:
    'DevOps as a Service Delhi NCR, managed DevOps platform Delhi, CI/CD pipeline management Noida, Kubernetes managed service Gurgaon, SRE as a service India, XamOps product',
  canonical: `${SITE_URL}/products/xamops`,
  ogImage: OG_IMAGE,
};

/* ── Contact ("/contact") ───────────────────────────────────── */
export const CONTACT_SEO = {
  title: 'Contact Xammer | Free Cloud Audit | Delhi, Noida & Gurgaon',
  description:
    'Contact Xammer for a free AWS, Azure or GCP cost audit. Serving Delhi, Noida & Gurgaon (Delhi NCR). Email operations@xammer.com or call +91 87692 54249.',
  keywords:
    'contact Xammer, free cloud audit Delhi NCR, AWS consulting contact Delhi, AWS consulting contact Noida, cloud cost audit Gurgaon, cloud managed services enquiry, Xammer phone email',
  canonical: `${SITE_URL}/contact`,
  ogImage: OG_IMAGE,
};

/* ── Case Studies ("/case-studies") ─────────────────────────── */
export const CASE_STUDIES_SEO = {
  title: 'Case Studies | Cloud Transformation Success Stories | Xammer',
  description:
    'Client success stories from Delhi NCR and across India — 62% AWS cost reduction, RBI-compliant sovereign cloud migration, Odoo ERP rollout & more.',
  keywords:
    'Xammer case studies, cloud cost reduction Delhi NCR, AWS success story Delhi, cloud transformation Noida, ERP implementation case study Gurgaon, DevOps success story India',
  canonical: `${SITE_URL}/case-studies`,
  ogImage: OG_IMAGE,
};

/* ── Partners ("/partners") ─────────────────────────────────── */
export const PARTNERS_SEO = {
  title: 'Partner With Xammer | Cloud Reseller Programme | Delhi NCR',
  description:
    "Join Xammer's partner programme in Delhi, Noida & Gurgaon — referral partners, resellers & technology alliances. Revenue sharing and co-marketing support.",
  keywords:
    'Xammer partner programme, cloud reseller Delhi NCR, AWS partner referral Delhi, IT partner programme Noida, cloud partnership opportunities Gurgaon',
  canonical: `${SITE_URL}/partners`,
  ogImage: OG_IMAGE,
};

/* ── Careers ("/careers") ───────────────────────────────────── */
export const CAREERS_SEO = {
  title: 'Careers at Xammer | Cloud Engineering Jobs in Delhi NCR',
  description:
    "Join Xammer's cloud engineering team across Delhi, Noida & Gurgaon. Hiring AWS architects, DevOps engineers, cloud security experts & SREs. Remote-friendly.",
  keywords:
    'careers Xammer, cloud engineering jobs Delhi NCR, AWS architect job Delhi, DevOps engineer hiring Noida, cloud jobs Gurgaon, IT jobs Delhi NCR 2025',
  canonical: `${SITE_URL}/careers`,
  ogImage: OG_IMAGE,
};

/* ── Blog ("/blog") ─────────────────────────────────────────── */
export const BLOG_SEO = {
  title: 'Cloud Blog & Insights | AWS, Azure, DevOps, Security | Xammer',
  description:
    "In-depth articles on AWS cost optimisation, Azure migration, DevOps & cloud security from Xammer's Delhi NCR engineering team, for IT leaders across India.",
  keywords:
    'cloud blog Delhi NCR, AWS cost optimisation blog, Azure migration guide, DevOps best practices India, cloud security blog, Xammer engineering blog',
  canonical: `${SITE_URL}/blog`,
  ogImage: OG_IMAGE,
};

/* ── Events ("/events") ─────────────────────────────────────── */
export const EVENTS_SEO = {
  title: 'Events & Webinars | Cloud, DevOps & Security | Xammer',
  description:
    'Free webinars and workshops on AWS, Azure, GCP, DevOps, cybersecurity & Odoo ERP — live sessions for IT leaders in Delhi, Noida, Gurgaon & across India.',
  keywords:
    'cloud webinars Delhi NCR, AWS webinar Delhi, DevOps workshop Noida, cloud events Gurgaon, Xammer events, IT webinar India 2025',
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
