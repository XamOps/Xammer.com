import { ArrowRight, Award, Users, TrendingUp, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { PARTNERS_SEO } from '../../utils/seoData';
import PageHero from '../../components/common/PageHero';
import './PartnersPage.css';

const types = [
  { icon: <Award size={22} />, color: 'violet', title: 'Technology Partners', desc: 'Cloud vendors, ISVs, and technology platforms. We integrate your technology into our managed services practice and recommend it to clients where it delivers genuine value.' },
  { icon: <Users size={22} />, color: 'blue',   title: 'Referral Partners',   desc: 'Consultancies, CAs, system integrators, and business advisors who refer clients to Xammer and earn a referral fee on every successful engagement.' },
  { icon: <TrendingUp size={22} />, color: 'teal', title: 'Reseller Partners', desc: 'IT distributors and VARs who resell Xammer\'s managed cloud services under their own brand, backed by our full engineering and operations capability.' },
  { icon: <Globe size={22} />, color: 'green',  title: 'Strategic Alliances', desc: 'Deep co-sell and co-delivery partnerships with complementary service providers — joint GTM, shared clients, and integrated service delivery.' },
];

const benefits = [
  'Revenue sharing on all referred or co-sold engagements',
  'Access to Xammer\'s technical certifications and expertise for joint proposals',
  'Co-marketing opportunities — joint webinars, case studies, and thought leadership',
  'Deal registration protection — your referred clients are yours',
  'Dedicated partner success manager from day one',
  'Partner portal with sales collateral, proposal templates, and pricing tools',
  'Priority access to Xammer engineers for partner technical queries',
  'Joint attendance at industry events across India',
];

const currentPartners = [
  { name: 'AWS', category: 'Cloud Platform',     logo: 'AWS', color: '#FF9900' },
  { name: 'Microsoft Azure', category: 'Cloud Platform', logo: 'AZ', color: '#0078D4' },
  { name: 'Google Cloud', category: 'Cloud Platform', logo: 'GCP', color: '#4285F4' },
  { name: 'Odoo', category: 'ERP Platform',      logo: 'O', color: '#714B67' },
  { name: 'HashiCorp',  category: 'DevOps Tools',   logo: 'HC', color: '#7B42BC' },
];

const PartnersPage = () => (
  <>
    <SEO
      title={PARTNERS_SEO.title}
      description={PARTNERS_SEO.description}
      keywords={PARTNERS_SEO.keywords}
      canonical={PARTNERS_SEO.canonical}
      ogImage={PARTNERS_SEO.ogImage}
    />
    <main>
      <PageHero
        badge="Partner Programme India"
        title="Grow Together."
        highlight="Partner With Xammer."
        subtitle="Whether you're a cloud vendor, a systems integrator, or a business consultant — Xammer's partner programme gives you a trusted cloud engineering partner, revenue share, and co-marketing support to serve clients better."
        accent="teal"
      />

      {/* Partner types */}
      <section className="partners-types section">
        <div className="container">
          <div className="partners-types__header">
            <div className="section-label">Partnership Models</div>
            <h2 className="section-title">Four Ways to Partner With Xammer</h2>
            <div className="divider" />
          </div>
          <div className="partners-types__grid">
            {types.map((t, i) => (
              <div className="partners-types__card glass-card" key={i}>
                <div className={`partners-types__icon partners-types__icon--${t.color}`}>{t.icon}</div>
                <h3 className="partners-types__title">{t.title}</h3>
                <p className="partners-types__desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="partners-benefits section">
        <div className="partners-benefits__bg" aria-hidden />
        <div className="container">
          <div className="partners-benefits__grid">
            <div>
              <div className="section-label">Partner Benefits</div>
              <h2 className="section-title">What You Get as a Xammer Partner</h2>
              <div className="divider" />
              <ul className="partners-benefits__list">
                {benefits.map((b, i) => (
                  <li key={i} className="partners-benefits__item">
                    <span className="partners-benefits__check">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="partners-benefits__form glass-card">
              <h3>Apply to Become a Partner</h3>
              <p>Tell us a bit about your business and the partnership model you have in mind. Our partner team will be in touch within 48 hours.</p>
              <Link to="/contact" className="btn-primary partners-benefits__cta">
                Apply Now <ArrowRight size={15} />
              </Link>
              <div className="partners-benefits__contact">
                Or email us at <a href="mailto:partners@xammer.in">partners@xammer.in</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current partners */}
      <section className="partners-current section">
        <div className="container">
          <div className="section-label" style={{ textAlign: 'center' }}>Our Technology Partners</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Built on the World's Best Platforms</h2>
          <div className="divider" style={{ margin: '0 auto 48px' }} />
          <div className="partners-current__grid">
            {currentPartners.map((p, i) => (
              <div className="partners-current__card glass-card" key={i}>
                <div className="partners-current__logo" style={{ color: p.color }}>{p.logo}</div>
                <div className="partners-current__name">{p.name}</div>
                <div className="partners-current__cat">{p.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  </>
);

export default PartnersPage;
