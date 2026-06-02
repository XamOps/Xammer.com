import './PartnerLogos.css';

const partners = [
  { src: '/images/partners/xammer-aws-bg-logo.png',   alt: 'Amazon Web Services' },
  { src: '/images/partners/xammer-azure-bg-logo.png', alt: 'Microsoft Azure' },
  { src: '/images/partners/xammer-gcp-bg-logo.png',   alt: 'Google Cloud Platform' },
  { src: '/images/partners/yotta-logo-bg.png',         alt: 'Yotta Data Services' },
];

/* Repeat 4× for a smooth seamless marquee */
const marqueeItems = [...partners, ...partners, ...partners, ...partners];

const PartnerLogos = () => (
  <section className="partners" aria-label="Technology partners and certifications">
    <div className="container">
      <div className="partners__head">
        <div className="partners__label">Technology Partners &amp; Certifications</div>
        <div className="partners__subtitle">
          Authorised partnerships and certifications with leading cloud and technology vendors
        </div>
      </div>
    </div>

    <div className="partners__track-wrap">
      <div className="partners__track" aria-hidden="true">
        {marqueeItems.map((p, i) => (
          <div className="partners__logo" key={i}>
            <img
              src={p.src}
              alt={p.alt}
              className="partners__logo-img"
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerLogos;
