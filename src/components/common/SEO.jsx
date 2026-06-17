import { Helmet } from 'react-helmet-async';

const SITE_NAME   = 'Xammer';
const AUTHOR      = 'Xammer IT Solutions';
const TWITTER     = '@XammerUni';
const OG_W        = '1200';
const OG_H        = '630';

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  schemas = [],
  noIndex = false,
}) => {
  const robots = noIndex ? 'noindex, nofollow' : 'index, follow';

  return (
    <Helmet>
      {/* ── Primary ─────────────────────────────────────────── */}
      <title>{title}</title>
      <meta name="title"       content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots"  content={robots} />
      <meta name="author"  content={AUTHOR} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* ── Open Graph / Facebook ───────────────────────────── */}
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:locale"      content="en_IN" />
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      {canonical && <meta property="og:url" content={canonical} />}
      {ogImage   && <meta property="og:image"        content={ogImage} />}
      {ogImage   && <meta property="og:image:width"  content={OG_W} />}
      {ogImage   && <meta property="og:image:height" content={OG_H} />}

      {/* ── Twitter Card ────────────────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:site"        content={TWITTER} />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* ── JSON-LD Schemas ─────────────────────────────────── */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
