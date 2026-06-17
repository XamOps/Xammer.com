import { Users, Globe, Shield, Zap, TrendingDown, Heart, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import PageHero from '../../components/common/PageHero';
import AnimatedCounter from '../../components/common/AnimatedCounter';
import { ABOUT_SEO } from '../../utils/seoData';
import './AboutPage.css';

const stats = [
  { value: 5,    suffix: '+', label: 'Years in Cloud & IT' },
  { value: 1000, suffix: '+', label: 'Projects Delivered' },
  { value: 180,  suffix: '+', label: 'Certified Experts' },
  { value: 98.5, suffix: '%', decimals: 1, label: 'Client Satisfaction' },
];

const values = [
  { icon: <Target size={22} />,    color: 'violet', title: 'Outcome-First Thinking',   desc: 'We measure success by your results — cost saved, uptime delivered, deployments accelerated. Not by hours billed.' },
  { icon: <Shield size={22} />,    color: 'blue',   title: 'Engineering Integrity',     desc: 'Every recommendation we make is the one we would make if it were our own infrastructure. No vendor kickbacks, no upsells you don\'t need.' },
  { icon: <Users size={22} />,     color: 'teal',   title: 'Embedded Partnership',      desc: 'We don\'t deliver projects and disappear. We embed with your team, understand your business, and stay accountable for outcomes.' },
  { icon: <Zap size={22} />,       color: 'green',  title: 'Speed with Precision',      desc: 'We move fast because we\'ve done this before — but never at the cost of reliability. Automation is how we make both possible.' },
  { icon: <Heart size={22} />,     color: 'violet', title: 'People Over Process',       desc: 'Technology is a means, not an end. We keep people — your customers, your team, your users — at the centre of every decision.' },
  { icon: <Globe size={22} />,     color: 'blue',   title: 'India-Rooted, World-Class', desc: 'Built in Delhi, serving enterprises across India and globally. We combine local market understanding with world-class cloud engineering.' },
];

const certifications = [
  { name: 'AWS Select Tier Consulting Partner', color: '#FF9900', abbr: 'AWS' },
  { name: 'Microsoft Azure Expert MSP',          color: '#0078D4', abbr: 'AZ' },
  { name: 'Google Cloud Certified Partner',      color: '#4285F4', abbr: 'GCP' },
];

const timeline = [
  { year: '2014', title: 'Founded in Delhi', desc: 'Xammer was founded with a simple belief: Indian enterprises deserve world-class cloud engineering without the enterprise price tag.' },
  { year: '2016', title: 'First 100 Clients', desc: 'Crossed 100 active managed services clients across Delhi NCR, primarily in FinTech and healthcare sectors.' },
  { year: '2018', title: 'AWS Partner Status', desc: 'Achieved AWS Select Tier Consulting Partner status — recognition of technical depth and client satisfaction outcomes.' },
  { year: '2020', title: 'Multi-Cloud Practice', desc: 'Expanded to full multi-cloud coverage — AWS, Azure, and GCP — with 500+ projects delivered.' },
  { year: '2022', title: 'Azure Expert MSP', desc: 'Earned Microsoft Azure Expert MSP designation — fewer than 100 partners globally — and launched our DevSecOps practice.' },
  { year: '2024', title: '1,000+ Projects', desc: 'Crossed 1,000 successful project deliveries with 180+ certified professionals serving enterprises across 12 industries.' },
];

const AboutPage = () => (
  <>
    <SEO
      title={ABOUT_SEO.title}
      description={ABOUT_SEO.description}
      keywords={ABOUT_SEO.keywords}
      canonical={ABOUT_SEO.canonical}
      ogImage={ABOUT_SEO.ogImage}
    />
    <main>
      <PageHero
        badge="Trusted by 500+ Enterprises Across India"
        title="Engineering Partners You Can"
        highlight="Actually Rely On"
        subtitle="Xammer is India's trusted cloud managed services and IT consulting company — founded in Delhi, built on engineering integrity, and obsessed with delivering measurable outcomes for every client."
        accent="violet"
      />

      {/* Stats */}
      <section className="about-stats section">
        <div className="container">
          <div className="about-stats__grid">
            {stats.map((s, i) => (
              <div className="about-stats__item glass-card" key={i}>
                <div className="about-stats__num gradient-text">
                  <AnimatedCounter to={s.value} suffix={s.suffix} decimals={s.decimals || 0} duration={1600 + i * 150} />
                </div>
                <div className="about-stats__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story section">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__content">
              <div className="section-label">Our Story</div>
              <h2 className="section-title">Born from a Frustration with How Cloud Should Work</h2>
              <p className="about-story__p">Xammer was founded in 2014 by a team of cloud engineers who were frustrated with a consistent pattern: Indian enterprises were paying too much for cloud infrastructure, receiving too little expertise in return, and being treated as ticket numbers rather than partners.</p>
              <p className="about-story__p">We set out to build the managed services company we would have wanted to work with — one that embeds itself in your operations, takes accountability for outcomes, and makes your cloud environment something your engineering team is proud of rather than afraid of.</p>
              <p className="about-story__p">Ten years, 1,000+ projects, and 180+ certified engineers later, that founding principle still drives everything we do.</p>
              <div className="about-story__certs">
                {certifications.map((c, i) => (
                  <div className="about-story__cert" key={i} style={{ borderColor: c.color + '44' }}>
                    <span className="about-story__cert-abbr" style={{ color: c.color }}>{c.abbr}</span>
                    <span className="about-story__cert-name">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-story__img-wrap">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop"
                alt="Xammer engineering team"
                className="about-story__img"
                loading="lazy"
              />
              <div className="about-story__img-badge glass-card">
                <TrendingDown size={18} style={{ color: 'var(--green)' }} />
                <span>Avg. <strong style={{ color: 'var(--green)' }}>38%</strong> cloud cost reduction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values section">
        <div className="container">
          <div className="about-values__header">
            <div className="section-label">Our Values</div>
            <h2 className="section-title">What Drives Every Decision We Make</h2>
            <div className="divider" />
          </div>
          <div className="about-values__grid">
            {values.map((v, i) => (
              <div className={`about-values__card glass-card`} key={i}>
                <div className={`about-values__icon about-values__icon--${v.color}`}>{v.icon}</div>
                <h3 className="about-values__title">{v.title}</h3>
                <p className="about-values__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline section">
        <div className="about-timeline__bg" aria-hidden />
        <div className="container">
          <div className="about-timeline__header">
            <div className="section-label">Our Journey</div>
            <h2 className="section-title">5 Years of Building Better Cloud</h2>
            <div className="divider" />
          </div>
          <div className="about-timeline__list">
            {timeline.map((t, i) => (
              <div className="about-timeline__item" key={i}>
                <div className="about-timeline__year gradient-text">{t.year}</div>
                <div className="about-timeline__dot" />
                <div className="about-timeline__body glass-card">
                  <h3 className="about-timeline__title">{t.title}</h3>
                  <p className="about-timeline__desc">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta section">
        <div className="container">
          <div className="about-cta__inner glass-card">
            <div className="section-label">Work With Us</div>
            <h2 className="section-title">Ready to Meet Your Engineering Partner?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
              Whether you need a free cloud cost audit, a migration partner, or a 24x7 managed services team — Xammer is ready.
            </p>
            <div className="about-cta__btns">
              <Link to="/contact" className="btn-primary">Get a Free Cloud Audit</Link>
              <Link to="/careers" className="btn-secondary">Join Our Team</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default AboutPage;
