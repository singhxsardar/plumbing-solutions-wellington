# Plumbing Solutions Wellington

A modern, mobile-first one-page website for a local Wellington plumbing
business, built with Next.js (App Router), Tailwind CSS, Framer Motion, and
Lucide icons.

## Design notes

- **Palette:** deep blue `#0B3D62`, mid blue `#1C6DA8`, sky accent `#3FA9F5`,
  light blue tint `#EAF4FB`, dark grey/ink text `#1E262E`.
- **Type:** Space Grotesk (display headings), Inter (body copy), IBM Plex
  Mono (eyebrows, labels, service tags) — loaded via `next/font/google`.
- **Signature motif:** a "pipe route" line with elbow joints (see
  `app/components/PipeDivider.tsx`) threads between sections, and the hero
  rating badge is shaped like a water droplet — both nod to the trade
  without leaning on generic stock icons.
- All animations respect `prefers-reduced-motion` (handled globally in
  `app/globals.css`).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you deploy

Search the codebase for `TODO:` comments and replace the placeholders:

- Real project photos in `Gallery.tsx`
- A real Google Maps embed in `Contact.tsx`
- The hero background photo in `Hero.tsx` (optional — the gradient works
  well on its own too)
- Confirm the phone number, WhatsApp number, and email address are correct
  everywhere (`Header.tsx`, `Hero.tsx`, `Contact.tsx`)

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no config changes needed.
4. Click **Deploy**.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles all sections
  globals.css         Base styles, focus states, reduced-motion rules
  components/
    Header.tsx        Sticky navbar with mobile menu
    Hero.tsx           Headline, CTAs, droplet rating badge
    Services.tsx       8-service grid
    WhyUs.tsx           6-point feature grid
    Gallery.tsx        Project photo placeholders
    Testimonials.tsx  3 review cards
    About.tsx           Local-focus copy + service area card
    Contact.tsx        Phone/WhatsApp/email + map placeholder
    Footer.tsx          Footer links and legal line
    PipeDivider.tsx    Signature pipe-route section divider
```
