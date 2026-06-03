import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import PageHero from '../../components/common/PageHero';
import './BlogPage.css';

const posts = [
  { tag: 'AWS Cost Optimisation', accent: 'orange', readTime: '8 min', date: 'May 2025', title: 'How We Reduced a FinTech Startup\'s AWS Bill by 62% in 90 Days', excerpt: 'A step-by-step breakdown of the exact rightsizing, Reserved Instance, and Spot fleet changes that cut one client\'s monthly AWS spend from ₹28L to ₹11L — without touching a single production workload.', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop' },
  { tag: 'Cloud Security', accent: 'red', readTime: '6 min', date: 'Apr 2025', title: '10 IAM Misconfigurations We Find in Almost Every AWS Environment', excerpt: 'After reviewing hundreds of AWS environments, these are the access control mistakes that appear most frequently — and the ones attackers exploit first. Are any of them in your account?', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop' },
  { tag: 'DevOps', accent: 'blue', readTime: '10 min', date: 'Apr 2025', title: 'Building a Zero-Downtime CI/CD Pipeline on AWS: A Complete Guide', excerpt: 'From CodePipeline to blue-green deployments on ECS — a practical guide to building deployment automation that your team can trust for production releases.', img: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&auto=format&fit=crop' },
  { tag: 'Sovereign Cloud', accent: 'green', readTime: '7 min', date: 'Mar 2025', title: 'DPDPA 2023: What Indian Enterprises Need to Do About Data Localisation', excerpt: 'India\'s Digital Personal Data Protection Act has significant implications for where you store and process data. Here\'s what BFSI, healthcare, and consumer tech companies need to know.', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop' },
  { tag: 'Odoo ERP', accent: 'violet', readTime: '5 min', date: 'Mar 2025', title: 'Migrating from Tally to Odoo: What Actually Happens to Your Data', excerpt: 'The most common question from businesses considering Odoo is about their historical data. Here\'s exactly what can be migrated, what gets left behind, and how we handle the transition.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop' },
  { tag: 'Azure', accent: 'blue', readTime: '9 min', date: 'Feb 2025', title: 'Azure Hybrid Benefit: How to Maximise Your Microsoft Licensing Savings', excerpt: 'Most organisations with Windows Server or SQL Server licences are leaving significant Azure savings on the table. Here\'s how to calculate your potential savings and implement Hybrid Benefit correctly.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop' },
  { tag: 'Google Cloud', accent: 'teal', readTime: '7 min', date: 'Feb 2025', title: 'BigQuery Cost Optimisation: 8 Techniques That Actually Work', excerpt: 'BigQuery bills can surprise you. Here are the slot reservation, query optimisation, and materialised view strategies that consistently reduce BigQuery costs by 30–50% for our clients.', img: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&auto=format&fit=crop' },
  { tag: 'FinOps', accent: 'green', readTime: '6 min', date: 'Jan 2025', title: 'The FinOps Practices Every Indian CTO Should Implement in 2025', excerpt: 'Cloud costs are now the second-largest line item for most tech companies. Here are the governance frameworks, tagging strategies, and commitment-based discount approaches that keep spend under control.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop' },
  { tag: 'Cyber Security', accent: 'red', readTime: '8 min', date: 'Jan 2025', title: 'Why 73% of Indian Companies Had a Cloud Security Incident Last Year', excerpt: 'The CSPM assessment data from 200+ cloud environments we reviewed in 2024 reveals the most dangerous misconfiguration patterns affecting Indian enterprises — and what to do about them.', img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&auto=format&fit=crop' },
];

const BlogPage = () => (
  <>
    <SEO
      title="Cloud Blog & Insights | AWS, Azure, DevOps, Security | Xammer"
      description="In-depth technical articles on AWS cost optimisation, Azure migration, DevOps best practices, cloud security, and digital transformation from Xammer's engineering team."
      keywords="cloud blog India, AWS cost optimisation blog, Azure migration guide, DevOps best practices India, cloud security blog"
    />
    <main>
      <PageHero
        badge="Read by 4,000+ IT Leaders Across India"
        title="Cloud Insights &"
        highlight="Deep Dives"
        subtitle="In-depth technical articles, how-to guides, and industry analysis from Xammer's engineering team — on AWS, Azure, GCP, DevOps, security, and digital transformation."
        accent="blue"
      />

      <section className="blog section">
        <div className="container">
          {/* Featured */}
          <div className="blog__featured glass-card">
            <div className="blog__featured-img-wrap">
              <img src={posts[0].img} alt={posts[0].title} className="blog__featured-img" loading="lazy" />
            </div>
            <div className="blog__featured-body">
              <span className={`badge badge-${posts[0].accent}`}>{posts[0].tag}</span>
              <h2 className="blog__featured-title">{posts[0].title}</h2>
              <p className="blog__featured-excerpt">{posts[0].excerpt}</p>
              <div className="blog__meta">
                <span><Clock size={13} /> {posts[0].readTime} read</span>
                <span>{posts[0].date}</span>
              </div>
              <Link to="/contact" className="btn-primary blog__featured-cta">
                Read Article <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Grid */}
          <div className="blog__grid">
            {posts.slice(1).map((p, i) => (
              <div className="blog__card glass-card" key={i}>
                <img src={p.img} alt={p.title} className="blog__card-img" loading="lazy" />
                <div className="blog__card-body">
                  <div className="blog__card-top">
                    <span className={`badge badge-${p.accent}`}>{p.tag}</span>
                    <span className="blog__card-date">{p.date}</span>
                  </div>
                  <h3 className="blog__card-title">{p.title}</h3>
                  <p className="blog__card-excerpt">{p.excerpt}</p>
                  <div className="blog__meta">
                    <span><Clock size={13} /> {p.readTime} read</span>
                    <Link to="/contact" className="blog__read-more">Read →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  </>
);

export default BlogPage;
