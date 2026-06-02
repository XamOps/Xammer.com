import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import './styles/global.css';

const ComingSoon = ({ title }) => (
  <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
    <div style={{ fontSize: '3rem' }}>🚀</div>
    <h1 style={{ color: 'var(--text-primary)', fontSize: '1.5rem' }}>{title}</h1>
    <p style={{ color: 'var(--text-muted)' }}>This page is coming soon.</p>
  </main>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<ComingSoon title="About Xammer" />} />
          <Route path="/contact" element={<ComingSoon title="Contact Us" />} />
          <Route path="/services/*" element={<ComingSoon title="Services" />} />
          <Route path="/events" element={<ComingSoon title="Events & Insights" />} />
          <Route path="/events/*" element={<ComingSoon title="Event" />} />
          <Route path="/case-studies/*" element={<ComingSoon title="Case Studies" />} />
          <Route path="/blog" element={<ComingSoon title="Blog" />} />
          <Route path="/careers" element={<ComingSoon title="Careers" />} />
          <Route path="/partners" element={<ComingSoon title="Partners" />} />
          <Route path="/privacy-policy" element={<ComingSoon title="Privacy Policy" />} />
          <Route path="/terms" element={<ComingSoon title="Terms of Service" />} />
          <Route path="/sitemap" element={<ComingSoon title="Sitemap" />} />
          <Route path="*" element={<ComingSoon title="Page Not Found" />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
