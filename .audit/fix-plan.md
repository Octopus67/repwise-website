# Repwise Website — Multi-Phase Fix Plan

**Generated:** Based on code-quality-audit.md (28 findings) + product-ux-audit.md (6.5/10 score)
**Total fixes:** 28 code findings + 11 product fixes + 6 legal updates
**Estimated total effort:** 3–4 days

---

## Dependency Graph

```
CRITICAL-01 (CSP nonce) ──→ requires middleware.ts (new file)
CRITICAL-03 (rate limit) ──→ touches same API files as MEDIUM-01, MEDIUM-10
HIGH-01 (use client)    ──→ safe, no deps
HIGH-04 (dynamic imports)──→ touches app/page.tsx, same file as section reorder (PROD-06)
HIGH-05 (Lenis)         ──→ safe, isolated to SmoothScrollProvider.tsx
HIGH-06 (dead CTAs)     ──→ overlaps with MEDIUM-06/07 (store links), PROD-02 (mid-page CTAs)
MEDIUM-06/07 (store #)  ──→ same fix pattern, share BRAND constants
PROD-06 (section reorder)──→ touches app/page.tsx, combine with HIGH-04
PROD-05 (comparison RP) ──→ touches ComparisonTable.tsx, combine with PROD-09 (mobile redesign)
LEGAL-* (privacy/terms) ──→ independent, no code deps
```

---

## Phase 1: CRITICAL Security Fixes

**Effort:** 2–4 hours | **Risk:** HIGH if skipped — blocks production deployment

### CRITICAL-01: CSP `unsafe-inline` for scripts

| Field | Detail |
|-------|--------|
| Severity | CRITICAL |
| Root cause | `next.config.ts:30` uses `script-src 'self' 'unsafe-inline'` — any injected inline script executes |
| Files | `next.config.ts`, `middleware.ts` (new) |
| Risk | HIGH — XSS vector |

**Steps:**
1. Create `middleware.ts` at project root:
   - Generate a random nonce per request via `crypto.randomUUID()`
   - Set `x-nonce` header on the request
   - Set CSP header with `'nonce-{value}'` replacing `'unsafe-inline'` for `script-src`
2. Update `next.config.ts`: remove the `script-src` line from static headers (middleware handles it)
3. Update `components/shared/StructuredData.tsx`: read nonce from `headers()` and pass to `<script nonce={nonce}>`
4. Update `app/layout.tsx`: pass nonce to any inline scripts if present

**Ripple effects:** StructuredData component signature changes. Any future inline scripts must use the nonce.
**Verification:** `curl -I https://localhost:3000` — confirm CSP header contains `nonce-` and no `unsafe-inline`. Attempt inline `<script>alert(1)</script>` injection — should be blocked.

### CRITICAL-02: StructuredData `dangerouslySetInnerHTML` unsanitized

| Field | Detail |
|-------|--------|
| Severity | CRITICAL |
| Root cause | `StructuredData.tsx:6` passes `JSON.stringify(data)` directly — `</script>` payload can break out |
| Files | `components/shared/StructuredData.tsx` |
| Risk | MEDIUM (data is hardcoded today, but component is reusable) |

**Steps:**
1. In `StructuredData.tsx`, replace:
   ```tsx
   dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
   ```
   with:
   ```tsx
   dangerouslySetInnerHTML={{
     __html: JSON.stringify(data).replace(/</g, '\\u003c').replace(/>/g, '\\u003e')
   }}
   ```
2. Also type-narrow the prop (combines with MEDIUM-03):
   ```tsx
   interface SoftwareApplicationLD {
     '@context': 'https://schema.org';
     '@type': 'SoftwareApplication';
     name: string; operatingSystem: string;
     applicationCategory: string;
     offers: { '@type': 'Offer'; price: string; priceCurrency: string };
     description: string;
   }
   interface FAQPageLD {
     '@context': 'https://schema.org';
     '@type': 'FAQPage';
     mainEntity: Array<{ '@type': 'Question'; name: string; acceptedAnswer: { '@type': 'Answer'; text: string } }>;
   }
   type StructuredDataType = SoftwareApplicationLD | FAQPageLD;
   ```

**Ripple effects:** None — output is identical for valid JSON. Type change may require updating `app/page.tsx` jsonLd object to match.
**Verification:** Render page, view source, confirm no raw `<` or `>` in the JSON-LD block.

### CRITICAL-03: API routes have no rate limiting

