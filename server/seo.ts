import {
  SITE_CONFIG,
  SERVICES_CONFIG,
  FAQS_CONFIG,
  STEPS_CONFIG,
  SEO_KEYWORDS,
  STATS_CONFIG,
} from "../shared/site-config";

export function generateMetaTags(): string {
  const S = SITE_CONFIG;
  return [
    `<meta name="description" content="${S.seoDescription}" />`,
    `<meta name="keywords" content="${SEO_KEYWORDS.join(", ")}" />`,
    `<meta name="author" content="${S.name}" />`,
    `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />`,
    `<link rel="canonical" href="${S.url}" />`,
    `<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />`,
    `<meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />`,
    `<meta name="format-detection" content="telephone=no" />`,
    `<meta property="og:title" content="${S.name} - ${S.tagline} | Trusted Legal Services India" />`,
    `<meta property="og:description" content="${S.seoDescription}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${S.url}" />`,
    `<meta property="og:site_name" content="${S.name}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:image" content="${S.ogImage}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${S.name} - Trusted Legal Services in India" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${S.name} - ${S.tagline}" />`,
    `<meta name="twitter:description" content="${S.seoDescription}" />`,
    `<meta name="twitter:image" content="${S.ogImage}" />`,
    `<link rel="alternate" hreflang="en-IN" href="${S.url}" />`,
    `<link rel="alternate" hreflang="en" href="${S.url}" />`,
    `<meta name="geo.region" content="IN" />`,
    `<meta name="geo.placename" content="India" />`,
    `<meta name="ICBM" content="20.5937, 78.9629" />`,
    `<meta name="revisit-after" content="7 days" />`,
    `<meta name="rating" content="general" />`,
    `<meta name="distribution" content="global" />`,
  ].join("\n    ");
}

export function generateJsonLdSchemas(): string {
  const S = SITE_CONFIG;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: S.name,
    url: S.url,
    email: S.email,
    telephone: S.phone,
    description: S.description,
    areaServed: { "@type": "Country", name: "India" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: S.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };

  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: S.name,
    url: S.url,
    telephone: S.phone,
    email: S.email,
    description: S.seoDescription,
    areaServed: { "@type": "Country", name: "India" },
    priceRange: `\u20B9${SERVICES_CONFIG[SERVICES_CONFIG.length - 1].priceNumeric} - \u20B9${SERVICES_CONFIG[0].priceNumeric}+`,
    knowsAbout: SERVICES_CONFIG.map((s) => s.title),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: STATS_CONFIG.find((s) => s.key === "rating")?.value || "4.9",
      reviewCount: STATS_CONFIG.find((s) => s.key === "clients")?.value.replace("+", "") || "127",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_CONFIG.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const serviceSchemas = SERVICES_CONFIG.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.seoDescription,
    provider: { "@type": "Organization", name: S.name, url: S.url },
    areaServed: { "@type": "Country", name: "India" },
    offers: {
      "@type": "Offer",
      price: s.priceNumeric,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  }));

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: S.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${S.url}/#services` },
      { "@type": "ListItem", position: 3, name: "Pricing", item: `${S.url}/#pricing` },
      { "@type": "ListItem", position: 4, name: "How It Works", item: `${S.url}/#how-it-works` },
      { "@type": "ListItem", position: 5, name: "FAQ", item: `${S.url}/#faq` },
    ],
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Get Legal Services from ${S.name}`,
    description: `Simple ${STEPS_CONFIG.length}-step process to get professional legal assistance in India through ${S.name}.`,
    step: STEPS_CONFIG.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: S.name,
    url: S.url,
    description: S.description,
    inLanguage: "en-IN",
  };

  const schemas = [organization, legalService, faqPage, ...serviceSchemas, breadcrumb, howTo, webSite];
  return schemas
    .map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
    .join("\n    ");
}

export function injectSeo(html: string): string {
  html = html.replace("<!-- SEO_META_INJECTION -->", generateMetaTags());
  html = html.replace("<!-- SEO_SCHEMA_INJECTION -->", generateJsonLdSchemas());
  return html;
}

export function getRobotsTxt(): string {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_CONFIG.url}/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /
`;
}

export function getSitemapXml(): string {
  const now = new Date().toISOString().split("T")[0];
  const sections = ["#services", "#pricing", "#how-it-works", "#why-us", "#faq"];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_CONFIG.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
${sections
  .map(
    (s) => `  <url>
    <loc>${SITE_CONFIG.url}/${s}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
}
