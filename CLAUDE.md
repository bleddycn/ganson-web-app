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
- Tailwind CSS v4 (CSS-first config)
- Framer Motion for animations
- Sharp for image optimisation
- pnpm as package manager

## Logo & Assets
SVG logos in `/public/assets/logos/`
Project photography in `/public/assets/projects/`
Team photography in `/public/assets/team/`

## Commands
- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm lint` — run ESLint
