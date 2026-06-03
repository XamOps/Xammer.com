import { useRef, useEffect, useState } from 'react';
import { ShieldCheck, TrendingDown, Clock, Users } from 'lucide-react';
import AnimatedCounter from '../../common/AnimatedCounter';
import './USPSection.css';

const usps = [
  {
    icon: <TrendingDown size={26} />,
    color: 'green',
    counterVal: 40,
    counterSuffix: '%',
    counterPrefix: 'Up to ',
    label: 'Infrastructure Cost Reduction',
    title: 'Guaranteed Cost Reduction',
    desc: 'Our cloud cost optimisation frameworks consistently deliver 30–40% savings on AWS, Azure, and GCP bills within the first 90 days.',
  },
  {
    icon: <ShieldCheck size={26} />,
    color: 'violet',
    counterVal: 99.9,
    counterSuffix: '%',
    counterDecimals: 1,
    label: 'Uptime SLA',
    title: '99.9% Uptime SLA',
    desc: 'We back every managed services engagement with a contractual 99.9% uptime SLA — monitored 24×7 from our Delhi NOC.',
  },
  {
    icon: <Clock size={26} />,
    color: 'blue',
    counterVal: 70,
    counterSuffix: '%',
    label: 'Faster Deployments',
    title: 'Faster Deployment Cycles',
    desc: 'Our DevOps automation and CI/CD pipelines cut release cycles dramatically — from weeks to hours for most enterprise teams.',
  },
  {
    icon: <Users size={26} />,
    color: 'teal',
    counterVal: 180,
    counterSuffix: '+',
    label: 'Certified Cloud Experts',
    title: 'Certified Cloud Experts',
    desc: 'A deep bench of AWS, Azure, GCP, and DevOps certified professionals ready to embed with your team and drive real outcomes.',
  },
];

const USPSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className={`usp${visible ? ' usp--visible' : ''}`}
      aria-label="Why choose Xammer for cloud managed services"
      ref={sectionRef}
    >
      <div className="container">
        <div className="usp__inner">
          {usps.map((item, i) => (
            <div className="usp__item glass-card" key={i} style={{ animationDelay: `${i * 0.12}s` }}>
              <div className={`usp__icon usp__icon--${item.color}`}>{item.icon}</div>
              <div className={`usp__counter usp__counter--${item.color}`}>
                {visible ? (
                  <AnimatedCounter
                    to={item.counterVal}
                    prefix={item.counterPrefix || ''}
                    suffix={item.counterSuffix || ''}
                    decimals={item.counterDecimals || 0}
                    duration={1800 + i * 200}
                  />
                ) : (
                  <span>{item.counterPrefix || ''}{item.counterDecimals ? item.counterVal.toFixed(item.counterDecimals) : item.counterVal}{item.counterSuffix || ''}</span>
                )}
              </div>
              <div className="usp__label">{item.label}</div>
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
};

export default USPSection;
