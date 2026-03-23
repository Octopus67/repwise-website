# Repwise Website — Code Quality Audit

**Date:** 2026-03-23
**Auditor:** Automated Principal Engineer Review
**Scope:** Full codebase (47 source files)
**Stack:** Next.js 16 + Tailwind v4 + motion/react + Lenis + Zod
**Build Status:** Passes with 0 errors

---

## Executive Summary

The codebase is well-structured with consistent patterns, strong TypeScript configuration (`strict: true`, `noUncheckedIndexedAccess: true`), zero `any` types, zero `@ts-ignore`/`eslint-disable` comments, and thorough reduced-motion support. The main concerns are: missing CSP `script-src` nonce (relying on `unsafe-inline`), API routes lacking rate limiting, several components unnecessarily marked `'use client'`, and the `StructuredData` component using `dangerouslySetInnerHTML` without sanitization.

**Total Findings:** 28
- CRITICAL: 3
- HIGH: 6
- MEDIUM: 9
- LOW: 6
- NIT: 4

---

## 1. Security

### CRITICAL-01: CSP allows `unsafe-inline` for scripts
- **File:** `next.config.ts` (line 30)
- **Issue:** `script-src 'self' 'unsafe-inline'` defeats the purpose of CSP against XSS. Any injected inline script will execute.
- **Recommendation:** Use nonce-based CSP with Next.js middleware. Replace `'unsafe-inline'` with `'nonce-{random}'` generated per request. Next.js 16 supports `nonce` via `headers()` + middleware pattern.

### CRITICAL-02: `StructuredData` uses `dangerouslySetInnerHTML` without sanitization
- **File:** `components/shared/StructuredData.tsx` (line 6)
- **Issue:** `JSON.stringify(data)` is passed directly to `dangerouslySetInnerHTML`. If `data` ever contains user-controlled values (e.g., from CMS or API), a `</script>` payload could break out and inject arbitrary JS.
- **Current risk:** LOW (data is hardcoded in `app/page.tsx`), but the component is generic and reusable.
- **Recommendation:** Sanitize the JSON output by replacing `</` with `<\/` and `<!--` with `<\\!--`:
  ```tsx
  const safeJson = JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e');
  ```

### CRITICAL-03: API routes have no rate limiting
- **Files:** `app/api/contact/route.ts`, `app/api/newsletter/route.ts`
- **Issue:** Both POST endpoints have no rate limiting. A bot can spam the contact form or newsletter signup at unlimited volume, causing log flooding and potential downstream abuse when email sending is enabled.
- **Recommendation:** Add rate limiting via `next-rate-limit`, Vercel Edge middleware, or a simple in-memory token bucket. At minimum, add a `Content-Type` check:
  ```ts
  if (request.headers.get('content-type') !== 'application/json') {
    return NextResponse.json({ success: false }, { status: 415 });
  }
  ```

---

## 2. Cross-File Consistency & Architecture

### HIGH-01: Excessive `'use client'` — components that could be server components
- **Files:**
  - `components/sections/ComparisonTable.tsx` — No hooks, no state, no event handlers. Only uses `lucide-react` icons and `ScrollReveal`. The `ScrollReveal` wrapper is already a client component; the parent doesn't need to be.
  - `components/sections/Testimonials.tsx` — Same pattern: no hooks, no state. Only wraps `GlassCard` and `ScrollReveal`.
  - `components/sections/SocialProof.tsx` — Only wraps `ScrollReveal` and `AnimatedCounter` (both already client components).
- **Impact:** Unnecessarily increases client JS bundle. These sections ship their entire module to the browser when they could be server-rendered with client component children.
- **Recommendation:** Remove `'use client'` from these files. The client boundary is already established by the child components (`ScrollReveal`, `GlassCard`, `AnimatedCounter`).

