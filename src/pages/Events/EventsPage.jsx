import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import PageHero from '../../components/common/PageHero';
import './EventsPage.css';

const upcoming = [
  { date: 'Jul 15, 2025', time: '3:00 PM IST', type: 'Webinar', accent: 'orange', title: 'AWS Cost Optimisation Masterclass: Cut Your Bill by 40% in 30 Days', desc: 'A live 90-minute session covering Reserved Instances, Spot fleets, rightsizing, and FinOps governance. Includes a free AWS cost assessment for all attendees.', location: 'Online — Zoom', seats: '200 seats' },
  { date: 'Aug 5, 2025',  time: '2:00 PM IST', type: 'Webinar', accent: 'blue',   title: 'Zero-Trust Security for Cloud: From IAM Hardening to CSPM', desc: 'Deep dive into implementing zero-trust architecture on AWS and Azure — covering IAM least-privilege, network segmentation, and automated compliance monitoring.', location: 'Online — Zoom', seats: '150 seats' },
  { date: 'Aug 20, 2025', time: '11:00 AM IST', type: 'Workshop', accent: 'violet', title: 'Odoo ERP for Indian SMEs: Live Demo & Q&A', desc: 'A 2-hour live demo of Odoo tailored for Indian manufacturing and distribution businesses. Covers GST, e-invoicing, inventory, and payroll.', location: 'Delhi NCR (In-person)', seats: '40 seats' },
  { date: 'Sep 10, 2025', time: '4:00 PM IST', type: 'Webinar', accent: 'teal',   title: 'Sovereign Cloud: Navigating DPDPA & RBI Data Localisation Requirements', desc: 'For CTOs and CISOs in BFSI and healthcare — a practical guide to building cloud architecture that meets Indian data sovereignty requirements.', location: 'Online — Zoom', seats: '200 seats' },
];

const past = [
  { date: 'May 2025',  type: 'Webinar', accent: 'green',  title: 'DevOps Automation: CI/CD Pipelines That Actually Work', attendees: '312 attendees', recording: true },
  { date: 'Apr 2025',  type: 'Workshop', accent: 'orange', title: 'AWS Well-Architected Framework: Hands-On Review Workshop', attendees: '48 attendees', recording: false },
  { date: 'Mar 2025',  type: 'Webinar', accent: 'blue',   title: 'Azure Migration Masterclass: From On-Premise to Cloud-Native', attendees: '287 attendees', recording: true },
  { date: 'Feb 2025',  type: 'Conference', accent: 'violet', title: 'Cloud India Summit 2025 — Xammer Speaking Session', attendees: '1,200 attendees', recording: true },
  { date: 'Jan 2025',  type: 'Webinar', accent: 'teal',   title: 'Google BigQuery for Business Intelligence: Live Implementation', attendees: '195 attendees', recording: true },
  { date: 'Dec 2024',  type: 'Webinar', accent: 'red',    title: 'Cloud Security in 2025: What Indian CTOs Need to Know', attendees: '445 attendees', recording: true },
];

const EventsPage = () => (
  <>
    <SEO
      title="Events & Webinars | Cloud, DevOps & Security | Xammer"
      description="Join Xammer's free webinars and workshops on AWS, Azure, Google Cloud, DevOps, cybersecurity, and Odoo ERP. Live sessions for Indian IT leaders."
      keywords="cloud webinars India, AWS webinar India, DevOps workshop Delhi, cloud events India"
    />
    <main>
      <PageHero
        badge="Free Webinars & Workshops"
        title="Learn, Connect &"
        highlight="Stay Ahead"
        subtitle="Free live webinars, hands-on workshops, and conference sessions — designed for Indian CTOs, IT leaders, and cloud engineers. Register for upcoming events below."
        accent="blue"
      />

      {/* Upcoming */}
      <section className="events section">
        <div className="container">
          <div className="events__header">
            <div className="section-label">Upcoming Events</div>
            <h2 className="section-title">Register Now — Free Admission</h2>
            <div className="divider" />
          </div>
          <div className="events__upcoming">
            {upcoming.map((e, i) => (
              <div className="events__card glass-card" key={i}>
                <div className={`events__date-col events__date-col--${e.accent}`}>
                  <div className="events__date">{e.date}</div>
                  <span className={`badge badge-${e.accent}`}>{e.type}</span>
                </div>
                <div className="events__body">
                  <h3 className="events__title">{e.title}</h3>
                  <p className="events__desc">{e.desc}</p>
                  <div className="events__details">
                    <span><Clock size={13} /> {e.time}</span>
                    <span><MapPin size={13} /> {e.location}</span>
                    <span><Calendar size={13} /> {e.seats}</span>
                  </div>
                </div>
                <div className="events__register">
                  <Link to="/contact" className="btn-primary events__register-btn">
                    Register Free <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Past */}
          <div className="events__past-header">
            <div className="section-label">Past Events</div>
            <h2 className="section-title">Recordings Available</h2>
            <div className="divider" />
          </div>
          <div className="events__past-grid">
            {past.map((e, i) => (
              <div className="events__past-card glass-card" key={i}>
                <div className="events__past-top">
                  <span className={`badge badge-${e.accent}`}>{e.type}</span>
                  <span className="events__past-date">{e.date}</span>
                </div>
                <h3 className="events__past-title">{e.title}</h3>
                <div className="events__past-bottom">
                  <span className="events__past-attendees">{e.attendees}</span>
                  {e.recording && (
                    <Link to="/contact" className="events__past-watch">Watch Recording →</Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  </>
);

export default EventsPage;
