# Eric Mpho Ramuluvhana — Portfolio

SIEM-console-themed portfolio site, built with:

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx      — fonts (next/font), metadata, global HTML shell
  page.tsx         — composes all sections
  globals.css      — Tailwind entry + a couple of global utilities
components/
  ConsoleBar.tsx   — sticky top bar, scrollspy nav, live SAST clock
  Terminal.tsx      — the typing KQL query + interactive command chips
  Hero.tsx          — hero grid, identity card, stats, about
  Skills.tsx        — filterable "analytics rules" skills grid
  Timeline.tsx      — experience as an incident log
  Projects.tsx      — filterable project cards
  Certifications.tsx — expandable certification registry
  Education.tsx     — academic background
  Contact.tsx        — contact panel with copy-to-clipboard
  Footer.tsx
  Reveal.tsx        — scroll-in-view animation wrapper
lib/
  data.ts           — all content, typed and centralized
  hooks.ts          — useReveal, useScrollspy, useClock, usePrefersReducedMotion
public/
  eric.jpg           — profile photo
```

All the copy — skills, experience, projects, certifications, education, contact
info — lives in `lib/data.ts`. Edit that file to update content without
touching any component markup.

## Editing content

- **Skills**: `skillCategories` in `lib/data.ts`. Add `core: true` to mark a
  skill as a daily-driver.
- **Experience**: `timeline` array — each entry renders as an incident card.
- **Projects**: `projects` array — `category` must be one of `soc`, `cloud`,
  `it`, `academic` to work with the filter chips.
- **Certifications**: `certifications` array — each has a `detail` string shown
  when the row is expanded.
- **Photo**: replace `public/eric.jpg` (keep the filename, or update the
  `src` in `components/Hero.tsx`).

## Build & deploy

```bash
npm run build
npm start
```

The easiest deploy path is [Vercel](https://vercel.com) (made by the Next.js
team) — push this folder to a GitHub repo and import it there, or run
`npx vercel` from this directory.

## Notes

- Fonts (Space Grotesk, Inter, JetBrains Mono) are loaded via `next/font/google`
  — no external `<link>` tags, no layout shift.
- Dark theme only, by design (matches the SOC console aesthetic).
- Respects `prefers-reduced-motion` throughout (typing animation, scroll
  reveals, smooth scroll).
