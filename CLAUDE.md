# Ganson Marketing Website

## Company
- **Name**: Ganson Building & Civil Engineering Ltd
- **Founded**: 2004 by Paul McQuaid and David Rogers (both QUB Civil Engineering graduates)
- **Offices**: Balbriggan, Co. Dublin, Ireland & Castlewellan, Co. Down, UK
- **Current workload**: €80m+
- **Sectors**: Healthcare, education, commercial, retail, tourism, high-tech, refurbishment, civil engineering
- **Certifications**: ISO 9001:2008, ISO 14001:2004
- **Key differentiator**: 100% credit rating, strong financial base, 20+ years experience
- **Procurement routes**: Traditional build, design & build, management contracting, early contractor engagement

## Brand Voice
Professional, confident, understated authority. Not flashy or boastful — let the work speak.
Irish construction industry, but operating at a level that competes with UK/EU tier-1 contractors.

## Design Direction
Architectural editorial aesthetic. Think Dezeen meets premium construction.
NOT generic AI template work — agency-designed quality.

## Design System

### Colour Palette
| Token | Hex | Role |
|-------|-----|------|
| `--color-brand-red` | `#d00918` | CTAs, accents, active states |
| `--color-brand-red-dark` | `#a80714` | Hover states on red elements |
| `--color-brand-red-light` | `#e83a47` | Lighter red variant |
| `--color-navy` | `#122047` | Dark sections, header, footer, headings on light |
| `--color-navy-light` | `#1a2d5e` | Lighter navy variant |
| `--color-navy-dark` | `#0c1530` | Darker navy (contact CTA bg) |
| `--color-ivory` | `#f7f4ef` | Light section backgrounds |
| `--color-sand` | `#e6e1d8` | Cards, subtle borders |
| `--color-cream` | `#f0ece4` | Body text on dark backgrounds |
| `--color-dark-grey` | `#4a4a4a` | Body text on light backgrounds |
| `--color-mid-grey` | `#7a7a7a` | Secondary text |
| `--color-light-grey` | `#c4c4c4` | Borders, disabled states |

### Typography
- **Display**: Playfair Display (Google Font via next/font) — `var(--font-display)`
- **Body**: DM Sans (Google Font via next/font) — `var(--font-body)`
- Font variables set in `app/fonts.ts`, applied to `<html>` in `app/layout.tsx`

### Section Rhythm
- Light sections: Ivory bg + Navy headings + Dark grey body + Red accents
- Dark sections: Navy bg + White headings + Cream body + Red accents
- **Important**: Any element using `bg-navy` class auto-gets white heading colors via CSS `[class*="bg-navy"]` selectors in `globals.css`. No need to add `section-dark` class manually.

## Tech Stack
- Next.js 16.1.6 (App Router, TypeScript)
- Tailwind CSS v4 (CSS-first config — NO tailwind.config.ts)
- Framer Motion for animations
- Sharp for image optimisation
- pnpm as package manager

### Tailwind CSS v4 Notes
- Config is in `app/globals.css` using `@import "tailwindcss"` + `@theme {}` directive
- All color tokens, fonts, spacing, and animation vars defined in `@theme {}`
- No separate tailwind.config.ts file exists — everything is CSS-first
- Custom utilities (`.noise-overlay`, `.section-dark`, `.section-light`) in globals.css

### Next.js 16 Notes
- `params` in dynamic routes is a Promise — must `const { slug } = await params`
- All components using hooks/motion must have `'use client'` directive

## Logo & Assets
- **Logo source PNGs**: `logos/` directory (high-res originals, not tracked in git)
  - `GANSON PDF white (1).png` — Red mark + white "GANSON" text, transparent bg (for dark backgrounds)
  - `GANSON png Hi-Res (1).png` — Red mark + black "GANSON" text, transparent bg (for light backgrounds)
- **Web-optimized logos**: `public/assets/logos/`
  - `ganson-mark.png` — Resized mark (400px, used in header & footer)
  - `ganson-logo-full.png` — Full logo with text (400px)
  - `ganson-favicon.png` — 32px favicon
  - `ganson-apple-icon.png` — 180px apple touch icon
