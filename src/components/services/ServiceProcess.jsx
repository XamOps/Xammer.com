import { useRef, useEffect, useState } from 'react';
import './ServiceProcess.css';

const ServiceProcess = ({ label, title, steps = [], accent = 'violet' }) => {
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

  return (
    <section className={`sp-process section${visible ? ' sp-process--visible' : ''}`} ref={ref}>
      <div className="sp-process__bg" aria-hidden="true" />
      <div className="container">
        <div className="sp-process__header">
          {label && <div className="section-label">{label}</div>}
          <h2 className="section-title">{title}</h2>
          <div className="divider" />
        </div>
        <div className="sp-process__steps">
          {steps.map((step, i) => (
            <div
              className={`sp-process__step sp-process__step--${accent}`}
              key={i}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`sp-process__num sp-process__num--${accent}`}>
                {String(i + 1).padStart(2, '0')}
              </div>
              {i < steps.length - 1 && (
                <div className="sp-process__connector" />
              )}
              <div className="sp-process__icon">{step.icon}</div>
              <h3 className="sp-process__step-title">{step.title}</h3>
              <p className="sp-process__step-desc">{step.desc}</p>
              {step.sub && <div className="sp-process__step-sub">{step.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
