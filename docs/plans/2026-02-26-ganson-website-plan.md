# Ganson Marketing Website — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a complete, production-grade marketing website for Ganson Building & Civil Engineering with an architectural editorial aesthetic that feels agency-designed.

**Architecture:** Next.js 14+ App Router with TypeScript, Tailwind CSS v4 (CSS-first config), Framer Motion for animations. 8 pages: Home, About, Projects (+[slug]), Services, Policies, Careers, News (+[slug]), Contact. Content hardcoded in TypeScript data files, structured for future CMS integration.

**Tech Stack:** Next.js 14+, TypeScript, Tailwind CSS v4, Framer Motion, Sharp, pnpm

**Design doc:** `docs/plans/2026-02-26-ganson-website-design.md`

---

## Phase 1: Project Scaffolding & Design System

### Task 1.1: Initialize Next.js Project

**Step 1: Create Next.js app**

```bash
cd /Users/brendan/projects/ganson-web-app
pnpm create next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --turbopack
```

Note: If prompted about existing files, accept overwrite. The `.` means create in current directory.

**Step 2: Install additional dependencies**

```bash
pnpm add framer-motion sharp
pnpm add -D @types/node
```

**Step 3: Verify dev server starts**

```bash
pnpm dev
```

Expected: Dev server running on localhost:3000

**Step 4: Commit**

```bash
git add -A
git commit -m "chore: initialize Next.js 14 project with TypeScript, Tailwind v4, Framer Motion"
```

---

### Task 1.2: Create CLAUDE.md

**Step 1: Create CLAUDE.md at project root**

Create: `/Users/brendan/projects/ganson-web-app/CLAUDE.md`

```markdown
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
This site must NOT look like generic AI-generated template work. It should feel like it was designed
by a top-tier creative agency. Think: architectural editorial, not corporate template.

## Design System

### Colour Palette
| Token | Hex | Role |
|-------|-----|------|
| `--color-brand-red` | `#d00918` | CTAs, accents, active states |
| `--color-navy` | `#122047` | Dark sections, header, footer, headings on light |
| `--color-ivory` | `#f7f4ef` | Light section backgrounds |
| `--color-sand` | `#e6e1d8` | Cards, subtle borders |
| `--color-white` | `#ffffff` | Text on dark, clean areas |
| `--color-dark-grey` | `#4a4a4a` | Body text on light backgrounds |
| `--color-cream` | `#f0ece4` | Body text on dark backgrounds |

### Typography
- **Display**: Playfair Display (Google Font via next/font)
- **Body**: DM Sans (Google Font via next/font)

### Section Rhythm
- Light sections: Ivory bg + Navy headings + Dark grey body + Red accents
- Dark sections: Navy bg + White headings + Cream body + Red accents

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion for animations
- Sharp for image optimisation
- pnpm as package manager
- Deployed to Vercel (or Cloudflare Pages)

## Logo & Assets
Logo files are in `/logos/` at the project root — SVG versions in `/public/assets/logos/`.
Project photography goes in `/public/assets/projects/`
Team photography goes in `/public/assets/team/`

## Commands
- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm lint` — run ESLint
```