| Field | Detail |
|-------|--------|
| Severity | CRITICAL |
| Root cause | `app/api/contact/route.ts` and `app/api/newsletter/route.ts` accept unlimited POST requests |
| Files | `app/api/contact/route.ts`, `app/api/newsletter/route.ts`, `lib/rate-limit.ts` (new) |
| Risk | HIGH — bot spam, log flooding, downstream abuse |

**Steps:**
1. Create `lib/rate-limit.ts` with in-memory token bucket:
   ```ts
   const buckets = new Map<string, { tokens: number; lastRefill: number }>();
   export function rateLimit(ip: string, max = 5, windowMs = 60_000): boolean {
     const now = Date.now();
     const bucket = buckets.get(ip) ?? { tokens: max, lastRefill: now };
     const elapsed = now - bucket.lastRefill;
     bucket.tokens = Math.min(max, bucket.tokens + (elapsed / windowMs) * max);
     bucket.lastRefill = now;
     if (bucket.tokens < 1) { buckets.set(ip, bucket); return false; }
     bucket.tokens -= 1;
     buckets.set(ip, bucket);
     return true;
   }
   ```
2. In both route files, add at top of POST handler:
   ```ts
   const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
   if (!rateLimit(ip)) {
     return NextResponse.json({ success: false, message: 'Too many requests' }, { status: 429 });
   }
   ```
3. Also add Content-Type check (combines with MEDIUM-10):
   ```ts
   if (!request.headers.get('content-type')?.includes('application/json')) {
     return NextResponse.json({ success: false, message: 'Invalid content type' }, { status: 415 });
   }
   ```
4. Remove `console.log` with PII (combines with MEDIUM-01):
   ```ts
   // DELETE: console.log('[Contact Form]', { name: result.data.name, email: result.data.email });
   // DELETE: console.log('[Newsletter Signup]', { email: result.data.email });
   ```

**Ripple effects:** None — API contract unchanged. Combines MEDIUM-01 and MEDIUM-10 into this fix.
**Verification:** `for i in {1..10}; do curl -X POST -H "Content-Type: application/json" -d '{"email":"a@b.com"}' localhost:3000/api/newsletter; done` — should get 429 after 5 requests. Send without Content-Type header — should get 415.

---

## Phase 2: HIGH Code Fixes (Performance + Dead Code + Dead Buttons)

**Effort:** 2–3 hours | **Risk:** MEDIUM — performance and UX impact

### HIGH-01: Remove unnecessary `'use client'` from 3 components

| Field | Detail |
|-------|--------|
| Severity | HIGH |
| Root cause | Components have no hooks/state/handlers — client boundary is already in children (`ScrollReveal`, `AnimatedCounter`, `GlassCard`) |
| Files | `components/sections/ComparisonTable.tsx`, `components/sections/Testimonials.tsx`, `components/sections/SocialProof.tsx` |
| Risk | LOW |

**Steps:**
1. Remove `'use client';` directive from all 3 files
2. Verify each file: no `useState`, `useEffect`, `useRef`, `useReducedMotion`, or event handlers at the component level
3. Run `npm run build` — confirm no errors

**Ripple effects:** These become server components. Children (`ScrollReveal`, `GlassCard`, `AnimatedCounter`) remain client components — no change needed.
**Verification:** Build succeeds. Check bundle size with `ANALYZE=true next build` (after wiring up analyzer in Phase 5).

### HIGH-02 + HIGH-03: Remove unused dependencies

| Field | Detail |
|-------|--------|
| Severity | HIGH |
| Root cause | `@t3-oss/env-nextjs` (dep) and `@next/bundle-analyzer` (devDep) are installed but never imported |
| Files | `package.json` |
| Risk | LOW |

**Steps:**
1. `npm uninstall @t3-oss/env-nextjs @next/bundle-analyzer`
2. Verify no imports reference either package: `grep -r "t3-oss\|bundle-analyzer" --include="*.ts" --include="*.tsx" .`

**Ripple effects:** None — they were never used.
**Verification:** `npm run build` succeeds. `npm ls` shows no orphaned deps.

### HIGH-04: Dynamic imports for below-fold sections

| Field | Detail |
|-------|--------|
| Severity | HIGH |
| Root cause | All 12 section components statically imported in `app/page.tsx` — entire JS shipped in initial bundle |
| Files | `app/page.tsx` |
| Risk | MEDIUM — must test SSR behavior |

