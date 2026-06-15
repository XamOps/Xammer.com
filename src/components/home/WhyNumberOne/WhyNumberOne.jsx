import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Award, Globe, ShieldCheck, FileCheck } from 'lucide-react';
import './WhyNumberOne.css';

const stats = [
  {
    value: '10+',
    valueColor: 'var(--violet)',
    label: 'Years of Cloud Expertise',
    note: 'Delivering enterprise IT since 2014 — before most Indian companies had a cloud strategy.',
    accent: 'linear-gradient(90deg, var(--violet), var(--blue))',
  },
  {
    value: '1000+',
    valueColor: 'var(--blue)',
    label: 'Cloud Projects Delivered',
    note: 'From AWS migrations to full DevOps transformations across 15+ industry verticals.',
    accent: 'linear-gradient(90deg, var(--blue), var(--teal))',
  },
  {
    value: '180',
    valueColor: 'var(--teal)',
    label: 'Certified Cloud Engineers',
    note: 'AWS Solutions Architects, Azure Experts, GCP Engineers, Kubernetes admins — all in-house.',
    accent: 'linear-gradient(90deg, var(--teal), var(--cyan))',
  },
  {
    value: '99.9%',
    valueColor: 'var(--green)',
    label: 'Uptime SLA',
    note: 'Contractually guaranteed and backed by our 24×7 NOC with real-time alerting.',
    accent: 'linear-gradient(90deg, var(--green), var(--teal))',
  },
  {
    value: '30-40%',
    valueColor: '#FF9900',
    label: 'Guaranteed Cost Reduction',
    note: 'We put it in writing. No fluff — average savings confirmed across 200+ active accounts.',
    accent: 'linear-gradient(90deg, #FF9900, var(--violet))',
  },
  {
    value: '200+',
    valueColor: 'var(--violet)',
    label: 'Enterprise Clients',
    note: 'BFSI, healthcare, manufacturing, ed-tech, and retail across Delhi NCR and beyond.',
    accent: 'linear-gradient(90deg, var(--violet), var(--blue))',
  },
];

const checks = [
  'India-based team with on-site delivery capability across Delhi NCR',
  'Multi-cloud expertise — AWS, Azure, and GCP under one contract',
  'FinOps-driven approach: cost visibility and savings built into every engagement',
  'Contractual SLAs with penalties — not just best-effort promises',
  'VAPT and compliance advisory included in all managed security plans',
  'Dedicated Account Manager and monthly executive reporting for every client',
];

const trustItems = [
  { icon: <Award size={15} />,      label: 'AWS Partner Network' },
  { icon: <Award size={15} />,      label: 'Microsoft Solutions Partner' },
  { icon: <Globe size={15} />,      label: 'Google Cloud Partner' },
  { icon: <ShieldCheck size={15} />, label: 'ISO 27001 Aligned' },
  { icon: <FileCheck size={15} />,  label: 'RBI Cloud Advisory' },
];

const WhyNumberOne = () => (
  <section className="why section" aria-labelledby="why-heading">
    <div className="container">
      <div className="why__inner">
        {/* Content */}
        <div className="why__content">
          <div>
            <div className="section-label"><Award size={13} /> Why Xammer</div>
            <h2 className="section-title" id="why-heading">
              Why India's Top Enterprises Choose Xammer<br />
              <span className="gradient-text">Over Everyone Else</span>
            </h2>
          </div>

          <div className="why__body">
            <p className="why__para">
              There's no shortage of IT consultants in India. What's rare is a company that
              <strong> puts guarantees on paper</strong>, delivers on them, and still charges
              less than hyperscaler professional services teams.
            </p>
            <p className="why__para">
              Xammer was built specifically for the Indian enterprise context — where compliance
              requirements are unique (RBI, SEBI, DPDP Act), latency matters to users across
              Tier 2 and 3 cities, and cloud ROI needs to be justified to a Board within
              two quarters. We understand this environment because we've lived in it for
              <strong> over a decade</strong>.
            </p>
          </div>

          <div className="why__checklist">
            {checks.map((c, i) => (
              <div className="why__check" key={i}>
                <div className="why__check-icon">✓</div>
                <span>{c}</span>
              </div>
            ))}
          </div>

          {/* Trust logos */}
          <div className="why__trust" role="list" aria-label="Technology partnerships">
            {trustItems.map((t, i) => (
              <>
                {i > 0 && <div className="why__trust-divider" key={`div-${i}`} />}
                <div className="why__trust-item" key={i} role="listitem">
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="why__stats" aria-label="Key statistics">
          {stats.map((s, i) => (
            <div
              className="why__stat-card"
              key={i}
              style={{ '--stat-accent': s.accent }}
            >
              <div className="why__stat-value" style={{ color: s.valueColor }}>{s.value}</div>
              <div className="why__stat-label">{s.label}</div>
              <div className="why__stat-note">{s.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA band */}
      <div className="why__cta-band" aria-label="Call to action">
        <div>
          <div className="why__cta-title">
            Ready to Cut Your Cloud Bill and Sleep Better at Night?
          </div>
          <p className="why__cta-desc">
            Book a free, no-obligation cloud audit. Our engineers will spend two days analysing
            your infrastructure, identify savings opportunities, and hand you a written optimisation
            plan — with zero commitment required from your side.
          </p>
        </div>
        <div className="why__cta-buttons">
          <Link to="/contact" className="btn-primary animate-pulse-glow">
            Start Free Audit <ArrowRight size={16} />
          </Link>
          <a href="tel:+918769254249" className="btn-secondary">
            <Phone size={15} /> +91 87692 54249
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default WhyNumberOne;
