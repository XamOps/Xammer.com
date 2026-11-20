import './CertifiedBadges.css';

const badges = [
  { src: '/images/badges/finops-foundation-member.png',    alt: 'FinOps Foundation General Member', mod: 'finops' },
  { src: '/images/badges/aws-premier-tier-partner.png',    alt: 'AWS Premier Tier Services Partner', mod: 'aws' },
  { src: '/images/badges/google-cloud-partner.png',        alt: 'Google Cloud Partner', mod: 'gcp' },
  { src: '/images/badges/microsoft-solutions-partner.png', alt: 'Microsoft Solutions Partner', mod: 'ms' },
];

const CertifiedBadges = () => (
  <section className="badges" aria-label="Cloud partnerships and memberships">
    <div className="container badges__inner">
      <h2 className="badges__heading">
        <span>Certified Across Every Cloud.</span>
        <span>Trusted at Enterprise Scale.</span>
      </h2>

      <ul className="badges__list">
        {badges.map((b) => (
          <li className={`badges__item badges__item--${b.mod}`} key={b.mod}>
            <img
              src={b.src}
              alt={b.alt}
              className="badges__img"
              loading="lazy"
              draggable="false"
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default CertifiedBadges;
