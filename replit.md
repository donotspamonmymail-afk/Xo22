# LegalApex - Indian Legal Services Marketing Website

## Overview
A premium single-page marketing website for "LegalApex" - an Indian legal services platform. The site serves as a lead-collection tool via WhatsApp with transparent pricing, service listings, and trust-building content. Features comprehensive SEO with server-side injection of JSON-LD schemas and meta tags.

## Tech Stack
- React + Vite (frontend)
- Express.js (backend for SPA serving + SEO injection + robots.txt/sitemap.xml)
- Tailwind CSS with custom design tokens
- Framer Motion (animations)
- Lucide React (icons)

## Architecture
- Single-page scroll website (no routing needed beyond landing)
- **Centralized data**: All configurable content lives in `shared/site-config.ts` (single source of truth for both server and client)
- Client-side data layer in `client/src/lib/site-data.ts` adds Lucide icons and UI-specific formatting on top of shared config
- WhatsApp deep-linking for lead capture (wa.me/917302617785) with service-specific pre-filled messages
- Dark/light theme with localStorage persistence, defaults to light
- Server-side SEO injection via Express middleware (meta tags + JSON-LD schemas injected into HTML before serving)

## Project Structure
- `shared/site-config.ts` - **SINGLE SOURCE OF TRUTH** for all configurable content (business info, services, pricing, FAQs, steps, cities, stats, SEO keywords). Edit this file to change any content across the entire site.
- `client/src/lib/site-data.ts` - Client-side data layer that imports from shared config and adds Lucide icons
- `client/src/lib/whatsapp.ts` - WhatsApp link utilities (uses shared config for phone number)
- `client/src/components/` - All section components:
  - `navbar.tsx` - Fixed nav with smooth scroll, mobile menu, theme toggle
  - `hero-section.tsx` - Hero with stats bar, trust badges, CTAs
  - `services-section.tsx` - 6 legal service cards with WhatsApp CTAs
  - `pricing-section.tsx` - 3 pricing tiers
  - `how-it-works-section.tsx` - 4-step process
  - `why-section.tsx` - 5 reason cards
  - `faq-section.tsx` - 8 FAQ accordion items
  - `cities-bar.tsx` - "Trusted across India" with 12 city names
  - `cta-banner.tsx` - Gradient call-to-action banner
  - `footer-section.tsx` - Full footer with links and contact info
  - `whatsapp-fab.tsx` - Floating WhatsApp button (desktop)
  - `mobile-whatsapp-cta.tsx` - Sticky bottom WhatsApp CTA (mobile only)
  - `back-to-top.tsx` - Back to top scroll button
  - `theme-provider.tsx` - Dark/light theme context
- `client/src/pages/landing.tsx` - Main landing page assembling all sections
- `server/seo.ts` - SEO generation (meta tags, JSON-LD schemas, robots.txt, sitemap.xml) from shared config
- `server/routes.ts` - Express routes for robots.txt and sitemap.xml
- `server/index.ts` - Express server with SEO injection middleware

## SEO Implementation
- **Server-side injection**: Meta tags and 12 JSON-LD schemas injected into HTML via Express middleware before serving
- **JSON-LD schemas**: Organization, LegalService, FAQPage, 6x Service+Offer, BreadcrumbList, HowTo, WebSite
- **Meta tags**: OG (full suite), Twitter Cards, canonical (legalapex.in), geo.region IN, hreflang en-IN, theme-color, robots max-snippet:-1, DNS prefetch
- **robots.txt** and **sitemap.xml** served from Express routes
- **Semantic HTML**: skip-to-content link, aria-labels, aria-labelledby on sections, proper heading hierarchy (single H1)
- All SEO content generated dynamically from `shared/site-config.ts`

## Brand
- Name: LegalApex
- Domain: legalapex.in
- Email: hello@legalapex.in
- Tagline: "Simple. Legal. Done Right."
- WhatsApp: +91 7302617785
- Primary CTA: WhatsApp chat
- Coverage: Pan India

## Design
- Color: Deep blue primary (#3B72D9 light / #4B82E9 dark), neutral grays
- Fonts: Plus Jakarta Sans (headings), Inter (body)
- Style: Premium SaaS aesthetic (Stripe/Linear inspired)
- Spacing: Consistent p-6 cards, py-20/28 sections
- Theme: Defaults to light, user can toggle to dark

## User Preferences
- Always default to light theme
- All content should be easily editable from one centralized file (shared/site-config.ts)
- Best possible SEO implementation
- Zero bugs policy

## Recent Changes
- 2026-02-10: Initial build - complete marketing website with all 7 sections
- 2026-02-10: Added centralized data architecture (shared/site-config.ts as single source of truth)
- 2026-02-10: Added new UI elements: stats bar, cities bar, CTA banner, back-to-top, mobile sticky WhatsApp CTA
- 2026-02-10: Comprehensive SEO: server-side injection of 12 JSON-LD schemas + advanced meta tags + robots.txt + sitemap.xml
- 2026-02-10: Semantic HTML, accessibility improvements, keyword optimization
- 2026-02-10: Added 2 new FAQ items (Pan India coverage + case tracking)
