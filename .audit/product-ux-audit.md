# Repwise Website — Product & UX Audit

**Auditor**: Senior Product Designer / Conversion Optimization Expert  
**Date**: June 2025  
**Scope**: Full website review from a user's perspective  
**Target Audience**: Serious lifters, 20-40, who already use fitness apps  

---

## Overall Verdict

**Score: 6.5/10** — Strong foundation with a clear value prop and smart competitive positioning, but the site currently feels like a polished wireframe. The copy is above average for a fitness app, the section flow is logical, and the pricing is compelling. But the complete absence of real visuals (app screenshots, video, photos) is a dealbreaker for conversion. Nobody downloads a fitness app they've never seen.

---

## 1. First Impression (Hero)

### Headline: "Train Smarter. Eat Smarter. One App."
**Grade: B+**

**What works:**
- Clear, punchy, three-beat rhythm. Communicates the dual value (training + nutrition) immediately.
- "One App" is the differentiator and it lands in 3 seconds.
- The tagline below ("Science-Based Fitness: Training + Nutrition in One App") reinforces without repeating.

**What doesn't work:**
- The headline is *competent* but not *magnetic*. It doesn't create urgency or emotion. Compare to: "Stop Paying for 3 Apps. Start Making Real Gains." — that hits a pain point.
- No subheadline that speaks to the *outcome*. Users don't want to "train smarter" — they want to get jacked, lose fat, hit PRs. The headline is about the tool, not the transformation.
- The phone mockup is literally a gray rectangle that says "Phone Mockup". This is the single biggest conversion killer on the entire site. The hero is where 60%+ of visitors decide to stay or bounce. A placeholder box screams "this isn't real yet."

**CTA: "Start Free — 7 Days, No Card"**
**Grade: A-**
- Excellent. Removes two objections (cost + commitment) in one line.
- The "App Store | Google Play" links below are good for users who want to go direct.

**Recommendations:**
- [ ] Add a real app screenshot or animated mockup in the hero. This is non-negotiable.
- [ ] Test a more outcome-oriented headline: "The Only App That Combines Hypertrophy Science + Nutrition Tracking" or "RP-Level Science. MacroFactor-Level Nutrition. $80/year."
- [ ] Add a micro-stat under the CTA: "Join 10,000+ lifters" (even if aspirational at launch).

---

## 2. Conversion Flow

### CTA Inventory (Homepage)
| Location | CTA Text | Type |
|----------|----------|------|
| Hero | "Start Free — 7 Days, No Card" | Primary (MagneticButton) |
| Hero | App Store / Google Play links | Secondary (text links) |
| Pricing | "Download Free" / "Start 7-Day Free Trial" | Primary (buttons) |
| Final CTA | "Start Free — 7 Days, No Card" | Primary (MagneticButton) |
| Sticky Mobile | "Get Repwise Free" | Primary (fixed bottom bar) |
| Header | "Download" | Secondary (nav button) |

**Grade: B+**

**What works:**
- Good CTA repetition — hero, pricing, final CTA, sticky mobile. The user is never more than one scroll away from an action.
- Consistent messaging ("Start Free", "7 Days, No Card").
- Sticky mobile CTA is smart — appears after initial scroll, always accessible.

**What doesn't work:**
- There's NO CTA between the hero and the pricing section. That's 7 sections (SocialProof → ProblemSection → BentoFeatures → HowItWorks → ScienceSection → FullFeatureList → ComparisonTable) without a single conversion opportunity. A user who's convinced at the BentoFeatures section has to scroll past 4 more sections to find a button.
- The "Download" button in the header goes to `/download` page, which has placeholder store links (`href="#"`) and a placeholder QR code. Dead end.
- No email capture anywhere. If someone isn't ready to download, you lose them forever.

**Recommendations:**
- [ ] Add a mid-page CTA after BentoFeatures or ComparisonTable: "Ready to try it? Start your free trial →"
- [ ] Add an email capture section (newsletter or "Get notified at launch") — the API route exists (`/api/newsletter`) but there's NO form on the site that uses it.
- [ ] Make store links functional or remove them until live. Placeholder `href="#"` links erode trust.

---

## 3. Content Quality

### Copy Assessment
**Grade: B+**

