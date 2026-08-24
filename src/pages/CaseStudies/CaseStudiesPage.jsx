import SEO from '../../components/common/SEO';
import PageHero from '../../components/common/PageHero';
import CaseStudyCard from '../../components/common/CaseStudyCard';
import { caseStudies } from '../../utils/caseStudiesData';
import { CASE_STUDIES_SEO } from '../../utils/seoData';
import { useInView } from '../../utils/useInView';
import './CaseStudiesPage.css';

const CaseStudiesPage = () => {
  const [ref, visible] = useInView({ threshold: 0.08 });

  return (
    <>
      <SEO
        title={CASE_STUDIES_SEO.title}
        description={CASE_STUDIES_SEO.description}
        keywords={CASE_STUDIES_SEO.keywords}
        canonical={CASE_STUDIES_SEO.canonical}
        ogImage={CASE_STUDIES_SEO.ogImage}
      />
      <main>
        <PageHero
          badge={`${caseStudies.length} Client ${caseStudies.length === 1 ? 'Story' : 'Stories'}`}
          title="Real Results for"
          highlight="Real Businesses"
          subtitle="A closer look at how we've helped technology companies across India automate operations, strengthen security, and scale confidently on the cloud."
          accent="teal"
        />

        <section className="cs-listing section" ref={ref}>
          <div className="container">
            <div className="cs-listing__grid">
              {caseStudies.map((cs, i) => (
                <CaseStudyCard
                  cs={cs}
                  key={cs.slug}
                  className={`reveal${visible ? ' reveal--visible' : ''}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CaseStudiesPage;
