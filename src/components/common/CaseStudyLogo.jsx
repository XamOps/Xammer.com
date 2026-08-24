import CompanyMark from './CompanyMark';
import './CaseStudyLogo.css';

/* Renders a client's real uploaded logo, cropped to a square (works for a
   plain icon or a wide icon+wordmark lockup — see CaseStudyLogo.css).
   Falls back to the generated letter-mark when no logo file is set yet. */
const CaseStudyLogo = ({ cs, size = 'md' }) => {
  if (!cs.logo) return <CompanyMark name={cs.client} accent={cs.accent} size={size} />;

  return (
    <div className={`case-logo case-logo--${size}`}>
      <img src={cs.logo} alt={`${cs.client} logo`} loading="lazy" />
    </div>
  );
};

export default CaseStudyLogo;
