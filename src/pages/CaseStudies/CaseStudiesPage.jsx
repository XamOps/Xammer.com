import { TrendingDown, Clock, Shield, Zap } from 'lucide-react';
import SEO from '../../components/common/SEO';
import { CASE_STUDIES_SEO } from '../../utils/seoData';
import PageHero from '../../components/common/PageHero';
import './CaseStudiesPage.css';

const studies = [
  {
    client: 'OnFinance', industry: 'FinTech', service: 'AWS Managed Services', accent: 'orange',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop',
    challenge: 'Rapidly growing AWS bill (35% MoM increase) with no visibility into cost drivers, combined with poor deployment frequency slowing product releases.',
    result: '62% reduction in monthly AWS bill within 3 months. Deployment frequency tripled. Zero production incidents post-onboarding.',
    metrics: [{ icon: <TrendingDown size={16} />, val: '62%', label: 'Cost Reduction' }, { icon: <Zap size={16} />, val: '3×', label: 'Faster Deployments' }, { icon: <Clock size={16} />, val: '3 months', label: 'Time to Results' }],
    quote: 'Xammer made our cloud move seamless. Within three months, our monthly AWS bill dropped by 62% and our deployment frequency tripled.',
    author: 'Priyesh, Co-Founder & CTO',
  },
  {
    client: 'Parchaa AI', industry: 'HealthTech', service: 'AWS Managed Services', accent: 'blue',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&auto=format&fit=crop',
    challenge: 'Manual patch management across 200+ EC2 instances consuming 40 engineer-hours per month. Security compliance gaps identified in pre-audit.',
    result: 'Entire fleet patch-automated via AWS Systems Manager in 2 weeks. 47 security findings remediated. Compliance audit passed first time.',
    metrics: [{ icon: <Shield size={16} />, val: '47', label: 'Security Findings Fixed' }, { icon: <Clock size={16} />, val: '2 weeks', label: 'Fleet Automated' }, { icon: <TrendingDown size={16} />, val: '40 hrs/mo', label: 'Engineer Time Saved' }],
    quote: 'Their depth with AWS Systems Manager impressed us most — automated patch management across our entire fleet in the first two weeks.',
    author: 'Dhirendra, CTO',
  },
  {
    client: 'Inspire AI', industry: 'SaaS', service: 'Digital Transformation', accent: 'violet',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&auto=format&fit=crop',
    challenge: 'Legacy monolith application with 2-week release cycles, 40% infrastructure downtime during deployments, and growing technical debt blocking new feature development.',
    result: 'Microservices architecture on GKE. Deployment frequency increased from biweekly to daily. 99.9% uptime achieved. Feature velocity tripled.',
    metrics: [{ icon: <Zap size={16} />, val: 'Daily', label: 'Deployments (was 2-weekly)' }, { icon: <Shield size={16} />, val: '99.9%', label: 'Uptime' }, { icon: <TrendingDown size={16} />, val: '3×', label: 'Feature Velocity' }],
    quote: 'They are not just a vendor — they are genuinely part of our engineering team.',
    author: 'Krishant, Co-Founder & CTO',
  },
  {
    client: 'Regional NBFC', industry: 'Banking', service: 'Sovereign Cloud Migration', accent: 'green',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop',
    challenge: 'RBI data localization requirements prohibiting use of US-based public cloud. Existing colocation contract expensive and operationally complex.',
    result: 'Full migration to MeitY-empanelled sovereign cloud infrastructure. RBI audit passed without a single finding. 35% infrastructure cost reduction vs. colocation.',
    metrics: [{ icon: <Shield size={16} />, val: '0', label: 'Audit Findings' }, { icon: <TrendingDown size={16} />, val: '35%', label: 'Cost vs. Colocation' }, { icon: <Shield size={16} />, val: '100%', label: 'RBI Compliant' }],
    quote: 'The compliance documentation Xammer produced for our RBI audit was detailed, accurate, and got through review without a single finding.',
    author: 'Sunil, CISO',
  },
  {
    client: 'EdTech Platform', industry: 'EdTech', service: 'AWS Managed Services', accent: 'teal',
    img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&auto=format&fit=crop',
    challenge: 'SRE team overwhelmed managing 300+ EC2 instances manually. Runbooks scattered across Confluence pages. Incident response taking 45+ minutes average.',
    result: 'Automated SSM runbooks replacing manual ops. Incident response MTTR reduced from 45 to 8 minutes. Cost governance saving lakhs monthly.',
    metrics: [{ icon: <Clock size={16} />, val: '8 min', label: 'Avg MTTR (was 45 min)' }, { icon: <Zap size={16} />, val: '100%', label: 'Runbooks Automated' }, { icon: <TrendingDown size={16} />, val: '₹L+', label: 'Monthly Savings' }],
    quote: 'Xammer\'s SRE team feels like an extension of our own. Their cost governance has saved us lakhs every month.',
    author: 'Ravi, Director of Infrastructure',
  },
  {
    client: 'Distribution Company', industry: 'Manufacturing', service: 'Odoo ERP', accent: 'violet',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop',
    challenge: 'Business running entirely on Tally and Excel. No real-time inventory visibility across 3 warehouses. Month-end close taking 2 weeks.',
    result: 'Complete Odoo implementation across accounting, inventory, and sales in 10 weeks. Month-end close reduced to 2 days. Real-time visibility across all warehouses.',
    metrics: [{ icon: <Clock size={16} />, val: '2 days', label: 'Month-End Close (was 2 wks)' }, { icon: <Zap size={16} />, val: '10 wks', label: 'Implementation Time' }, { icon: <Shield size={16} />, val: '100%', label: 'GST Compliant' }],
    quote: 'We went from running on Tally and Excel to real-time visibility across three warehouses. ROI was visible in the first quarter.',
    author: 'Suresh, MD',
  },
];

const accentMap = { orange: '#FF9900', blue: 'var(--blue)', violet: 'var(--violet)', green: 'var(--green)', teal: 'var(--teal)' };

const CaseStudiesPage = () => (
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
        badge="1,000+ Projects Delivered"
        title="Real Results for"
        highlight="Real Businesses"
        subtitle="From slashing AWS bills by 62% to passing RBI audits without a single finding — here are a few of the outcomes we've delivered for enterprises across India."
        accent="violet"
      />

      <section className="cs section">
        <div className="container">
          <div className="cs__grid">
            {studies.map((s, i) => (
              <div className="cs__card glass-card" key={i}>
                <div className="cs__img-wrap">
                  <img src={s.img} alt={s.client} className="cs__img" loading="lazy" />
                  <div className="cs__img-overlay" style={{ background: `linear-gradient(to top, var(--bg-card) 0%, transparent 60%)` }} />
                  <div className="cs__badges">
                    <span className={`badge badge-${s.accent}`}>{s.industry}</span>
                    <span className="badge badge-blue">{s.service}</span>
                  </div>
                </div>
                <div className="cs__body">
                  <div className="cs__client">{s.client}</div>
                  <div className="cs__section-label">Challenge</div>
                  <p className="cs__text">{s.challenge}</p>
                  <div className="cs__section-label">Outcome</div>
                  <p className="cs__text">{s.result}</p>
                  <div className="cs__metrics">
                    {s.metrics.map((m, j) => (
                      <div className="cs__metric" key={j} style={{ borderColor: accentMap[s.accent] + '44' }}>
                        <span className="cs__metric-val" style={{ color: accentMap[s.accent] }}>{m.val}</span>
                        <span className="cs__metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <blockquote className="cs__quote">"{s.quote}"</blockquote>
                  <div className="cs__author">— {s.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  </>
);

export default CaseStudiesPage;
