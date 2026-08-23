# Plumbing Solutions Wellington

> A modern, responsive website designed for a Wellington-based plumbing business, focused on clear service presentation, strong visual identity, mobile usability, and easy customer contact.

## Live Website

**Production:**  
https://plumbing-solutions-wellington.netlify.app/

**Source Code:**  
https://github.com/singhxsardar/plumbing-solutions-wellington

---

## Overview

Plumbing Solutions Wellington is a modern one-page business website built to give a local plumbing company a professional digital presence.

The design combines a clean trade-focused visual identity with subtle motion, responsive layouts, authentic project imagery, and clear calls to action.

The website is designed with a **mobile-first approach**, ensuring a consistent experience across phones, tablets, and desktop devices.

---

## Key Highlights

- Professional, trade-focused visual design
- Fully responsive and mobile-first layout
- Clean and accessible navigation
- Smooth Framer Motion animations
- Plumbing-inspired visual elements
- Service-focused content structure
- Project and gallery showcase
- Customer testimonials section
- Contact and enquiry section
- Responsive mobile navigation
- Reduced-motion accessibility support
- SEO-ready page structure
- Production deployment on Netlify

---

## Services Presented

The website presents the following plumbing services:

- Blocked Drains
- Leaking Taps & Pipes
- Hot Water Systems
- Bathroom & Kitchen Plumbing
- Emergency Plumbing
- General Maintenance
- Gas Fitting

> Business services and claims should remain consistent with the information confirmed by the business.

---

## Design System

### Colour Palette

| Colour | Hex |
|---|---|
| Deep Blue | `#0B3D62` |
| Mid Blue | `#1C6DA8` |
| Sky Blue | `#3FA9F5` |
| Light Blue | `#EAF4FB` |
| Ink | `#1E262E` |

The colour system was selected to communicate cleanliness, reliability, water, and professionalism while maintaining strong readability.

### Typography

- **Space Grotesk** — Display headings
- **Inter** — Body content
- **IBM Plex Mono** — Labels, eyebrows, and service tags

---

## User Experience

The website focuses on keeping the customer journey simple:

**Discover → Explore Services → View Work → Learn About the Business → Get in Touch**

The layout prioritises important business information and contact actions without overwhelming the visitor.

---

## Visual Direction

The design uses subtle plumbing-inspired details rather than relying heavily on generic plumbing imagery.

### Signature Elements

- Pipe-route divider with elbow-joint details
- Water-inspired droplet motif
- Clean blue colour system
- Soft card elevation
- Minimal iconography
- Subtle section animations
- Large, readable typography

---

## Technology

### Frontend

- Next.js 14
- React
- TypeScript
- Tailwind CSS

### UI & Animation

- Framer Motion
- Lucide React
- Next Font

### Deployment

- Netlify

---

## Project Structure

```text
app/
├── layout.tsx
├── page.tsx
├── globals.css
│
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── Services.tsx
    ├── WhyUs.tsx
    ├── Gallery.tsx
    ├── Testimonials.tsx
    ├── About.tsx
    ├── Contact.tsx
    ├── Footer.tsx
    └── PipeDivider.tsx

public/
└── images/
    └── gallery/
        ├── bathroom-installation.jpg
        ├── bathroom-renovation.jpg
        ├── hot-water-system.jpg
        ├── kitchen-plumbing.jpg
        ├── kitchen-sink.jpg
        ├── laundry-plumbing.jpg
        └── toilet-installation.jpg
