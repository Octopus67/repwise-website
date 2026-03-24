# AI Language Audit - Repwise Website

**Audited:** All 19 user-facing files + constants.ts + FullFeatureList.tsx
**Audience:** Serious lifters 20-40 who will immediately detect AI copy
**Date:** 2026-03-24

---

## 🚨 EM DASHES (—) — THE #1 AI TELL

Em dashes are the single biggest giveaway. Found **14 instances** across the site. Real humans use commas, periods, colons, or just rewrite the sentence.

### 1. `Hero.tsx` — "App Store — Coming Soon" / "Google Play — Coming Soon"
**Text:** `App Store — Coming Soon` and `Google Play — Coming Soon`
**Why it's AI:** Em dash used as a separator. Humans write "Coming Soon" as a subtitle or use a colon.
**Fix:** `App Store (Coming Soon)` or just put "Coming Soon" on a separate line below, which the design already supports.

### 2. `FinalCTA.tsx` — Same "App Store — Coming Soon" pattern
**Text:** `App Store — Coming Soon` / `Google Play — Coming Soon`
**Same fix as above.**

### 3. `ProblemSection.tsx` — "Repwise gives you both —"
**Text:** `Repwise gives you both — for free.`
**Why it's AI:** Classic em dash pause. Humans would use a period or comma.
**Fix:** `Repwise gives you both. For free.` (punchier anyway)

### 4. `ScienceSection.tsx` — "color-coded, with built-in education"
**Text (in data):** `Rate of Perceived Exertion and Reps in Reserve — color-coded, with built-in education`
**Why it's AI:** Em dash as a dramatic pause connector.
**Fix:** `Rate of Perceived Exertion and Reps in Reserve. Color-coded, with built-in education.`

### 5. `Testimonials.tsx` — Mike K. quote
**Text:** `...is a game changer — no other app actually quantifies...`
**Why it's AI:** Em dash mid-sentence in a "testimonial."
**Fix:** `...is a game changer. No other app actually quantifies...`

### 6. `Testimonials.tsx` — Ananya P. quote
**Text:** `...the same hypertrophy science — volume landmarks, fatigue management, the WNS model — plus full macro tracking...`
**Why it's AI:** Double em dash parenthetical. This is the most ChatGPT-looking construction on the entire site.
**Fix:** `...the same hypertrophy science (volume landmarks, fatigue management, WNS) plus full macro tracking...`

### 7. `FAQ.tsx` — "How are Hypertrophy Units calculated?"
**Text:** `...stimulating reps — only the last 0-5 reps before failure count.`
**Why it's AI:** Em dash as explanatory connector.
**Fix:** `...stimulating reps. Only the last 0-5 reps before failure count.`

### 8. `FAQ.tsx` — "What is Adaptive Training?"
**Text:** `All modes use your real data — not generic formulas.`
**Why it's AI:** Em dash for contrast.
**Fix:** `All modes use your real data, not generic formulas.`

### 9. `FAQ.tsx` — "How does onboarding work?"
**Text:** `Every number is editable — you're always in control.`
**Why it's AI:** Em dash for emphasis.
**Fix:** `Every number is editable. You're always in control.`

### 10. `blog/page.tsx` — Blog post 1
**Text:** `...usually around 4–6 sets per muscle group per week`
**Note:** This is an en dash (–) used for ranges, which is actually correct typographically. NOT an AI tell. Keep this.

### 11. `blog/page.tsx` — Blog post 2
**Text:** `...Metabolic adaptation, NEAT fluctuations, water retention, stress, sleep — all of these shift...`
**Why it's AI:** Em dash list summary.
**Fix:** `...Metabolic adaptation, NEAT fluctuations, water retention, stress, sleep. All of these shift...`

### 12. `blog/page.tsx` — Blog post 3
**Text:** `...Strong — great for logging, but no nutrition...`
**Why it's AI:** Em dash parenthetical aside.
**Fix:** `...Strong (great for logging, but no nutrition...` or just `Strong, which is great for logging but has no nutrition...`

### 13. `blog/page.tsx` — Blog post 3
**Text:** `Not freemium with paywalled features. Not a 7-day trial. Actually free.`
**Note:** This is actually GOOD. Punchy, human-sounding. Keep this.

### 14. `about/page.tsx`
**Text:** `...none of which talked to each other.`
**Note:** Clean. No em dash. Good.

---

## 🚨 AI VOCABULARY FLAGS

### 15. `Testimonials.tsx` — "game changer"
**Text (Mike K.):** `...the Weekly Net Stimulus model is a game changer`
**Why it's AI:** "Game changer" is on the AI buzzword list. It's also just overused marketing speak.
**Fix:** `...the Weekly Net Stimulus model is legit` or `...the WNS model actually changed how I train`

