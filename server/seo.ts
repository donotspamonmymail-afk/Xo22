import {
  SITE_CONFIG,
  SERVICES_CONFIG,
  FAQS_CONFIG,
  STEPS_CONFIG,
  SEO_KEYWORDS,
  STATS_CONFIG,
  SERVICE_DETAIL_CONFIG,
  BLOG_POSTS_CONFIG,
  ABOUT_PAGE_CONFIG,
  CONTACT_PAGE_CONFIG,
  LEGAL_PAGES_CONFIG,
} from "../shared/site-config";

interface PageSeo {
  title: string;
  description: string;
  canonical: string;
  ogType: string;
  keywords?: string[];
}

function getPageSeo(path: string): PageSeo {
  const S = SITE_CONFIG;
  const base = S.url;

  if (path === "/about") {
    return {
      title: ABOUT_PAGE_CONFIG.metaTitle,
      description: ABOUT_PAGE_CONFIG.metaDescription,
      canonical: `${base}/about`,
      ogType: "website",
    };
  }

  if (path === "/contact") {
    return {
      title: CONTACT_PAGE_CONFIG.metaTitle,
      description: CONTACT_PAGE_CONFIG.metaDescription,
      canonical: `${base}/contact`,
      ogType: "website",
    };
  }

  if (path === "/blog") {
    return {
      title: "Legal Guides & Insights | LegalApex",
      description: "Expert guides on company registration, GST, trademark filing, name change, ITR, and ISO certification in India. Practical legal advice from experienced professionals.",
      canonical: `${base}/blog`,
      ogType: "website",
    };
  }

  const blogMatch = path.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    const post = BLOG_POSTS_CONFIG.find((p) => p.slug === blogMatch[1]);
    if (post) {
      return {
        title: post.metaTitle,
        description: post.metaDescription,
        canonical: `${base}/blog/${post.slug}`,
        ogType: "article",
        keywords: post.keywords,
      };
    }
  }

  const serviceMatch = path.match(/^\/services\/(.+)$/);
  if (serviceMatch) {
    const detail = SERVICE_DETAIL_CONFIG.find((s) => s.slug === serviceMatch[1]);
    if (detail) {
      return {
        title: detail.metaTitle,
        description: detail.metaDescription,
        canonical: `${base}/services/${detail.slug}`,
        ogType: "website",
      };
    }
  }

  if (path === "/privacy-policy") {
    return {
      title: LEGAL_PAGES_CONFIG.privacy.metaTitle,
      description: LEGAL_PAGES_CONFIG.privacy.metaDescription,
      canonical: `${base}/privacy-policy`,
      ogType: "website",
    };
  }

  if (path === "/terms-of-service") {
    return {
      title: LEGAL_PAGES_CONFIG.terms.metaTitle,
      description: LEGAL_PAGES_CONFIG.terms.metaDescription,
      canonical: `${base}/terms-of-service`,
      ogType: "website",
    };
  }

  if (path === "/refund-policy") {
    return {
      title: LEGAL_PAGES_CONFIG.refund.metaTitle,
      description: LEGAL_PAGES_CONFIG.refund.metaDescription,
      canonical: `${base}/refund-policy`,
      ogType: "website",
    };
  }

  return {
    title: `${S.name} - ${S.tagline} | Trusted Legal Services India`,
    description: S.seoDescription,
    canonical: base,
    ogType: "website",
    keywords: SEO_KEYWORDS,
  };
}

export function generateMetaTags(path: string = "/"): string {
  const S = SITE_CONFIG;
  const page = getPageSeo(path);
  const keywords = page.keywords || SEO_KEYWORDS;

  return [
    `<title>${page.title}</title>`,
    `<meta name="description" content="${page.description}" />`,
    `<meta name="keywords" content="${keywords.join(", ")}" />`,
    `<meta name="author" content="${S.name}" />`,
    `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />`,
    `<link rel="canonical" href="${page.canonical}" />`,
    `<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />`,
    `<meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />`,
    `<meta name="format-detection" content="telephone=no" />`,
    `<meta property="og:title" content="${page.title}" />`,
    `<meta property="og:description" content="${page.description}" />`,
    `<meta property="og:type" content="${page.ogType}" />`,
    `<meta property="og:url" content="${page.canonical}" />`,
    `<meta property="og:site_name" content="${S.name}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:image" content="${S.ogImage}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${S.name} - Trusted Legal Services in India" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${page.title}" />`,
    `<meta name="twitter:description" content="${page.description}" />`,
    `<meta name="twitter:image" content="${S.ogImage}" />`,
    `<link rel="alternate" hreflang="en-IN" href="${page.canonical}" />`,
    `<link rel="alternate" hreflang="en" href="${page.canonical}" />`,
    `<meta name="geo.region" content="IN" />`,
    `<meta name="geo.placename" content="India" />`,
    `<meta name="ICBM" content="20.5937, 78.9629" />`,
    `<meta name="revisit-after" content="7 days" />`,
    `<meta name="rating" content="general" />`,
    `<meta name="distribution" content="global" />`,
  ].join("\n    ");
}

