import { useRef, useEffect, useState } from 'react';
import './ServiceSolutions.css';

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ServiceSolutions = ({ label, title, subtitle, categories = [], accent = 'violet' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className={`sp-solutions section${visible ? ' sp-solutions--visible' : ''}`}
      ref={ref}
    >
      <div className="container">
        <div className="sp-solutions__header">
          {label && <div className="section-label">{label}</div>}
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle" style={{ margin: '0 auto 24px' }}>{subtitle}</p>}
          <div className="divider" />
        </div>
        <div className="sp-solutions__grid">
          {categories.map((cat, i) => (
            <div
              className={`sp-solutions__card glass-card sp-solutions__card--${accent}`}
              key={i}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="sp-solutions__card-header">
                <div className={`sp-solutions__cat-icon sp-solutions__cat-icon--${cat.color || accent}`}>
                  {cat.icon}
                </div>
                <h3 className="sp-solutions__cat-title">{cat.title}</h3>
              </div>
              {cat.desc && <p className="sp-solutions__cat-desc">{cat.desc}</p>}
              {cat.items && cat.items.length > 0 && (
                <ul className="sp-solutions__items">
                  {cat.items.map((item, j) => (
                    <li key={j} className="sp-solutions__item">
                      <span className={`sp-solutions__check sp-solutions__check--${cat.color || accent}`}>
                        <CheckIcon />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSolutions;