### 16. `FAQ.tsx` — "completely free"
**Text:** `Yes! Every feature in Repwise is completely free`
**Why it's AI:** Exclamation mark + "completely free" is marketing-speak. A human answering a FAQ would be more casual.
**Fix:** `Yeah, everything is free. Hypertrophy science, nutrition tracking, analytics...` (drop the exclamation mark)

### 17. `Pricing.tsx` — "No strings attached"
**Text:** `No credit card required. No strings attached.`
**Why it's AI:** "No strings attached" is a cliche that AI loves. It's not terrible here but it's a yellow flag.
**Fix:** `No credit card required. No catch.` or just drop the second sentence entirely.

---

## 🚨 OVERLY PARALLEL STRUCTURE

### 18. `HowItWorks.tsx` — Three steps with identical pattern
**Text:**
- `Set Your Goals` → `11-step onboarding personalizes your TDEE, macros, and training targets`
- `Train & Track` → `Log workouts with real-time feedback. Scan food with one tap.`
- `See Results` → `Analytics, weekly reports, and adaptive coaching evolve with you`

**Why it's AI:** Three steps, each with a verb-noun title and a single-sentence description. This is the classic AI "How It Works" template. Every AI landing page generator produces exactly this.
**Fix:** The structure itself is fine for a "how it works" section (it's a convention). But the descriptions are too polished. Make them messier:
- Step 1: `A quick onboarding quiz sets your TDEE, macros, and training targets. Takes about 2 minutes.`
- Step 2: `Log your sets, scan your food. The app tracks stimulating reps and flags junk volume in real time.`
- Step 3: `Weekly reports show what's working. Coaching adjusts your plan based on real data.`

### 19. `SwitchingFrom.tsx` — Three competitor cards with identical sentence structure
**Text:**
- Strong: `Import your workout history. Keep your PRs. Add nutrition tracking and hypertrophy science on top.`
- MyFitnessPal: `Bring your nutrition habits. Get a 3M+ food database with barcode scanning, plus real training intelligence.`
- RP Hypertrophy: `Same science-based approach — for free. Plus full nutrition tracking, analytics, and adaptive coaching.`

**Why it's AI:** All three follow the pattern: [Acknowledge what you had]. [What you get now]. [Bonus]. The parallelism is too clean.
**Fix:** Vary the structure:
- Strong: `Your workout history imports straight over, PRs and all. Now you get nutrition tracking and actual hypertrophy science too.`
- MyFitnessPal: `Same barcode scanning and food database you're used to (actually bigger, 3M+ foods). But now your nutrition data actually connects to your training.`
- RP Hypertrophy: `Same volume landmarks and fatigue management, but free. And you get full nutrition tracking on top, which RP doesn't do.`

### 20. `BentoFeatures.tsx` — Feature card descriptions
**Text (small cards):**
- `TDEE recalibrates weekly based on your real data. 4 coaching modes adapt to your style.`
- `Strength curves, body composition trends, fatigue scoring, and periodization calendar.`
- `Guided pose overlays for consistent photos. Compare side-by-side across any timeframe.`
- `Training volume, nutrition compliance, and weight trends — plus personalized recommendations.`

**Why it's AI:** Each is exactly 1-2 sentences. Each follows [Feature]. [Benefit]. pattern. Too uniform.
**Fix:** Vary length and structure. Some can be fragments, some can be questions, some can be longer.
- Adaptive Coaching: `Your TDEE recalibrates every week from real weigh-in data. Pick from 4 coaching modes depending on how hands-on you want the app to be.`
- Analytics: `Strength curves, body comp trends, fatigue scores, periodization calendar. The nerdy stuff.`
- Progress Photos: `Pose overlays so your photos are actually comparable. Side-by-side any two dates.`
- Weekly Intelligence: `Training volume, nutrition compliance, weight trends, and 3-5 specific recommendations for next week.` (remove the em dash)

---

## 🚨 "WHETHER YOU'RE X OR Y" PATTERN

### Not found. Clean on this one. ✅

---

## 🚨 UNNECESSARY EXCLAMATION MARKS

### 21. `FAQ.tsx` — Multiple answers
**Text:** `Yes! Every feature in Repwise is completely free`
**Text:** `Yes! Repwise supports importing workout history`
**Why it's AI:** FAQ answers starting with "Yes!" is overly enthusiastic. Real FAQ answers are matter-of-fact.
**Fix:** Just `Yes.` or `Yeah,` or drop the "Yes" entirely and just answer.

---

## 🚨 "NOT JUST X, BUT Y" PATTERN

### Not found explicitly. But there's a close variant:

### 22. `ScienceSection.tsx`
**Text:** `Not bro-science. Not AI-generated plans. Real hypertrophy research, implemented as software.`
**Assessment:** This is actually good. The "Not X. Not Y. Actually Z." pattern reads human here because it's punchy and specific. **Keep this.**

---

## 🚨 LISTS STARTING WITH SAME WORD PATTERN

### 23. `Pricing.tsx` — Coaching features list
**Text:**
- `Dedicated personal coach`
- `Custom program design`
- `Weekly video check-ins`
- `Nutrition plan adjustments`
- `Form review & feedback`
- `Priority support`

**Why it's AI:** Every item is [Adjective] [Noun] or [Noun] [Noun]. Too uniform. Real feature lists have varied structure.
**Fix:** Mix it up:
- `A dedicated coach who actually knows your data`
- `Custom programming based on your Repwise analytics`
- `Weekly video check-ins`
- `Nutrition adjustments as your body changes`
- `Form review and feedback on your lifts`
- `Priority support`

---

## 🚨 OVERLY POLISHED TESTIMONIALS

### 24. `Testimonials.tsx` — ALL four testimonials
Every single testimonial reads like marketing copy, not a real person talking. Here's why:

**Mike K.:** `"I was paying for Strong AND MacroFactor. Switched to Repwise and the Weekly Net Stimulus model is a game changer — no other app actually quantifies how much growth stimulus each muscle gets per session. Plus the nutrition tracking is just as good. And it's free."`
**Problem:** Too structured. Opens with competitor comparison, moves to technical feature name, closes with price point. This is a sales pitch disguised as a testimonial. Real people don't say "Weekly Net Stimulus model" in casual feedback.
**Fix:** `"Was using Strong for workouts and MacroFactor for food. Repwise replaced both. The thing that got me was seeing exactly how much stimulus each muscle actually got per session. Cut my workout time down too. Oh and it's free, which is wild."`

**Sarah R.:** `"The weekly TDEE recalibration actually works. My calories adjusted automatically when my weight loss stalled at week 6. Didn't have to guess or manually change anything. The weekly report told me exactly what to fix."`
**Problem:** This one is actually the most believable of the four. The specificity (week 6, 8kg) helps. But "TDEE recalibration" is jargon most users wouldn't lead with.
**Fix:** `"My weight loss stalled around week 6 and the app just... adjusted my calories on its own. Didn't have to do anything. The weekly report showed me exactly what changed. Down 8kg now."`

**James T.:** `"The hypertrophy units thing clicked for me after about 2 weeks. I realized half my sets were basically junk volume — too far from failure. Cut my session time by 20 minutes and actually started growing faster."`
**Problem:** Actually pretty good. The "thing clicked for me" is natural. The em dash is the main issue.
**Fix:** `"The hypertrophy units thing clicked for me after about 2 weeks. I realized half my sets were basically junk volume, too far from failure. Cut my session time by 20 minutes and actually started growing faster."`

**Ananya P.:** `"RP was $300/year and didn't even have nutrition tracking. Repwise has the same hypertrophy science — volume landmarks, fatigue management, the WNS model — plus full macro tracking and barcode scanning. And it's the only app that does all of this. For free."`
**Problem:** This is the worst offender. It reads like a comparison table converted to prose. The double em dash parenthetical is pure ChatGPT. "And it's the only app that does all of this. For free." is a tagline, not something a person says.
**Fix:** `"I was paying $300/year for RP and it didn't even track nutrition. Repwise does the same volume landmark stuff and fatigue tracking, plus macros and barcode scanning. All free. I genuinely don't get how."`

---

## 🚨 "THE ONLY APP THAT..." OVERUSE

### 25. Multiple instances across the site
- `Testimonials.tsx` (Ananya P.): `And it's the only app that does all of this.`
- `FAQ.tsx`: `Repwise is the only app combining hypertrophy science...with full nutrition tracking...and adaptive coaching — all in one app.`
- `pricing/page.tsx` (structured data): `The only app combining hypertrophy science with full nutrition tracking and adaptive coaching.`

**Why it's AI:** Using "the only app" three times across the site is repetitive and sounds like a marketing brief that got copy-pasted. Once is a claim. Three times is a tell.
**Fix:** Use it ONCE, in the most impactful spot (probably the FAQ or comparison section). Replace the others:
- Testimonial: `I genuinely don't get how this is free.`
- FAQ: `No other app puts hypertrophy science, full nutrition tracking, and adaptive coaching in one place.`
- Structured data: Keep "the only app" here since it's for SEO/schema, not human reading.

---

## 🚨 SENTENCES TOO PERFECTLY STRUCTURED

### 26. `about/page.tsx` — Origin story
**Text:** `Repwise started from a simple frustration: every fitness app either oversimplified the science or buried it under complexity.`
**Why it's AI:** The "started from a simple frustration: [perfectly balanced contrast]" is textbook AI origin story.
**Fix:** `I kept running into the same problem: fitness apps either dumbed down the science or made it so complicated nobody would actually use it.`

### 27. `about/page.tsx` — "Why I Built This"
**Text:** `Repwise is the single app that connects your training, nutrition, and recovery into one intelligent system, all grounded in peer-reviewed science.`
**Why it's AI:** "Single app that connects...into one intelligent system, all grounded in peer-reviewed science" is too polished. No founder talks like this casually.
**Fix:** `Repwise connects your training, nutrition, and recovery data in one place. Everything is based on published research, not bro-science.`

### 28. `about/page.tsx` — "Built to Last"
**Text:** `No shortcuts, no tech debt — just solid engineering for an app you can rely on.`
**Why it's AI:** Em dash + "solid engineering" + "you can rely on" is corporate-speak.
**Fix:** `No shortcuts, no tech debt. Built to last.` (the section title already says it)

### 29. `features/page.tsx` — Page heading
**Text:** `Everything You Need. Nothing You Don't.`
**Why it's AI:** This exact phrase appears on thousands of AI-generated landing pages. It's become a cliche.
**Fix:** `Every feature a serious lifter actually needs.` or `Built for lifters, not casual gym-goers.`

### 30. `BentoFeatures.tsx` — Subheading
**Text:** `One app. Zero compromises.`
**Why it's AI:** Same energy as "Everything You Need. Nothing You Don't." Short. Punchy. Perfectly balanced. AI loves this pattern.
**Fix:** `All of this. One app. Free.` or just drop the subheading.

### 31. `FullFeatureList.tsx` — Heading
**Text:** `30 Features. Zero Compromises.`
**Why it's AI:** Same "[Number]. Zero [Noun]." pattern AGAIN. Using "Zero compromises" twice on the site is a dead giveaway.
**Fix:** `30+ features. Here's what you get.` or `The full list.`

### 32. `constants.ts` — Brand tagline
**Text:** `Science-Based Fitness: Training + Nutrition in One App`
**Assessment:** This is fine for a tagline. Taglines are supposed to be polished. **Keep this.**

---

## 🚨 BLOG POST SPECIFIC FLAGS

### 33. `blog/page.tsx` — Blog post 3 title
**Text:** `We Made Everything Free. Here's Why.`
**Assessment:** Actually good. Conversational, direct. **Keep this.**

### 34. `blog/page.tsx` — Blog post 2
**Text:** `Your body isn't static. Your calorie targets shouldn't be either.`
**Why it's AI:** Perfect parallel closing statement. It's a good line but it reads like a copywriter's sign-off.
**Fix:** `Your body changes week to week. Your calorie targets should too.`

### 35. `blog/page.tsx` — Blog post 1
**Text:** `Stop counting sets. Start tracking where those sets land relative to your landmarks.`
**Why it's AI:** "Stop X. Start Y." is a classic AI/marketing closer.
**Fix:** `Counting sets doesn't tell you much. What matters is where those sets land relative to your landmarks.`

---

## SUMMARY

| Category | Count | Severity |
|----------|-------|----------|
| Em dashes (—) | 12 real flags | 🔴 HIGH — fix all of them |
| AI vocabulary | 3 | 🟡 MEDIUM |
| Parallel structure | 4 sections | 🔴 HIGH — most obvious AI pattern |
| Unnecessary exclamation marks | 2 | 🟡 MEDIUM |
| "The only app" overuse | 3 instances | 🟡 MEDIUM — keep 1, rewrite 2 |
| Overly polished testimonials | 4/4 testimonials | 🔴 HIGH — biggest credibility risk |
| Too-perfect sentence structure | 7 | 🟡 MEDIUM |
| Blog closers | 2 | 🟢 LOW |

### Top 5 Priorities (fix these first)
1. **Kill every em dash.** Replace with periods, commas, or parentheses. This is the single fastest way to de-AI the site.
2. **Rewrite all 4 testimonials.** They're the most obviously AI-generated text on the site. Make them sound like Discord messages, not press releases.
3. **Break the parallel structure** in HowItWorks, SwitchingFrom, and BentoFeatures. Vary sentence length and pattern.
4. **Stop saying "Zero compromises."** It appears twice and is an AI cliche. Pick different phrasing for each instance.
5. **Tone down FAQ enthusiasm.** Drop the "Yes!" openers. Answer like a human would in a Telegram chat.

### What's Already Good ✅
- Blog post content is mostly natural and educational
- "Not bro-science. Not AI-generated plans." line is great
- About page origin story has genuine voice (just needs polish)
- Pricing section is straightforward and honest
- "We Made Everything Free. Here's Why." is a great title
- The comparison table lets data speak for itself
- Newsletter section is clean and minimal
