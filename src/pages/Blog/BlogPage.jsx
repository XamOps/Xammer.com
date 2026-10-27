import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { BLOG_SEO } from '../../utils/seoData';
import PageHero from '../../components/common/PageHero';
import './BlogPage.css';

const posts = [
  { tag: 'Google Workspace', accent: 'green', readTime: '8 min', date: 'Sep 2026', title: 'Authorized Google Partners in India', excerpt: 'Xammer, one of the Authorized Google Partners in India, offers 100% technical support by authorized engineers, 180+ certified engineers, and secure Google Workspace & Google Cloud implementation.', img: '/images/event-img2.jpeg', href: '/authorized-google-partners-in-india' },
  { tag: 'Google Cloud', accent: 'green', readTime: '8 min', date: 'Sep 2026', title: 'Certified Google Cloud Partner in Noida', excerpt: 'Xammer is a Certified Google Cloud Partner in Noida offering 100% technical support by authorized engineers, secure migration, managed services, and scalable GCP solutions.', img: '/images/event-img1.jpeg', href: '/certified-google-cloud-partner-in-noida' },
  { tag: 'Google Cloud', accent: 'blue', readTime: '7 min', date: 'Sep 2026', title: 'Google Cloud Cost Optimization Services in Ahmedabad', excerpt: 'Xammer delivers Google Cloud Cost Optimization Services in Ahmedabad targeting 30%-40% savings through rightsizing, FinOps, and 100% technical support.', img: '/images/event-img2.jpeg', href: '/google-cloud-cost-optimization-services-in-ahmedabad' },
  { tag: 'Google Cloud', accent: 'teal', readTime: '9 min', date: 'Sep 2026', title: 'Google Cloud Managed Services Provider in Bangalore', excerpt: 'Xammer is a Google Cloud Managed Services Provider in Bangalore offering 24/7 cloud expertise, 100% technical support, monitoring, security, and infrastructure management.', img: '/images/event-img3.jpeg', href: '/google-cloud-managed-services-provider-in-bangalore' },
  { tag: 'Google Cloud', accent: 'violet', readTime: '9 min', date: 'Sep 2026', title: 'Google Cloud Transformation Services in Gurgaon', excerpt: 'Xammer delivers Google Cloud Transformation Services in Gurgaon with certified expertise, 100% technical support, and enterprise-ready migration, modernization, and governance.', img: '/images/event-img4.jpeg', href: '/google-cloud-transformation-services-in-gurgaon' },
  { tag: 'Microsoft Azure', accent: 'teal', readTime: '7 min', date: 'Aug 2026', title: 'Microsoft Azure Cloud Cost Optimization Services in Gurgaon', excerpt: 'Xammer delivers Microsoft Azure Cloud Cost Optimization Services in Gurgaon, targeting 30%-40% cost efficiency with 100% visibility and smarter Azure operations.', img: '/images/event-img1.jpeg', href: '/microsoft-azure-cloud-cost-optimization-services-in-gurgaon' },
  { tag: 'Microsoft Azure', accent: 'violet', readTime: '8 min', date: 'Aug 2026', title: 'Authorized Microsoft Azure Partner in Bangalore', excerpt: 'Xammer is an Authorized Microsoft Azure Partner in Bangalore offering 100% technical support by authorized engineers, 180+ certified experts, and secure, scalable Azure solutions.', img: '/images/event-img2.jpeg', href: '/authorized-microsoft-azure-partner-in-bangalore' },
  { tag: 'Oracle Cloud', accent: 'orange', readTime: '7 min', date: 'Aug 2026', title: 'Oracle Cloud Cost Optimization Services in Delhi', excerpt: 'Xammer delivers Oracle Cloud Cost Optimization Services in Delhi, targeting 30%-40% cost optimization with a Delhi-based team, FinOps strategy, and 24x7 managed support.', img: '/images/event-img3.jpeg', href: '/oracle-cloud-cost-optimization-services-in-delhi' },
  { tag: 'Oracle Cloud', accent: 'red', readTime: '8 min', date: 'Aug 2026', title: 'Authorized Oracle Cloud Partner in Gurgaon', excerpt: 'Xammer is an Authorized Oracle Cloud Partner in Gurgaon offering technical support by authorized engineers, 100% technical support, and enterprise-ready OCI solutions.', img: '/images/event-img4.jpeg', href: '/authorized-oracle-cloud-partner-in-gurgaon' },
  { tag: 'Microsoft Azure', accent: 'teal', readTime: '7 min', date: 'Jul 2026', title: 'Azure Cost Optimization Services in Noida', excerpt: 'Xammer delivers Azure Cost Optimization Services in Noida, reducing Microsoft Azure cloud costs by 30%-40% with 100% expert technical support.', img: '/images/event-img1.jpeg', href: '/azure-cost-optimization-services-in-noida' },
  { tag: 'Microsoft Azure', accent: 'violet', readTime: '8 min', date: 'Jul 2026', title: 'Microsoft Azure Partner in Noida', excerpt: 'Xammer is a trusted Microsoft Azure Partner in Noida offering 100% technical support, 180+ certified engineers, and enterprise-grade Azure cloud solutions.', img: '/images/event-img2.jpeg', href: '/microsoft-azure-partner-in-noida' },
  { tag: 'Oracle Cloud', accent: 'orange', readTime: '7 min', date: 'Jul 2026', title: 'Oracle Cloud Cost Optimization Services in Noida', excerpt: 'Xammer delivers Oracle Cloud Cost Optimization Services in Noida, helping businesses save 30%-40% on cloud costs with 100% expert technical support.', img: '/images/event-img3.jpeg', href: '/oracle-cloud-cost-optimization-services-in-noida' },
  { tag: 'Oracle Cloud', accent: 'red', readTime: '9 min', date: 'Jul 2026', title: 'Authorized Oracle Cloud Partner in Noida', excerpt: 'Xammer is an Authorized Oracle Cloud Partner in Noida offering 100% technical support, 180+ certified engineers, and secure, scalable OCI solutions for enterprises.', img: '/images/event-img4.jpeg', href: '/authorized-oracle-cloud-partner-in-noida' },
  { tag: 'AWS', accent: 'blue', readTime: '8 min', date: 'Jul 2026', title: 'AWS Cloud Cost Optimization Services in Noida', excerpt: 'Xammer offers certified AWS cloud cost optimization services in Noida, infrastructure optimization, up to 40% AWS cost reduction, and 100% technical support.', img: '/images/event-img1.jpeg', href: '/aws-cloud-cost-optimization-services-in-noida' },
];

const BlogPage = () => (
  <>
    <SEO
      title={BLOG_SEO.title}
      description={BLOG_SEO.description}
      keywords={BLOG_SEO.keywords}
      canonical={BLOG_SEO.canonical}
      ogImage={BLOG_SEO.ogImage}
    />
    <main>
      <PageHero
        badge="Read by 4,000+ IT Leaders Across India"
        title="Cloud Insights &"
        highlight="City Guides"
        subtitle="In-depth guides on AWS, Azure, Google Cloud, and Oracle Cloud services, cost optimization, and managed operations for businesses across Delhi NCR, Bangalore, Gurgaon & Ahmedabad."
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
              <Link to={posts[0].href} className="btn-primary blog__featured-cta">
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
                    <Link to={p.href} className="blog__read-more">Read →</Link>
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