**Steps:**
1. In `app/page.tsx`, convert below-fold sections to dynamic imports:
   ```tsx
   import dynamic from 'next/dynamic';
   // Keep static: Hero, SocialProof, ProblemSection (above fold)
   const BentoFeatures = dynamic(() => import('@/components/sections/BentoFeatures').then(m => ({ default: m.BentoFeatures })));
   const HowItWorks = dynamic(() => import('@/components/sections/HowItWorks').then(m => ({ default: m.HowItWorks })));
   const ScienceSection = dynamic(() => import('@/components/sections/ScienceSection').then(m => ({ default: m.ScienceSection })));
   const FullFeatureList = dynamic(() => import('@/components/sections/FullFeatureList').then(m => ({ default: m.FullFeatureList })));
   const ComparisonTable = dynamic(() => import('@/components/sections/ComparisonTable').then(m => ({ default: m.ComparisonTable })));
   const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
   const Pricing = dynamic(() => import('@/components/sections/Pricing').then(m => ({ default: m.Pricing })));
   const FAQ = dynamic(() => import('@/components/sections/FAQ').then(m => ({ default: m.FAQ })));
   const FinalCTA = dynamic(() => import('@/components/sections/FinalCTA').then(m => ({ default: m.FinalCTA })));
   ```
2. Note: after HIGH-01, ComparisonTable/Testimonials/SocialProof are server components — only dynamically import the ones that remain client components. Adjust accordingly.

**Ripple effects:** Sections render after JS loads. SSR still works (default `ssr: true`). Combine with PROD-06 (section reorder) since both touch `app/page.tsx`.
**Verification:** Lighthouse performance score. Check network tab — initial JS bundle should be smaller. All sections still render on page load.

### HIGH-05: Lenis eager load — no code splitting

| Field | Detail |
|-------|--------|
| Severity | HIGH |
| Root cause | `SmoothScrollProvider.tsx` statically imports `lenis` (~15KB gzip) even when `prefersReducedMotion` is true |
| Files | `components/layout/SmoothScrollProvider.tsx` |
| Risk | LOW |

**Steps:**
1. Replace static import with dynamic:
   ```tsx
   // DELETE: import Lenis from 'lenis';
   useEffect(() => {
     if (prefersReducedMotion) return;
     let lenis: InstanceType<typeof import('lenis').default> | null = null;
     let rafId: number;
     import('lenis').then(({ default: Lenis }) => {
       lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
       function raf(time: number) { lenis!.raf(time); rafId = requestAnimationFrame(raf); }
       rafId = requestAnimationFrame(raf);
     });
     return () => { if (rafId) cancelAnimationFrame(rafId); lenis?.destroy(); };
   }, [prefersReducedMotion]);
   ```

**Ripple effects:** None — same behavior, just lazy loaded.
**Verification:** Network tab shows lenis chunk loaded only after page mount. Smooth scrolling still works. With `prefers-reduced-motion: reduce`, lenis chunk is NOT loaded.

### HIGH-06: CTA buttons are non-functional (dead buttons)

| Field | Detail |
|-------|--------|
| Severity | HIGH |
| Root cause | `MagneticButton` in Hero and FinalCTA renders `<button>` with no `onClick` and no link wrapper — clicking does nothing |
| Files | `components/sections/Hero.tsx:42`, `components/sections/FinalCTA.tsx:30` |
| Risk | LOW |

**Steps:**
1. Wrap `MagneticButton` in `<Link href="/download">` in both files:
   ```tsx
   import Link from 'next/link';
   // ...
   <Link href="/download">
     <MagneticButton className="...">Start Free — 7 Days, No Card</MagneticButton>
   </Link>
   ```
2. Alternatively, if MagneticButton supports `as` prop, render as `<a>`. Check MagneticButton implementation.

**Ripple effects:** CTA now navigates to `/download`. Combine with MEDIUM-06/07 to fix the download page store links.
**Verification:** Click "Start Free" button — navigates to `/download`. Keyboard: Tab to button, Enter — navigates.

---

## Phase 3: Product Fixes (UX Improvements — No External Assets Needed)

**Effort:** 4–6 hours | **Risk:** LOW — additive changes, no breaking modifications

### PROD-01: Add email capture / newsletter form

| Field | Detail |
|-------|--------|
| Root cause | `/api/newsletter` route exists but NO form on the site uses it |
| Files | `components/sections/NewsletterCapture.tsx` (new), `app/page.tsx` |
| Risk | LOW |

**Steps:**
1. Create `components/sections/NewsletterCapture.tsx`:
   - `'use client'` — needs `useState` for form state
   - Email input + honeypot field + submit button
   - POST to `/api/newsletter` with Zod-validated email
   - Success/error states with inline feedback
   - Copy: "Get launch updates. No spam, just gains."
