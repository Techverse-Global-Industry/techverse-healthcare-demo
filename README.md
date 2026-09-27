# Aurelia Health — Premium 3D Bilingual Pharmacy Website

A production-oriented Next.js App Router project implementing the supplied healthcare/pharmacy brief with TypeScript, Tailwind CSS, React Three Fiber, Three.js, GSAP + ScrollTrigger, Lenis, Framer Motion, Lucide React, and `next/image`.

## Run locally

```bash
npm install
npm run typecheck
npm run lint
npm run build
npm run dev
```

Then open the local Next.js URL shown by the development server.

## Stability decisions

- No `async` callback is passed to `useEffect`.
- Every effect cleanup is synchronous.
- GSAP contexts are reverted on unmount.
- Lenis animation frames and event subscriptions are removed explicitly before `lenis.destroy()`.
- WebGL components are client-only and dynamically imported where they enter page UI.
- Particle count and DPR are reduced on mobile.
- Browser-only language persistence is initialized in `useEffect` to avoid server/client text mismatches.
- Three.js scenes use local geometry/materials/lights only; they do not fetch remote HDR assets.
- Reduced-motion preferences disable non-essential motion.
- A static validation script checks critical source and asset conditions: `npm run validate:project`.

## Important stock-photo note

The supplied Magnific reference pages could not be retrieved from the build environment, so this package **does not hotlink them and does not pretend replacement imagery is the requested photography**. Instead, local abstract placeholder assets are provided so `next/image` paths resolve without 404s. Each slot is visibly marked as a licensed stock-photo placeholder in the UI.

Before production launch, download the licensed source assets according to the provider's terms and replace these files while keeping the filenames:

- `public/images/pharmacy-interior.jpg` — reference: `https://www.magnific.com/free-photo/empty-drugstore-with-bottles-packages-full-with-medicaments-retail-shop-shelves-with-pharmaceutical-products-pharmacy-space-filled-with-medical-drugs-pills-vitamins-boxes_43107111.htm`
- `public/images/pharmacist-profile.jpg` — reference: `https://www.magnific.com/free-photo/young-hispanic-woman-pharmacist-smiling-confident-standing-with-arms-crossed-gesture-pharmacy_39317181.htm`
- `public/images/medication-guidance.jpg` — reference: `https://www.magnific.com/free-photo/pharmacist-checking-medicines-drugstore_21701034.htm`
- `public/images/personalized-care.jpg` — reference: `https://www.magnific.com/free-photo/african-american-pharmacist-providing-personalized-pharmacist-service-medication-guidance_423578168.htm`
- `public/images/african-healthcare.jpg` — reference: `https://www.magnific.com/free-photo/african-american-pharmacist-working-drugstore-hospital-pharmacy-african-healthcare_29874969.htm`

Do not describe stock-photo subjects as employees unless that is factually true and permission exists.

## Content placeholders to replace before launch

The following are intentionally labeled placeholders rather than presented as facts:

- Years of experience / patients served / patient-focus statistics.
- Testimonials and patient names.
- Address, phone, email, map/directions, and opening hours.
- Social links.
- Contact-form backend.
- Business/legal details and final privacy/terms destinations.

## Project structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
  error.tsx
  not-found.tsx
  favicon.ico
components/
  navbar/
  hero/
  three/
  services/
  pharmacy/
  about/
  products/
  care/
  journey/
  testimonials/
  resources/
  faq/
  contact/
  footer/
  language/
  effects/
hooks/
  useLanguage.ts
  useLenis.ts
  useMediaQuery.ts
lib/
  translations.ts
  data.ts
  utils.ts
public/
  images/
  models/
  textures/
scripts/
  validate.mjs
```

## Validation performed in this package environment

The package environment used to generate this project had TypeScript available but could not reach the npm registry, so dependencies could not be installed here. As a result, full dependency-aware `npm run typecheck`, `npm run lint`, `npm run build`, and browser-console testing must be run after `npm install` on a networked machine.

What was run here:

- TypeScript parser/transpile syntax check across all `.ts`/`.tsx` files.
- `node scripts/validate.mjs` static safety/asset validation.
- Explicit grep audit for async `useEffect`, async cleanup, `console.clear`, and runtime Magnific-page use.
- Local image and favicon existence checks.

Do not treat the package as production-launched until the full commands above and an actual browser QA pass are green on the target machine.
