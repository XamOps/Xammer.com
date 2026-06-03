import { useRef, useEffect, useState } from 'react';
import './ServiceBenefits.css';

const ServiceBenefits = ({ label, title, subtitle, items = [], accent = 'violet' }) => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={`sp-benefits section${visible ? ' sp-benefits--visible' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="sp-benefits__header">
          {label && <div className="section-label">{label}</div>}
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
          <div className="divider" />
        </div>
        <div className="sp-benefits__grid">
          {items.map((item, i) => (
            <div
              className={`sp-benefits__card glass-card sp-benefits__card--${item.color || accent}`}
              key={i}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={`sp-benefits__icon sp-benefits__icon--${item.color || accent}`}>
                {item.icon}
              </div>
              <h3 className="sp-benefits__card-title">{item.title}</h3>
              <p className="sp-benefits__card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