2. Add to `app/page.tsx` after `FinalCTA` (or before it)
3. Style consistent with existing `GlassCard` pattern

**Verification:** Submit email → 200 response. Submit empty → validation error. Submit 6+ times → 429 (rate limit from Phase 1).

### PROD-02: Add mid-page CTAs between features and pricing

| Field | Detail |
|-------|--------|
| Root cause | 7 sections between Hero and Pricing with zero conversion opportunities |
| Files | `components/sections/MidPageCTA.tsx` (new), `app/page.tsx` |
| Risk | LOW |

**Steps:**
1. Create `components/sections/MidPageCTA.tsx`:
   - Simple centered section: heading + `<Link href="/download"><Button>` 
   - Copy: "Ready to try it?" + "Start your free trial →"
   - Minimal — no glass card, just text + button + subtle divider
2. Insert in `app/page.tsx` after `BentoFeatures` (position 5 in new order)

**Verification:** Visual check — CTA appears between features. Click navigates to `/download`.

### PROD-03: Move Testimonials up in section order

| Field | Detail |
|-------|--------|
| Root cause | Testimonials at position 9 (after 7 feature sections) — social proof should appear earlier |
| Files | `app/page.tsx` |
| Risk | LOW |

**Steps:**
1. In `app/page.tsx`, reorder JSX to match recommended flow:
   ```
   Hero → SocialProof → ProblemSection → BentoFeatures → MidPageCTA →
   HowItWorks → ScienceSection → Testimonials → ComparisonTable →
   Pricing → FAQ → NewsletterCapture → FinalCTA
   ```
2. Combine with HIGH-04 (dynamic imports) since both modify `app/page.tsx`

**Verification:** Visual scroll-through — Testimonials appear after ScienceSection, before ComparisonTable.

### PROD-04: Change "MOST POPULAR" badge to "BEST VALUE"

| Field | Detail |
|-------|--------|
| Root cause | "MOST POPULAR" is unverifiable for a new app — erodes trust |
| Files | `components/sections/Pricing.tsx:62` |
| Risk | LOW |

**Steps:**
1. Change `<Badge variant="premium">MOST POPULAR</Badge>` to `<Badge variant="premium">BEST VALUE</Badge>`

**Verification:** Visual check on pricing section.

### PROD-05: Add RP Hypertrophy to ComparisonTable

| Field | Detail |
|-------|--------|
| Root cause | Most direct competitor for science angle is missing from the table. $300/yr vs $80/yr is the strongest argument |
| Files | `components/sections/ComparisonTable.tsx` |
| Risk | LOW |

**Steps:**
1. Add `'RP Hypertrophy'` to `competitors` array
2. Add RP column to each row:
   ```ts
   { feature: 'Hypertrophy science', values: { ..., 'RP Hypertrophy': true } },
   { feature: 'Full nutrition', values: { ..., 'RP Hypertrophy': false } },
   { feature: 'Both in one app', values: { ..., 'RP Hypertrophy': false } },
   { feature: 'Adaptive coaching', values: { ..., 'RP Hypertrophy': true } },
   { feature: 'Body heat map', values: { ..., 'RP Hypertrophy': false } },
   { feature: 'Price', values: { ..., 'RP Hypertrophy': '$300/yr' } },
   ```
3. Update `min-w` from `540px` to `~680px` to accommodate 5th column

**Verification:** Table renders 5 columns. RP shows $300/yr. Mobile still scrolls horizontally.

### PROD-06: Fix section order per product audit (combined with PROD-03)

Handled in PROD-03 above — same `app/page.tsx` change.

### PROD-07: Make blog posts link to "coming soon" state

| Field | Detail |
|-------|--------|
| Root cause | Blog cards are static divs — users expect to click titles. Screen readers don't announce as interactive |
| Files | `app/blog/page.tsx` |
| Risk | LOW |

**Steps:**
1. Wrap each `GlassCard` in a container with a "Coming soon" indicator:
   ```tsx
   <GlassCard className="relative group cursor-default">
     {/* existing content */}
     <p className="mt-3 text-xs text-[#06B6D4]">Full article coming soon</p>
   </GlassCard>
   ```
2. Add `aria-label` to each card: `aria-label="{post.title} — full article coming soon"`

**Verification:** Blog cards show "Full article coming soon" text. No dead links.

