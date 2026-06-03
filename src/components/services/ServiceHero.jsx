import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../common/AnimatedCounter';
import './ServiceHero.css';

const ServiceHero = ({
  badge,
  title,
  highlight,
  subtitle,
  ctaPrimary = { text: 'Get Free Audit', to: '/contact' },
  ctaSecondary = { text: 'Talk to Expert', to: '/contact' },
  stats = [],
  accent = 'violet',
  bgClass = '',
}) => (
  <section className={`sp-hero sp-hero--${accent} ${bgClass}`}>
    <div className="sp-hero__grid-overlay" aria-hidden="true" />
    <div className="sp-hero__radial" aria-hidden="true" />
    <div className="container sp-hero__inner">
      <div className="sp-hero__content">
        {badge && (
          <div className={`sp-hero__badge badge badge-${accent}`}>
            <span className="sp-hero__dot" />
            {badge}
          </div>
        )}
        <h1 className="sp-hero__title">
          {title}{' '}
          {highlight && <span className={`sp-hero__highlight sp-hero__highlight--${accent}`}>{highlight}</span>}
        </h1>
        <p className="sp-hero__subtitle">{subtitle}</p>
        <div className="sp-hero__actions">
          <Link to={ctaPrimary.to} className="btn-primary">
            {ctaPrimary.text} <ArrowRight size={16} />
          </Link>
          <Link to={ctaSecondary.to} className="btn-secondary">
            {ctaSecondary.text}
          </Link>
        </div>
        <div className="sp-hero__contact">
          <span><Mail size={13} /> operations@xammer.in</span>
          <span className="sp-hero__contact-divider" />
          <span><Phone size={13} /> +91 98713 38979</span>
        </div>
      </div>

      {stats.length > 0 && (
        <div className="sp-hero__stats">
          {stats.map((s, i) => (
            <div className="sp-hero__stat glass-card" key={i}>
              <div className={`sp-hero__stat-num sp-hero__stat-num--${s.color || accent}`}>
                {s.animated !== false ? (
                  <AnimatedCounter
                    to={s.value}
                    prefix={s.prefix || ''}
                    suffix={s.suffix || ''}
                    decimals={s.decimals || 0}
                    duration={1600 + i * 200}
                  />
                ) : s.display}
              </div>
              <div className="sp-hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  </section>
);

export default ServiceHero;