### HIGH-02: Unused dependency — `@t3-oss/env-nextjs`
- **File:** `package.json` (line 8)
- **Issue:** Listed in `dependencies` but never imported anywhere in the codebase. Dead dependency increases install size.
- **Recommendation:** Either implement env validation with it (recommended for production) or remove it: `npm uninstall @t3-oss/env-nextjs`.

### HIGH-03: Unused devDependency — `@next/bundle-analyzer`
- **File:** `package.json` (line 17)
- **Issue:** Listed in `devDependencies` but never configured in `next.config.ts`. No `analyze` script in package.json.
- **Recommendation:** Either wire it up (add `ANALYZE=true` support in next.config.ts and an `"analyze"` script) or remove it.

### MEDIUM-01: `console.log` in API routes will leak to production logs
- **Files:** `app/api/contact/route.ts:29`, `app/api/newsletter/route.ts:26`
- **Issue:** `console.log` with user email addresses will appear in production server logs. When email sending is enabled, these become redundant and a minor privacy concern.
- **Recommendation:** Replace with a structured logger or remove. At minimum, don't log PII (email) in production.

### MEDIUM-02: Footer component is a server component but renders dynamic year
- **File:** `components/layout/Footer.tsx` (line 42)
- **Issue:** `new Date().getFullYear()` in a server component is fine for SSR, but if the page is statically generated, the year will be baked at build time. This is correct behavior for a year, but worth noting.
- **Recommendation:** No action needed — acceptable for yearly granularity.

---

## 3. TypeScript Strictness

### MEDIUM-03: `StructuredData` prop type is loosely typed
- **File:** `components/shared/StructuredData.tsx` (line 1-2)
- **Issue:** `data: Record<string, unknown>` accepts any object. For structured data, a more specific type would catch schema errors at compile time.
- **Recommendation:** Define a union type for supported schema.org types:
  ```ts
  interface SoftwareApplicationLD {
    '@context': 'https://schema.org';
    '@type': 'SoftwareApplication';
    name: string;
    operatingSystem: string;
    applicationCategory: string;
    offers: { '@type': 'Offer'; price: string; priceCurrency: string };
    description: string;
  }
  type StructuredDataType = SoftwareApplicationLD; // extend as needed
  ```

### LOW-01: `Button` component missing explicit `type` attribute default
- **File:** `components/ui/Button.tsx`
- **Issue:** The `Button` component uses `forwardRef` and spreads `...props`, but doesn't set a default `type="button"`. When used inside a `<form>`, it would default to `type="submit"`.
- **Current risk:** No forms currently use `Button`, but it's a footgun for future use.
- **Recommendation:** Add `type="button"` as default in the component, or ensure it's always passed.

---

## 4. Performance

### HIGH-04: No `next/dynamic` for heavy client components
- **Files:** All section components in `components/sections/`
- **Issue:** Every section component (Hero, BentoFeatures, ScienceSection, etc.) is imported statically in `app/page.tsx`. Since they're all `'use client'`, their JS is included in the initial bundle even for below-the-fold content.
- **Recommendation:** Use `next/dynamic` with `ssr: false` for below-the-fold sections:
  ```tsx
  const FAQ = dynamic(() => import('@/components/sections/FAQ').then(m => ({ default: m.FAQ })), { ssr: true });
  ```
  At minimum, lazy-load: `FAQ`, `FinalCTA`, `Testimonials`, `ComparisonTable`, `FullFeatureList`.

### HIGH-05: Lenis loaded eagerly in layout — no code splitting
- **File:** `components/layout/SmoothScrollProvider.tsx`
- **Issue:** `import Lenis from 'lenis'` is a static import in a component rendered on every page. Lenis is ~15KB gzipped. It's loaded even when `prefersReducedMotion` is true (the import still happens, only the instantiation is skipped).
- **Recommendation:** Dynamic import:
  ```tsx
  useEffect(() => {
    if (prefersReducedMotion) return;
    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      // ...
    });
  }, [prefersReducedMotion]);
  ```