### PROD-08: Add founder name placeholder to About page

| Field | Detail |
|-------|--------|
| Root cause | About page tells a story but never names the founder — reduces trust |
| Files | `app/about/page.tsx` |
| Risk | LOW |

**Steps:**
1. In "The Story" section, change opening to:
   ```
   "I'm [Founder Name], and Repwise started from a simple frustration..."
   ```
2. Add a placeholder photo div above the story (same pattern as phone mockup):
   ```tsx
   <div className="w-24 h-24 rounded-full border border-[#1E293B] bg-[#12171F] flex items-center justify-center mb-6">
     <span className="text-[#64748B] text-xs">Photo</span>
   </div>
   ```

**Verification:** About page shows founder name placeholder and photo placeholder.

### PROD-09: Redesign ComparisonTable for mobile (stacked cards)

| Field | Detail |
|-------|--------|
| Root cause | `overflow-x-auto` with `min-w-[540px]` means horizontal scrolling on phones — users miss columns |
| Files | `components/sections/ComparisonTable.tsx` |
| Risk | MEDIUM — significant UI change |

**Steps:**
1. Keep existing table for `md:` and above (desktop)
2. Add mobile-only stacked card view (`md:hidden`):
   ```tsx
   <div className="md:hidden space-y-4">
     {competitors.filter(c => c !== 'Repwise').map(comp => (
       <GlassCard key={comp}>
         <h3>{comp} vs Repwise</h3>
         {rows.map(row => (
           <div className="flex justify-between py-2 border-b border-white/5">
             <span>{row.feature}</span>
             <div className="flex gap-4">
               <Cell value={row.values[comp]} />
               <Cell value={row.values['Repwise']} />
             </div>
           </div>
         ))}
       </GlassCard>
     ))}
   </div>
   ```
3. Hide desktop table on mobile: `<div className="hidden md:block">...</div>`

**Verification:** Resize to mobile — stacked cards appear. Desktop — original table. No horizontal scroll on mobile.

### PROD-10: Fix store links — "coming soon" state (combines MEDIUM-06, MEDIUM-07)

| Field | Detail |
|-------|--------|
| Root cause | `BRAND.appStore` and `BRAND.playStore` are `'#'` — dead links erode trust |
| Files | `lib/constants.ts`, `components/sections/Hero.tsx`, `components/sections/FinalCTA.tsx`, `app/download/page.tsx` |
| Risk | LOW |

**Steps:**
1. In `lib/constants.ts`, keep `appStore: '#'` and `playStore: '#'` but add a flag:
   ```ts
   storeLinksLive: false,
   ```
2. In Hero, FinalCTA, and download page, conditionally render:
   ```tsx
   {BRAND.storeLinksLive ? (
     <a href={BRAND.appStore}>App Store</a>
   ) : (
     <span className="text-[#64748B] text-sm cursor-default" aria-disabled="true">
       App Store — Coming Soon
     </span>
   )}
   ```
3. On download page, replace `href="#"` links with the same "Coming Soon" pattern

**Verification:** Store links show "Coming Soon" instead of dead `#` links. No navigation on click. `aria-disabled="true"` present.

---

## Phase 4: MEDIUM Code Fixes

**Effort:** 1–2 hours | **Risk:** LOW — isolated changes

> Note: MEDIUM-01 (console.log PII), MEDIUM-03 (loose typing), MEDIUM-06/07 (store links), MEDIUM-10 (Content-Type) are already handled in Phases 1 and 3.

### MEDIUM-04: CustomCursor mounts on all devices including mobile

| Field | Detail |
|-------|--------|
| Files | `components/layout/CustomCursor.tsx` |
| Risk | LOW |

**Steps:**
1. Use `next/dynamic` with `ssr: false` in the layout where CustomCursor is rendered:
   ```tsx
   const CustomCursor = dynamic(() => import('@/components/layout/CustomCursor').then(m => ({ default: m.CustomCursor })), { ssr: false });
   ```
2. Inside `CustomCursor.tsx`, move touch detection before state initialization:
   ```tsx
   const [isTouch, setIsTouch] = useState(true); // default true = don't render
   useEffect(() => { setIsTouch('ontouchstart' in window); }, []);
   if (prefersReducedMotion || isTouch) return null;
   ```

**Verification:** On mobile (or touch emulation), CustomCursor doesn't mount. No event listeners added. Desktop still shows cursor.

### MEDIUM-05: Dead image optimization config

| Field | Detail |
|-------|--------|
| Files | `next.config.ts` (lines 5–10) |
| Risk | LOW |

