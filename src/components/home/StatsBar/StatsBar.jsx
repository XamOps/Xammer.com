import { Award, Layers, Users, ThumbsUp, TrendingDown, ShieldCheck } from 'lucide-react';
import './StatsBar.css';

const stats = [
  {
    icon: <Award size={22} />,
    value: '10+',
    label: 'Years in Cloud & IT',
    color: 'violet',
  },
  {
    icon: <Layers size={22} />,
    value: '1000+',
    label: 'Projects Delivered',
    color: 'blue',
  },
  {
    icon: <Users size={22} />,
    value: '180+',
    label: 'Certified Experts',
    color: 'teal',
  },
  {
    icon: <ThumbsUp size={22} />,
    value: '98.5%',
    label: 'Client Satisfaction',
    color: 'green',
  },
  {
    icon: <TrendingDown size={22} />,
    value: '↓38%',
    label: 'Avg. Cloud Cost Saved',
    color: 'cyan',
  },
  {
    icon: <ShieldCheck size={22} />,
    value: '99.9%',
    label: 'Uptime SLA Guaranteed',
    color: 'violet',
  },
];

const StatsBar = () => (
  <section className="statsbar" aria-label="Xammer key metrics">
    <div className="container">
    <div className="statsbar__inner">
      {stats.map((s, i) => (
        <div className="statsbar__item" key={i}>
          <div className={`statsbar__icon statsbar__icon--${s.color}`}>
            {s.icon}
          </div>
          <div className={`statsbar__value statsbar__value--${s.color}`}>
            {s.value}
          </div>
          <div className="statsbar__label">{s.label}</div>
        </div>
      ))}
    </div>
    </div>
  </section>
);

export default StatsBar;
