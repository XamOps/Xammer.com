import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
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
      { label: 'Yotta Sovereign Cloud Services', href: '/services/yotta' },
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
    <SEO title="Sitemap | Xammer" description="Full sitemap of Xammer's website — all pages, services, and resources." />
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
