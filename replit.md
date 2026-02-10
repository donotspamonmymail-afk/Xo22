# LegalApex - Indian Legal Services Marketing Website

## Overview
A premium multi-page marketing website for "LegalApex" - an Indian legal services platform. The site serves as a lead-collection tool via WhatsApp with transparent pricing, service listings, and trust-building content. Features 20+ indexable pages with comprehensive per-page SEO, server-side injection of JSON-LD schemas and meta tags.

## Tech Stack
- React + Vite (frontend)
- Express.js (backend for SPA serving + SEO injection + robots.txt/sitemap.xml)
- Tailwind CSS with custom design tokens
- Framer Motion (animations)
- Lucide React (icons)
- wouter (client-side routing)

## Architecture
- **Multi-page site** with wouter routing and React.lazy code splitting for performance
- **Centralized data**: All configurable content lives in `shared/site-config.ts` (single source of truth for both server and client)
- Client-side data layer in `client/src/lib/site-data.ts` adds Lucide icons and UI-specific formatting on top of shared config
- WhatsApp deep-linking for lead capture (wa.me/917302617785) with service-specific pre-filled messages
- Dark/light theme with localStorage persistence, defaults to light
- **Route-aware SEO injection**: Express middleware detects request path and generates unique meta tags + JSON-LD per page
- ScrollToTop component ensures page scrolls to top on navigation

## Routes
- `/` - Landing page (hero, services, pricing, how-it-works, why-us, faq, cities, cta-banner)
- `/services/:slug` - 6 service detail pages (name-change, gst-registration, trademark-filing, company-registration, iso-certification, itr-filing)
- `/blog` - Blog index with grid of 8 blog posts
- `/blog/:slug` - Individual blog post pages with breadcrumbs and article content
- `/about` - About page with mission, values, team
- `/contact` - Contact page with methods and service selection
- `/privacy-policy` - Privacy policy
- `/terms-of-service` - Terms of service
- `/refund-policy` - Refund policy

## Project Structure
- `shared/site-config.ts` - **SINGLE SOURCE OF TRUTH** (1400+ lines) for all configurable content: business info, services, pricing, FAQs, steps, cities, stats, SEO keywords, service detail pages, blog posts, about page, contact page, legal pages
- `client/src/App.tsx` - Router with React.lazy code splitting, ScrollToTop component
- `client/src/lib/site-data.ts` - Client-side data layer (imports from shared config, adds Lucide icons)
- `client/src/lib/whatsapp.ts` - WhatsApp link utilities
- `client/src/components/` - Section components:
  - `navbar.tsx` - Fixed nav with smooth scroll + page routing, mobile menu, theme toggle
  - `hero-section.tsx` - Hero with stats bar, trust badges, CTAs
  - `services-section.tsx` - 6 service cards with "Get Quote" and "Learn More" CTAs
  - `pricing-section.tsx` - 3 pricing tiers
  - `how-it-works-section.tsx` - 4-step process
  - `why-section.tsx` - 5 reason cards
  - `faq-section.tsx` - 8 FAQ accordion items
  - `cities-bar.tsx` - "Trusted across India" with 12 city names
  - `cta-banner.tsx` - Gradient call-to-action banner
  - `footer-section.tsx` - Full footer with service links, company links, legal page links
  - `whatsapp-fab.tsx` - Floating WhatsApp button (desktop, landing only)
  - `mobile-whatsapp-cta.tsx` - Sticky bottom WhatsApp CTA (mobile, landing only)
  - `back-to-top.tsx` - Back to top scroll button (landing only)
  - `theme-provider.tsx` - Dark/light theme context
  - `legal-page-layout.tsx` - Shared layout for legal pages
- `client/src/pages/` - Page components:
  - `landing.tsx` - Main landing page assembling all sections
  - `service-detail.tsx` - Dynamic service detail page (uses slug param)
  - `blog-index.tsx` - Blog listing page
  - `blog-post.tsx` - Individual blog post page
  - `about.tsx` - About page
  - `contact.tsx` - Contact page
  - `privacy-policy.tsx`, `terms-of-service.tsx`, `refund-policy.tsx` - Legal pages
  - `not-found.tsx` - 404 page
- `server/seo.ts` - Route-aware SEO: per-page meta tags, JSON-LD schemas, robots.txt, sitemap.xml
- `server/routes.ts` - Express routes for robots.txt and sitemap.xml
- `server/index.ts` - Express server with path-aware SEO injection middleware

## SEO Implementation
- **Route-aware server-side injection**: Each page gets unique title, description, canonical URL, OG tags, and JSON-LD schemas based on request path
- **Sitemap**: 20+ URLs covering all pages, services, blog posts, and legal pages with appropriate priorities
- **JSON-LD schemas by page type**:
  - Landing: Organization, LegalService, FAQPage, 6x Service+Offer, HowTo, WebSite
  - Service pages: Service+Offer, FAQPage (service-specific), BreadcrumbList
  - Blog posts: Article, BreadcrumbList
  - About: AboutPage + Organization
  - Contact: ContactPage + Organization
- **Meta tags**: Per-page title, description, canonical, OG full suite, Twitter Cards, hreflang en-IN, geo.region IN, robots max-snippet:-1
- **robots.txt** and **sitemap.xml** served from Express routes
- **8 SEO blog posts** targeting Indian legal search queries (company registration, name change, GST, trademark, ITR, ISO, documents guide, LLP vs Pvt Ltd)
- **Semantic HTML**: aria-labels, aria-labelledby on sections, proper heading hierarchy (single H1 per page), breadcrumbs

## Brand
- Name: LegalApex
- Domain: legalapex.in
- Email: hello@legalapex.in
- Tagline: "Simple. Legal. Done Right."
- WhatsApp: +91 7302617785
- Primary CTA: WhatsApp chat with varied contextual wording (Get Free Consultation, Get Quote, Chat with Us, Learn More)
- Coverage: Pan India

## Design
- Color: Deep blue primary (HSL 220 72%), neutral grays
- Fonts: Plus Jakarta Sans (headings), Inter (body)
- Style: Premium SaaS aesthetic (Stripe/Linear inspired)
- Spacing: Consistent p-6 cards, py-20/28 sections
- Theme: Defaults to light, user can toggle to dark

## User Preferences
- Always default to light theme
- All content should be easily editable from one centralized file (shared/site-config.ts)
- Best possible SEO implementation with 20+ indexable pages
- Zero bugs policy
- Future app.legalapex.in will be separate dashboard/billing site

## Recent Changes
- 2026-02-10: Initial build - complete marketing website with all 7 sections
- 2026-02-10: Added centralized data architecture (shared/site-config.ts as single source of truth)
- 2026-02-10: V2 overhaul: Multi-page site with wouter routing and React.lazy code splitting
- 2026-02-10: Created 6 service detail pages with rich content (documents, process steps, FAQs, related blogs)
- 2026-02-10: Created 8 SEO blog posts (1000+ words each) targeting high-traffic Indian legal keywords
- 2026-02-10: Created About, Contact, Privacy Policy, Terms of Service, Refund Policy pages
- 2026-02-10: Updated stats to realistic numbers (127+ clients, 4.8 rating, 15+ experts, 7+ years)
- 2026-02-10: Varied CTA copy across sections (Get Free Consultation, Get Quote, Learn More, Chat with Us)
- 2026-02-10: Route-aware SEO: per-page meta tags, JSON-LD, sitemap with 20+ URLs
- 2026-02-10: Navbar updated with Blog/About page links and "Free Consultation" CTA
- 2026-02-10: Footer updated with real service, company, and legal page links via wouter