**Step 2: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: add CLAUDE.md with project context and design system"
```

---

### Task 1.3: Create SVG Logo & Asset Directory Structure

**Step 1: Create asset directories**

```bash
mkdir -p public/assets/logos public/assets/projects public/assets/team
```

**Step 2: Create SVG logo (colour version with text)**

Create: `public/assets/logos/ganson-logo.svg`

The logo is a red triangle/mountain with three horizontal white cuts on the left side creating a stepped effect, with "GANSON" text below in a bold geometric typeface. Recreate as clean SVG paths.

**Step 3: Create SVG logo (white version — mark only, no text)**

Create: `public/assets/logos/ganson-mark-white.svg`

White version of just the triangle mark for use on dark backgrounds.

**Step 4: Create SVG logo (navy version — mark only)**

Create: `public/assets/logos/ganson-mark-navy.svg`

Navy (#122047) version of the mark for light backgrounds.

**Step 5: Create SVG logo (white full logo with text)**

Create: `public/assets/logos/ganson-logo-white.svg`

Full logo (mark + text) in white for dark backgrounds.

**Step 6: Copy original PNGs as fallbacks**

```bash
cp "logos/GANSON PDF white (1).png" public/assets/logos/ganson-mark-white.png
cp "logos/GANSON png Hi-Res (1).png" public/assets/logos/ganson-logo.png
```

**Step 7: Create placeholder project images**

Create 10 placeholder images (1200x800 each) as simple SVG files with construction-themed colours and project names overlaid. These will be replaced with real photography later.

Create: `public/assets/projects/placeholder-1.svg` through `placeholder-10.svg`

**Step 8: Create placeholder team headshots**

Create 8 placeholder images (400x500 each) as simple SVG files with initials.

Create: `public/assets/team/placeholder-1.svg` through `placeholder-8.svg`

**Step 9: Commit**

```bash
git add public/assets/
git commit -m "feat: add SVG logos and placeholder project/team images"
```

---

### Task 1.4: Configure Design System (Tailwind v4 + Fonts)

**Step 1: Set up font definitions**

Create: `app/fonts.ts`

```typescript
import { Playfair_Display, DM_Sans } from 'next/font/google'

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700'],
})
```

**Step 2: Configure Tailwind v4 with design tokens**

Modify: `app/globals.css`

Replace the default Tailwind content with the full design system using `@import "tailwindcss"` and `@theme` directive. Include:

- All colour tokens (brand-red, navy, ivory, sand, white, dark-grey, cream)
- Font family tokens (--font-display: var(--font-playfair), --font-body: var(--font-dm-sans))
- Custom spacing scale
- Base styles (html smooth scroll, body font, selection colour)
- Noise texture utility class (.noise-overlay using CSS pseudo-element with SVG noise filter)
- Custom cursor styles

**Step 3: Update root layout with fonts**

Modify: `app/layout.tsx`

Apply font CSS variables to `<html>` element, set language to "en", add base metadata.

```typescript
import { playfair, dmSans } from '@/app/fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body bg-ivory text-dark-grey antialiased">
        {children}
      </body>
    </html>
  )
}
```

**Step 4: Verify fonts load correctly**

```bash
pnpm dev
```

Open browser, inspect element, verify CSS variables are applied and fonts render correctly.

**Step 5: Commit**

```bash
git add app/fonts.ts app/globals.css app/layout.tsx
git commit -m "feat: configure design system — Tailwind v4 tokens, Playfair Display + DM Sans fonts"
```

---

## Phase 2: Layout Components

### Task 2.1: Create Animation Utility Components

**Step 1: Create Framer Motion wrapper components**

Create: `components/animations/motion.tsx` — `'use client'` component that re-exports motion components.

Create: `components/animations/scroll-reveal.tsx` — Reusable scroll-triggered fade-up reveal component using Framer Motion `useInView`.

Create: `components/animations/stagger-text.tsx` — Component that splits text into words and animates them in sequence.

Create: `components/animations/parallax.tsx` — Scroll-based parallax wrapper using `useScroll` and `useTransform`.

Create: `components/animations/page-transition.tsx` — Page transition wrapper for `template.tsx`.

**Step 2: Create `app/template.tsx`**

Wrap page content in a fade transition using the page-transition component.

**Step 3: Commit**

```bash
git add components/animations/ app/template.tsx
git commit -m "feat: add Framer Motion animation utilities — scroll reveal, stagger text, parallax, page transitions"
```

---

### Task 2.2: Build Header / Navigation

**Step 1: Create header component**

Create: `components/layout/header.tsx`

Desktop navigation:
- Logo on left (SVG, links to /)
- Nav links: About, Projects, Services, Careers, News, Policies
- "Contact" CTA button on right (red bg, white text)
- Transparent background on hero, solid navy on scroll (use scroll detection)
- Subtle hover states: red underline reveal on links

Mobile navigation:
- Logo on left
- Hamburger menu icon on right
- Full-screen navy overlay with staggered link reveals (Framer Motion AnimatePresence)

**Step 2: Verify header renders**

```bash
pnpm dev
```

Check: transparent on page load, solid on scroll, mobile menu works.

**Step 3: Commit**

```bash
git add components/layout/header.tsx
git commit -m "feat: build responsive header with transparent-to-solid scroll, mobile overlay nav"
```

---

### Task 2.3: Build Footer

**Step 1: Create footer component**

Create: `components/layout/footer.tsx`

Navy background. Three columns:
- Col 1: Logo (white) + brief company description + certifications
- Col 2: Quick links (all pages) + contact info for both offices
- Col 3: Newsletter signup placeholder + social links placeholder
- Bottom bar: copyright, legal links, "Website by" credit

**Step 2: Commit**

```bash
git add components/layout/footer.tsx
git commit -m "feat: build footer with office details, nav links, certifications"
```

---

### Task 2.4: Integrate Layout

**Step 1: Update root layout**

Modify: `app/layout.tsx`

Add Header and Footer to the root layout wrapping `{children}`. Add full SEO metadata:
- Title template: `%s | Ganson Building & Civil Engineering`
- Default description
- Open Graph defaults
- JSON-LD LocalBusiness structured data (both offices)
- Favicon (use the triangle mark SVG)

**Step 2: Create a minimal homepage placeholder**

Modify: `app/page.tsx` to show a simple "Ganson" heading so we can verify the full layout works.

**Step 3: Verify full layout**

```bash
pnpm dev
```

Check: header, content area, footer all render correctly. Navigation links work (404 is fine for now).

**Step 4: Commit**

```bash
git add app/layout.tsx app/page.tsx
git commit -m "feat: integrate header + footer into root layout with SEO metadata and JSON-LD"
```

---

## Phase 3: Content Data Layer

### Task 3.1: Create Project Data

**Step 1: Define types**

Create: `lib/types.ts`

```typescript
export interface Project {
  slug: string
  title: string
  client: string
  sector: Sector
  value: string
  location: string
  year: string
  description: string
  longDescription: string
  image: string
  gallery: string[]
  featured: boolean
}

