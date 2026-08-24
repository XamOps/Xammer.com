import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight } from 'lucide-react';
import CaseStudyCard from '../../common/CaseStudyCard';
import { caseStudies } from '../../../utils/caseStudiesData';
import { useInView } from '../../../utils/useInView';
import './CaseStudiesSection.css';

const CaseStudiesSection = () => {
  const [ref, visible] = useInView({ threshold: 0.1 });

  return (
    <section className="case-studies section" ref={ref} aria-labelledby="cs-home-heading">
      <div className="container">
        <div className={`case-studies__head reveal${visible ? ' reveal--visible' : ''}`}>
          <div className="section-label"><Briefcase size={13} /> Case Studies</div>
          <h2 className="section-title" id="cs-home-heading">
            Real Clients. Real Infrastructure.<br />
            <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="section-subtitle">
            A closer look at how we've helped technology companies across India automate
            operations, strengthen security, and scale confidently on the cloud.
          </p>
        </div>

        <div className="case-studies__grid">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard
              cs={cs}
              key={cs.slug}
              className={`reveal${visible ? ' reveal--visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>

        <div className={`case-studies__more reveal${visible ? ' reveal--visible' : ''}`}>
          <Link to="/case-studies" className="btn-secondary">
            View All Case Studies <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