### MEDIUM-04: `CustomCursor` renders on every page including mobile
- **File:** `components/layout/CustomCursor.tsx`
- **Issue:** Component is rendered in the layout for all devices. While it returns `null` for reduced motion and hides via `hidden md:block`, the component still mounts, runs the `useEffect`, and adds event listeners before the touch check.
- **Recommendation:** Either use `next/dynamic` with `ssr: false` or move the touch detection before adding listeners (already done, but the component still mounts unnecessarily on mobile).

### MEDIUM-05: `images` config in next.config.ts but no images used
- **File:** `next.config.ts` (lines 5-10)
- **Issue:** Detailed image optimization config (`formats`, `deviceSizes`, `imageSizes`, `minimumCacheTTL`) but zero `next/image` usage in the entire codebase. All visual elements are SVG icons, CSS gradients, or placeholder divs.
- **Recommendation:** Remove the `images` config until actual images are added. It's dead config that may confuse future developers.

---

## 5. Accessibility (WCAG AA)

### HIGH-06: `MagneticButton` in Hero/FinalCTA has no accessible name
- **Files:** `components/sections/Hero.tsx:42`, `components/sections/FinalCTA.tsx:30`
- **Issue:** `MagneticButton` renders a `<button type="button">` with text content "Start Free — 7 Days, No Card". The text content provides an accessible name, so this is technically OK. However, these buttons don't navigate anywhere — they're dead buttons with no `onClick` handler and no link wrapper.
- **Recommendation:** Either wrap in a `<Link href="/download">` or add an `onClick` that navigates. Currently these CTAs do nothing when clicked.

### MEDIUM-06: Hero store links point to `#` (dead links)
- **Files:** `components/sections/Hero.tsx:52-57`, `components/sections/FinalCTA.tsx:38-46`
- **Issue:** `BRAND.appStore` and `BRAND.playStore` are both `'#'` in constants. Links to `#` are confusing for screen reader users and provide no value.
- **Recommendation:** Either hide these links until real URLs are available, or use `aria-disabled="true"` with a tooltip explaining "Coming soon".

### MEDIUM-07: Download page store links have `href="#"` 
- **File:** `app/download/page.tsx` (lines 22, 35)
- **Issue:** Both App Store and Google Play links use `href="#"`. While they have `aria-label`, the destination is meaningless.
- **Recommendation:** Same as MEDIUM-06.

### MEDIUM-08: Blog posts are not clickable/linkable
- **File:** `app/blog/page.tsx`
- **Issue:** Blog post cards render as static `GlassCard` divs with no links. Users expect to click blog post titles to read the full article. Screen readers will not announce these as interactive.
- **Recommendation:** Either make them links (even to a "coming soon" page) or add a visual indicator that full articles are coming soon.

### LOW-02: FAQ accordion missing `role="button"` on trigger
- **Files:** `components/sections/FAQ.tsx`, `components/sections/FullFeatureList.tsx`
- **Issue:** The accordion buttons correctly use `<button>`, `aria-expanded`, and `aria-controls`/`aria-labelledby`. This is well-implemented. Minor: the `role="region"` on the panel is correct per WAI-ARIA accordion pattern.
- **Recommendation:** No action needed — this is well done. ✓

### LOW-03: Comparison table `Check`/`X` icons use `aria-label` correctly
- **File:** `components/sections/ComparisonTable.tsx`
- **Recommendation:** No action needed — well implemented. ✓

### LOW-04: Mobile menu lacks focus trap
- **File:** `components/layout/Header.tsx`
- **Issue:** When the mobile menu opens, focus is not trapped within it. Users can tab to elements behind the menu overlay.
- **Recommendation:** Add focus trap using `focus-trap-react` or manual `onKeyDown` handler. Also close on `Escape` key.

---

## 6. SEO

### MEDIUM-09: Missing `canonical` URLs on individual pages
- **Files:** All page files in `app/*/page.tsx`
- **Issue:** While `metadataBase` is set in the root layout, individual pages don't set `alternates.canonical`. Next.js won't auto-generate canonical tags without this.
- **Recommendation:** Add to each page's metadata:
  ```ts
  alternates: { canonical: '/features' },
  ```

