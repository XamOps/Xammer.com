import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';

/* -- Home -------------------------------------------- */
import HomePage from './pages/Home/HomePage';

/* -- Service Pages ------------------------------------ */
import AWSPage                   from './pages/Services/AWSPage';
import AzurePage                 from './pages/Services/AzurePage';
import GoogleCloudPage           from './pages/Services/GoogleCloudPage';
import CyberSecurityPage         from './pages/Services/CyberSecurityPage';
import DigitalTransformationPage from './pages/Services/DigitalTransformationPage';
import OdooPage                  from './pages/Services/OdooPage';
import ERPPage                   from './pages/Services/ERPPage';
import DevOpsPage                from './pages/Services/DevOpsPage';
import OracleCloudPage           from './pages/Services/OracleCloudPage';

/* -- Product Pages ------------------------------------ */
import XamopsPage                from './pages/Products/XamopsPage';
import XamCloudPage              from './pages/Products/XamCloudPage';

/* -- Company Pages ------------------------------------ */
import AboutPage                 from './pages/About/AboutPage';
import ContactPage               from './pages/Contact/ContactPage';
import CareersPage               from './pages/Careers/CareersPage';
import CaseStudiesPage           from './pages/CaseStudies/CaseStudiesPage';
import EventsPage                from './pages/Events/EventsPage';
import BlogPage                  from './pages/Blog/BlogPage';
import PartnersPage              from './pages/Partners/PartnersPage';

/* -- Legal -------------------------------------------- */
import PrivacyPolicyPage         from './pages/Legal/PrivacyPolicyPage';
import TermsPage                 from './pages/Legal/TermsPage';
import SitemapPage               from './pages/Sitemap/SitemapPage';

import WhatsAppButton from './components/common/WhatsAppButton';
import './styles/global.css';

const NotFound = () => (
  <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16, textAlign: 'center', padding: '0 24px' }}>
    <div style={{ fontSize: '4rem' }}>404</div>
    <h1 style={{ color: 'var(--text-primary)', fontSize: '1.5rem' }}>Page Not Found</h1>
    <p style={{ color: 'var(--text-muted)' }}>The page you're looking for doesn't exist.</p>
    <a href="/" style={{ color: 'var(--blue)', marginTop: 8 }}>← Back to Home</a>
  </main>
);

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Home */}
          <Route path="/"                              element={<HomePage />} />

          {/* Cloud service pages */}
          <Route path="/services/aws"                  element={<AWSPage />} />
          <Route path="/services/azure"                element={<AzurePage />} />
          <Route path="/services/google-cloud"         element={<GoogleCloudPage />} />
          <Route path="/services/oracle-cloud"         element={<OracleCloudPage />} />
          <Route path="/services/cyber-security"       element={<CyberSecurityPage />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformationPage />} />
          <Route path="/services/odoo"                 element={<OdooPage />} />
          <Route path="/services/erp"                  element={<ERPPage />} />
          <Route path="/services/devops"               element={<DevOpsPage />} />

          {/* Product pages */}
          <Route path="/products/xamops"               element={<XamopsPage />} />
          <Route path="/products/xamcloud"             element={<XamCloudPage />} />

          {/* Company pages */}
          <Route path="/about"                         element={<AboutPage />} />
          <Route path="/contact"                       element={<ContactPage />} />
          <Route path="/careers"                       element={<CareersPage />} />
          <Route path="/case-studies"                  element={<CaseStudiesPage />} />
          <Route path="/case-studies/*"                element={<CaseStudiesPage />} />
          <Route path="/events"                        element={<EventsPage />} />
          <Route path="/events/*"                      element={<EventsPage />} />
          <Route path="/blog"                          element={<BlogPage />} />
          <Route path="/partners"                      element={<PartnersPage />} />

          {/* Legal */}
          <Route path="/privacy-policy"                element={<PrivacyPolicyPage />} />
          <Route path="/terms"                         element={<TermsPage />} />
          <Route path="/sitemap"                       element={<SitemapPage />} />

          {/* 404 */}
          <Route path="*"                              element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
