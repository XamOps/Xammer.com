import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { SITEMAP_SEO } from '../../utils/seoData';
import PageHero from '../../components/common/PageHero';
import './SitemapPage.css';

const siteMap = [
  {
    heading: 'Main Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Xammer', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Partner With Us', href: '/partners' },
    ],
  },
  {
    heading: 'Cloud Services',
    links: [
      { label: 'AWS Managed Services India', href: '/services/aws' },
      { label: 'Microsoft Azure Managed Services', href: '/services/azure' },
      { label: 'Google Cloud Platform Services', href: '/services/google-cloud' },
      { label: 'DevOps Automation Services', href: '/services/devops' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Cyber Security Managed Services', href: '/services/cyber-security' },
      { label: 'Digital Transformation Services', href: '/services/digital-transformation' },
    ],
  },
  {
    heading: 'ERP Services',
    links: [
      { label: 'Odoo ERP Implementation India', href: '/services/odoo' },
      { label: 'ERP Implementation Services', href: '/services/erp' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog & Insights', href: '/blog' },
      { label: 'Events & Webinars', href: '/events' },
    ],
  },
  {
    heading: 'Noida & Delhi NCR Pages',
    links: [
      { label: 'AWS Cloud Cost Optimization Services in Noida', href: '/aws-cloud-cost-optimization-services-in-noida' },
      { label: 'Authorized Oracle Cloud Partner in Noida', href: '/authorized-oracle-cloud-partner-in-noida' },
      { label: 'Oracle Cloud Cost Optimization Services in Noida', href: '/oracle-cloud-cost-optimization-services-in-noida' },
      { label: 'Microsoft Azure Partner in Noida', href: '/microsoft-azure-partner-in-noida' },
      { label: 'Azure Cost Optimization Services in Noida', href: '/azure-cost-optimization-services-in-noida' },
      { label: 'Oracle Cloud Cost Optimization Services in Delhi', href: '/oracle-cloud-cost-optimization-services-in-delhi' },
      { label: 'Certified Google Cloud Partner in Noida', href: '/certified-google-cloud-partner-in-noida' },
    ],
  },
  {
    heading: 'Bangalore & Gurgaon Pages',
    links: [
      { label: 'Authorized Microsoft Azure Partner in Bangalore', href: '/authorized-microsoft-azure-partner-in-bangalore' },
      { label: 'Authorized Oracle Cloud Partner in Gurgaon', href: '/authorized-oracle-cloud-partner-in-gurgaon' },
      { label: 'Microsoft Azure Cloud Cost Optimization Services in Gurgaon', href: '/microsoft-azure-cloud-cost-optimization-services-in-gurgaon' },
      { label: 'Google Cloud Managed Services Provider in Bangalore', href: '/google-cloud-managed-services-provider-in-bangalore' },
      { label: 'Google Cloud Transformation Services in Gurgaon', href: '/google-cloud-transformation-services-in-gurgaon' },
    ],
  },
  {
    heading: 'Ahmedabad Pages',
    links: [
      { label: 'Google Cloud Cost Optimization Services in Ahmedabad', href: '/google-cloud-cost-optimization-services-in-ahmedabad' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
];

const SitemapPage = () => (
  <>
    <SEO
      title={SITEMAP_SEO.title}
      description={SITEMAP_SEO.description}
      keywords={SITEMAP_SEO.keywords}
      canonical={SITEMAP_SEO.canonical}
      ogImage={SITEMAP_SEO.ogImage}
    />
    <main>
      <PageHero title="Sitemap" highlight="— All Pages" accent="teal" />
      <section className="sitemap section">
        <div className="container">
          <div className="sitemap__grid">
            {siteMap.map((group, i) => (
              <div className="sitemap__group glass-card" key={i}>
                <h2 className="sitemap__heading">{group.heading}</h2>
                <ul className="sitemap__list">
                  {group.links.map((l, j) => (
                    <li key={j}>
                      <Link to={l.href} className="sitemap__link">→ {l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  </>
);

export default SitemapPage;
