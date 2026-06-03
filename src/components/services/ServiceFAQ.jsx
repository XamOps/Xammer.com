import { useState } from 'react';
import './ServiceFAQ.css';

const ChevronIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ServiceFAQ = ({ label, title, items = [], accent = 'violet' }) => {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(prev => prev === i ? null : i);

  return (
    <section className="sp-faq section">
      <div className="container">
        <div className="sp-faq__header">
          {label && <div className="section-label">{label}</div>}
          <h2 className="section-title">{title}</h2>
          <div className="divider" />
        </div>
        <div className="sp-faq__list">
          {items.map((item, i) => (
            <div
              className={`sp-faq__item${open === i ? ' sp-faq__item--open' : ''} sp-faq__item--${accent}`}
              key={i}
            >
              <button
                className="sp-faq__question"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className={`sp-faq__chevron${open === i ? ' sp-faq__chevron--open' : ''}`}>
                  <ChevronIcon />
                </span>
              </button>
              <div
                className="sp-faq__answer"
                style={{ maxHeight: open === i ? '600px' : '0' }}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
