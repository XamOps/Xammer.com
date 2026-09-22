import SEO from '../../components/common/SEO';
import { PRIVACY_SEO } from '../../utils/seoData';
import PageHero from '../../components/common/PageHero';
import './LegalPage.css';

const sections = [
  { title: '1. Information We Collect', body: `We collect information you provide directly to us, including name, email address, phone number, company name, and any messages you send via our contact forms or newsletter signup. We also automatically collect certain technical information when you visit our website, such as your IP address, browser type, operating system, referring URLs, and pages visited, through standard server logs and analytics tools.` },
  { title: '2. How We Use Your Information', body: `We use the information we collect to respond to your enquiries and provide the services you request; to send you newsletters and marketing communications where you have opted in; to improve our website and services; to comply with legal obligations; and to protect against fraudulent or unauthorised activity. We do not sell, rent, or trade your personal information to third parties.` },
  { title: '3. Data Storage and Security', body: `Your data is stored on secure servers located in India. We implement industry-standard security measures including encryption at rest and in transit, access controls, and regular security audits. While we take reasonable steps to protect your information, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.` },
  { title: '4. Cookies', body: `Our website uses cookies to enhance your browsing experience, analyse site traffic, and understand where our visitors come from. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, some parts of our website may not function properly without cookies. We use Google Analytics for website usage analysis.` },
  { title: '5. Data Retention', body: `We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Contact form submissions are retained for up to 3 years. Newsletter subscriber data is retained until you unsubscribe.` },
  { title: '6. Your Rights (DPDPA 2023)', body: `Under India's Digital Personal Data Protection Act 2023, you have the right to access your personal data; request correction of inaccurate data; request erasure of your data in certain circumstances; withdraw consent to processing; and file a complaint with the Data Protection Board of India. To exercise any of these rights, contact us at privacy@xammer.in.` },
  { title: '7. Third-Party Services', body: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites. We use Google Analytics (analytics), HubSpot (CRM and email marketing), and cloud infrastructure providers for website hosting. Each of these providers has their own privacy policies.` },
  { title: '8. Changes to This Policy', body: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website or sending you an email. Your continued use of our website after changes are posted constitutes your acceptance of the updated policy.` },
  { title: '9. Contact Us', body: `If you have questions about this Privacy Policy or our data practices, please contact us at:\n\nXammer IT Solutions Pvt Ltd\nEmail: privacy@xammer.in\nPhone: +91 87692 54249\nAddress: Awfis 8 Square Zen, Sec-142, Noida (UP) 201304` },
];

const PrivacyPolicyPage = () => (
  <>
    <SEO
      title={PRIVACY_SEO.title}
      description={PRIVACY_SEO.description}
      keywords={PRIVACY_SEO.keywords}
      canonical={PRIVACY_SEO.canonical}
      ogImage={PRIVACY_SEO.ogImage}
    />
    <main>
      <PageHero badge="Last Updated: June 2025" title="Privacy" highlight="Policy" accent="blue" />
      <section className="legal section">
        <div className="container">
          <div className="legal__wrap glass-card">
            <p className="legal__intro">This Privacy Policy describes how Xammer IT Solutions Pvt Ltd ("Xammer", "we", "us", or "our") collects, uses, and shares information about you when you use our website (xammer.in) and interact with our services.</p>
            {sections.map((s, i) => (
              <div className="legal__section" key={i}>
                <h2 className="legal__section-title">{s.title}</h2>
                <p className="legal__section-body" style={{ whiteSpace: 'pre-line' }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  </>
);

export default PrivacyPolicyPage;
