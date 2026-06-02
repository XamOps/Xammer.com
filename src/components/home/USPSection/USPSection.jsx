import { ShieldCheck, TrendingDown, Clock, Users } from 'lucide-react';
import './USPSection.css';

const usps = [
  {
    icon: <TrendingDown size={22} />,
    color: 'green',
    title: '30–40% Guaranteed Cost Reduction',
    desc: 'Our cloud cost optimisation frameworks consistently deliver 30–40% savings on AWS, Azure, and GCP bills within the first 90 days.',
  },
  {
    icon: <ShieldCheck size={22} />,
    color: 'violet',
    title: '99.9% Uptime SLA',
    desc: 'We back every managed services engagement with a contractual 99.9% uptime SLA — monitored 24×7 from our Delhi NOC.',
  },
  {
    icon: <Clock size={22} />,
    color: 'blue',
    title: '70% Faster Deployments',
    desc: 'Our DevOps automation and CI/CD pipelines cut release cycles dramatically — from weeks to hours for most enterprise teams.',
  },
  {
    icon: <Users size={22} />,
    color: 'teal',
    title: '180 Certified Cloud Experts',
    desc: 'A deep bench of AWS, Azure, GCP, and DevOps certified professionals ready to embed with your team and drive real outcomes.',
  },
];

const USPSection = () => (
  <section className="usp" aria-label="Why choose Xammer for cloud managed services">
    <div className="container">
      <div className="usp__inner">
        {usps.map((item, i) => (
          <div className="usp__item" key={i}>
            <div className={`usp__icon usp__icon--${item.color}`}>{item.icon}</div>
            <div className="usp__text">
              <div className="usp__title">{item.title}</div>
              <div className="usp__desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default USPSection;
