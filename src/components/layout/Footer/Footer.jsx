import { Link } from 'react-router-dom';
import {
  Phone, Mail, MapPin, ArrowRight, Send
} from 'lucide-react';
import { LinkedinIcon, TwitterIcon, InstagramIcon } from '../../common/SocialIcons';
import './Footer.css';

const serviceLinks = [
  { label: 'AWS Managed Services', href: '/services/aws' },
  { label: 'Microsoft Azure', href: '/services/azure' },
  { label: 'Google Cloud Platform', href: '/services/google-cloud' },
  { label: 'DevOps Automation', href: '/services/devops' },
  { label: 'Digital Transformation', href: '/services/digital-transformation' },
  { label: 'Cyber Security', href: '/services/cyber-security' },
  { label: 'Odoo ERP', href: '/services/odoo' },
];

const landingPageLinks = [
  { label: 'Authorized Microsoft Azure Partner in Bangalore', href: '/authorized-microsoft-azure-partner-in-bangalore' },
  { label: 'Microsoft Azure Consulting Services in Gurgaon', href: '/microsoft-azure-cloud-cost-optimization-services-in-gurgaon' },
  { label: 'Authorized Oracle Cloud Partner in Gurgaon', href: '/authorized-oracle-cloud-partner-in-gurgaon' },
  { label: 'Oracle Cloud Cost Optimization Services in Delhi', href: '/oracle-cloud-cost-optimization-services-in-delhi' },
  { label: 'AWS Cloud Cost Optimization Services in Noida', href: '/aws-cloud-cost-optimization-services-in-noida' },
  { label: 'Authorized Oracle Cloud Partner in Noida', href: '/authorized-oracle-cloud-partner-in-noida' },
  { label: 'Oracle Cloud Cost Optimization Services in Noida', href: '/oracle-cloud-cost-optimization-services-in-noida' },
  { label: 'Microsoft Azure Partner in Noida', href: '/microsoft-azure-partner-in-noida' },
  { label: 'Azure Cost Optimization Services in Noida', href: '/azure-cost-optimization-services-in-noida' },
  { label: 'Certified Google Cloud Partner in Noida', href: '/certified-google-cloud-partner-in-noida' },
  { label: 'Google Cloud Cost Optimization Services in Ahmedabad', href: '/google-cloud-cost-optimization-services-in-ahmedabad' },
  { label: 'Google Cloud Managed Services Provider in Bangalore', href: '/google-cloud-managed-services-provider-in-bangalore' },
  { label: 'Google Cloud Transformation Services in Gurgaon', href: '/google-cloud-transformation-services-in-gurgaon' },
  { label: 'Authorized Google Partners in India', href: '/authorized-google-partners-in-india' },
];

const companyLinks = [
  { label: 'About Xammer', href: '/about' },
  { label: 'Our Team', href: '/about#team' },
  { label: 'Careers', href: '/careers' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Events & Webinars', href: '/events' },
  { label: 'Blog & Insights', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Partner With Us', href: '/partners' },
];

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer" role="contentinfo" aria-label="Xammer footer">
      <div className="container">
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="Xammer Home">
              <img
                src="/logo.svg"
                alt="Xammer"
                className="footer__logo-img"
              />
            </Link>
            <p className="footer__brand-desc">
              Xammer is India's trusted cloud managed services and IT consulting company.
              Based in Delhi, we help enterprises across India cut cloud costs, automate
              deployments, and transform their IT infrastructure — backed by a contractual
              99.9% uptime SLA and a 30–40% cost reduction guarantee.
            </p>
            <div className="footer__socials">
              <a href="https://x.com/XammerUni" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="X (Twitter)">
                <TwitterIcon size={15} />
              </a>
              <a href="https://www.linkedin.com/company/xammer/" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="LinkedIn">
                <LinkedinIcon size={15} />
              </a>
              <a href="https://www.instagram.com/xammeruni" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Instagram">
                <InstagramIcon size={15} />
              </a>
            </div>
            <div className="footer__contact-list">
              <a href="tel:+918769254249" className="footer__contact-item">
                <Phone size={14} />
                +91 87692 54249
              </a>
              <a href="mailto:operations@xammer.com" className="footer__contact-item">
                <Mail size={14} />
                operations@xammer.com
              </a>
              <div className="footer__contact-item">
                <MapPin size={14} />
                Awfis 8 Square Zen, Sec-142, Noida (UP) 201304
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="footer__col">
            <div className="footer__col-title">Services</div>
            <div className="footer__links">
              {serviceLinks.map((l) => (
                <Link to={l.href} className="footer__link" key={l.href}>
                  <ArrowRight size={12} className="footer__link-arrow" />
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="footer__col">
            <div className="footer__col-title">Company</div>
            <div className="footer__links">
              {companyLinks.map((l) => (
                <Link to={l.href} className="footer__link" key={l.href}>
                  <ArrowRight size={12} className="footer__link-arrow" />
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer__col">
            <div className="footer__col-title">Cloud Insights Newsletter</div>
            <div className="footer__newsletter-title">
              Stay ahead of the cloud.
            </div>
            <div className="footer__newsletter-desc">
              Monthly deep-dives on AWS cost optimisation, DevOps best practices, and
              cloud security — read by 4,000+ IT leaders across India.
            </div>
            <form className="footer__newsletter-form" onSubmit={handleNewsletterSubmit} aria-label="Newsletter signup">
              <input
                type="email"
                className="footer__newsletter-input"
                placeholder="your@email.com"
                aria-label="Email address for newsletter"
                required
              />
              <button type="submit" className="footer__newsletter-btn">
                Subscribe <Send size={13} />
              </button>
            </form>

            <div style={{ marginTop: 20 }}>
              <div className="footer__col-title">Quick Contact</div>
              <div style={{ marginTop: 8 }}>
                <Link to="/contact" className="btn-primary" style={{ fontSize: '0.84rem', padding: '10px 20px', width: '100%', justifyContent: 'center', display: 'inline-flex' }}>
                  Get Free Cloud Audit <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* City & Cost Optimization Landing Pages */}
        <div className="footer__base">
          
          <nav className="footer__base-links" aria-label="City and cost optimization landing pages">
            {landingPageLinks.map((l, i) => (
              <span key={l.href} className="footer__base-item">
                <Link to={l.href} className="footer__base-link">{l.label}</Link>
                {i < landingPageLinks.length - 1 && <span className="footer__base-sep" aria-hidden="true">|</span>}
              </span>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            © {new Date().getFullYear()} Xammer. All rights reserved. |{' '}
            <span>Proudly built in Delhi, India 🇮🇳</span>
          </div>
          <div className="footer__legal">
            <Link to="/privacy-policy" className="footer__legal-link">Privacy Policy</Link>
            <Link to="/terms" className="footer__legal-link">Terms of Service</Link>
            <Link to="/sitemap" className="footer__legal-link">Sitemap</Link>
          </div>
          <div className="footer__gst">GST: 07XXXXX0000X1ZX</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