export type Sector = 'healthcare' | 'education' | 'commercial' | 'retail' | 'tourism' | 'high-tech' | 'refurbishment' | 'civil-engineering'

export interface TeamMember { ... }
export interface NewsArticle { ... }
export interface Policy { ... }
export interface JobListing { ... }
```

**Step 2: Create project data**

Create: `lib/data/projects.ts`

10 realistic Irish projects:
1. St. Vincent's Hospital Wing Extension (Healthcare, €12m, Dublin)
2. Castlewellan Community College (Education, €8.5m, Co. Down)
3. Balbriggan Town Centre Retail Development (Retail, €15m, Co. Dublin)
4. Dublin Airport Terminal 2 Fit-Out (Commercial, €22m, Dublin)
5. Carlingford Lough Greenway (Tourism/Civil, €6m, Co. Louth)
6. Intel Campus Facility Upgrade (High-Tech, €18m, Co. Kildare)
7. Aviva Stadium Hospitality Refurbishment (Refurbishment, €9m, Dublin)
8. Dundalk IT Science Building (Education, €11m, Co. Louth)
9. M1 Junction Upgrade (Civil Engineering, €14m, Co. Dublin)
10. ABP Food Group Processing Facility (Commercial, €20m, Co. Meath)

**Step 3: Commit**

```bash
git add lib/
git commit -m "feat: add TypeScript types and project data (10 realistic Irish projects)"
```

---

### Task 3.2: Create Team, News, Policy & Job Data

**Step 1: Create team data**

Create: `lib/data/team.ts`

8 team members with realistic titles (Managing Director, Commercial Director, Contracts Manager, etc.)

**Step 2: Create news data**

Create: `lib/data/news.ts`

5 news articles with realistic construction industry content.

**Step 3: Create policy data**

Create: `lib/data/policies.ts`

Full policy list: Health & Safety, TQM, CSR, Environmental, Sustainability, Equal Opportunities, Anti-Bribery, Modern Slavery, Data Protection.

**Step 4: Create careers data**

Create: `lib/data/careers.ts`

4-5 job listings: Site Engineer, Quantity Surveyor, Project Manager, Health & Safety Officer.

**Step 5: Create client logos data**

Create: `lib/data/clients.ts`

Client names for the "Trusted By" section: ABP Food Group, City of Dublin ETB, DAA, Aviva, Carlow County Council, DLR County Council, GAA, NAMA.

**Step 6: Create constants**

Create: `lib/constants.ts`

Company info, office addresses, phone numbers, email, social links, navigation items.

**Step 7: Create utils**

Create: `lib/utils.ts`

Utility functions: cn() for className merging (clsx + tailwind-merge), formatCurrency, slugify.

```bash
pnpm add clsx tailwind-merge
```

**Step 8: Commit**

```bash
git add lib/
git commit -m "feat: add all content data — team, news, policies, careers, clients, constants, utils"
```

---

## Phase 4: Homepage (Design Benchmark)

### Task 4.1: Hero Section

**Step 1: Build hero section**

Create: `components/sections/hero.tsx`

Full-viewport cinematic section:
- Split composition: large-scale placeholder image taking ~70% of viewport width
- Company name "GANSON" revealed through stagger-text animation
- Tagline: "Building Ireland's Future" (or similar) with scroll-triggered reveal
- Subtle scroll indicator at bottom (animated chevron)
- Dark overlay gradient on the image for text contrast
- Noise texture overlay on the dark area

This is a `'use client'` component due to Framer Motion.

**Step 2: Add to homepage**

Modify: `app/page.tsx` to render the Hero section.

**Step 3: Verify**

```bash
pnpm dev
```

Check: full viewport hero, text animation plays, scroll indicator visible.

**Step 4: Commit**

```bash
git add components/sections/hero.tsx app/page.tsx
git commit -m "feat: build cinematic hero section with staggered text reveal and parallax"
```

---

### Task 4.2: Trusted By Section

**Step 1: Build trusted-by section**

Create: `components/sections/trusted-by.tsx`

Subtle, elegant client logo strip:
- Ivory background
- "Trusted by Ireland's leading organisations" small label
- Client names displayed as refined text (since we don't have actual client logos) in a clean horizontal layout
- Slow, smooth infinite horizontal scroll animation (CSS only, using @keyframes)
- Duplicated content for seamless loop

**Step 2: Add to homepage**

Modify: `app/page.tsx`

**Step 3: Commit**

```bash
git add components/sections/trusted-by.tsx app/page.tsx
git commit -m "feat: add trusted-by client strip with smooth horizontal scroll"
```

---

### Task 4.3: Featured Projects Section

**Step 1: Build featured projects section**

Create: `components/sections/featured-projects.tsx`

3-4 flagship projects as large, overlapping image cards:
- Navy background section
- Section title in Playfair Display: "Selected Work"
- Each card: large image with project name, sector tag, and value overlaid
- Cards arranged in an asymmetric, overlapping grid (not uniform)
- Subtle parallax on images within cards
- Hover: image scales slightly (1.02), overlay lightens
- Each card links to `/projects/[slug]`
- Scroll-reveal animation for cards (staggered entry)

**Step 2: Add to homepage**

Modify: `app/page.tsx`

**Step 3: Commit**

```bash
git add components/sections/featured-projects.tsx app/page.tsx
git commit -m "feat: add featured projects section with asymmetric overlapping cards and parallax"
```

---

### Task 4.4: Why Ganson Section

**Step 1: Build stats section**

Create: `components/sections/why-ganson.tsx`

Bold typographic section (ivory background):
- Three pillars presented with large Playfair Display numbers:
  - "€80m+" — Current annual workload
  - "20+" — Years of experience
  - "100%" — Credit rating
- Each stat has a brief supporting line in DM Sans
- Large numbers in brand red, supporting text in navy
- Scroll-triggered count-up animation on the numbers
- Asymmetric layout (not three equal columns — staggered)

**Step 2: Add to homepage**

**Step 3: Commit**

```bash
git add components/sections/why-ganson.tsx app/page.tsx
git commit -m "feat: add Why Ganson stats section with animated counters and bold typography"
```

---

### Task 4.5: About Teaser Section

**Step 1: Build about teaser**

Create: `components/sections/about-teaser.tsx`

Cinematic split section (navy background):
- Left: compelling placeholder image (takes 55% width) with subtle parallax
- Right: concise company story text
  - Small label: "About Ganson"
  - Headline: "Two decades of building excellence"
  - Brief paragraph about founding, growth, and values
  - "Read our story →" link in brand red
- Scroll-reveal animations

**Step 2: Add to homepage**

**Step 3: Commit**

```bash
git add components/sections/about-teaser.tsx app/page.tsx
git commit -m "feat: add about teaser section with cinematic split layout"
```

---

### Task 4.6: Contact CTA Section

**Step 1: Build contact CTA**

Create: `components/sections/contact-cta.tsx`

Full-width dark section (navy with noise overlay):
- Headline: "Let's build something together"
- Both office addresses displayed cleanly
- Simple contact form: Name, Email, Phone, Message, Submit button
- Form uses React state (client component), submit handler is a placeholder
- Red CTA button with hover state

**Step 2: Add to homepage**

**Step 3: Commit**

```bash
git add components/sections/contact-cta.tsx app/page.tsx
git commit -m "feat: add contact CTA section with form and office addresses"
```

---

### Task 4.7: Custom Cursor

**Step 1: Build custom cursor component**

Create: `components/ui/custom-cursor.tsx`

- Small red dot (8px) that follows the mouse on desktop
- Scales up (24px) when hovering over interactive elements (links, buttons)
- Smoothly animated position with Framer Motion
- Only renders on desktop (hidden on touch devices)
- Uses `useMotionValue` for smooth tracking

**Step 2: Add to root layout**

Modify: `app/layout.tsx` to include the custom cursor component.

**Step 3: Commit**

```bash
git add components/ui/custom-cursor.tsx app/layout.tsx
git commit -m "feat: add custom red cursor with hover scaling on desktop"
```

---

### Task 4.8: Homepage Review & Polish

**Step 1: Review full homepage**

```bash
pnpm dev
```

Open in browser and review:
- All sections render in correct order
- Dark/light section rhythm works
- Animations are smooth and purposeful
- Typography hierarchy is clear
- Responsive behaviour on mobile
- Custom cursor works on desktop

**Step 2: Fix any issues and commit**

```bash
git add -A
git commit -m "fix: homepage polish and responsive adjustments"
```

---

## Phase 5: Interior Pages

### Task 5.1: About Page

Create: `app/about/page.tsx`

Sections:
1. Page hero: full-width image with "About Ganson" overlay
2. Company story with key milestones (2004 founding → present)
3. Founders section: Paul McQuaid & David Rogers with placeholder photos and bios
4. Management team grid: 6-8 cards with photos, names, titles
5. Values/approach: editorial text section about quality, safety, sustainability
6. Client logos section (reuse trusted-by component)

Use scroll-reveal animations throughout. Alternating dark/light sections.

**Commit:** `feat: build About page with company story, team, and values sections`

---

### Task 5.2: Projects Listing Page

Create: `app/projects/page.tsx`

Sections:
1. Page hero with "Our Projects" title
2. Filter bar: sector filter buttons with active state styling
3. Project grid: large image cards with project info overlay
4. Framer Motion AnimatePresence for smooth filter transitions
5. Each card links to `/projects/[slug]`

Create: `components/ui/project-card.tsx` — reusable project card component
Create: `components/ui/sector-filter.tsx` — filter bar component (client component)

**Commit:** `feat: build Projects listing page with sector filtering and animated transitions`

---

### Task 5.3: Project Detail Page

Create: `app/projects/[slug]/page.tsx`

- `generateStaticParams()` for all project slugs
- `generateMetadata()` for dynamic SEO
- Hero: full-width project image with title overlay
- Key facts sidebar: client, sector, value, location, year
- Long description
- Image gallery (grid layout with lightbox-style interaction)
- "Next project" navigation at bottom

**Commit:** `feat: build Project detail page with dynamic routing, gallery, and metadata`

---

### Task 5.4: Services Page

Create: `app/services/page.tsx`

Sections:
1. Page hero
2. Procurement routes: Traditional Build, Design & Build, Management Contracting, Early Contractor Engagement — each with description
3. Sector expertise: 8 sector cards with icons/illustrations and brief descriptions
4. Process/methodology: numbered steps showing how Ganson works (editorial layout)

**Commit:** `feat: build Services page with procurement routes and sector expertise`

---

### Task 5.5: Policies Page

Create: `app/policies/page.tsx`

Clean, professional governance page:
- Page hero
- Expandable accordion for each policy (Health & Safety, TQM, CSR, Environmental, Sustainability, Equal Opportunities, Anti-Bribery, Modern Slavery, Data Protection)
- Each accordion item shows policy summary and key commitments
- Uses Framer Motion for smooth expand/collapse

Create: `components/ui/accordion.tsx` — reusable accordion component

**Commit:** `feat: build Policies page with expandable policy accordions`

---

### Task 5.6: Careers Page

Create: `app/careers/page.tsx`

Sections:
1. Hero with "Join Our Team" messaging
2. Culture section: what it's like to work at Ganson
3. Benefits grid: professional development, competitive salary, etc.
4. Current openings: job listing cards with title, location, type
5. Each listing expandable or linking to detail (keep simple for now)
6. Application CTA

**Commit:** `feat: build Careers page with culture section and job listings`

---

### Task 5.7: News Listing Page

Create: `app/news/page.tsx`

- Page hero
- News article cards in a grid (2-column on desktop, single on mobile)
- Each card: image, date, title, excerpt, "Read more" link
- Cards link to `/news/[slug]`

**Commit:** `feat: build News listing page with article card grid`

---

### Task 5.8: News Detail Page

Create: `app/news/[slug]/page.tsx`

- `generateStaticParams()` for all article slugs
- `generateMetadata()` for dynamic SEO
- Article hero with featured image
- Article body with proper typography (prose styling)
- Author and date
- "Back to News" navigation
- Related articles at bottom

**Commit:** `feat: build News detail page with dynamic routing and article layout`

---

### Task 5.9: Contact Page

Create: `app/contact/page.tsx`

Sections:
1. Page hero
2. Two office cards side by side:
   - Balbriggan, Co. Dublin office with address, phone, email
   - Castlewellan, Co. Down office with address, phone, email
3. Embedded map placeholder (styled div with "Map" text — real maps require API key)
4. Full contact form: Name, Email, Phone, Company, Project Type (dropdown), Message, Submit
5. Form validation (required fields, email format)
6. Server action for form submission (placeholder — logs to console)

Create: `app/contact/action.ts` — server action for form handling

**Commit:** `feat: build Contact page with dual office info, form validation, and server action`

---

## Phase 6: SEO, Performance & Polish

### Task 6.1: SEO & Metadata

**Step 1: Add metadata to all pages**

Modify each page to include proper `generateMetadata()`:
- Unique title and description per page
- Open Graph image (use logo or placeholder)
- Canonical URLs

**Step 2: Create sitemap**

Create: `app/sitemap.ts`

```typescript
import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap { ... }
```

**Step 3: Create robots.txt**

Create: `app/robots.ts`

**Step 4: Add JSON-LD structured data**

Add LocalBusiness schema to root layout (already started in Task 2.4).

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: add comprehensive SEO — metadata, sitemap, robots.txt, JSON-LD"
```

