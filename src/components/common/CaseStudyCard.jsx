import { Link } from 'react-router-dom';
import { MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import CaseStudyLogo from './CaseStudyLogo';
import './CaseStudyCard.css';

const badgeAccent = { teal: 'teal', violet: 'violet', blue: 'blue', green: 'green', cyan: 'blue', orange: 'blue' };

/* Shared card used by both the home-page Case Studies section and the
   full /case-studies listing page, so hover/visual treatment stays in sync. */
const CaseStudyCard = ({ cs, className = '', style }) => (
  <Link to={`/case-studies/${cs.slug}`} className={`cs-card ${className}`} style={style}>
    <div className="cs-card__glow" style={{ background: `var(--${cs.accent === 'cyan' || cs.accent === 'orange' ? 'blue' : cs.accent})` }} aria-hidden="true" />

    <div className="cs-card__top">
      <CaseStudyLogo cs={cs} size="md" />
      <div className="cs-card__id">
        <div className="cs-card__client">{cs.client}</div>
        <div className="cs-card__meta"><MapPin size={12} /> {cs.location}</div>
      </div>
    </div>

    <div className="cs-card__tags">
      <span className={`badge badge-${badgeAccent[cs.accent] || 'blue'}`}>{cs.industry.split(' / ')[0]}</span>
      <span className="badge badge-blue">{cs.service}</span>
    </div>

    <p className="cs-card__desc">{cs.tagline}</p>

    <ul className="cs-card__outcomes">
      {cs.outcomes.slice(0, 3).map((o, j) => (
        <li key={j}><CheckCircle2 size={14} /> {typeof o === 'string' ? o : o.title}</li>
      ))}
    </ul>

    <div className="cs-card__footer">
      <span className="cs-card__cta">
        Read Full Case Study <ArrowRight size={15} className="cs-card__arrow" />
      </span>
    </div>
  </Link>
);

export default CaseStudyCard;
