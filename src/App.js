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
import CaseStudyDetailPage       from './pages/CaseStudies/CaseStudyDetail/CaseStudyDetailPage';
import EventsPage                from './pages/Events/EventsPage';
import BlogPage                  from './pages/Blog/BlogPage';
import AWSCostOptimizationNoidaPage from './pages/Blog/AWSCostOptimizationNoidaPage';
import OracleCloudPartnerNoidaPage from './pages/Blog/OracleCloudPartnerNoidaPage';
import OracleCloudCostOptimizationNoidaPage from './pages/Blog/OracleCloudCostOptimizationNoidaPage';
import AzureCostOptimizationNoidaPage from './pages/Blog/AzureCostOptimizationNoidaPage';
import MicrosoftAzurePartnerNoidaPage from './pages/Blog/MicrosoftAzurePartnerNoidaPage';
import MicrosoftAzurePartnerBangalorePage from './pages/Blog/MicrosoftAzurePartnerBangalorePage';
import OracleCloudPartnerGurgaonPage from './pages/Blog/OracleCloudPartnerGurgaonPage';
import AzureCostOptimizationGurgaonPage from './pages/Blog/AzureCostOptimizationGurgaonPage';
import OracleCloudCostOptimizationDelhiPage from './pages/Blog/OracleCloudCostOptimizationDelhiPage';
import GoogleCloudPartnerNoidaPage from './pages/Blog/GoogleCloudPartnerNoidaPage';
import GoogleCloudCostOptimizationAhmedabadPage from './pages/Blog/GoogleCloudCostOptimizationAhmedabadPage';
import GoogleCloudManagedServicesBangalorePage from './pages/Blog/GoogleCloudManagedServicesBangalorePage';
import GoogleCloudTransformationGurgaonPage from './pages/Blog/GoogleCloudTransformationGurgaonPage';
import AuthorizedGooglePartnersIndiaPage from './pages/Blog/AuthorizedGooglePartnersIndiaPage';
import PartnersPage              from './pages/Partners/PartnersPage';

/* -- Legal -------------------------------------------- */
import PrivacyPolicyPage         from './pages/Legal/PrivacyPolicyPage';
import TermsPage                 from './pages/Legal/TermsPage';
import SitemapPage               from './pages/Sitemap/SitemapPage';

import WhatsAppButton from './components/common/WhatsAppButton';
// import ContactPopup from './components/common/ContactPopup';
import ScrollToTop from './components/common/ScrollToTop';
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
        <ScrollToTop />
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
          <Route path="/case-studies/:slug"            element={<CaseStudyDetailPage />} />
          <Route path="/case-studies/*"                element={<CaseStudiesPage />} />
          <Route path="/events"                        element={<EventsPage />} />
          <Route path="/events/*"                      element={<EventsPage />} />
          <Route path="/blog"                          element={<BlogPage />} />
          <Route path="/aws-cloud-cost-optimization-services-in-noida" element={<AWSCostOptimizationNoidaPage />} />
          <Route path="/authorized-oracle-cloud-partner-in-noida" element={<OracleCloudPartnerNoidaPage />} />
          <Route path="/oracle-cloud-cost-optimization-services-in-noida" element={<OracleCloudCostOptimizationNoidaPage />} />
          <Route path="/azure-cost-optimization-services-in-noida" element={<AzureCostOptimizationNoidaPage />} />
          <Route path="/microsoft-azure-partner-in-noida" element={<MicrosoftAzurePartnerNoidaPage />} />
          <Route path="/authorized-microsoft-azure-partner-in-bangalore" element={<MicrosoftAzurePartnerBangalorePage />} />
          <Route path="/authorized-oracle-cloud-partner-in-gurgaon" element={<OracleCloudPartnerGurgaonPage />} />
          <Route path="/microsoft-azure-cloud-cost-optimization-services-in-gurgaon" element={<AzureCostOptimizationGurgaonPage />} />
          <Route path="/oracle-cloud-cost-optimization-services-in-delhi" element={<OracleCloudCostOptimizationDelhiPage />} />
          <Route path="/certified-google-cloud-partner-in-noida" element={<GoogleCloudPartnerNoidaPage />} />
          <Route path="/google-cloud-cost-optimization-services-in-ahmedabad" element={<GoogleCloudCostOptimizationAhmedabadPage />} />
          <Route path="/google-cloud-managed-services-provider-in-bangalore" element={<GoogleCloudManagedServicesBangalorePage />} />
          <Route path="/google-cloud-transformation-services-in-gurgaon" element={<GoogleCloudTransformationGurgaonPage />} />
          <Route path="/authorized-google-partners-in-india" element={<AuthorizedGooglePartnersIndiaPage />} />
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
        {/* <ContactPopup /> */}
      </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
