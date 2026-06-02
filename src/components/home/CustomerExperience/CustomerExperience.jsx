import {
  Zap, Target, Star, RefreshCw,
  TrendingDown, Lock, Search, FileText,
  BarChart2, TrendingUp,
} from 'lucide-react';
import './CustomerExperience.css';

const metrics = [
  {
    icon: <Zap size={20} />,
    iconBg: 'rgba(187, 134, 252, 0.1)',
    iconColor: 'var(--violet)',
    number: '< 2 hrs',
    numberColor: 'var(--violet)',
    label: 'Average Incident Response Time',
    desc: 'Our 24×7 NOC team acknowledges and begins triaging every P1 incident within 2 hours — with most resolved before business hours begin.',
  },
  {
    icon: <Target size={20} />,
    iconBg: 'rgba(63, 185, 80, 0.1)',
    iconColor: 'var(--green)',
    number: '97%',
    numberColor: 'var(--green)',
    label: 'Client Retention Rate',
    desc: 'Nearly every client who starts with Xammer stays. Our 97% retention rate reflects the depth of trust we build through consistent delivery.',
  },
  {
    icon: <Star size={20} />,
    iconBg: 'rgba(88, 166, 255, 0.1)',
    iconColor: 'var(--blue)',
    number: '4.9 / 5',
    numberColor: 'var(--blue)',
    label: 'Average Customer Satisfaction Score',
    desc: 'Across 200+ active accounts, our average CSAT rating is 4.9 out of 5 — measured quarterly through independent feedback surveys.',
  },
  {
    icon: <RefreshCw size={20} />,
    iconBg: 'rgba(3, 218, 198, 0.1)',
    iconColor: 'var(--teal)',
    number: '70%',
    numberColor: 'var(--teal)',
    label: 'Faster Deployment Cycles',
    desc: 'Clients adopting our DevOps automation and CI/CD pipeline services report a 70% reduction in time-to-production on average.',
  },
  {
    icon: <TrendingDown size={20} />,
    iconBg: 'rgba(255, 153, 0, 0.1)',
    iconColor: '#FF9900',
    number: '38%',
    numberColor: '#FF9900',
    label: 'Average Cloud Cost Saved',
    desc: 'Our FinOps-driven cloud optimisation reviews deliver an average 38% reduction in monthly cloud spend for new managed services clients.',
  },
  {
    icon: <Lock size={20} />,
    iconBg: 'rgba(88, 166, 255, 0.1)',
    iconColor: 'var(--blue)',
    number: '0',
    numberColor: 'var(--green)',
    label: 'Critical Security Breaches on Managed Infra',
    desc: 'In over a decade of managing cloud infrastructure, not one of our fully managed clients has experienced a critical data breach.',
  },
];

const steps = [
  {
    num: '01',
    icon: <Search size={20} />,
    iconColor: 'var(--violet)',
    title: 'Free Cloud Audit',
    desc: 'We spend two days analysing your current infrastructure — cost waste, security gaps, architecture weaknesses, and DevOps maturity.',
  },
  {
    num: '02',
    icon: <FileText size={20} />,
    iconColor: 'var(--blue)',
    title: 'Tailored Roadmap',
    desc: 'You receive a written roadmap with specific recommendations, expected savings, and a phased delivery plan — before we sign anything.',
  },
  {
    num: '03',
    icon: <Zap size={20} />,
    iconColor: 'var(--teal)',
    title: 'Agile Execution',
    desc: 'Our certified engineers embed with your team to deliver in two-week sprints — with weekly progress calls and full transparency.',
  },
  {
    num: '04',
    icon: <BarChart2 size={20} />,
    iconColor: 'var(--green)',
    title: 'Continuous Optimisation',
    desc: 'Post-delivery, we monitor, optimise, and report monthly. Your cloud should get cheaper and more reliable every quarter — and it will.',
  },
];

const CustomerExperience = () => (
  <section className="cx section" aria-labelledby="cx-heading">
    <div className="container">
      <div className="cx__head">
        <div className="section-label"><TrendingUp size={13} /> Customer Experience</div>
        <h2 className="section-title" id="cx-heading">
          Numbers That Reflect<br />
          <span className="gradient-text">Real Outcomes, Not Promises</span>
        </h2>
        <p className="section-subtitle">
          We measure our success through the metrics that actually matter to you — cost savings,
          uptime, deployment speed, and customer satisfaction scores.
        </p>
      </div>

      <div className="cx__grid">
        {metrics.map((m, i) => (
          <div className="cx-card" key={i}>
            <div className="cx-card__icon" style={{ background: m.iconBg, color: m.iconColor }}>
              {m.icon}
            </div>
            <div className="cx-card__number" style={{ color: m.numberColor }}>{m.number}</div>
            <div className="cx-card__label">{m.label}</div>
            <div className="cx-card__desc">{m.desc}</div>
          </div>
        ))}
      </div>

      <div className="cx__process" aria-label="How we work with clients">
        {steps.map((s, i) => (
          <div className="cx__step" key={i}>
            <span className="cx__step-num">{s.num}</span>
            <div className="cx__step-icon" style={{ color: s.iconColor }}>{s.icon}</div>
            <div className="cx__step-title">{s.title}</div>
            <div className="cx__step-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CustomerExperience;
