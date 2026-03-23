# Repwise Website Improvement Plan v2

> Generated from user feedback + product review. Organized by implementation phase.

---

## Phase A: Content Updates (Can Implement Now)

### A1. Expand Bento Feature Cards

**File:** `components/sections/BentoFeatures.tsx`
**Effort:** Short (1–2h)

Add a `details` field to each feature object. Render as bullet list below description on the 2×2 card, and as a short paragraph on smaller cards.

**Card 1 (2×2) — Hypertrophy Science Engine**
- Current: "Train with science, not guesswork"
- New description: "Watch your Hypertrophy Units add up in real-time as you log sets — measuring the actual growth stimulus reaching each muscle, not just set count."
- Bullet details:
  - Only the last 0–5 reps before failure count as "stimulating reps" (RIR 0 = 5 stim reps, RIR 4+ = 0 junk volume)
  - Exercise coefficients: bench press = 1.0× chest, 0.5× triceps — compound lifts give fractional credit per muscle
  - Diminishing returns: 6 sets ≈ 2× stimulus of 1 set, not 6×
  - Per-session cap: >10 sets per muscle triggers negative effects warning

**Card 2 — Smart Nutrition**
- Current: "3M+ foods. One scan away."
- New description: "Scan any barcode to instantly log macros and 27 micronutrients. USDA + Open Food Facts databases combined."
- Add details: meal planning, custom foods, recipe builder, micronutrient scoring (0–100), daily/weekly compliance tracking

**Card 3 — Adaptive Coaching**
- Current: "Your AI nutrition coach"
- New description: "Adaptive TDEE that recalibrates weekly using your real weight data — not a static calculator."
- Add details: 4 coaching modes (Manual, Coached, Collaborative, Recomp), weekly check-ins adjust calories ±50–200 based on weight trend vs. target, EMA smoothing eliminates water weight noise

**Card 4 — Analytics**
- Current: "12 ways to visualize progress"
- New description: "Track PRs, volume trends, body composition, and muscle balance across 12 interactive charts."
- Add details: 4 types of PR detection (1RM, volume, tonnage, reps), body heat map showing per-muscle volume status (below MEV → above MRV), weight trend with 7-day EMA

**Card 5 — Progress Photos**
- Current: "See the transformation"
- New description: "Side-by-side comparison with date overlays. See what the scale can't show."
- Add details: timeline view, overlay mode, body part tagging, private & encrypted storage

**Card 6 — Weekly Intelligence**
- Current: "Your weekly performance report"
- New description: "Every Sunday: a data-driven report with 3–5 actionable recommendations tailored to your week."
- Add details:
  - 3 data sections: Training (volume by muscle, PRs, HU per muscle), Nutrition (avg macros, compliance %, TDEE delta), Body (weight trend + direction)
  - Example recommendations: "You haven't trained chest this week", "Weight down 0.5kg — on track for your cut", "Micronutrient score: 72/100 — consider more leafy greens"
  - PR celebrations with 🎉
  - MEV/MAV/MRV reference per muscle group

**Implementation approach:**
- Add `details: string[]` to the feature type
- On the 2×2 card, render bullets below description
- On 1×1 cards, render 1–2 line expanded description (no bullets — too cramped)
- Keep tags as-is for scannability

---

### A2. Expand FAQ with Feature Education

**File:** `components/sections/FAQ.tsx`
**Effort:** Short (1–2h)

Add 5 new FAQ entries after the existing 7:

**Q8: "How are Hypertrophy Units calculated?"**
> Repwise uses the Weighted Number of Sets (WNS) formula. Only "stimulating reps" count — the last 0–5 reps before failure where muscle fibers are maximally recruited. Each exercise has coefficients per muscle (e.g., bench press = 1.0× chest, 0.5× triceps). A diminishing returns curve means your 6th set for a muscle gives less stimulus than your 1st. And if you exceed ~10 sets per muscle in one session, you'll see a warning — research shows negative returns beyond that point. Between sessions, a decay factor models atrophy so your weekly HU reflects net stimulus.

**Q9: "How does TDEE calculation work?"**
> We use a 5-step adaptive algorithm: (1) Calculate BMR from your stats, (2) Apply activity multiplier, (3) Smooth daily weight with Exponential Moving Average to filter water fluctuations, (4) Compare predicted vs. actual weight change weekly to recalibrate your TDEE ±50–200 calories, (5) Distribute into macro targets based on your goal (cut/maintain/bulk). After 2–3 weeks, your TDEE estimate becomes highly accurate — no food scale precision required.

**Q10: "What are the coaching modes?"**
> Repwise offers 4 modes: Manual (you set everything), Coached (app sets targets, you follow), Collaborative (app suggests, you approve), and Recomp (simultaneous fat loss + muscle gain protocol). Weekly check-ins ask about adherence, energy, and hunger — then adjust your targets automatically. You can switch modes anytime.

