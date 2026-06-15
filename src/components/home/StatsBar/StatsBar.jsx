import { useRef, useEffect, useState } from 'react';
import { Award, Layers, Users, ThumbsUp, TrendingDown, ShieldCheck } from 'lucide-react';
import AnimatedCounter from '../../common/AnimatedCounter';
import './StatsBar.css';

const stats = [
  {
    icon: <Award size={22} />,
    color: 'violet',
    to: 5,
    suffix: '+',
    label: 'Years in Cloud & IT',
  },
  {
    icon: <Layers size={22} />,
    color: 'blue',
    to: 1000,
    suffix: '+',
    label: 'Projects Delivered',
  },
  {
    icon: <Users size={22} />,
    color: 'teal',
    to: 180,
    suffix: '+',
    label: 'Certified Experts',
  },
  {
    icon: <ThumbsUp size={22} />,
    color: 'green',
    to: 98.5,
    suffix: '%',
    decimals: 1,
    label: 'Client Satisfaction',
  },
  {
    icon: <TrendingDown size={22} />,
    color: 'cyan',
    prefix: '↓',
    to: 38,
    suffix: '%',
    label: 'Avg. Cloud Cost Saved',
  },
  {
    icon: <ShieldCheck size={22} />,
    color: 'violet',
    to: 99.9,
    suffix: '%',
    decimals: 1,
    label: 'Uptime SLA Guaranteed',
  },
];

const StatsBar = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="statsbar" aria-label="Xammer key metrics" ref={ref}>
      <div className="container">
        <div className="statsbar__inner">
          {stats.map((s, i) => (
            <div className="statsbar__item" key={i}>
              <div className={`statsbar__icon statsbar__icon--${s.color}`}>
                {s.icon}
              </div>
              <div className={`statsbar__value statsbar__value--${s.color}`}>
                {visible ? (
                  <AnimatedCounter
                    to={s.to}
                    prefix={s.prefix || ''}
                    suffix={s.suffix || ''}
                    decimals={s.decimals || 0}
                    duration={1600 + i * 150}
                  />
                ) : (
                  /* Show final value before intersection to avoid blank flash on SSR/fast paint */
                  `${s.prefix || ''}${s.decimals ? s.to.toFixed(s.decimals) : s.to}${s.suffix || ''}`
                )}
              </div>
              <div className="statsbar__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