export function generateJsonLdSchemas(path: string = "/"): string {
  const S = SITE_CONFIG;
  const schemas: object[] = [];

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

  schemas.push(organization);

  if (path === "/") {
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
        ratingValue: STATS_CONFIG.find((s) => s.key === "rating")?.value || "4.8",
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
      url: `${S.url}/services/${s.slug}`,
      offers: {
        "@type": "Offer",
        price: s.priceNumeric,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    }));

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

    schemas.push(legalService, faqPage, ...serviceSchemas, howTo, webSite);
  }

  const serviceMatch = path.match(/^\/services\/(.+)$/);
  if (serviceMatch) {
    const detail = SERVICE_DETAIL_CONFIG.find((s) => s.slug === serviceMatch[1]);
    const service = SERVICES_CONFIG.find((s) => s.slug === serviceMatch[1]);
    if (detail && service) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        name: detail.heroTitle,
        description: detail.heroDescription,
        provider: { "@type": "Organization", name: S.name, url: S.url },
        areaServed: { "@type": "Country", name: "India" },
        url: `${S.url}/services/${detail.slug}`,
        offers: {
          "@type": "Offer",
          price: service.priceNumeric,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      });

      if (detail.faqs.length > 0) {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: detail.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        });
      }

      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: S.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${S.url}/#services` },
          { "@type": "ListItem", position: 3, name: detail.heroTitle, item: `${S.url}/services/${detail.slug}` },
        ],
      });
    }
  }

  const blogMatch = path.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    const post = BLOG_POSTS_CONFIG.find((p) => p.slug === blogMatch[1]);
    if (post) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.publishDate,
        author: { "@type": "Organization", name: S.name, url: S.url },
        publisher: { "@type": "Organization", name: S.name, url: S.url },
        mainEntityOfPage: `${S.url}/blog/${post.slug}`,
        articleSection: post.category,
        keywords: post.keywords.join(", "),
      });

      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: S.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${S.url}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${S.url}/blog/${post.slug}` },
        ],
      });
    }
  }

  if (path === "/about") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: ABOUT_PAGE_CONFIG.heroTitle,
      description: ABOUT_PAGE_CONFIG.metaDescription,
      url: `${S.url}/about`,
      mainEntity: { "@type": "Organization", name: S.name, url: S.url },
    });
  }

  if (path === "/contact") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: CONTACT_PAGE_CONFIG.heroTitle,
      description: CONTACT_PAGE_CONFIG.metaDescription,
      url: `${S.url}/contact`,
      mainEntity: {
        "@type": "Organization",
        name: S.name,
        url: S.url,
        email: S.email,
        telephone: S.phone,
      },
    });
  }

  return schemas
    .map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
    .join("\n    ");
}

export function injectSeo(html: string, path: string = "/"): string {
  html = html.replace("<!-- SEO_META_INJECTION -->", generateMetaTags(path));
  html = html.replace("<!-- SEO_SCHEMA_INJECTION -->", generateJsonLdSchemas(path));
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
  const S = SITE_CONFIG;

  const pages: { loc: string; priority: string; changefreq: string }[] = [
    { loc: S.url, priority: "1.0", changefreq: "weekly" },
    { loc: `${S.url}/about`, priority: "0.8", changefreq: "monthly" },
    { loc: `${S.url}/contact`, priority: "0.8", changefreq: "monthly" },
    { loc: `${S.url}/blog`, priority: "0.9", changefreq: "weekly" },
  ];

  SERVICE_DETAIL_CONFIG.forEach((s) => {
    pages.push({
      loc: `${S.url}/services/${s.slug}`,
      priority: "0.9",
      changefreq: "monthly",
    });
  });

  BLOG_POSTS_CONFIG.forEach((p) => {
    pages.push({
      loc: `${S.url}/blog/${p.slug}`,
      priority: "0.7",
      changefreq: "monthly",
    });
  });

  pages.push(
    { loc: `${S.url}/privacy-policy`, priority: "0.3", changefreq: "yearly" },
    { loc: `${S.url}/terms-of-service`, priority: "0.3", changefreq: "yearly" },
    { loc: `${S.url}/refund-policy`, priority: "0.3", changefreq: "yearly" },
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${p.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
}