### LOW-05: Structured data only on homepage
- **File:** `app/page.tsx`
- **Issue:** Only the homepage has structured data (`SoftwareApplication`). The FAQ page could benefit from `FAQPage` schema, and the pricing page from `Product` schema.
- **Recommendation:** Add `FAQPage` structured data to pricing page (which renders FAQ component) and the FAQ section data.

### LOW-06: `sitemap.ts` uses `new Date()` for `lastModified`
- **File:** `app/sitemap.ts`
- **Issue:** Every build generates a new `lastModified` date for all pages, even if content hasn't changed. This sends false signals to search engines.
- **Recommendation:** Use fixed dates or derive from git commit timestamps.

---

## 7. Error Handling

### MEDIUM-10: API routes don't validate `Content-Type` header
- **Files:** `app/api/contact/route.ts`, `app/api/newsletter/route.ts`
- **Issue:** `request.json()` will throw on non-JSON bodies, which is caught by the generic `catch` block. But the error message is generic. A `Content-Type` check would give a better error.
- **Recommendation:** Add explicit check:
  ```ts
  const contentType = request.headers.get('content-type');
  if (!contentType?.includes('application/json')) {
    return NextResponse.json({ success: false, message: 'Invalid content type' }, { status: 415 });
  }
  ```

### NIT-01: Error boundary doesn't log the error
- **File:** `app/error.tsx`
- **Issue:** The `error` parameter is destructured but never used (not even logged). In production, you'd want to send this to Sentry or similar.
- **Recommendation:** Add error reporting when Sentry is configured. For now, acceptable.

---

## 8. Dead Code

### MEDIUM-11: `COLORS`, `GLOW`, `GRADIENTS` constants are unused
- **File:** `lib/constants.ts`
- **Issue:** `COLORS`, `GLOW`, and `GRADIENTS` are exported but never imported anywhere in the codebase. All color values are hardcoded as Tailwind classes or inline styles throughout components.
- **Recommendation:** Either use these constants (replace hardcoded hex values with references) or remove them. Currently they're 30+ lines of dead code that will drift out of sync with actual usage.

### NIT-02: `@t3-oss/env-nextjs` — unused dependency (covered in HIGH-02)

### NIT-03: `@next/bundle-analyzer` — unused devDependency (covered in HIGH-03)

---

## 9. Build & Tooling

### NIT-04: No `analyze` script in package.json
- **File:** `package.json`
- **Issue:** Bundle analyzer is installed but no script to run it.
- **Recommendation:** Add: `"analyze": "ANALYZE=true next build"`

---

## 10. Positive Observations

These are things done well that should be preserved:

1. **TypeScript config is excellent** — `strict: true`, `noUncheckedIndexedAccess: true`, no escape hatches anywhere.
2. **Reduced motion support is comprehensive** — Every animated component checks `useReducedMotion()` and provides a static fallback. This is rare and commendable.
3. **Zod validation on API routes** — Both endpoints validate input with Zod schemas including max lengths. Honeypot fields are a nice touch.
4. **Security headers are thorough** — HSTS with preload, X-Frame-Options DENY, Permissions-Policy, Referrer-Policy all present.
5. **Consistent component patterns** — All components follow the same structure: interface → destructure → render. Clean and predictable.
6. **Proper `aria-*` attributes on accordions** — FAQ and FullFeatureList use correct `aria-expanded`, `aria-controls`, `aria-labelledby`, and `role="region"`.
7. **Font loading strategy** — `display: 'swap'` for Inter (primary), `display: 'optional'` for JetBrains Mono (decorative). Correct prioritization.
8. **`as const` on all constant objects** — Ensures type narrowing and immutability.
9. **No `any` types anywhere** — Zero instances across 47 files.
10. **Clean separation** — `lib/` for shared logic, `components/ui/` for primitives, `components/sections/` for page sections, `components/layout/` for chrome.

