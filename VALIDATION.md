# Validation report

## Passed in the generation environment

- `node scripts/validate.mjs`
  - Required Next.js files present.
  - Local stock-image placeholder paths present.
  - App Router favicon present.
  - No `useEffect(async ...)` pattern.
  - No async cleanup-function pattern.
  - No `console.clear()` suppression.
  - No Magnific reference-page URLs used by runtime source.
- TypeScript parser/transpile syntax check across all application `.ts` / `.tsx` source files.
- Strict internal type-shape check using temporary ambient stubs for unavailable third-party dependencies.
- Runtime source scan found no `http://` or `https://` asset dependencies.
- Local image reference audit confirms all `next/image` runtime paths resolve to files in `public/images/`.

## Attempted but blocked by environment dependency access

The environment cannot reach the npm registry and has no cached copies of the required packages. `npm install --offline` returned `ENOTCACHED` for `@react-three/drei`. Consequently:

- `npm run typecheck` cannot resolve React/Next/Three/GSAP/etc. modules here.
- `npm run lint` cannot run because local ESLint is not installed.
- `npm run build` cannot run because local Next.js is not installed.
- `npm run dev` and browser-console acceptance testing cannot be performed here.

These are environment/dependency-availability blockers, not tests that passed. Run the commands below after `npm install` on a networked machine and fix any dependency-version/API issue they surface before production launch:

```bash
npm run typecheck
npm run lint
npm run build
npm run dev
```

Then inspect the browser console at all requested breakpoints, switch EN/FR, use the mobile menu, scroll the full page, exercise 3D interactions, FAQ, carousel, buttons, and contact form, and verify `/favicon.ico` returns HTTP 200.

## Stock photography gate

The supplied Magnific reference pages were inaccessible from this environment. Local abstract placeholders are intentionally used instead of hotlinking or falsely substituting other people as the requested stock subjects. Replace those files with licensed source assets before production launch; see `README.md` for the filename mapping.
