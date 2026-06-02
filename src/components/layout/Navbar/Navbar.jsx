import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown, Cloud, Shield, Database,
  ArrowRight, Server, Globe
} from 'lucide-react';
import './Navbar.css';

const cloudProviders = [
  { label: 'Amazon Web Services (AWS)', icon: <Cloud size={15} />,  href: '/services/aws' },
  { label: 'Microsoft Azure',           icon: <Cloud size={15} />,  href: '/services/azure' },
  { label: 'Google Cloud Platform',     icon: <Cloud size={15} />,  href: '/services/google-cloud' },
  { label: 'Yotta Data Services',       icon: <Server size={15} />, href: '/services/yotta' },
];

const infraServices = [
  { label: 'Digital Transformation', icon: <Globe size={15} />,  href: '/services/digital-transformation' },
  { label: 'Cyber Security',         icon: <Shield size={15} />, href: '/services/cyber-security' },
];

const erpServices = [
  { label: 'Odoo ERP Implementation', icon: <Database size={15} />, href: '/services/odoo' },
];

const Navbar = () => {
  const [scrolled,        setScrolled]        = useState(false);
  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [mobileInfraOpen, setMobileInfraOpen] = useState(false);
  const location = useLocation();
  const navRef   = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMobileOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header ref={navRef}>
      <nav
        className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container navbar__inner">

          {/* ── Col 1: Logo (left) ──────────────────── */}
          <Link to="/" className="navbar__logo" aria-label="Xammer — Cloud Managed Services">
            <img
              src="/logo.svg"
              alt="Xammer"
              className="navbar__logo-img"
              height="38"
            />
          </Link>

          {/* ── Col 2: Nav links (center) ───────────── */}
          <nav className="navbar__nav">
            <Link
              to="/"
              className={`navbar__link${location.pathname === '/' ? ' navbar__link--active' : ''}`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`navbar__link${location.pathname === '/about' ? ' navbar__link--active' : ''}`}
            >
              About Us
            </Link>

            {/* Dropdown */}
            <div className="navbar__dropdown-wrap">
              <button
                className="navbar__dropdown-toggle"
                aria-haspopup="true"
                aria-expanded="false"
              >
                IT Infrastructure <ChevronDown size={14} />
              </button>

              <div className="navbar__dropdown" role="menu">
                <div className="navbar__dropdown-section">
                  <div className="navbar__dropdown-heading">Cloud Services</div>
                  {cloudProviders.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="navbar__dropdown-item"
                      role="menuitem"
                    >
                      {item.icon}{item.label}
                    </Link>
                  ))}
                </div>

                <div className="navbar__dropdown-section">
                  <div className="navbar__dropdown-heading">Solutions</div>
                  {infraServices.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="navbar__dropdown-item"
                      role="menuitem"
                    >
                      {item.icon}{item.label}
                    </Link>
                  ))}
                </div>

                <div className="navbar__dropdown-section">
                  <div className="navbar__dropdown-heading">Enterprise Resource Planning</div>
                  {erpServices.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="navbar__dropdown-item"
                      role="menuitem"
                    >
                      {item.icon}{item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className={`navbar__link${location.pathname === '/contact' ? ' navbar__link--active' : ''}`}
            >
              Contact Us
            </Link>
          </nav>

          {/* ── Col 3: CTA + Hamburger (right) ──────── */}
          <div className="navbar__right">
            <Link to="/contact" className="navbar__cta">
              Get Free Audit <ArrowRight size={14} />
            </Link>

            <button
              className={`navbar__hamburger${mobileOpen ? ' navbar__hamburger--open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* ── Mobile menu ─────────────────────────── */}
        <div
          className={`navbar__mobile-menu${mobileOpen ? ' navbar__mobile-menu--open' : ''}`}
          aria-hidden={!mobileOpen}
        >
          <Link to="/"       className="navbar__mobile-link">Home</Link>
          <Link to="/about"  className="navbar__mobile-link">About Us</Link>

          <button
            className="navbar__mobile-link"
            style={{
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
            onClick={() => setMobileInfraOpen(!mobileInfraOpen)}
          >
            IT Infrastructure
            <ChevronDown
              size={14}
              style={{
                transform: mobileInfraOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s',
              }}
            />
          </button>

          {mobileInfraOpen && (
            <>
              <div className="navbar__mobile-section-title">Cloud</div>
              {cloudProviders.map((item) => (
                <Link key={item.href} to={item.href} className="navbar__mobile-link" style={{ paddingLeft: 36 }}>
                  {item.label}
                </Link>
              ))}
              <div className="navbar__mobile-section-title">Solutions</div>
              {infraServices.map((item) => (
                <Link key={item.href} to={item.href} className="navbar__mobile-link" style={{ paddingLeft: 36 }}>
                  {item.label}
                </Link>
              ))}
              <div className="navbar__mobile-section-title">ERP</div>
              {erpServices.map((item) => (
                <Link key={item.href} to={item.href} className="navbar__mobile-link" style={{ paddingLeft: 36 }}>
                  {item.label}
                </Link>
              ))}
            </>
          )}

          <Link to="/contact" className="navbar__mobile-link">Contact Us</Link>

          <div style={{ padding: '12px 24px 0' }}>
            <Link
              to="/contact"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Get a Free Cloud Audit <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
