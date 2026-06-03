import SEO from '../../components/common/SEO';
import PageHero from '../../components/common/PageHero';
import './LegalPage.css';

const sections = [
  { title: '1. Acceptance of Terms', body: 'By accessing or using Xammer\'s website (xammer.in) or services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services. These terms apply to all visitors, users, and clients of Xammer IT Solutions Pvt Ltd.' },
  { title: '2. Services', body: 'Xammer provides cloud managed services, IT consulting, ERP implementation, cybersecurity, and digital transformation services to businesses in India and internationally. Specific service terms, SLAs, and deliverables are governed by individual service agreements (MSAs and SOWs) entered into between Xammer and each client.' },
  { title: '3. Intellectual Property', body: 'The content, design, graphics, and code on this website are the intellectual property of Xammer IT Solutions Pvt Ltd and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without express written permission. Client data and configurations remain the property of the respective client.' },
  { title: '4. Service Commitments and SLAs', body: 'Specific uptime SLAs, response times, and service commitments are defined in individual Managed Services Agreements (MSAs) with each client. The general 99.9% uptime and 15-minute P1 response claims on our marketing website are indicative targets achieved for clients on our standard managed services plans, and actual commitments are contractually defined per engagement.' },
  { title: '5. Limitation of Liability', body: 'To the maximum extent permitted by applicable law, Xammer shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services. Our total liability to any client shall not exceed the fees paid by that client in the 12 months preceding the claim.' },
  { title: '6. Confidentiality', body: 'Both parties agree to keep confidential all proprietary information, trade secrets, and business information disclosed during the course of engagement. This obligation survives the termination of any service agreement. Xammer implements strict access controls, NDA requirements, and data handling procedures to protect client confidentiality.' },
  { title: '7. Governing Law', body: 'These Terms of Service are governed by the laws of India. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Delhi, India. You agree to submit to the personal jurisdiction of the courts located in Delhi for the purpose of litigating any such dispute.' },
  { title: '8. Changes to Terms', body: 'We reserve the right to modify these Terms of Service at any time. We will post changes on this page with an updated date. Continued use of our website or services after changes are posted constitutes your acceptance of the modified terms.' },
  { title: '9. Contact', body: 'For questions about these Terms of Service, contact us at:\n\nXammer IT Solutions Pvt Ltd\nEmail: legal@xammer.in\nPhone: +91 87692 54249\nAddress: Delhi, India\nGST: 07XXXXX0000X1ZX' },
];

const TermsPage = () => (
  <>
    <SEO title="Terms of Service | Xammer" description="Xammer's Terms of Service — governing use of our website and cloud managed services." />
    <main>
      <PageHero badge="Last Updated: June 2025" title="Terms of" highlight="Service" accent="violet" />
      <section className="legal section">
        <div className="container">
          <div className="legal__wrap glass-card">
            <p className="legal__intro">These Terms of Service govern your use of Xammer IT Solutions Pvt Ltd's website and services. Please read them carefully before using our website or engaging our services.</p>
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

export default TermsPage;
