import './ReviewsSection.css';

const reviews = [
  {
    stars: 5,
    text: "Xammer transformed our entire AWS infrastructure in 60 days. Our monthly bill dropped from ₹18 lakh to ₹11 lakh — a 38% reduction. And we haven't had a single P1 incident since they took over managed services. Absolutely professional team.",
    author: 'Rajesh Sharma',
    role: 'CTO, Delhi-based FinTech',
    avatar: '👨‍💼',
    avatarBg: 'rgba(88, 166, 255, 0.15)',
    platform: 'Google Reviews',
  },
  {
    stars: 5,
    text: "We were struggling with a 3-week deployment cycle that was killing our ability to compete. Xammer's DevOps team set up a complete CI/CD pipeline with automated testing and we're now shipping every Tuesday. It's been genuinely life-changing for our product team.",
    author: 'Priya Malhotra',
    role: 'VP Engineering, B2B SaaS, Gurugram',
    avatar: '👩‍💻',
    avatarBg: 'rgba(187, 134, 252, 0.15)',
    platform: 'Clutch.co',
  },
  {
    stars: 5,
    text: "The Xammer team helped us achieve RBI cloud compliance in under 90 days — something two other vendors told us would take a year. Their knowledge of the Indian regulatory landscape for cloud is second to none. Highly recommend for BFSI companies.",
    author: 'Amit Verma',
    role: 'IT Director, NBFC, Mumbai',
    avatar: '👨‍💼',
    avatarBg: 'rgba(3, 218, 198, 0.15)',
    platform: 'LinkedIn',
  },
  {
    stars: 5,
    text: "We migrated from a colocation data centre to Azure with zero downtime. I was expecting weeks of chaos — instead Xammer planned every step meticulously. The documentation they delivered was outstanding, and onboarding our own IT team took just one week.",
    author: 'Sunita Kapoor',
    role: 'Head of IT, Manufacturing Firm, Noida',
    avatar: '👩‍💼',
    avatarBg: 'rgba(63, 185, 80, 0.15)',
    platform: 'Google Reviews',
  },
  {
    stars: 5,
    text: "Xammer's Odoo ERP implementation was smooth from day one. The team took time to understand our exact processes before customising anything. We went live on schedule and our operations team was fully trained before the cutover. Exceptional service.",
    author: 'Vikram Singh',
    role: 'COO, Retail Chain, Delhi NCR',
    avatar: '👨‍🏫',
    avatarBg: 'rgba(255, 153, 0, 0.12)',
    platform: 'Clutch.co',
  },
  {
    stars: 5,
    text: "We were hit by a ransomware attempt last year. Xammer's security team detected and isolated it within 45 minutes thanks to their SOC monitoring. No data lost, no downtime. Investing in Xammer's managed security was the best decision we made in 2023.",
    author: 'Dr. Neha Gupta',
    role: 'IT Head, Healthcare Group, Delhi',
    avatar: '👩‍⚕️',
    avatarBg: 'rgba(88, 166, 255, 0.12)',
    platform: 'LinkedIn',
  },
];

const ratingBars = [
  { label: '5 ★', width: '91%', count: 182 },
  { label: '4 ★', width: '7%', count: 14 },
  { label: '3 ★', width: '1%', count: 3 },
  { label: '2 ★', width: '0%', count: 1 },
  { label: '1 ★', width: '0%', count: 0 },
];

const ReviewsSection = () => (
  <section className="reviews" aria-labelledby="reviews-heading">
    <div className="container">
      <div className="reviews__head">
        <div className="section-label"><span></span> Client Reviews</div>
        <h2 className="section-title" id="reviews-heading">
          Don't Take Our Word for It —<br />
          <span className="gradient-text">Here's What Clients Say</span>
        </h2>
        <p className="section-subtitle">
          Over 200 enterprises across India have trusted Xammer with their cloud infrastructure.
          These are their unfiltered words.
        </p>
      </div>

      <div className="reviews__grid">
        {reviews.map((r, i) => (
          <article className="review-card" key={i} aria-label={`Review by ${r.author}`}>
            <div className="review-card__quote-icon">"</div>
            <div className="review-card__stars">
              {Array.from({ length: r.stars }).map((_, j) => (
                <span key={j} className="review-card__star">★</span>
              ))}
            </div>
            <p className="review-card__text">"{r.text}"</p>
            <div className="review-card__author">
              <div className="review-card__avatar" style={{ background: r.avatarBg }}>
                {r.avatar}
              </div>
              <div>
                <div className="review-card__name">{r.author}</div>
                <div className="review-card__role">{r.role}</div>
              </div>
              <div className="review-card__platform">{r.platform}</div>
            </div>
          </article>
        ))}
      </div>

      {/* Overall rating */}
      <div className="reviews__overall" aria-label="Overall review score">
        <div className="reviews__big-score">
          <div className="reviews__score-num">4.9</div>
          <div>
            <div className="reviews__score-stars">★★★★★</div>
            <div className="reviews__score-total">Based on 200+ verified reviews</div>
          </div>
        </div>
        <div className="reviews__bars">
          {ratingBars.map((bar, i) => (
            <div className="reviews__bar-row" key={i}>
              <div className="reviews__bar-label">{bar.label}</div>
              <div className="reviews__bar-track">
                <div className="reviews__bar-fill" style={{ width: bar.width }} />
              </div>
              <div className="reviews__bar-count">{bar.count}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ReviewsSection;