**Strengths:**
- The copy speaks the language of the target audience. Terms like "volume landmarks", "MV → MEV → MAV → MRV", "RPE/RIR", "progressive overload" — these are signals that say "this was built by someone who actually lifts."
- The ProblemSection ("Stop Juggling 3 Apps") is the strongest piece of copy on the site. It names the exact pain point and quantifies the cost ($402/yr vs $80/yr).
- FAQ answers are specific and technical without being overwhelming.
- The "Not bro-science. Not AI-generated plans. Real hypertrophy research, implemented as software." line in ScienceSection is excellent.

**Weaknesses:**
- The BentoFeatures section descriptions are too terse. "Train with science, not guesswork" and "3M+ foods. One scan away." are taglines, not explanations. A user who doesn't already know what "Volume Landmarks" or "WNS" means gets no help.
- The ScienceSection cards explain concepts well but don't connect them to *user outcomes*. "4-component fatigue scoring" — so what? Tell me: "Know exactly when to push harder and when to deload, so you never waste a session."
- "60+ Features" in the stats bar is vague and unverifiable. The FullFeatureList section counts ~30 features. Which is it?
- The About page says "Built by a lifter, for lifters" but never names the founder. Anonymous founders reduce trust.

**Recommendations:**
- [ ] Expand BentoFeatures descriptions to 2-3 sentences each. Explain the benefit, not just the feature name.
- [ ] Rewrite ScienceSection cards to lead with outcomes, then explain the mechanism.
- [ ] Fix the "60+ Features" stat to match reality (the FullFeatureList shows ~30). Inconsistency kills credibility.
- [ ] Name the founder on the About page. Add a photo. "Built by [Name], a lifter who spent 5 years reading hypertrophy research" is 10x more credible than anonymous.

---

## 4. Social Proof

### Stats Bar
**Grade: C+**

Current stats: 300,000+ Foods | 27 Micronutrients | 4 PR Types | 60+ Features

- These are *product specs*, not social proof. Social proof = other humans validating your product. "300,000+ foods" is a feature, not proof that anyone uses or likes the app.
- No user count, no download count, no ratings, no press mentions.
- For a pre-launch or early-stage app, this is understandable, but the section is labeled "Key statistics" and positioned right after the hero where social proof typically goes. It sets the wrong expectation.

### Testimonials
**Grade: C**

- Three testimonials with first name + last initial format. Clearly placeholders.
- The quotes are *too perfect*. Real users don't say "Repwise finally made periodization simple." They say "I was using Strong for workouts and MFP for food and it was a nightmare. Now I just open one app."
- No photos, no social media handles, no verification.
- The stats attached to each ("Lost 12kg in 16 weeks", "+40kg squat in 6 months") are good — specific and believable — but without real identities they feel fabricated.

**Recommendations:**
- [ ] Move the stats bar content into the features section where it belongs. Replace with actual social proof (user count, app store rating, or "Join the waitlist — X people already have").
- [ ] If the app is pre-launch, replace testimonials with beta tester quotes (even 3 real ones beat 3 fake ones).
- [ ] Add a "As seen in" / press logo bar if any coverage exists.
- [ ] Consider adding a Telegram community member count as social proof ("Join 500+ lifters in our community").

---

## 5. Pricing

**Grade: A-**

**What works:**
- Free vs Premium distinction is crystal clear. Free = basic logging. Premium = the science engine + nutrition + coaching.
- The monthly/yearly toggle is clean. "33% savings" on yearly is visible.
- "No credit card required for trial" removes the biggest objection.
- The ProblemSection's $402/yr vs $80/yr comparison is devastating. This is the strongest selling point on the entire site.
- ComparisonTable reinforces the value with feature-by-feature breakdown.

**What doesn't work:**
- The "78% savings" claim (from constants) appears in the ProblemSection as "78% less" but the math is $402 → $80, which is actually ~80% savings. Minor, but if someone checks, it looks sloppy.
- The "MOST POPULAR" badge on Premium is meaningless for a new app. Nobody believes it. Consider "BEST VALUE" instead.
- The free tier is *too* limited. "Workout tracking, Basic exercise library, Set & rep logging, Rest timer" — this is what every free app offers. There's no hook to get users invested before upgrading. Consider giving away one premium feature (like basic macro tracking) to create stickiness.
- The ComparisonTable doesn't include RP Hypertrophy ($300/yr), which is mentioned in the subagent context as a key competitor. It only shows Strong, Hevy, MacroFactor. The comparison text below the table mentions "RP + MacroFactor = $372/yr" but RP isn't in the table itself.