**Steps:**
1. Remove the entire `images` block from `next.config.ts`:
   ```ts
   // DELETE lines 5-10:
   // images: { formats: [...], deviceSizes: [...], imageSizes: [...], minimumCacheTTL: ... },
   ```

**Verification:** `npm run build` succeeds. No `next/image` usage exists to break.

### MEDIUM-08: Blog posts not clickable (handled in PROD-07)

Already addressed in Phase 3 PROD-07.

### MEDIUM-09: Missing canonical URLs on all pages

| Field | Detail |
|-------|--------|
| Files | All `app/*/page.tsx` files (8 pages) |
| Risk | LOW |

**Steps:**
1. Add `alternates` to each page's metadata export:

| Page | Canonical |
|------|-----------|
| `app/page.tsx` | Add metadata export: `alternates: { canonical: '/' }` |
| `app/features/page.tsx` | `alternates: { canonical: '/features' }` |
| `app/pricing/page.tsx` | `alternates: { canonical: '/pricing' }` |
| `app/about/page.tsx` | `alternates: { canonical: '/about' }` |
| `app/blog/page.tsx` | `alternates: { canonical: '/blog' }` |
| `app/download/page.tsx` | `alternates: { canonical: '/download' }` |
| `app/privacy/page.tsx` | `alternates: { canonical: '/privacy' }` |
| `app/terms/page.tsx` | `alternates: { canonical: '/terms' }` |

2. For `app/page.tsx` (no existing metadata export), add:
   ```ts
   export const metadata: Metadata = {
     alternates: { canonical: '/' },
   };
   ```

**Verification:** View page source — `<link rel="canonical" href="https://repwise.app/features">` present on each page.

### MEDIUM-11: Dead constants (`COLORS`, `GLOW`, `GRADIENTS`)

| Field | Detail |
|-------|--------|
| Files | `lib/constants.ts` (lines 22–52) |
| Risk | LOW |

**Steps:**
1. Remove `COLORS`, `GLOW`, and `GRADIENTS` exports from `lib/constants.ts` (~30 lines)
2. Verify no imports: `grep -r "COLORS\|GLOW\|GRADIENTS" --include="*.ts" --include="*.tsx" .`

**Verification:** Build succeeds. Grep returns only the deletion diff.

---

## Phase 5: LOW + NIT Code Fixes

**Effort:** 1 hour | **Risk:** LOW

### LOW-01: Button missing default `type="button"`

| Field | Detail |
|-------|--------|
| Files | `components/ui/Button.tsx` |
| Risk | LOW |

**Steps:**
1. Add default type to the button element:
   ```tsx
   <button ref={ref} type="button" className={styles} {...props}>
   ```
   Note: `{...props}` will override if `type="submit"` is explicitly passed.

**Verification:** Inspect rendered Button in DevTools — `type="button"` present by default.

### LOW-02 + LOW-03: Accordion + icon aria-labels — NO ACTION

Already well-implemented per audit. ✓

### LOW-04: Mobile menu lacks focus trap

| Field | Detail |
|-------|--------|
| Files | `components/layout/Header.tsx` |
| Risk | LOW |

**Steps:**
1. Add `onKeyDown` handler to mobile menu container:
   ```tsx
   const onKeyDown = (e: React.KeyboardEvent) => {
     if (e.key === 'Escape') setMobileOpen(false);
   };
   ```
2. Add to mobile menu div: `onKeyDown={onKeyDown}`
3. For full focus trap: query all focusable elements inside menu, trap Tab/Shift+Tab to cycle within them
4. Auto-focus first nav link when menu opens via `useEffect` + `ref`

**Verification:** Open mobile menu → press Escape → menu closes. Tab cycles within menu items only.

### LOW-05: Structured data only on homepage

| Field | Detail |
|-------|--------|
| Files | `app/pricing/page.tsx` |
| Risk | LOW |

**Steps:**
1. Add `FAQPage` structured data to pricing page (which renders FAQ):
   ```tsx
   import { StructuredData } from '@/components/shared/StructuredData';
   // Add FAQ schema JSON-LD before <Pricing /> in the JSX
   ```
2. Extract FAQ data from the FAQ component into a shared constant so both the component and the schema can reference it

**Verification:** Google Rich Results Test on `/pricing` — FAQPage schema detected.

### LOW-06: Sitemap `lastModified` always current date

| Field | Detail |
|-------|--------|
| Files | `app/sitemap.ts` |
| Risk | LOW |

