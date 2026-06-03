import './PageHero.css';

const PageHero = ({ badge, title, highlight, subtitle, accent = 'violet' }) => (
  <section className={`ph ph--${accent}`}>
    <div className="ph__grid" aria-hidden />
    <div className="ph__radial" aria-hidden />
    <div className="container ph__inner">
      {badge && (
        <div className={`ph__badge badge badge-${accent}`}>
          <span className="ph__dot" /> {badge}
        </div>
      )}
      <h1 className="ph__title">
        {title}{' '}
        {highlight && <span className={`ph__hl ph__hl--${accent}`}>{highlight}</span>}
      </h1>
      {subtitle && <p className="ph__sub">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
