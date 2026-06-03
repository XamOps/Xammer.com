import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown, Cloud, Shield, Database,
  ArrowRight, Server, Globe, Zap, Sun, Moon,
} from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import './Navbar.css';

const cloudProviders = [
  { label: 'Amazon Web Services (AWS)', icon: <Cloud size={15} />,  href: '/services/aws' },
  { label: 'Microsoft Azure',           icon: <Cloud size={15} />,  href: '/services/azure' },
  { label: 'Google Cloud Platform',     icon: <Cloud size={15} />,  href: '/services/google-cloud' },
  { label: 'Yotta Data Services',       icon: <Server size={15} />, href: '/services/yotta' },
];

const infraServices = [
  { label: 'DevOps Automation',      icon: <Zap    size={15} />, href: '/services/devops' },
  { label: 'Digital Transformation', icon: <Globe  size={15} />, href: '/services/digital-transformation' },
  { label: 'Cyber Security',         icon: <Shield size={15} />, href: '/services/cyber-security' },
];

const erpServices = [
  { label: 'Odoo ERP Implementation',    icon: <Database size={15} />, href: '/services/odoo' },
  { label: 'ERP Implementation Services', icon: <Database size={15} />, href: '/services/erp' },
];

const Navbar = () => {
  const [scrolled,        setScrolled]        = useState(false);
  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [mobileInfraOpen, setMobileInfraOpen] = useState(false);
  const location = useLocation();
  const navRef   = useRef(null);
  const { theme, toggle: toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileInfraOpen(false);
  }, [location]);

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

          {/* Logo */}
          <Link to="/" className="navbar__logo" aria-label="Xammer — Cloud Managed Services">
            <img src="/logo.svg" alt="Xammer" className="navbar__logo-img" height="38" />
          </Link>

          {/* Desktop nav */}
          <nav className="navbar__nav">
            <Link to="/" className={`navbar__link${location.pathname === '/' ? ' navbar__link--active' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`navbar__link${location.pathname === '/about' ? ' navbar__link--active' : ''}`}>
              About Us
            </Link>

            {/* Dropdown */}
            <div className="navbar__dropdown-wrap">
              <button className="navbar__dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                IT Infrastructure <ChevronDown size={14} />
              </button>
              <div className="navbar__dropdown" role="menu">
                <div className="navbar__dropdown-section">
                  <div className="navbar__dropdown-heading">Cloud Services</div>
                  {cloudProviders.map((item) => (
                    <Link key={item.href} to={item.href} className="navbar__dropdown-item" role="menuitem">
                      {item.icon}{item.label}
                    </Link>
                  ))}
                </div>
                <div className="navbar__dropdown-section">
                  <div className="navbar__dropdown-heading">Solutions</div>
                  {infraServices.map((item) => (
                    <Link key={item.href} to={item.href} className="navbar__dropdown-item" role="menuitem">
                      {item.icon}{item.label}
                    </Link>
                  ))}
                </div>
                <div className="navbar__dropdown-section">
                  <div className="navbar__dropdown-heading">Enterprise Resource Planning</div>
                  {erpServices.map((item) => (
                    <Link key={item.href} to={item.href} className="navbar__dropdown-item" role="menuitem">
                      {item.icon}{item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/contact" className={`navbar__link${location.pathname === '/contact' ? ' navbar__link--active' : ''}`}>
              Contact Us
            </Link>
          </nav>

          {/* Right: CTA + theme toggle + hamburger */}
          <div className="navbar__right">
            <Link to="/contact" className="navbar__cta">
              Get Free Audit <ArrowRight size={14} />
            </Link>

            {/* Theme toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

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

        {/* Mobile menu */}
        <div
          className={`navbar__mobile-menu${mobileOpen ? ' navbar__mobile-menu--open' : ''}`}
          aria-hidden={!mobileOpen}
        >
          <Link to="/"      className="navbar__mobile-link">Home</Link>
          <Link to="/about" className="navbar__mobile-link">About Us</Link>

          <button
            className="navbar__mobile-link navbar__mobile-accord"
            onClick={() => setMobileInfraOpen(!mobileInfraOpen)}
          >
            IT Infrastructure
            <ChevronDown
              size={14}
              style={{ transform: mobileInfraOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
            />
          </button>

          <div className={`navbar__mobile-sub${mobileInfraOpen ? ' navbar__mobile-sub--open' : ''}`}>
            <div className="navbar__mobile-section-title">Cloud Services</div>
            {cloudProviders.map((item) => (
              <Link key={item.href} to={item.href} className="navbar__mobile-link navbar__mobile-link--sub">
                {item.icon}{item.label}
              </Link>
            ))}
            <div className="navbar__mobile-section-title">Solutions</div>
            {infraServices.map((item) => (
              <Link key={item.href} to={item.href} className="navbar__mobile-link navbar__mobile-link--sub">
                {item.icon}{item.label}
              </Link>
            ))}
            <div className="navbar__mobile-section-title">ERP</div>
            {erpServices.map((item) => (
              <Link key={item.href} to={item.href} className="navbar__mobile-link navbar__mobile-link--sub">
                {item.icon}{item.label}
              </Link>
            ))}
          </div>

          <Link to="/contact" className="navbar__mobile-link">Contact Us</Link>

          <div className="navbar__mobile-cta-wrap">
            <Link to="/contact" className="btn-primary navbar__mobile-cta">
              Get a Free Cloud Audit <ArrowRight size={14} />
            </Link>
            <button className="theme-toggle navbar__mobile-theme" onClick={toggleTheme}>
              {theme === 'dark'
                ? <><Sun size={15} /> Switch to Light Mode</>
                : <><Moon size={15} /> Switch to Dark Mode</>}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