**Recommendations:**
- [ ] Verify the 78% savings math and make it consistent.
- [ ] Change "MOST POPULAR" to "BEST VALUE" or "RECOMMENDED".
- [ ] Add RP Hypertrophy to the ComparisonTable as a column. It's the most direct competitor for the science angle.
- [ ] Consider adding basic macro tracking to the free tier as a conversion hook.

---

## 6. Missing Elements

### Critical (would significantly impact conversion):

1. **Real app screenshots** — The hero has a gray placeholder. The BentoFeatures section has no visuals. The FullFeatureList is text-only. For a visual product like a fitness app, this is the #1 gap. Users need to *see* the app before downloading.

2. **Video/demo** — A 30-60 second product demo would be more convincing than all the copy combined. Show the workout logging flow, the barcode scanner, the body heat map, the analytics dashboard.

3. **Email capture / waitlist** — The newsletter API route exists but there's no form anywhere on the site. If the app isn't live yet, this is how you build a launch list. If it is live, this is how you nurture users who aren't ready to download.

4. **App Store ratings/reviews** — If the app is live, embed real ratings. If not, add a "Coming soon to App Store and Google Play" with email capture.

### Important (would improve trust and conversion):

5. **Founder identity** — The About page tells a story but never names the person. Add a name, photo, and brief bio. Solo founder building a fitness app = relatable to the target audience.

6. **Social media presence** — Only Telegram is linked. No Instagram (where fitness audiences live), no Twitter/X, no YouTube. For a fitness app targeting 20-40 year olds, Instagram is table stakes.

7. **Trust signals** — No press logos, no "Featured in", no security badges, no "Backed by" or "Built with" logos. The privacy policy mentions PostHog, Sentry, Cloudflare — these could be "Built with trusted infrastructure" trust signals.

8. **Contact form** — The contact API route exists but there's no form on the site. The only contact method is an email address buried in legal pages.

### Nice to have:

9. **Comparison with RP Hypertrophy** — The biggest competitor for the science angle isn't in the comparison table.

10. **Before/after transformations** — Even mockups of the progress photo feature would help.

11. **Interactive demo** — A "try the workout logger" embedded widget would be powerful.

12. **Changelog / roadmap** — Shows the product is actively developed.

---

## 7. Page Flow (Section Order)

### Current order:
1. Hero
2. SocialProof (stats bar)
3. ProblemSection ("Stop Juggling 3 Apps")
4. BentoFeatures
5. HowItWorks
6. ScienceSection
7. FullFeatureList
8. ComparisonTable
9. Testimonials
10. Pricing
11. FAQ
12. FinalCTA

### Assessment: B+

**What works:**
- Hero → Problem → Solution flow is textbook and effective.
- Pricing near the bottom (after value is established) is correct.
- FAQ before FinalCTA handles last-minute objections.

**What should change:**

- **Move Testimonials up** — Currently at position 9, after 7 sections of features. Social proof should appear earlier to build trust before the deep dive. Ideal position: after BentoFeatures (position 5) or after HowItWorks (position 6).

- **Move ComparisonTable closer to Pricing** — These are both "convince me on value" sections. Having FullFeatureList between them breaks the flow. Suggested: ComparisonTable → Pricing → FAQ.

- **Add a mid-page CTA** — After BentoFeatures or ComparisonTable. Currently 7 sections without a conversion opportunity.

- **Consider removing or collapsing FullFeatureList on homepage** — It's an accordion with 30 features. Most users won't open all 5 categories. It works better on the dedicated `/features` page. On the homepage, it slows momentum between the exciting sections (Science, Comparison) and the conversion sections (Testimonials, Pricing).

### Recommended order:
1. Hero
2. SocialProof (but with real social proof, not product specs)
3. ProblemSection
4. BentoFeatures
5. **Mid-page CTA**
6. HowItWorks
7. ScienceSection
8. Testimonials *(moved up)*
9. ComparisonTable
10. Pricing
11. FAQ
12. FinalCTA

---

## 8. Mobile Experience

