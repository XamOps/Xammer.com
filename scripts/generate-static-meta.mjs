/*
 * Post-build step: bakes unique <title>/meta/canonical/OG tags into a real
 * static index.html per route, so raw HTML (view-source, non-JS crawlers,
 * social link-unfurling bots) sees correct per-page metadata instead of the
 * Home page's tags for every URL. react-helmet-async still overrides these
 * client-side after JS loads; this just makes the pre-JS payload correct too.
 *
 * Apache serves each folder's index.html directly for its matching path, so
 * no server-side routing is required for these known routes.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const buildDir = path.join(projectRoot, 'build');

// seoData.js is plain ES module syntax (no JSX/CSS imports), so it can be
// imported directly in Node once given an .mjs extension.
const seoDataSrc = path.join(projectRoot, 'src/utils/seoData.js');
const seoDataTmp = path.join(__dirname, '.seoData.generated.mjs');
fs.copyFileSync(seoDataSrc, seoDataTmp);
const seo = await import(pathToFileURL(seoDataTmp).href);
fs.unlinkSync(seoDataTmp);

const routes = [
  { urlPath: '/', data: seo.HOME_SEO },
  { urlPath: '/services/aws', data: seo.AWS_SEO },
  { urlPath: '/services/azure', data: seo.AZURE_SEO },
  { urlPath: '/services/google-cloud', data: seo.GCP_SEO },
  { urlPath: '/services/oracle-cloud', data: seo.ORACLE_SEO },
  { urlPath: '/services/cyber-security', data: seo.CYBER_SEO },
  { urlPath: '/services/digital-transformation', data: seo.DIGITAL_SEO },
  { urlPath: '/services/odoo', data: seo.ODOO_SEO },
  { urlPath: '/services/erp', data: seo.ERP_SEO },
  { urlPath: '/services/devops', data: seo.DEVOPS_SEO },
  { urlPath: '/products/xamops', data: seo.XAMOPS_SEO },
  { urlPath: '/products/xamcloud', data: seo.XAMCLOUD_SEO },
  { urlPath: '/about', data: seo.ABOUT_SEO },
  { urlPath: '/contact', data: seo.CONTACT_SEO },
  { urlPath: '/careers', data: seo.CAREERS_SEO },
  { urlPath: '/case-studies', data: seo.CASE_STUDIES_SEO },
  { urlPath: '/events', data: seo.EVENTS_SEO },
  { urlPath: '/blog', data: seo.BLOG_SEO },
  { urlPath: '/partners', data: seo.PARTNERS_SEO },
  { urlPath: '/privacy-policy', data: seo.PRIVACY_SEO },
  { urlPath: '/terms', data: seo.TERMS_SEO },
  { urlPath: '/sitemap', data: seo.SITEMAP_SEO },
  {
    urlPath: '/aws-cloud-cost-optimization-services-in-noida',
    data: {
      title: 'AWS Cloud Cost Optimization Services in Noida | Save 30%-40%',
      description:
        "Xammer offers certified AWS cloud cost optimization services in Noida, infrastructure optimization, and up to 40% AWS cost reduction, and 100% technical support",
      keywords:
        'AWS Cloud Cost Optimization Services in Noida, AWS cloud cost management services Noida, AWS Partner in Noida, Top Aws Consultants in Noida',
      canonical: 'https://xammer.com/aws-cloud-cost-optimization-services-in-noida',
      ogImage: 'https://xammer.com/images/hero-img.jpg',
    },
  },
  {
    urlPath: '/authorized-oracle-cloud-partner-in-noida',
    data: {
      title: 'Authorized Oracle Cloud Partner in Noida | Xammer',
      description:
        'Xammer is an Authorized Oracle Cloud Partner in Noida offering 100% technical support, 180+ certified engineers, and secure, scalable OCI solutions for enterprises.',
      keywords:
        'Authorized Oracle Cloud Partner in Noida, Oracle Cloud Consultants in Noida, Oracle Cloud Infrastructure Partner in Noida, OCI Consulting Service Provider in Noida, Top OCI Consultants in Noida',
      canonical: 'https://xammer.com/authorized-oracle-cloud-partner-in-noida',
      ogImage: 'https://xammer.com/images/hero-img.jpg',
    },
  },
  {
    urlPath: '/oracle-cloud-cost-optimization-services-in-noida',
    data: {
      title: 'Oracle Cloud Cost Optimization Services in Noida | Xammer',
      description:
        'Xammer delivers Oracle Cloud Cost Optimization Services in Noida, helping businesses save 30%-40% on cloud costs with 100% expert technical support.',
      keywords:
        'Oracle Cloud Cost Optimization Services in Noida, Oracle Cloud Cost Management Services in Noida, Oracle Cloud Managed Services in Noida, Oracle Cloud Infrastructure Services in Noida, Oracle Cloud Migration Services in Noida',
      canonical: 'https://xammer.com/oracle-cloud-cost-optimization-services-in-noida',
      ogImage: 'https://xammer.com/images/event-img3.jpeg',
    },
  },
  {
    urlPath: '/azure-cost-optimization-services-in-noida',
    data: {
      title: 'Azure Cost Optimization Services in Noida | Xammer',
      description:
        'Xammer delivers Azure Cost Optimization Services in Noida, reducing Microsoft Azure cloud costs by 30%-40% with 100% expert technical support.',
      keywords:
        'Azure Cost Optimization Services in Noida, Azure Managed Services Provider in Noida, Trusted Azure Consultants in Noida, Microsoft Azure Consulting Services in Noida, Azure Cloud Infrastructure Services in Delhi',
      canonical: 'https://xammer.com/azure-cost-optimization-services-in-noida',
      ogImage: 'https://xammer.com/images/event-img2.jpeg',
    },
  },
  {
    urlPath: '/microsoft-azure-partner-in-noida',
    data: {
      title: 'Microsoft Azure Partner in Noida | Xammer',
      description:
        'Xammer is a trusted Microsoft Azure Partner in Noida offering 100% technical support, 180+ certified engineers, and enterprise-grade Azure cloud solutions.',
      keywords:
        'Microsoft Azure Partner in Noida, Top Azure Partner in Noida, Top Azure Consultants in Noida, Azure Migration Services in Noida, Microsoft Azure Solutions Partner in Noida',
      canonical: 'https://xammer.com/microsoft-azure-partner-in-noida',
      ogImage: 'https://xammer.com/images/event-img1.jpeg',
    },
  },
];

const escapeHtml = (str) =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const template = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');

const applyMeta = (html, data) => {
  const title = escapeHtml(data.title);
  const description = escapeHtml(data.description);
  const canonical = data.canonical;

  html = html.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`);
  html = html.replace(/<meta name="title" content=".*?">/s, `<meta name="title" content="${title}">`);
  html = html.replace(/<meta name="description" content=".*?">/s, `<meta name="description" content="${description}">`);
  if (data.keywords) {
    html = html.replace(/<meta name="keywords" content=".*?">/s, `<meta name="keywords" content="${escapeHtml(data.keywords)}">`);
  }
  html = html.replace(/<link rel="canonical" href=".*?">/s, `<link rel="canonical" href="${canonical}">`);
  html = html.replace(/<meta property="og:title" content=".*?">/s, `<meta property="og:title" content="${title}">`);
  html = html.replace(/<meta property="og:description" content=".*?">/s, `<meta property="og:description" content="${description}">`);
  html = html.replace(/<meta property="og:url" content=".*?">/s, `<meta property="og:url" content="${canonical}">`);
  if (data.ogImage) {
    html = html.replace(/<meta property="og:image" content=".*?">/s, `<meta property="og:image" content="${data.ogImage}">`);
    html = html.replace(/<meta name="twitter:image" content=".*?">/s, `<meta name="twitter:image" content="${data.ogImage}">`);
  }
  html = html.replace(/<meta name="twitter:title" content=".*?">/s, `<meta name="twitter:title" content="${title}">`);
  html = html.replace(/<meta name="twitter:description" content=".*?">/s, `<meta name="twitter:description" content="${description}">`);
  return html;
};

let written = 0;
for (const { urlPath, data } of routes) {
  if (!data) {
    console.warn(`No SEO data for ${urlPath}, skipping`);
    continue;
  }
  const html = applyMeta(template, data);
  const outDir = urlPath === '/' ? buildDir : path.join(buildDir, urlPath.replace(/^\//, ''));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  written += 1;
}

console.log(`generate-static-meta: wrote ${written} route-specific index.html files.`);
