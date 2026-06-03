import { useState, useEffect, useRef } from 'react';
import './ServiceTestimonials.css';

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path d="M7 0l1.8 5.4H14l-4.6 3.3 1.7 5.3L7 10.8 2.9 14l1.7-5.3L0 5.4h5.2z" />
  </svg>
);

const ServiceTestimonials = ({ label, title, items = [], accent = 'violet' }) => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive(p => (p + 1) % items.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [items.length]);

  const go = (i) => {
    setActive(i);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive(p => (p + 1) % items.length);
    }, 5000);
  };

  return (
    <section className={`sp-testimonials section${visible ? ' sp-testimonials--visible' : ''}`} ref={ref}>
      <div className="sp-testimonials__bg" aria-hidden />
      <div className="container">
        <div className="sp-testimonials__header">
          {label && <div className="section-label">{label}</div>}
          <h2 className="section-title">{title}</h2>
          <div className="divider" />
        </div>

        <div className="sp-testimonials__track">
          {items.map((item, i) => (
            <div
              className={`sp-testimonials__card glass-card${i === active ? ' sp-testimonials__card--active' : ''}`}
              key={i}
              aria-hidden={i !== active}
            >
              <div className="sp-testimonials__stars">
                {[...Array(5)].map((_, s) => (
                  <span key={s} style={{ color: '#FFD700' }}><StarIcon /></span>
                ))}
              </div>
              <blockquote className="sp-testimonials__quote">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="sp-testimonials__author">
                <div className={`sp-testimonials__avatar sp-testimonials__avatar--${accent}`}>
                  {item.author[0]}
                </div>
                <div>
                  <div className="sp-testimonials__name">{item.author}</div>
                  <div className="sp-testimonials__role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sp-testimonials__dots">
          {items.map((_, i) => (
            <button
              key={i}
              className={`sp-testimonials__dot sp-testimonials__dot--${accent}${i === active ? ' sp-testimonials__dot--active' : ''}`}
              onClick={() => go(i)}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>

        {/* All reviews grid (desktop) */}
        <div className="sp-testimonials__grid">
          {items.map((item, i) => (
            <div
              className={`sp-testimonials__mini glass-card`}
              key={i}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="sp-testimonials__stars" style={{ marginBottom: 12 }}>
                {[...Array(5)].map((_, s) => (
                  <span key={s} style={{ color: '#FFD700' }}><StarIcon /></span>
                ))}
              </div>
              <p className="sp-testimonials__mini-quote">&ldquo;{item.quote}&rdquo;</p>
              <div className="sp-testimonials__author" style={{ marginTop: 16 }}>
                <div className={`sp-testimonials__avatar sp-testimonials__avatar--${accent}`}>
                  {item.author[0]}
                </div>
                <div>
                  <div className="sp-testimonials__name">{item.author}</div>
                  <div className="sp-testimonials__role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