---

## Finding Summary Table

| ID | Severity | Category | File(s) | Description |
|---|---|---|---|---|
| CRITICAL-01 | CRITICAL | Security | `next.config.ts` | CSP `unsafe-inline` for scripts |
| CRITICAL-02 | CRITICAL | Security | `StructuredData.tsx` | `dangerouslySetInnerHTML` without sanitization |
| CRITICAL-03 | CRITICAL | Security | `api/*/route.ts` | No rate limiting on API routes |
| HIGH-01 | HIGH | Architecture | 3 section components | Unnecessary `'use client'` directives |
| HIGH-02 | HIGH | Dead Code | `package.json` | Unused dep: `@t3-oss/env-nextjs` |
| HIGH-03 | HIGH | Dead Code | `package.json` | Unused devDep: `@next/bundle-analyzer` |
| HIGH-04 | HIGH | Performance | `app/page.tsx` | No `next/dynamic` for below-fold sections |
| HIGH-05 | HIGH | Performance | `SmoothScrollProvider.tsx` | Lenis not code-split / dynamically imported |
| HIGH-06 | HIGH | Accessibility | Hero, FinalCTA | CTA buttons are non-functional (no navigation) |
| MEDIUM-01 | MEDIUM | Security | `api/*/route.ts` | `console.log` with PII in production |
| MEDIUM-03 | MEDIUM | TypeScript | `StructuredData.tsx` | Loosely typed `Record<string, unknown>` |
| MEDIUM-04 | MEDIUM | Performance | `CustomCursor.tsx` | Mounts on all devices including mobile |
| MEDIUM-05 | MEDIUM | Dead Config | `next.config.ts` | Image optimization config with no images |
| MEDIUM-06 | MEDIUM | Accessibility | Hero, FinalCTA | Store links point to `#` |
| MEDIUM-07 | MEDIUM | Accessibility | `download/page.tsx` | Store links point to `#` |
| MEDIUM-08 | MEDIUM | UX | `blog/page.tsx` | Blog posts not clickable |
| MEDIUM-09 | MEDIUM | SEO | All pages | Missing canonical URLs |
| MEDIUM-10 | MEDIUM | Error Handling | `api/*/route.ts` | No Content-Type validation |
| MEDIUM-11 | MEDIUM | Dead Code | `lib/constants.ts` | `COLORS`, `GLOW`, `GRADIENTS` unused |
| LOW-01 | LOW | TypeScript | `Button.tsx` | No default `type="button"` |
| LOW-02 | LOW | Accessibility | FAQ, FullFeatureList | Accordion pattern — well done ✓ |
| LOW-03 | LOW | Accessibility | `ComparisonTable.tsx` | Icon aria-labels — well done ✓ |
| LOW-04 | LOW | Accessibility | `Header.tsx` | Mobile menu lacks focus trap |
| LOW-05 | LOW | SEO | Homepage only | Structured data only on one page |
| LOW-06 | LOW | SEO | `sitemap.ts` | `lastModified` always current date |
| NIT-01 | NIT | Error Handling | `error.tsx` | Error not logged/reported |
| NIT-02 | NIT | Dead Code | `package.json` | (duplicate of HIGH-02) |
| NIT-03 | NIT | Dead Code | `package.json` | (duplicate of HIGH-03) |
| NIT-04 | NIT | Tooling | `package.json` | No `analyze` script |

---

## Verdict: REQUEST_CHANGES

The 3 CRITICAL security findings (CSP `unsafe-inline`, unsanitized `dangerouslySetInnerHTML`, no rate limiting) must be addressed before production deployment. The HIGH performance findings (no code splitting for below-fold content, eager Lenis loading) and dead dependency issues should also be resolved.

The codebase is otherwise well-engineered with excellent TypeScript discipline, comprehensive accessibility support, and clean architecture. After addressing the CRITICALs and HIGHs, this is production-ready.
