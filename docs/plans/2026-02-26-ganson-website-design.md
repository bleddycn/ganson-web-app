# Ganson Marketing Website — Design Document

## Context

Ganson Building & Civil Engineering needs a production-grade marketing website that positions them as a premium Irish construction company. The site must feel agency-designed, not AI-generated — editorial, architectural, and confident.

## Design System

### Typography

- **Display**: Playfair Display (Google Font) — high-contrast serif, architectural character
- **Body**: DM Sans — geometric sans-serif, warm and readable
- **Loading**: next/font with CSS variables, centralized in `app/fonts.ts`

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

### Section Rhythm

- Light sections: Ivory bg + Navy headings + Dark grey body + Red accents
- Dark sections: Navy bg + White headings + Cream body + Red accents
- Alternating dark/light creates cinematic contrast

### Layout Principles

- Asymmetric grids (70/30 hero splits, offset text blocks)
- Full-bleed photography as visual backbone
- 120px+ section padding on desktop, scaling down on mobile
- Overlapping elements for editorial depth
- Generous negative space

### Animation Strategy (Framer Motion)

- Page load: staggered text reveals (headline words in sequence)
- Scroll: parallax on hero images, fade-up content reveals
- Hover: subtle image scale (1.02), red underline reveals on nav
- Mobile nav: full-screen overlay with staggered link animations
- Page transitions via `template.tsx`
- Noise/grain texture (3-5% opacity) on dark sections
- Custom cursor on desktop (small red dot, scales on interactive elements)

## Tech Stack

- Next.js 14+ (App Router, TypeScript)
- Tailwind CSS v4 (CSS-first config with `@theme` directive)
- Framer Motion (client components only)
- pnpm as package manager
- Sharp for image optimisation

## Site Structure

8 pages: Home, About, Projects (+ [slug]), Services, Policies, Careers, News (+ [slug]), Contact

## Logo

SVG to be traced from provided PNGs. White and colour variants needed.

## Approved

- Palette: Confirmed ✓
- Typography: Confirmed ✓
- Direction: Architectural editorial ✓
- Package manager: pnpm ✓
