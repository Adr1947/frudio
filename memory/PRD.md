# frudio — No-Code Web Design Service Landing Page

## Original Problem Statement
Build a landing page for a no-code web design service named frudio that delivers result and business oriented websites quickly using AI tools.

## User Choices (from intake)
- Goal: Lead generation (contact form)
- Visual style: Light, clean & minimal — Awwwards Site-of-the-Day level craft
- Sections: Full set — hero, services, process, portfolio, pricing, testimonials, FAQ, contact
- Contact form: frontend-only (no backend send)
- Language/tone: English, confident & result-driven

## Architecture
- Single-page React app (CRA template), no routing, no backend dependency
- Smooth scrolling: Lenis (v1.3.26) with prefers-reduced-motion fallback to native scrollIntoView
- Animation: framer-motion v11 — masked line-by-line hero reveal, scroll-triggered reveals (whileInView once), layoutId pills (portfolio filter, pricing toggle), 3D tilt + mouse spotlight on hero showcase, scroll parallax
- Design system in tailwind.config.js + src/index.css: paper #FAF9F6, ink #111110, vermillion #F04A23, pine #0D2C22; fonts Outfit (display) / Plus Jakarta Sans (body) / JetBrains Mono (labels) / Instrument Serif (editorial accents)
- Original SVG logo mark (geometric "f") used in nav, footer, and as favicon.svg
- ErrorBoundary wraps the app; grain overlay; data-testids on every interactive element

## Sections Implemented (2026-10-14)
1. Sticky glass nav with mobile sheet
2. Kinetic hero — masked 3-line reveal, serif italic "AI speed." accent, dual CTA, 3D browser-frame showcase with floating stat badges + mouse spotlight + scroll parallax
3. Editorial marquee (slow 48s drift, pause-on-hover)
4. Services bento grid (5 cards, asymmetric 12-col Tetris layout)
5. Process — 4-step 10-day velocity engine timeline
6. Filterable portfolio (All/SaaS/E-Commerce/Agencies, layout animations, 6 projects)
7. Pricing — 3 tiers with per-project / monthly retainer toggle, featured dark card
8. Testimonials — 3 client cards with avatars + metric chips
9. FAQ — 6-question Radix accordion
10. Contact — budget pills, service chips, validated form, animated success state (frontend-only)
11. Footer — dark, giant frudio watermark, status pill, socials

## Personas
- Startup founder needing a launch-ready site fast
- SMB owner replacing an outdated site without agency timelines
- Marketing lead driving lead-gen with conversion-focused design

## Backend
Untouched (frontend-only per user choice). Contact form simulates a 1.1s send then shows success state; no data is stored or emailed.

## Backlog / Next
- P0: Wire contact form to real email (Resend) or DB storage
- P1: Real case-study pages for portfolio items; SEO pass (sitemap, JSON-LD) via farm-seo-setup
- P2: Live pricing checkout (Stripe), blog/resources for inbound