**Steps:**
1. Replace `new Date()` with fixed dates:
   ```ts
   const LAST_UPDATED = new Date('2025-06-01');
   // Use LAST_UPDATED for all entries, update manually when content changes
   ```

**Verification:** Build twice — sitemap.xml has same dates both times.

### NIT-01: Error boundary doesn't log the error

| Field | Detail |
|-------|--------|
| Files | `app/error.tsx` |
| Risk | LOW |

**Steps:**
1. Add `useEffect` to log error (prep for Sentry):
   ```tsx
   useEffect(() => {
     // TODO: Send to Sentry when configured
     console.error('[ErrorBoundary]', error);
   }, [error]);
   ```
2. Update component signature to destructure `error`:
   ```tsx
   export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
   ```

**Verification:** Trigger error → console shows `[ErrorBoundary]` log.

### NIT-02 + NIT-03: Duplicate of HIGH-02/03

Already handled in Phase 2.

### NIT-04: No `analyze` script in package.json

| Field | Detail |
|-------|--------|
| Files | `package.json` |
| Risk | LOW |

**Steps:**
1. Since we removed `@next/bundle-analyzer` in HIGH-03, this NIT is moot.
2. If we decide to keep the analyzer instead, add to scripts:
   ```json
   "analyze": "ANALYZE=true next build"
   ```
   And wire up in `next.config.ts`:
   ```ts
   const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' });
   export default withBundleAnalyzer(nextConfig);
   ```

**Decision:** Skip — analyzer was removed in Phase 2.

---

## Phase 6: Legal Page Updates

**Effort:** 1–2 hours | **Risk:** LOW — additive content, no code logic changes

### LEGAL-01: Add CCPA section to Privacy Policy

| Field | Detail |
|-------|--------|
| Files | `app/privacy/page.tsx` |
| Risk | LOW |

**Steps:**
1. Add new `<section>` after "7. Your Rights":
   ```tsx
   <section>
     <h2>8. California Privacy Rights (CCPA)</h2>
     <p>If you are a California resident, you have the right to:</p>
     <ul>
       <li>Know what personal information we collect and how it is used</li>
       <li>Request deletion of your personal information</li>
       <li>Opt out of the sale of personal information (we do not sell your data)</li>
       <li>Non-discrimination for exercising your privacy rights</li>
     </ul>
     <p>To exercise these rights, contact us at support@repwise.app.</p>
   </section>
   ```
2. Renumber subsequent sections (Contact becomes 10)

### LEGAL-02: Add COPPA / children's privacy section

| Field | Detail |
|-------|--------|
| Files | `app/privacy/page.tsx` |
| Risk | LOW |

**Steps:**
1. Add section after CCPA:
   ```tsx
   <section>
     <h2>9. Children's Privacy</h2>
     <p>
       Repwise is not intended for children under 13. We do not knowingly collect personal
       information from children under 13. If we learn we have collected such information,
       we will delete it promptly. If you believe a child under 13 has provided us with
       personal information, please contact us at support@repwise.app.
     </p>
   </section>
   ```

### LEGAL-03: Add Apple/Google third-party beneficiary language to Terms

| Field | Detail |
|-------|--------|
| Files | `app/terms/page.tsx` |
| Risk | LOW |

**Steps:**
1. Add new section before "Contact":
   ```tsx
   <section>
     <h2>11. Third-Party Beneficiaries</h2>
     <p>
       Apple Inc. and Google LLC are third-party beneficiaries of these Terms of Service.
       Upon your acceptance of these Terms, Apple and Google will have the right (and will
       be deemed to have accepted the right) to enforce these Terms against you as a
       third-party beneficiary thereof. These Terms are between you and Repwise only, not
       with Apple or Google. Repwise, not Apple or Google, is solely responsible for the
       App and its content.
     </p>
   </section>
   ```
2. Add modification notification clause:
   ```tsx
   <section>
     <h2>12. Modifications to Terms</h2>
     <p>
       We may update these Terms from time to time. We will notify you of material changes
       by posting the updated Terms in the App and updating the "Last Updated" date. Your
       continued use of the App after changes constitutes acceptance of the revised Terms.
     </p>
   </section>
   ```
3. Renumber "Contact" to section 13

### LEGAL-04: Fix effective date if needed

| Field | Detail |
|-------|--------|
| Files | `app/privacy/page.tsx`, `app/terms/page.tsx` |
| Risk | LOW |