---

### Task 6.2: Performance Optimisation

**Step 1: Audit image usage**

Ensure all images use `next/image` with proper width/height/sizes attributes.

**Step 2: Add loading states**

Add subtle loading skeletons for image-heavy sections.

**Step 3: Verify Lighthouse**

```bash
pnpm build && pnpm start
```

Run Lighthouse audit. Target: 95+ on all categories.

**Step 4: Fix any performance issues**

Common fixes: proper image sizes, lazy loading, code splitting, font-display swap.

**Step 5: Commit**

```bash
git add -A
git commit -m "perf: optimize images, add loading states, improve Lighthouse scores"
```

---

### Task 6.3: Accessibility Audit

**Step 1: Verify heading hierarchy**

Check all pages have proper h1 → h2 → h3 structure.

**Step 2: Verify focus states**

Ensure all interactive elements have visible focus indicators.

**Step 3: Add ARIA labels**

- Navigation landmarks
- Form labels
- Image alt text
- Button labels for icon-only elements

**Step 4: Test keyboard navigation**

Verify all pages are fully navigable with keyboard only.

**Step 5: Commit**

```bash
git add -A
git commit -m "a11y: improve accessibility — heading hierarchy, focus states, ARIA labels, keyboard nav"
```

---

### Task 6.4: Responsive Polish