**Q11: "What's in the Weekly Intelligence Report?"**
> Every Sunday you get a report with 3 sections — Training (volume by muscle group, PRs hit, HU scores), Nutrition (average macros, compliance %, TDEE accuracy), and Body (weight trend + weekly delta). Below that: 3–5 personalized recommendations like "Increase quad volume — you're below MEV" or "Great protein compliance this week — 94% on target." PRs get 🎉 celebrations.

**Q12: "How does onboarding work?"**
> A 9-step wizard personalizes everything in ~3 minutes: basic stats → goal selection → experience level → training frequency → dietary preferences → allergy flags → TDEE reveal (with animated breakdown) → macro distribution → workout schedule. Every setting can be changed later. No account required to start exploring.

---

### A3. Pricing Regional Currency Footnote

**File:** `components/sections/Pricing.tsx`
**Effort:** Quick (<15min)

Add one line after the existing "No credit card required for trial" text:

```tsx
<p className="text-center text-[#64748B] text-xs mt-2">
  Prices shown in USD. Actual price may vary by region in the App Store and Google Play.
</p>
```

No RevenueCat API integration needed. Apple/Google handle currency conversion automatically. This matches industry standard (Strong, Hevy, MacroFactor all show USD on their websites).

---

### A4. Science Citations in ScienceSection

**File:** `components/sections/ScienceSection.tsx`
**Effort:** Quick (<30min)

Add a `citation` field to each card object:

| Card | Citation |
|------|----------|
| Hypertrophy Units (WNS) | Schoenfeld et al. (2017) — dose-response of weekly volume on muscle hypertrophy |
| Volume Landmarks | Israetel, Hoffmann & Smith (2021) — MEV, MAV, MRV framework |
| Fatigue Engine | Halson (2014) — monitoring training load and fatigue in athletes |
| RPE/RIR Tracking | Zourdos et al. (2016) — RPE scale validity for resistance exercise |

Render as small italic text below each card description:

```tsx
<p className="text-[#64748B] text-xs italic mt-2">{card.citation}</p>
```

---

## Phase B: Dashboard Mockup Component (Can Implement Now)

### B1. Replace Phone Mockup Placeholder

**New file:** `components/shared/DashboardMockup.tsx`
**Modify:** `components/sections/Hero.tsx`
**Effort:** Medium (2–4h)

Replace the gray "Phone Mockup" placeholder in Hero with a CSS-rendered dashboard recreation.

**Mockup contents (simplified):**
1. Status bar (time, battery, signal — standard phone chrome)
2. "Good morning" greeting + date
3. Macro rings row: 3 circular progress indicators (Protein / Carbs / Fat) with calorie total center
4. "Today's Workout" card: workout name, estimated duration, muscle groups as colored pills
5. Weight trend mini-chart: simple SVG line showing 7-day trend with current weight label
6. Bottom tab bar silhouette (5 icons)

**Design tokens from app:**
- Background: `#0A0E13` (matches website)
- Accent: `#06B6D4` (cyan)
- Cards: `rgba(255,255,255,0.03)` with `border: 1px solid rgba(255,255,255,0.06)`
- Text: `#F1F5F9` primary, `#94A3B8` secondary

**Implementation:**
- Pure CSS/Tailwind — no images needed
- Macro rings: CSS `conic-gradient` or SVG circles with `stroke-dasharray`
- Weight chart: inline SVG `<polyline>` with 7 points
- Wrap in the existing phone frame (rounded-[3rem] border)
- Add subtle `animate-pulse` on the macro ring fills for life
- Keep it a presentational component — no interactivity needed

---

## Phase C: New Sections (Can Implement Now)

### C1. "Switching From..." Section

**New file:** `components/sections/SwitchingFrom.tsx`
**Modify:** `app/page.tsx` — insert after `ComparisonTable`
**Effort:** Short (1–2h)

Three columns addressing the #1 objection ("I already have data in another app"):

| Coming from Strong? | Coming from MyFitnessPal? | Coming from RP Hypertrophy? |
|---------------------|---------------------------|------------------------------|
| Import your workout history in one tap. Keep your PRs, keep your streaks. Plus: get hypertrophy science and nutrition tracking Strong doesn't have. | Bring your food log habits to an app that also understands training science. Same barcode scanning, plus macro cycling, adaptive TDEE, and micronutrient scoring. | Same volume landmarks and science — plus full nutrition tracking, adaptive TDEE, and 75% lower price. One app instead of two. |

Each column: competitor logo placeholder (text-only for now), 2–3 bullet points, "Switch Now →" CTA.

### C2. "See It In Action" Video Placeholder

**New file:** `components/sections/VideoSection.tsx`
**Modify:** `app/page.tsx` — insert between `Hero` and `SocialProof`
**Effort:** Quick (<30min)

