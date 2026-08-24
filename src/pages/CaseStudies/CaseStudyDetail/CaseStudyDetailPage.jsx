import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight, ArrowLeft, MapPin, Globe2, Building2, Target,
  ListChecks, ShieldCheck, Cog, Lock, Gauge, Cloud, CheckCircle2, Phone,
  Boxes, Workflow, KeyRound, Eye, Sparkles,
} from 'lucide-react';
import SEO from '../../../components/common/SEO';
import CaseStudyLogo from '../../../components/common/CaseStudyLogo';
import { caseStudies, getCaseStudyBySlug } from '../../../utils/caseStudiesData';
import { useInView } from '../../../utils/useInView';
import './CaseStudyDetailPage.css';

const iconMap = { ShieldCheck, Cog, Lock, Gauge, Cloud, Boxes, Workflow, KeyRound, Eye };

const Reveal = ({ as: Tag = 'div', className = '', children, ...rest }) => {
  const [ref, visible] = useInView({ threshold: 0.1 });
  return (
    <Tag ref={ref} className={`reveal${visible ? ' reveal--visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

const NotFoundNotice = () => (
  <main>
    <section className="section" style={{ textAlign: 'center', minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
      <div className="container">
        <h1 className="section-title">Case Study Not Found</h1>
        <p className="section-subtitle" style={{ margin: '0 auto 24px' }}>
          This case study isn't available yet. Take a look at our other client stories instead.
        </p>
        <Link to="/case-studies" className="btn-primary" style={{ display: 'inline-flex' }}>
          <ArrowLeft size={16} /> Back to Case Studies
        </Link>
      </div>
    </section>
  </main>
);

const CaseStudyDetailPage = () => {
  const { slug } = useParams();
  const cs = getCaseStudyBySlug(slug);

  if (!cs) return <NotFoundNotice />;

  const currentIndex = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <>
      <SEO
        title={cs.seo.title}
        description={cs.seo.description}
        keywords={cs.seo.keywords}
        canonical={cs.seo.canonical}
        ogImage={cs.seo.ogImage}
      />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className={`csd-hero csd-hero--${cs.accent}`}>
          <div className="csd-hero__grid" aria-hidden="true" />
          <div className="csd-hero__radial" aria-hidden="true" />
          <div className="container csd-hero__inner">
            <Link to="/case-studies" className="csd-hero__back">
              <ArrowLeft size={15} /> All Case Studies
            </Link>

            <div className="csd-hero__id">
              <CaseStudyLogo cs={cs} size="lg" />
              <div>
                <div className="csd-hero__client">{cs.client}</div>
                <div className="csd-hero__loc">
                  <MapPin size={13} /> {cs.location}
                  {cs.website && <>&middot; <Globe2 size={13} /> {cs.website}</>}
                </div>
              </div>
            </div>

            <h1 className="csd-hero__title">{cs.tagline}</h1>
            <p className="csd-hero__sub">{cs.heroSubtitle}</p>

            <div className="csd-hero__badges">
              <span className={`badge badge-${cs.accent === 'cyan' || cs.accent === 'orange' ? 'blue' : cs.accent}`}>{cs.industry}</span>
              <span className="badge badge-blue">{cs.service}</span>
              <span className="badge badge-violet">{cs.engagementType}</span>
            </div>
          </div>
        </section>

        {/* ── Client Overview ─────────────────────────────── */}
        <Reveal as="section" className="section csd-section">
          <div className="container">
            <div className="csd-overview">
              <div className="csd-overview__text">
                <div className="section-label"><Building2 size={13} /> Client Overview</div>
                <h2 className="section-title">About {cs.client}</h2>
                <p className="csd-overview__about">{cs.about}</p>
              </div>
              <div className="csd-overview__table">
                {cs.overview.map((row, i) => (
                  <div className="csd-overview__row" key={i}><span>{row.label}</span><strong>{row.value}</strong></div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Challenge & Objective ────────────────────────── */}
        <Reveal as="section" className="section csd-section csd-section--alt">
          <div className="container">
            <div className="csd-split">
              <div className="csd-split__col">
                <div className="section-label"><Target size={13} /> The Challenge</div>
                <p className="csd-split__intro">{cs.challenge.intro}</p>
                <ul className="csd-list">
                  {cs.challenge.points.map((p, i) => <li key={i}><span className="csd-list__dot" />{p}</li>)}
                </ul>
              </div>
              <div className="csd-split__col">
                <div className="section-label"><ListChecks size={13} /> The Objective</div>
                <p className="csd-split__intro">{cs.objective.intro}</p>
                <ul className="csd-list">
                  {cs.objective.points.map((p, i) => <li key={i}><span className="csd-list__dot csd-list__dot--alt" />{p}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Solution ─────────────────────────────────────── */}
        <Reveal as="section" className="section csd-section">
          <div className="container">
            <div className="csd-section__head">
              <div className="section-label">Xammer Solution</div>
              <h2 className="section-title">A More Automated, Centralized<br /><span className="gradient-text">&amp; Secure Operations Framework</span></h2>
            </div>
            <div className="csd-solution-grid">
              {cs.solution.map((s, i) => {
                const Icon = iconMap[s.icon] || ShieldCheck;
                return (
                  <div className="csd-solution-card" key={i}>
                    <div className="csd-solution-card__icon"><Icon size={22} /></div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ── Implementation ───────────────────────────────── */}
        <Reveal as="section" className="section csd-section csd-section--alt">
          <div className="container">
            <div className="csd-section__head">
              <div className="section-label">Implementation</div>
              <h2 className="section-title">A Structured Rollout</h2>
            </div>
            <div className="csd-steps">
              {cs.implementation.map((step, i) => (
                <div className="csd-step" key={i}>
                  <span className="csd-step__num">{String(i + 1).padStart(2, '0')}</span>
                  {i < cs.implementation.length - 1 && <div className="csd-step__connector" />}
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Results / Outcomes ───────────────────────────── */}
        <Reveal as="section" className="section csd-section">
          <div className="container">
            <div className="csd-section__head">
              <div className="section-label">The Result</div>
              <h2 className="section-title">Key Outcomes</h2>
            </div>
            <div className="csd-outcomes-grid">
              {cs.outcomes.map((o, i) => {
                const isRich = typeof o === 'object';
                return (
                  <div className={`csd-outcome${isRich ? ' csd-outcome--rich' : ''}`} key={i}>
                    <CheckCircle2 size={18} />
                    {isRich ? (
                      <div>
                        <div className="csd-outcome__title">{o.title}</div>
                        <p className="csd-outcome__desc">{o.desc}</p>
                      </div>
                    ) : (
                      <span>{o}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ── Before & After ───────────────────────────────── */}
        <Reveal as="section" className="section csd-section csd-section--alt">
          <div className="container">
            <div className="csd-section__head">
              <div className="section-label">Before &amp; After</div>
              <h2 className="section-title">The Transformation</h2>
            </div>
            <div className="csd-ba">
              <div className="csd-ba__header">
                <div className="csd-ba__label csd-ba__label--before">Before Xammer</div>
                <div className="csd-ba__label csd-ba__label--after">After Xammer</div>
              </div>
              {cs.beforeAfter.map((row, i) => (
                <div className="csd-ba__row" key={i}>
                  <div className="csd-ba__cell csd-ba__cell--before">{row.before}</div>
                  <div className="csd-ba__arrow"><ArrowRight size={16} /></div>
                  <div className="csd-ba__cell csd-ba__cell--after">{row.after}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Technology ────────────────────────────────────── */}
        <Reveal as="section" className="section csd-section">
          <div className="container">
            <div className="csd-section__head">
              <div className="section-label">Technology</div>
              <h2 className="section-title">What We Used</h2>
            </div>
            <div className="csd-tech-grid">
              {cs.technology.map((t, i) => (
                <div className="csd-tech-card" key={i}>
                  <div className="csd-tech-card__name">{t.name}</div>
                  <p>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Xammer's Approach (optional) ─────────────────── */}
        {cs.approach && (
          <Reveal as="section" className="section csd-section csd-section--alt">
            <div className="container">
              <div className="csd-approach">
                <div className="section-label"><Sparkles size={13} /> Xammer's Approach</div>
                <p className="csd-approach__text">{cs.approach.intro}</p>
                <p className="csd-approach__closing">{cs.approach.closing}</p>
                <div className="csd-approach__roles">
                  {cs.approach.roles.map((r, i) => (
                    <span className="badge badge-blue" key={i}>{r}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* ── Business Impact ──────────────────────────────── */}
        <Reveal as="section" className={`section csd-section${cs.approach ? ' csd-section--alt' : ''}`}>
          <div className="container">
            <div className="csd-impact">
              <div className="section-label">Business Impact</div>
              {cs.businessImpact.map((p, i) => (
                <p className="csd-impact__text" key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── CTA band ──────────────────────────────────────── */}
        <Reveal as="section" className="section csd-section">
          <div className="container">
            <div className="csd-cta">
              <div>
                <div className="csd-cta__title">Want Results Like This for Your Infrastructure?</div>
                <p className="csd-cta__desc">
                  Book a free, no-obligation cloud audit — our engineers will review your AWS
                  environment and hand you a written plan, with zero commitment required.
                </p>
              </div>
              <div className="csd-cta__buttons">
                <Link to="/contact" className="btn-primary animate-pulse-glow">
                  Start Free Audit <ArrowRight size={16} />
                </Link>
                <a href="tel:+918769254249" className="btn-secondary">
                  <Phone size={15} /> +91 87692 54249
                </a>
              </div>
            </div>

            {next && next.slug !== cs.slug && (
              <div className="csd-next">
                <span>Next case study</span>
                <Link to={`/case-studies/${next.slug}`} className="csd-next__link">
                  {next.client} <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>
        </Reveal>
      </main>
    </>
  );
};

export default CaseStudyDetailPage;