**Steps:**
1. Verify "March 20, 2026" is intentional (pre-launch date). If launching before that date, update to actual launch date.
2. This is a manual check — flag for user.

**Verification for all legal fixes:** Read through each page. All new sections render correctly. No broken HTML nesting.

---

## ⚠️ Needs User — Cannot Implement Without External Assets

These items from the product audit require assets or decisions only the user can provide. **Do not implement — track and revisit.**

| # | Item | What's Needed | Audit Source |
|---|------|---------------|--------------|
| 1 | Real app screenshots in Hero + features | Actual app screenshots or Figma exports | Product §1, §6 |
| 2 | Product demo video (30–60s) | Recorded video of app in use | Product §6 |
| 3 | Real testimonials | Quotes from actual beta testers / users | Product §4 |
| 4 | Founder photo | Headshot of founder | Product §6 |
| 5 | Real App Store / Play Store URLs | Published app links | Product §2, Code MEDIUM-06/07 |
| 6 | Social media accounts (Instagram, X, YouTube) | Created accounts with handles | Product §6 |
| 7 | Research paper citations for ScienceSection | Specific papers (Schoenfeld, Israetel, Helms) | Product §10 |
| 8 | "60+ Features" stat accuracy | Verify actual feature count — FullFeatureList shows ~30 | Product §3 |
| 9 | Free tier strategy decision | Consider adding basic macro tracking to free tier | Product §5 |
| 10 | Age requirement verification | Check Apple guidelines — may need 17+ for health/fitness | Product §9 |
| 11 | 78% savings math verification | $402 → $80 is ~80%, not 78% — confirm which is correct | Product §5 |

---

## Summary Table — All Findings Accounted For

| ID | Phase | Status | Combined With |
|----|-------|--------|---------------|
| CRITICAL-01 | 1 | Planned | — |
| CRITICAL-02 | 1 | Planned | MEDIUM-03 |
| CRITICAL-03 | 1 | Planned | MEDIUM-01, MEDIUM-10 |
| HIGH-01 | 2 | Planned | — |
| HIGH-02 | 2 | Planned | NIT-02 |
| HIGH-03 | 2 | Planned | NIT-03, NIT-04 |
| HIGH-04 | 2 | Planned | PROD-03/06 (same file) |
| HIGH-05 | 2 | Planned | — |
| HIGH-06 | 2 | Planned | — |
| MEDIUM-01 | 1 | Combined | → CRITICAL-03 |
| MEDIUM-02 | — | No action | Acceptable behavior |
| MEDIUM-03 | 1 | Combined | → CRITICAL-02 |
| MEDIUM-04 | 4 | Planned | — |
| MEDIUM-05 | 4 | Planned | — |
| MEDIUM-06 | 3 | Combined | → PROD-10 |
| MEDIUM-07 | 3 | Combined | → PROD-10 |
| MEDIUM-08 | 3 | Combined | → PROD-07 |
| MEDIUM-09 | 4 | Planned | — |
| MEDIUM-10 | 1 | Combined | → CRITICAL-03 |
| MEDIUM-11 | 4 | Planned | — |
| LOW-01 | 5 | Planned | — |
| LOW-02 | — | No action | Well implemented ✓ |
| LOW-03 | — | No action | Well implemented ✓ |
| LOW-04 | 5 | Planned | — |
| LOW-05 | 5 | Planned | — |
| LOW-06 | 5 | Planned | — |
| NIT-01 | 5 | Planned | — |
| NIT-02 | 2 | Combined | → HIGH-02 |
| NIT-03 | 2 | Combined | → HIGH-03 |
| NIT-04 | 2 | Combined | → HIGH-03 |
| PROD-01 | 3 | Planned | — |
| PROD-02 | 3 | Planned | — |
| PROD-03 | 3 | Planned | PROD-06 |
| PROD-04 | 3 | Planned | — |
| PROD-05 | 3 | Planned | — |
| PROD-06 | 3 | Combined | → PROD-03 |
| PROD-07 | 3 | Planned | MEDIUM-08 |
| PROD-08 | 3 | Planned | — |
| PROD-09 | 3 | Planned | — |
| PROD-10 | 3 | Planned | MEDIUM-06, MEDIUM-07 |
| LEGAL-01 | 6 | Planned | — |
| LEGAL-02 | 6 | Planned | — |
| LEGAL-03 | 6 | Planned | — |
| LEGAL-04 | 6 | Flagged | Needs user decision |

**Total: 28 code findings + 10 product fixes + 4 legal updates = 42 items tracked**
**No findings skipped.**
