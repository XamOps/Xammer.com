import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';
import WaveCyberBg from './WaveCyberBg';
import './HeroSection.css';

/* ── Terminal lines ──────────────────────────────────── */
const TERMINAL_LINES = [
  {
    type: 'cmd',
    prompt: '~',
    text: 'terraform plan -out=infra.tfplan',
  },
  {
    type: 'success',
    text: '✔  Plan: 12 to add, 2 to change, 0 to destroy.',
  },
  {
    type: 'cmd',
    prompt: '~',
    text: 'kubectl rollout status deploy/api-gateway',
  },
  {
    type: 'success',
    text: '✔  deployment "api-gateway" successfully rolled out',
  },
  {
    type: 'cmd',
    prompt: '~',
    text: 'aws ce get-cost-and-usage --granularity MONTHLY',
  },
  {
    type: 'info',
    text: 'ℹ  EstimatedCharges: ₹11.2L  ↓38% vs last month',
  },
  {
    type: 'cmd',
    prompt: '~',
    text: 'vault secrets enable -path=prod kv-v2',
  },
  {
    type: 'success',
    text: '✔  Secrets engine enabled at: prod/',
  },
];

const HeroSection = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const terminalRef = useRef(null);

  /* Replay animation: step through lines, then reset and loop */
  useEffect(() => {
    if (visibleLines < TERMINAL_LINES.length) {
      const t = setTimeout(() => setVisibleLines(v => v + 1), 900);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setVisibleLines(0), 3500);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  /* Auto-scroll terminal body */
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <section className="hero" aria-label="Xammer — Cloud Managed Services and DevOps Consulting">

      {/* ── Background layers ──────────────────────── */}
      {/* Dot-matrix grid */}
      <div className="hero__bg-grid"   aria-hidden="true" />
      {/* Canvas: matrix-rain wave (binary + hex + cyber symbols) */}
      <WaveCyberBg />
      {/* Horizontal scan beam */}
      <div className="hero__bg-scan"   aria-hidden="true" />
      {/* Colour bleed radials */}
      <div className="hero__bg-radial" aria-hidden="true" />
      {/* Ambient glow orbs */}
      <div className="hero__glow-orb hero__glow-orb--violet" aria-hidden="true" />
      <div className="hero__glow-orb hero__glow-orb--blue"   aria-hidden="true" />

      {/* ── Network SVG decoration ────────────────── */}
      <svg
        className="hero__network"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* edges */}
        {[
          [200,200, 60, 80], [200,200, 340,100], [200,200, 100,300],
          [200,200, 360,310], [200,200, 200,40],  [200,200, 30,180],
          [60,80,  200,40],  [60,80,  30,180],
          [340,100,200,40],  [340,100,360,310],
          [100,300,30,180],  [100,300,360,310],
        ].map(([x1,y1,x2,y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(88,166,255,0.35)" strokeWidth="1"
            strokeDasharray="4 3"
          >
            <animate attributeName="stroke-dashoffset"
              from="0" to="28" dur={`${3 + (i % 3)}s`}
              repeatCount="indefinite" />
          </line>
        ))}
        {/* nodes */}
        {[
          [200,200,'#BB86FC',7], [60,80,'#58A6FF',5], [340,100,'#03DAC6',5],
          [100,300,'#58A6FF',5],[360,310,'#BB86FC',5],[200,40,'#66FCF1',4],
          [30,180,'#03DAC6',4],
        ].map(([cx,cy,fill,r], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={r * 2.5} fill={fill} opacity="0.08">
              <animate attributeName="r" values={`${r*2}; ${r*3.5}; ${r*2}`}
                dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={cx} cy={cy} r={r} fill={fill} opacity="0.8" />
          </g>
        ))}
      </svg>

      {/* ── Main content grid ─────────────────────── */}
      <div className="container hero__inner">

        {/* LEFT: Headline + CTAs */}
        <div className="hero__content">

          <div className="hero__badge">
            <span className="hero__badge-dot" />
            India's Trusted Cloud &amp; DevOps Partner Since 2014
          </div>

          {/* Terminal-style label above title */}
          {/* <div className="hero__cmd-label" aria-hidden="true">
            <span className="hero__cmd-prompt">$</span>
            <span className="hero__cmd-text">
              xammer --deploy cloud-excellence --region IN
            </span>
            <span className="hero__cmd-cursor" />
          </div> */}

          <h1 className="hero__title">
            <span className="hero__title-line">Engineer Faster.</span>
            <span className="hero__title-line hero__title-gradient">Scale Smarter.</span>
            <span className="hero__title-line">Save More.</span>
          </h1>

          <p className="hero__desc">
            Xammer helps <strong>Indian enterprises and growing startups</strong> cut
            cloud infrastructure costs by <strong>30–40%</strong>, automate every
            deployment with battle-tested DevOps pipelines, and modernise legacy
            systems — backed by a contractual <strong>99.9% uptime SLA</strong>.
          </p>

          <div className="hero__ctas">
            <Link to="/contact" className="btn-primary animate-pulse-glow">
              Get Free Cloud Audit <ArrowRight size={15} />
            </Link>
            <Link to="/about" className="btn-secondary">
              <PlayCircle size={15} />
              Watch How We Work
            </Link>
          </div>

        </div>

        {/* RIGHT: Terminal + Metrics */}
        {/* <div className="hero__visual"> */}

          {/* Terminal window */}
          {/* <div className="hero__terminal">
            <div className="hero__terminal-bar">
              <div className="hero__terminal-dots">
                <span style={{ background: '#FF5F56' }} />
                <span style={{ background: '#FFBD2E' }} />
                <span style={{ background: '#27C93F' }} />
              </div>
              <div className="hero__terminal-title">xammer-ops — production</div>
              <div className="hero__terminal-live">
                <span className="hero__terminal-live-dot" />
                LIVE
              </div>
            </div> */}

            {/* <div className="hero__terminal-body" ref={terminalRef}>
              {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
                <div className="hero__t-line" key={`${i}-${visibleLines}`}>
                  {line.type === 'cmd' ? (
                    <>
                      <span className="hero__t-prompt">
                        xammer<span className="hero__t-path">:{line.prompt}</span>$
                      </span>
                      <span className="hero__t-cmd">{line.text}</span>
                    </>
                  ) : (
                    <span className={
                      line.type === 'success' ? 'hero__t-success' :
                      line.type === 'warn'    ? 'hero__t-warn'    :
                      'hero__t-info'
                    }>
                      {line.text}
                    </span>
                  )}
                </div>
              ))} */}
              {/* Blinking cursor */}
              {/* {visibleLines < TERMINAL_LINES.length && (
                <div className="hero__t-line">
                  <span className="hero__t-prompt">
                    xammer<span className="hero__t-path">:~</span>$
                  </span>
                  <span className="hero__t-cursor-blink" />
                </div>
              )}
            </div>
          </div> */}

          {/* CI/CD pipeline strip */}
          {/* <div className="hero__pipeline">
            <span className="hero__pipeline-label">pipeline:</span>
            <div className="hero__pipeline-steps">
              {[
                { label: '✓ Build', state: 'done' },
                { label: '→',       state: 'arrow' },
                { label: '✓ Test',  state: 'done' },
                { label: '→',       state: 'arrow' },
                { label: '⟳ Stage', state: 'running' },
                { label: '→',       state: 'arrow' },
                { label: '⬤ Prod',  state: 'pending' },
              ].map((s, i) =>
                s.state === 'arrow' ? (
                  <span className="hero__pipeline-arrow" key={i}>{s.label}</span>
                ) : (
                  <span
                    key={i}
                    className={`hero__pipeline-step hero__pipeline-step--${s.state}`}
                  >
                    {s.label}
                  </span>
                )
              )}
            </div>
          </div> */}
          {/* RIGHT: Hero Image */}
<div className="hero__visual">
  <img
    src="/images/hero-img.jpg" // Update with your image path
    alt="Cloud DevOps Illustration"
    className="hero__image"
  />
</div>

          {/* Metric cards */}
          {/* <div className="hero__metrics">
            <div className="hero__metric-card">
              <div className="hero__metric-icon" style={{ background: 'rgba(63,185,80,0.12)', color: 'var(--green)' }}>
                <Lock size={15} />
              </div>
              <div>
                <div className="hero__metric-value" style={{ color: 'var(--green)' }}>99.9%</div>
                <div className="hero__metric-label">Uptime SLA</div>
              </div>
            </div>
            <div className="hero__metric-card">
              <div className="hero__metric-icon" style={{ background: 'rgba(187,134,252,0.12)', color: 'var(--violet)' }}>
                <TrendingDown size={15} />
              </div>
              <div>
                <div className="hero__metric-value" style={{ color: 'var(--violet)' }}>↓38%</div>
                <div className="hero__metric-label">Cloud Cost</div>
              </div>
            </div>
            <div className="hero__metric-card">
              <div className="hero__metric-icon" style={{ background: 'rgba(88,166,255,0.12)', color: 'var(--blue)' }}>
                <Zap size={15} />
              </div>
              <div>
                <div className="hero__metric-value" style={{ color: 'var(--blue)' }}>70%</div>
                <div className="hero__metric-label">Faster Deploy</div>
              </div>
            </div>
          </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