**Grade: B+**

**What works:**
- Responsive grid classes throughout (`grid-cols-1 md:grid-cols-3`, etc.). All sections collapse to single column on mobile.
- Sticky mobile CTA bar at the bottom — excellent pattern for mobile conversion.
- Mobile hamburger menu with full nav + download button.
- `SmoothScrollProvider` with Lenis — smooth scrolling on mobile.
- `useReducedMotion` respected everywhere — good accessibility.
- Testimonials have `snap-x` horizontal scrolling on mobile — nice touch.

**Concerns:**

- **ComparisonTable**: `overflow-x-auto` with `min-w-[540px]` means horizontal scrolling on phones. 4-column comparison tables are notoriously bad on mobile. Users will miss columns. Consider a stacked card layout on mobile or a "swipe to compare" pattern.

- **Hero phone mockup**: The 280x560px placeholder will take up most of the mobile viewport. On a real phone, showing a phone mockup is redundant and wastes prime real estate. Consider hiding it on mobile or replacing with a feature highlight.

- **FullFeatureList accordion**: Works fine structurally, but 5 accordion items with 5-8 features each is a LOT of tapping on mobile. Consider showing top 3 features per category by default.

- **StickyMobileCTA**: Appears based on scroll progress (`scrollYProgress > 0.05`). This means it shows almost immediately. It should probably wait until after the hero section to avoid covering content too early. Also, it has no dismiss option — it permanently eats ~60px of screen real estate.

- **ProblemSection**: The two-column grid (competitor cards + Repwise card) stacks on mobile, but the visual impact of the side-by-side comparison is lost. The "= $402/yr" line might feel disconnected from the competitor cards when stacked.

- **Custom cursor**: `CustomCursor` component is loaded but presumably hidden on touch devices. Verify it doesn't cause performance issues on mobile.

**Recommendations:**
- [ ] Redesign ComparisonTable for mobile — stacked cards or horizontal scroll with sticky first column.
- [ ] Hide or replace phone mockup on mobile (`hidden lg:flex`).
- [ ] Add dismiss option to StickyMobileCTA, or delay appearance until after hero.
- [ ] Test ProblemSection stacking on actual mobile devices.

---

## 9. Legal Pages

### Privacy Policy
**Grade: B+**

**Strengths:**
- Covers all required categories: data collected, how it's used, third parties, security, retention, user rights.
- Specific about encryption (bcrypt, JWT, TLS).
- Names all third-party services (RevenueCat, Sentry, PostHog, Firebase, Cloudflare, AWS SES).
- 30-day deletion grace period is clearly stated.
- GDPR-adjacent rights (access, correction, deletion, portability).

**Gaps for App Store submission:**
- **No CCPA section** — California users have specific rights. Apple requires CCPA compliance for US apps.
- **No children's privacy section** — Terms say "must be 13+" but privacy policy doesn't address COPPA. Apple requires explicit children's privacy disclosures.
- **No cookie policy** — The website likely uses cookies (PostHog analytics). Needs disclosure.
- **No Apple Health / HealthKit disclosure** — If the app integrates with Apple Health (likely for a fitness app), Apple requires specific privacy disclosures about health data.
- **No data breach notification policy** — Good practice and required in some jurisdictions.
- **"Effective Date: March 20, 2026"** — Future date. Either intentional (pre-launch) or a typo.

### Terms of Service
**Grade: B**

**Strengths:**
- Covers basics: acceptance, service description, accounts, billing, cancellation, acceptable use, IP, liability.
- Health disclaimer is present and appropriate.
- Governing law specified (India).

**Gaps:**
- **No arbitration clause** — Standard for US-facing apps.
- **No class action waiver** — Standard for subscription apps.
- **No modification clause** — How will users be notified of ToS changes?
- **No termination clause** — Under what conditions can Repwise terminate an account?
- **Age requirement is 13** — Apple requires 17+ for apps with health/fitness features in some categories. Verify against App Store guidelines.
- **No Apple/Google required terms** — Both stores require specific language about third-party beneficiaries and acknowledgment that the store is not responsible for the app.

