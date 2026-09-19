# Shahain Outdoor Living — Website

Premium, image-first marketing website for Shahain Outdoor Living, built with
React, Vite, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev       # local dev server with hot reload
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

Requires Node.js 18+.

## Project structure

```
src/
  assets/
    logo/            # brand logo
  components/         # reusable UI (Navbar, Footer, Button, Reveal, ...)
  data/               # site content — nav, contact info, products, clients
  pages/              # one file per route
  App.jsx             # route definitions
  main.jsx            # app entry, router + global CSS
  index.css           # Tailwind import, brand theme tokens, base styles
```

Content lives in `src/data/`, not hardcoded in components — edit those files
to change copy, add products, or update contact details without touching
component code.

## Photography

Every image on the site is currently a styled placeholder (`ImageFrame`
component) in the brand's navy/sand palette, because no real product or
project photography was available while building this. To drop in real
photos:

1. Add the image file under `src/assets/<section>/`.
2. Import it and pass it as the `src` prop to `<ImageFrame />` wherever that
   photo belongs (see `src/pages/*.jsx`).

Nothing else needs to change — layouts, aspect ratios and reveal animations
are already in place.

## Brand tokens

Colors and fonts are defined once in `src/index.css` under `@theme`, and used
throughout via Tailwind classes (`bg-navy`, `text-champagne`, `font-heading`,
etc.). Update them there to re-theme the whole site.

## Content sourcing

Business details (contact info, product categories, materials, client list)
were sourced from the current shahain.com and the brand brief — nothing was
invented. Update `src/data/products.js`, `src/data/clients.js` and
`src/data/siteConfig.js` as the business changes.

## Deployment

This is a static single-page app. `npm run build` outputs a deployable
`dist/` folder — serve it from any static host (Vercel, Netlify, Cloudflare
Pages, S3 + CDN, etc.), with a rewrite rule sending all paths to
`index.html` so client-side routing works on refresh/direct links.