**Step 1: Test all breakpoints**

Test at: 320px, 375px, 768px, 1024px, 1280px, 1440px, 1920px

**Step 2: Fix any responsive issues**

Common fixes: font sizes, padding, grid layouts, image aspect ratios, navigation behaviour.

**Step 3: Commit**

```bash
git add -A
git commit -m "fix: responsive polish across all breakpoints"
```

---

### Task 6.5: Analytics & Final Config

**Step 1: Add analytics placeholder**

Create: `components/analytics.tsx`

Google Analytics / Tag Manager placeholder using next/script.

**Step 2: Configure next.config.ts**

Ensure production-ready config: image domains, redirects if needed, headers.

**Step 3: Add .gitignore entries**

Verify .gitignore covers: node_modules, .next, .env*, .DS_Store

**Step 4: Final build test**

```bash
pnpm build
```

Ensure clean build with no errors or warnings.

**Step 5: Commit**

```bash
git add -A
git commit -m "chore: add analytics placeholder, finalize next.config, verify production build"
```

---

## Verification

After all phases are complete:

1. **Visual check**: Open dev server, navigate all 8 pages + project/news detail pages
2. **Responsive**: Test at mobile (375px), tablet (768px), desktop (1440px)
3. **Animations**: Verify scroll reveals, parallax, hover states, page transitions
4. **Navigation**: All links work, mobile menu works, back navigation works
5. **Forms**: Contact form validates and submits (to console)
6. **Build**: `pnpm build` succeeds with no errors
7. **Lighthouse**: Run audit, target 95+ across all categories
8. **Accessibility**: Keyboard navigation works, screen reader tested