- **Project placeholders**: `public/assets/projects/` (10 SVG placeholders — replace with real photography)
- **Team placeholders**: `public/assets/team/` (8 SVG placeholders — replace with real photography)

## Pages (28 routes)
| Route | File | Notes |
|-------|------|-------|
| `/` | `app/page.tsx` | Homepage: Hero, TrustedBy, FeaturedProjects, WhyGanson, AboutTeaser, ContactCTA |
| `/about` | `app/about/page.tsx` | Company story, team grid, timeline |
| `/projects` | `app/projects/page.tsx` | Project grid with sector filtering |
| `/projects/[slug]` | `app/projects/[slug]/page.tsx` | 10 project detail pages |
| `/services` | `app/services/page.tsx` | Sector cards with descriptions |
| `/policies` | `app/policies/page.tsx` | Accordion-based policy display |
| `/careers` | `app/careers/page.tsx` | Job listings |
| `/news` | `app/news/page.tsx` | News article grid |
| `/news/[slug]` | `app/news/[slug]/page.tsx` | 5 news detail pages |
| `/contact` | `app/contact/page.tsx` | Contact form + office details |
| `/sitemap.xml` | `app/sitemap.ts` | Auto-generated sitemap |
| `/robots.txt` | `app/robots.ts` | Robots config |

## Key Components

### Layout
- `components/layout/header.tsx` — Fixed header, transparent→navy on scroll, subtle white bottom shadow, mobile overlay menu
- `components/layout/footer.tsx` — Navy bg, 3-column grid, noise texture overlay

### Animations
- `components/animations/scroll-reveal.tsx` — Fade-up on scroll (useInView-based, starts opacity:0)
- `components/animations/stagger-text.tsx` — Word-by-word text reveal
- `components/animations/parallax-section.tsx` — Parallax scroll effect
- `components/animations/page-transition.tsx` — Page enter/exit transitions

### Homepage Sections
- `components/sections/hero.tsx` — Full-viewport, navy bg, geometric triangle bg
- `components/sections/trusted-by.tsx` — Infinite CSS scroll marquee of client names
- `components/sections/featured-projects.tsx` — 4 featured project cards on navy
- `components/sections/why-ganson.tsx` — Animated stat counters on ivory
- `components/sections/about-teaser.tsx` — Company overview on navy (uses `section-dark`)
- `components/sections/contact-cta.tsx` — Contact form + offices on navy-dark

### UI Components
- `components/ui/custom-cursor.tsx` — Red dot cursor, scales on hover
- `components/ui/project-filter.tsx` — AnimatePresence sector filtering
- `components/ui/accordion.tsx` — Expandable sections for policies
- `components/ui/contact-form.tsx` — Form with client-side validation

## Data Layer
- `lib/types.ts` — All TypeScript interfaces (Project, TeamMember, NewsArticle, etc.)
- `lib/data/projects.ts` — 10 Irish construction projects (`readonly Project[]`)
- `lib/data/team.ts` — 8 team members
- `lib/data/news.ts` — 5 news articles
- `lib/data/policies.ts` — 9 company policies
- `lib/data/careers.ts` — 5 job listings
- `lib/data/clients.ts` — 12 client organisations
- `lib/constants.ts` — Company info, offices, nav items, sectors
- `lib/utils.ts` — `cn()`, `formatCurrency()`, `slugify()`

## Commands
- `pnpm dev` — Start dev server (default port 3000, use `--port 3010` if needed)
- `pnpm build` — Production build (all 28 routes build successfully)
- `pnpm lint` — Run ESLint

## Known Issues / TODOs
- Replace placeholder SVG project images with real photography
- Replace placeholder SVG team headshots with real photography
- Footer phone numbers show as `+353 1 XXX XXXX` — need real numbers
- Contact form has client-side validation only — needs backend/API route
- Framer Motion console warnings about animating `backgroundColor` (non-breaking)
- Copyright year hardcoded as 2024 in footer — should be dynamic
