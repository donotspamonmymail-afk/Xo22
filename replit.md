# LegalApex - Indian Legal Services Marketing Website

## Overview
A premium single-page marketing website for "LegalApex" - an Indian legal services platform. The site serves as a lead-collection tool via WhatsApp with transparent pricing, service listings, and trust-building content.

## Tech Stack
- React + Vite (frontend)
- Express.js (minimal backend for SPA serving)
- Tailwind CSS with custom design tokens
- Framer Motion (animations)
- Lucide React (icons)

## Architecture
- Single-page scroll website (no routing needed beyond landing)
- All content is static/hardcoded (no database)
- WhatsApp deep-linking for lead capture (wa.me/917302617785)
- Dark/light theme with localStorage persistence

## Project Structure
- `client/src/components/` - All section components (navbar, hero, services, pricing, how-it-works, why, faq, footer, whatsapp-fab)
- `client/src/components/theme-provider.tsx` - Dark/light theme context
- `client/src/lib/whatsapp.ts` - WhatsApp link utilities
- `client/src/pages/landing.tsx` - Main landing page assembling all sections

## Brand
- Name: LegalApex
- Tagline: "Simple. Legal. Done Right."
- WhatsApp: +91 7302617785
- Primary CTA: WhatsApp chat

## Design
- Color: Deep blue primary (#3B72D9 light / #4B82E9 dark), neutral grays
- Fonts: Plus Jakarta Sans (headings), Inter (body)
- Style: Premium SaaS aesthetic (Stripe/Linear inspired)
- Spacing: Consistent p-6 cards, py-20/28 sections

## Recent Changes
- 2026-02-10: Initial build - complete marketing website with all 7 sections
