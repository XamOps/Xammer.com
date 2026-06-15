import './FounderMessage.css';

const FounderMessage = () => (
  <section className="founder section" aria-labelledby="founder-heading">
    <div className="container">
      <div className="founder__inner">
        {/* ── Portrait ─────────────────────────────── */}
        <div className="founder__portrait-wrap">
          <div className="founder__portrait">
            <div className="founder__portrait-placeholder" aria-label="Founder portrait">
              👤
            </div>
            <div className="founder__portrait-badge">📍 Delhi, India</div>
          </div>

          <div className="founder__creds">
            <div className="founder__name">Founder &amp; CEO</div>
            <div className="founder__role">Xammer IT Solutions</div>
            <div className="founder__badges">
              <span className="badge badge-violet">AWS Certified</span>
              <span className="badge badge-blue">Azure Expert</span>
              <span className="badge badge-teal">5+ Yrs</span>
            </div>
          </div>
        </div>

        {/* ── Message ──────────────────────────────── */}
        <div className="founder__message">
          <div className="section-label">
            <span>💬</span> A Word From Our Founder
          </div>

          <h2 className="section-title" id="founder-heading">
            We Started Xammer Because<br />
            <span className="gradient-text">Indian Businesses Deserved Better</span>
          </h2>

          <div className="founder__quote-mark">"</div>

          <div className="founder__body">
            <p className="founder__para">
              When I started Xammer in 2014, the cloud conversation in India was mostly noise —
              big buzzwords, expensive consultants, and very little real delivery. I'd spent years
              in enterprise IT watching companies spend enormous sums on cloud migrations that went
              nowhere, or on tools they never used. I knew we could do better.
            </p>

            <div className="founder__highlight">
              "The cloud should feel like a growth engine, not a cost centre. That's the
              only philosophy we've built Xammer around — and it's why we put our savings
              guarantees in writing before we sign any contract."
            </div>

            <p className="founder__para">
              Today, Xammer manages cloud workloads for over <strong>200 enterprises</strong> across
              India — from BFSI and healthcare to manufacturing and ed-tech. Our team of
              <strong> 180 certified cloud and DevOps engineers</strong> operates out of Delhi with
              a singular focus: making your infrastructure reliable, secure, and genuinely cheaper
              to run than whatever you're doing today.
            </p>

            <p className="founder__para">
              We don't pitch vague transformation strategies. We walk in with a free cloud audit,
              show you exactly where your money is going, build a plan, and then execute it — with
              a <strong>contractual 99.9% uptime SLA</strong> and a <strong>30–40% cost reduction
              guarantee</strong>. We're proud that most of our clients have been with us for
              more than five years.
            </p>

            <p className="founder__para">
              If you're tired of cloud bills that keep growing without explanation, or DevOps
              pipelines that break every other Friday, I'd genuinely love to talk. Come in for
              a no-obligation audit — the first conversation is always free.
            </p>
          </div>

          <div className="founder__signature">
            <div>
              <div className="founder__sig-name">Founder, Xammer</div>
              <div className="founder__sig-title">CEO &amp; Chief Cloud Architect — Delhi, India</div>
            </div>
            <div className="founder__sig-line" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FounderMessage;
