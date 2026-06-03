import { MapPin, Clock, ArrowRight, Zap, Heart, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import PageHero from '../../components/common/PageHero';
import './CareersPage.css';

const perks = [
  { icon: <TrendingUp size={20} />, color: 'violet', title: 'Fast Career Growth',        desc: 'Clear career ladders, mentorship from senior architects, and support for AWS/Azure/GCP certifications — fully funded by Xammer.' },
  { icon: <Users size={20} />,      color: 'blue',   title: 'World-Class Team',          desc: 'Work alongside engineers who have built infrastructure for 1,000+ companies. Learn from the best in the Indian cloud industry.' },
  { icon: <Zap size={20} />,        color: 'teal',   title: 'Real Impact',               desc: 'Your work directly reduces cloud costs, prevents security incidents, and keeps mission-critical systems running for real businesses.' },
  { icon: <Heart size={20} />,      color: 'green',  title: 'People-First Culture',      desc: 'Flexible hours, remote-friendly roles, health benefits, and a leadership team that genuinely listens to its engineers.' },
];

const openings = [
  { title: 'Senior AWS Solutions Architect',      dept: 'Cloud Engineering', type: 'Full-time', location: 'Delhi / Remote', exp: '4–8 years',     desc: 'Design and implement complex AWS architectures for enterprise clients. Deep expertise in EC2, EKS, RDS, CloudFormation, and cost optimization required.' },
  { title: 'DevOps Engineer — CI/CD',             dept: 'DevOps',            type: 'Full-time', location: 'Delhi / Hybrid', exp: '2–5 years',     desc: 'Build and maintain CI/CD pipelines using GitHub Actions, Azure DevOps, and Terraform. Experience with Kubernetes and containerization essential.' },
  { title: 'Cloud Security Engineer',             dept: 'SecOps',            type: 'Full-time', location: 'Delhi',          exp: '3–6 years',     desc: 'Implement and manage cloud security posture management, IAM hardening, and 24x7 threat detection across AWS, Azure, and GCP environments.' },
  { title: 'Odoo ERP Functional Consultant',      dept: 'ERP',               type: 'Full-time', location: 'Delhi / Remote', exp: '2–4 years',     desc: 'Lead Odoo ERP implementations for Indian businesses. Expertise in accounting, inventory, manufacturing modules and Indian GST compliance required.' },
  { title: 'Azure Cloud Engineer',                dept: 'Cloud Engineering', type: 'Full-time', location: 'Delhi / Hybrid', exp: '2–5 years',     desc: 'Manage and optimise Azure infrastructure for enterprise clients. Azure certifications (AZ-900 to AZ-305 level) preferred.' },
  { title: 'Site Reliability Engineer (SRE)',     dept: 'SRE',               type: 'Full-time', location: 'Delhi',          exp: '3–6 years',     desc: 'Own 24x7 monitoring, incident response, and reliability engineering for production cloud environments across our managed services client base.' },
  { title: 'Cloud Cost Analyst (FinOps)',         dept: 'FinOps',            type: 'Full-time', location: 'Delhi / Remote', exp: '1–3 years',     desc: 'Analyse cloud spending patterns, identify optimisation opportunities, and implement FinOps best practices across AWS, Azure, and GCP accounts.' },
  { title: 'Technical Content Writer — Cloud',    dept: 'Marketing',         type: 'Full-time', location: 'Remote',         exp: '1–3 years',     desc: 'Write in-depth technical blog posts, whitepapers, and case studies on cloud architecture, DevOps, and cybersecurity for the Xammer content platform.' },
];

const deptColors = {
  'Cloud Engineering': 'violet',
  'DevOps': 'blue',
  'SecOps': 'red',
  'ERP': 'teal',
  'SRE': 'green',
  'FinOps': 'orange',
  'Marketing': 'cyan',
};

const CareersPage = () => (
  <>
    <SEO
      title="Careers at Xammer | Cloud Engineering Jobs in Delhi, India"
      description="Join Xammer's cloud engineering team in Delhi. We're hiring AWS architects, DevOps engineers, cloud security experts, and SREs. Funded certifications, remote-friendly."
      keywords="careers Xammer, cloud engineering jobs Delhi, AWS architect job India, DevOps engineer hiring, cloud jobs India"
    />
    <main>
      <PageHero
        badge="We're Hiring Across Multiple Roles"
        title="Build the Future of Cloud"
        highlight="With Us"
        subtitle="Join a team of 180+ certified cloud engineers working on some of India's most complex cloud infrastructure challenges. Funded certifications, fast growth, real impact."
        accent="violet"
      />

      {/* Perks */}
      <section className="careers-perks section">
        <div className="container">
          <div className="careers-perks__header">
            <div className="section-label">Why Xammer</div>
            <h2 className="section-title">Why Engineers Choose Xammer</h2>
            <div className="divider" />
          </div>
          <div className="careers-perks__grid">
            {perks.map((p, i) => (
              <div className={`careers-perks__card glass-card`} key={i}>
                <div className={`careers-perks__icon careers-perks__icon--${p.color}`}>{p.icon}</div>
                <h3 className="careers-perks__title">{p.title}</h3>
                <p className="careers-perks__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job openings */}
      <section className="careers-jobs section">
        <div className="careers-jobs__bg" aria-hidden />
        <div className="container">
          <div className="careers-jobs__header">
            <div className="section-label">Open Positions</div>
            <h2 className="section-title">Current Openings — {openings.length} Roles</h2>
            <div className="divider" />
          </div>
          <div className="careers-jobs__list">
            {openings.map((job, i) => (
              <div className="careers-jobs__card glass-card" key={i}>
                <div className="careers-jobs__top">
                  <div>
                    <div className="careers-jobs__title">{job.title}</div>
                    <div className="careers-jobs__meta">
                      <span className={`badge badge-${deptColors[job.dept] || 'blue'}`}>{job.dept}</span>
                      <span className="careers-jobs__meta-item"><Clock size={13} /> {job.type}</span>
                      <span className="careers-jobs__meta-item"><MapPin size={13} /> {job.location}</span>
                      <span className="careers-jobs__meta-item">Exp: {job.exp}</span>
                    </div>
                  </div>
                  <Link to="/contact" className="btn-secondary careers-jobs__apply">
                    Apply <ArrowRight size={14} />
                  </Link>
                </div>
                <p className="careers-jobs__desc">{job.desc}</p>
              </div>
            ))}
          </div>

          <div className="careers-jobs__cta glass-card">
            <h3>Don't See a Perfect Fit?</h3>
            <p>We're always looking for exceptional cloud engineers. Send your resume to <a href="mailto:careers@xammer.in">careers@xammer.in</a> with the role you'd want to build.</p>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default CareersPage;
