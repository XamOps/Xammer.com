import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServiceCTA.css';

const ServiceCTA = ({
  title,
  highlight,
  body,
  ctaText = 'Get My Free Audit →',
  ctaTo = '/contact',
  accent = 'violet',
  stats = [],
}) => (
  <section className={`sp-cta sp-cta--${accent}`}>
    <div className="sp-cta__orb sp-cta__orb--1" aria-hidden />
    <div className="sp-cta__orb sp-cta__orb--2" aria-hidden />
    <div className="container sp-cta__inner">
      <div className="sp-cta__content">
        {stats.length > 0 && (
          <div className="sp-cta__stats">
            {stats.map((s, i) => (
              <div className="sp-cta__stat" key={i}>
                <span className={`sp-cta__stat-val sp-cta__stat-val--${accent}`}>{s.value}</span>
                <span className="sp-cta__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        )}
        <h2 className="sp-cta__title">
          {title}{' '}
          {highlight && <span className={`sp-cta__highlight sp-cta__highlight--${accent}`}>{highlight}</span>}
        </h2>
        {body && <p className="sp-cta__body">{body}</p>}
        <div className="sp-cta__actions">
          <Link to={ctaTo} className="btn-primary">
            {ctaText} <ArrowRight size={16} />
          </Link>
        </div>
        <div className="sp-cta__contact">
          <a href="mailto:operations@xammer.com" className="sp-cta__link">
            <Mail size={14} /> operations@xammer.com
          </a>
          <span className="sp-cta__divider" />
          <a href="tel:+919871338979" className="sp-cta__link">
            <Phone size={14} /> +91 98713 38979
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceCTA;
