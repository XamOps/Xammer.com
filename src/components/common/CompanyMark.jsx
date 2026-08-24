import './CompanyMark.css';

const initials = (name = '') =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

/* Letter-mark badge used in place of an uploaded client logo file. */
const CompanyMark = ({ name, accent = 'blue', size = 'md' }) => (
  <div
    className={`company-mark company-mark--${size} company-mark--${accent}`}
    aria-hidden="true"
  >
    <span>{initials(name)}</span>
  </div>
);

export default CompanyMark;
