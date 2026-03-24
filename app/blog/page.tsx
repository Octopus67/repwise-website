import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Blog — Repwise',
  description: 'Training science, nutrition tips, and product updates from the Repwise team.',
  alternates: { canonical: '/blog' },
};

const posts = [
  {
    title: 'Why Volume Landmarks Matter More Than Set Counting',
    date: 'Jan 15, 2025',
    category: 'Science',
    readTime: '3 min read',
    content: `Most lifters think more sets equals more growth. It doesn't. What actually matters is where your volume sits relative to four key landmarks: MV (Maintenance Volume), MEV (Minimum Effective Volume), MAV (Maximum Adaptive Volume), and MRV (Maximum Recoverable Volume).

MV is the bare minimum to not lose muscle — usually around 4–6 sets per muscle group per week. MEV is where growth actually starts, typically 6–10 sets. MAV is the sweet spot where you're getting the most bang for your buck, often 12–18 sets depending on the muscle. And MRV is the ceiling — go past it and you're just accumulating fatigue without extra growth.

Here's the problem: doing 20 sets of chest when your MAV is 14 doesn't give you bonus gains. It pushes you past MRV, tanks your recovery, and can actually make your next session worse. You're doing junk volume — sets that look productive but aren't driving adaptation.

This is exactly why Repwise tracks volume landmarks per muscle group. Instead of just counting total sets, the app maps your weekly volume against your estimated MEV, MAV, and MRV. When you're under MEV, it tells you to add sets. When you're approaching MRV, it flags that you're close to the ceiling.

The result? You train smarter, not longer. Most users find they can cut 15–20 minutes off their sessions while actually progressing faster, because every set they do is in the productive range.

Stop counting sets. Start tracking where those sets land relative to your landmarks.`,
  },
  {
    title: 'The Problem With Most Calorie Counting Apps',
    date: 'Jan 8, 2025',
    category: 'Nutrition',
    readTime: '3 min read',
    content: `You download a calorie tracker, plug in your stats, and it spits out a number. 2,200 calories. Cool. You eat that for 8 weeks and... nothing happens. Or worse, you lose weight for 3 weeks and then completely stall.

The problem isn't your discipline. It's that most apps use a static TDEE formula — they calculate your maintenance calories once based on height, weight, age, and an activity multiplier, then never update it. But your actual energy expenditure changes constantly. Metabolic adaptation, NEAT fluctuations, water retention, stress, sleep — all of these shift your real TDEE week to week.

A static number is a guess. And it gets less accurate over time.

This is why Repwise uses weekly TDEE recalibration. Every week, the app looks at your actual weight trend and your logged calorie intake, then back-calculates what your true TDEE was. If you ate 2,200 calories and your weight didn't change, your TDEE is roughly 2,200. If you ate 2,200 and gained 0.2kg, your TDEE was lower.

From there, it adjusts your targets automatically. No manual recalculation. No guessing whether you should drop 100 or 200 calories. The algorithm handles it based on real data, not formulas.

The weekly report breaks it all down — your average intake, weight trend, estimated TDEE, and what changed. Users who were stuck for weeks often see progress resume within 1–2 recalibration cycles.

Your body isn't static. Your calorie targets shouldn't be either.`,
  },
  {
    title: 'We Made Everything Free. Here\'s Why.',
    date: 'Jan 1, 2025',
    category: 'Product',
    readTime: '3 min read',
    content: `When we started building Repwise, we looked at the market and saw a gap. On one side, you had workout trackers like Strong — great for logging, but no nutrition and no real training science. On the other, apps like RP Hypertrophy that understood volume landmarks but charged $300/year and still didn't track macros. And then calorie trackers like MyFitnessPal that had nutrition but zero training intelligence.

Nobody combined all three. And the ones that came close were expensive.

So we made a decision: the core app would be completely free. Not freemium with paywalled features. Not a 7-day trial. Actually free. Full workout tracking with hypertrophy units and volume landmarks. Full nutrition tracking with barcode scanning and a 3M+ food database. Weekly TDEE recalibration. Progress analytics. All of it.

The only paid feature is 1-on-1 coaching — real human coaches who use your Repwise data to give personalized programming and nutrition guidance. That's the business model. The app is the platform, coaching is the service.

Why? Because we think the best training and nutrition tools shouldn't be locked behind a subscription. The science of hypertrophy and energy balance isn't proprietary — it's published research. We just built a better interface for it.

We're betting that if the free app is genuinely good, some percentage of users will want expert guidance on top of it. And that's enough to build a sustainable business.

Every feature in Repwise is free. No asterisks. No "upgrade to unlock." Just train, track, and grow.`,
  },
];

export default function BlogPage() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-center mb-4">Blog</h1>
          <p className="text-[#94A3B8] text-lg text-center mb-16">
            Articles on training science, nutrition, and product updates.
          </p>
        </ScrollReveal>

        <div className="space-y-16">
          {posts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.1}>
              <article>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-[#06B6D4] bg-[#06B6D4]/10 px-2.5 py-1 rounded-full">{post.category}</span>
                  <span className="text-xs text-[#64748B]">{post.date}</span>
                  <span className="text-xs text-[#64748B]">·</span>
                  <span className="text-xs text-[#64748B]">{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-[#F1F5F9] mb-6">{post.title}</h2>
                <div className="text-[#CBD5E1] text-sm leading-relaxed space-y-4">
                  {post.content.split('\n\n').map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
                {i < posts.length - 1 && <hr className="border-white/[0.06] mt-16" />}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
