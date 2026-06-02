import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import './EventsSection.css';

const events = [
  {
    emoji: '🎙️',
    type: 'Webinar',
    typeColor: 'violet',
    date: 'June 18, 2025',
    title: 'Cloud Cost Optimisation Masterclass: Cut Your AWS Bill by 40%',
    desc: 'Join our lead AWS Solutions Architect for a live deep-dive into Reserved Instances, Savings Plans, rightsizing, and Spot strategies that have saved our clients crores.',
    href: '/events/cloud-cost-optimisation-webinar',
  },
  {
    emoji: '🏆',
    type: 'Case Study',
    typeColor: 'green',
    date: 'May 30, 2025',
    title: 'How a Delhi NBFC Cut Cloud Costs 38% and Passed RBI Audit in 60 Days',
    desc: 'A behind-the-scenes look at how we helped a major Delhi-based NBFC migrate to AWS, optimise spend, and achieve RBI cloud compliance framework compliance within two months.',
    href: '/case-studies/nbfc-aws-migration',
  },
  {
    emoji: '🧑‍💻',
    type: 'Workshop',
    typeColor: 'blue',
    date: 'July 5, 2025',
    title: 'Hands-On Kubernetes for DevOps Teams: EKS in Production',
    desc: 'A full-day in-person workshop in Delhi for DevOps engineers and platform leads — covering EKS cluster setup, Helm chart management, auto-scaling, and observability with Datadog.',
    href: '/events/kubernetes-workshop-delhi',
  },
];

const colorMap = {
  violet: 'badge-violet',
  green: 'badge-green',
  blue: 'badge-blue',
};

const EventsSection = () => (
  <section className="events" aria-labelledby="events-heading">
    <div className="container">
      <div className="events__head">
        <div>
          <div className="section-label"><span>📅</span> Events &amp; Insights</div>
          <h2 className="section-title" id="events-heading">
            Learn Cloud. <span className="gradient-text">Lead Change.</span>
          </h2>
        </div>
        <Link to="/events" className="btn-secondary">
          All Events &amp; Case Studies <ArrowRight size={14} />
        </Link>
      </div>

      <div className="events__grid">
        {events.map((ev, i) => (
          <article className="event-card" key={i} aria-label={ev.title}>
            <div className="event-card__thumb">
              <div className="event-card__thumb-overlay" />
              {ev.emoji}
              <div className="event-card__type">
                <span className={`badge ${colorMap[ev.typeColor]}`}>{ev.type}</span>
              </div>
            </div>
            <div className="event-card__body">
              <div className="event-card__meta">
                <div className="event-card__date">
                  <Calendar size={12} /> {ev.date}
                </div>
              </div>
              <h3 className="event-card__title">{ev.title}</h3>
              <p className="event-card__desc">{ev.desc}</p>
              <Link to={ev.href} className="event-card__link">
                Read More <ArrowRight size={13} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default EventsSection;