**Recommendations:**
- [ ] Add CCPA section to privacy policy.
- [ ] Add COPPA/children's privacy section.
- [ ] Add Apple Health/HealthKit disclosure if applicable.
- [ ] Add modification notification clause to ToS.
- [ ] Add Apple/Google required third-party beneficiary language.
- [ ] Verify age requirement against App Store guidelines.
- [ ] Fix the 2026 effective date if it's a typo.

---

## 10. Competitive Positioning

**Grade: B+**

### How the site positions against each competitor:

**vs. Strong ($30/yr):**
- Positioned as "Strong + nutrition + science." The comparison table shows Strong lacks hypertrophy science, nutrition, adaptive coaching, and body heat map. Effective.
- Price gap ($80 vs $30) is acknowledged but justified by the "3 apps in 1" narrative.

**vs. Hevy ($50/yr):**
- Same positioning as Strong. Hevy is shown as training-only without science or nutrition.
- This is accurate and effective.

**vs. MacroFactor ($72/yr):**
- Positioned as "MacroFactor + training science." The table shows MacroFactor has nutrition and adaptive coaching but lacks hypertrophy science, combined training, and body heat map.
- Price is nearly identical ($80 vs $72), so the value argument is "more features for similar price." This is the weakest comparison because MacroFactor users might not care about training features.

**vs. RP Hypertrophy ($300/yr):**
- Mentioned in the comparison text ("RP + MacroFactor = $372/yr") but NOT in the comparison table. This is a significant miss.
- RP is the most direct competitor for the science angle. Users choosing between RP and Repwise need to see a feature-by-feature comparison.
- The $300 vs $80 price difference is the strongest argument on the entire site and it's buried in a text line below the table.

### What's missing from the competitive narrative:

1. **No "switching" story** — The site says "Why Lifters Switch to Repwise" but doesn't explain the switching experience. Can I import my Strong data? My MacroFactor history? The FAQ mentions import support but it's buried.

2. **No "what you lose" honesty** — Every comparison site that converts well acknowledges tradeoffs. "Strong has a simpler UI. MacroFactor has a larger food database. But only Repwise combines..." — this builds trust.

3. **No specific science citations** — The site claims "peer-reviewed exercise science" but never cites a single paper. Linking to Schoenfeld, Israetel, or Helms would massively boost credibility with the target audience.

**Recommendations:**
- [ ] Add RP Hypertrophy as a column in the ComparisonTable.
- [ ] Promote the data import feature — make it a selling point, not a buried FAQ answer.
- [ ] Add 2-3 specific research citations in the ScienceSection (e.g., "Based on Schoenfeld et al. 2017 meta-analysis on training volume").
- [ ] Consider a dedicated "Switching from [App]?" page for each major competitor.

---

## Summary: Top 10 Action Items (Priority Order)

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 1 | Add real app screenshots to hero and feature sections | 🔴 Critical | Medium |
| 2 | Add email capture form (newsletter API exists, no UI) | 🔴 Critical | Low |
| 3 | Add mid-page CTA between features and pricing | 🟡 High | Low |
| 4 | Move testimonials up in page flow | 🟡 High | Low |
| 5 | Add RP Hypertrophy to comparison table | 🟡 High | Low |
| 6 | Fix store links (remove `href="#"` placeholders or add real URLs) | 🟡 High | Low |
| 7 | Add founder identity to About page | 🟡 High | Low |
| 8 | Add CCPA + COPPA sections to privacy policy | 🟡 High | Medium |
| 9 | Redesign ComparisonTable for mobile | 🟡 Medium | Medium |
| 10 | Add product demo video | 🟡 Medium | High |

---

## The Bounce Test

**If I'm a 28-year-old lifter who's been using Strong + MyFitnessPal, and I land on this site:**

- ✅ I immediately understand what this app does (training + nutrition + science, one app)
- ✅ I'm intrigued by the price comparison ($402 vs $80)
- ✅ The science terminology tells me this was built by someone who knows their stuff
- ✅ The free trial with no card required lowers my risk
- ❌ I can't see what the app actually looks like (gray placeholder box)
- ❌ I don't know who built this or if anyone else uses it
- ❌ The testimonials feel fake
- ❌ The store links don't work
- ❌ There's no video showing the app in action

**Verdict: I'd bookmark it and come back later. I would NOT download today.**

The copy and positioning are doing 80% of the work. The missing 20% — visuals, social proof, and functional download links — is what separates "interesting" from "downloaded."