Dark card with centered play button icon, text "See Repwise in Action", and subtitle "2-minute walkthrough — coming soon". When real video exists, swap in a YouTube/Vimeo embed.

```tsx
<section className="py-16 px-6">
  <div className="max-w-4xl mx-auto">
    <div className="aspect-video rounded-2xl bg-white/[0.03] border border-white/[0.06] 
                    flex flex-col items-center justify-center gap-4">
      <Play className="w-16 h-16 text-[#06B6D4]/50" />
      <p className="text-[#94A3B8]">2-minute walkthrough — coming soon</p>
    </div>
  </div>
</section>
```

### C3. Improve About Page

**File:** `app/about/page.tsx`
**Effort:** Short (1h)

Add three sections:

1. **"Why I Built This"** — expand the existing story with specific frustrations (tracking in 3 apps, spreadsheet fatigue, no app combining training science + nutrition)

2. **Tech credibility block** — expand the existing 2-stat grid to 4:
   - 3,187+ automated tests
   - 220 API endpoints
   - 50 database tables
   - 100% TypeScript

3. **Onboarding description** — "Your first 3 minutes" section describing the 9-step wizard flow with a numbered list

### C4. Footer Social Links Structure

**File:** `components/layout/Footer.tsx`
**Effort:** Quick (<15min)

Add a "Connect" column to the footer grid (change from 3-col to 4-col):

```
Product | Legal | Connect
                  Telegram (existing)
                  Instagram (placeholder — #)
                  Twitter/X (placeholder — #)
                  YouTube (placeholder — #)
```

Use `aria-label` on placeholder links. Add `rel="noopener noreferrer"` and `target="_blank"`.

---

## Phase D: Requires User Input

### D1. Real App Screenshots
- **Need:** Running simulator or device to capture dashboard, onboarding TDEE reveal, weekly report
- **Best candidates:** Dashboard (macro rings + workout card + weight trend), Onboarding TDEE reveal step (animated bars), Weekly Intelligence Report
- **Format:** PNG at 3x resolution, dark mode
- **Action for user:** Take 3–5 screenshots, drop in `public/screenshots/`
- **Then:** Replace `DashboardMockup` in Hero with real image, add screenshots to features page

### D2. Demo Video
- **Need:** Screen recording of app walkthrough (2 min)
- **Action for user:** Record with simulator or device, upload to YouTube/Vimeo
- **Then:** Replace `VideoSection` placeholder with embed

### D3. Social Media Accounts
- **Need:** Create Instagram, Twitter/X, YouTube accounts for Repwise
- **Then:** Update placeholder `#` links in Footer

### D4. Real Testimonials
- **Need:** Beta tester quotes with permission
- **Then:** Replace placeholder testimonials in `Testimonials.tsx`

---

## Phase Summary

| Phase | Items | Total Effort | Dependencies |
|-------|-------|-------------|--------------|
| A | Bento cards, FAQ, pricing footnote, citations | ~4h | None |
| B | Dashboard mockup component | ~3h | None |
| C | Switching section, video placeholder, about page, footer | ~3h | None |
| D | Screenshots, video, social accounts, testimonials | Varies | User action required |

**Phases A–C are parallelizable and can all be implemented immediately.**
**Phase D is blocked on user-provided assets.**

---

## Legal Status (No Action Needed)

The existing `/privacy` and `/terms` pages already serve dual purpose:
- Website visitors read them directly
- The app's `constants/urls.ts` links to `https://repwise.app/privacy` and `https://repwise.app/terms`
- In-app signup "Terms & Conditions" link opens these same pages
- Already includes CCPA, COPPA, Apple/Google third-party beneficiary language
- Section 1 ("Acceptance of Terms") covers the "by creating an account, you agree" requirement

This is the standard pattern used by Strong, Hevy, and MacroFactor. No new pages needed.

---

## File Change Index

| File | Change Type | Phase |
|------|------------|-------|
| `components/sections/BentoFeatures.tsx` | Modify — expand feature data | A1 |
| `components/sections/FAQ.tsx` | Modify — add 5 FAQ entries | A2 |
| `components/sections/Pricing.tsx` | Modify — add footnote line | A3 |
| `components/sections/ScienceSection.tsx` | Modify — add citations | A4 |
| `components/shared/DashboardMockup.tsx` | **New** — CSS dashboard recreation | B1 |
| `components/sections/Hero.tsx` | Modify — swap placeholder for mockup | B1 |
| `components/sections/SwitchingFrom.tsx` | **New** — competitor migration section | C1 |
| `components/sections/VideoSection.tsx` | **New** — video placeholder | C2 |
| `app/about/page.tsx` | Modify — expand content | C3 |
| `components/layout/Footer.tsx` | Modify — add social column | C4 |
| `app/page.tsx` | Modify — insert VideoSection + SwitchingFrom | C1, C2 |
