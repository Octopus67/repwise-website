import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Learn | Repwise',
  description: 'Training science, nutrition strategies, and hypertrophy research explained for serious lifters.',
  alternates: { canonical: '/blog' },
};

const posts = [
  {
    title: 'Why Volume Landmarks Matter More Than Set Counting',
    date: 'Jan 15, 2025',
    category: 'Science',
    readTime: '3 min read',
    content: `Most lifters think more sets equals more growth. It doesn't. What actually matters is where your volume sits relative to four key landmarks: MV (Maintenance Volume), MEV (Minimum Effective Volume), MAV (Maximum Adaptive Volume), and MRV (Maximum Recoverable Volume).

MV is the bare minimum to not lose muscle, usually around 4–6 sets per muscle group per week. MEV is where growth actually starts, typically 6–10 sets. MAV is the sweet spot where you're getting the most bang for your buck, often 12–18 sets depending on the muscle. And MRV is the ceiling. Go past it and you're just accumulating fatigue without extra growth.

Here's the problem: doing 20 sets of chest when your MAV is 14 doesn't give you bonus gains. It pushes you past MRV, tanks your recovery, and can actually make your next session worse. You're doing junk volume, sets that look productive but aren't driving adaptation.

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

The problem isn't your discipline. It's that most apps use a static TDEE formula. They calculate your maintenance calories once based on height, weight, age, and an activity multiplier, then never update it. But your actual energy expenditure changes constantly. Metabolic adaptation, NEAT fluctuations, water retention, stress, sleep. All of these shift your real TDEE week to week.

A static number is a guess. And it gets less accurate over time.

This is why Repwise uses weekly TDEE recalibration. Every week, the app looks at your actual weight trend and your logged calorie intake, then back-calculates what your true TDEE was. If you ate 2,200 calories and your weight didn't change, your TDEE is roughly 2,200. If you ate 2,200 and gained 0.2kg, your TDEE was lower.

From there, it adjusts your targets automatically. No manual recalculation. No guessing whether you should drop 100 or 200 calories. The algorithm handles it based on real data, not formulas.

The weekly report breaks it all down: your average intake, weight trend, estimated TDEE, and what changed. Users who were stuck for weeks often see progress resume within 1–2 recalibration cycles.

Your body isn't static. Your calorie targets shouldn't be either.`,
  },
  {
    title: 'We Made Everything Free. Here\'s Why.',
    date: 'Jan 1, 2025',
    category: 'Product',
    readTime: '3 min read',
    content: `When we started building Repwise, we looked at the market and saw a gap. On one side, you had workout trackers like Strong (great for logging, but no nutrition and no real training science). On the other, apps like RP Hypertrophy that understood volume landmarks but charged $300/year and still didn't track macros. And then calorie trackers like MyFitnessPal that had nutrition but zero training intelligence.

Nobody combined all three. And the ones that came close were expensive.

So we made a decision: the core app would be completely free. Not freemium with paywalled features. Not a 7-day trial. Actually free. Full workout tracking with hypertrophy units and volume landmarks. Full nutrition tracking with barcode scanning and a 3M+ food database. Weekly TDEE recalibration. Progress analytics. All of it.

The only paid feature is 1-on-1 coaching. Real human coaches who use your Repwise data to give personalized programming and nutrition guidance. That's the business model. The app is the platform, coaching is the service.

Why? Because we think the best training and nutrition tools shouldn't be locked behind a subscription. The science of hypertrophy and energy balance isn't proprietary. It's published research. We just built a better interface for it.

We're betting that if the free app is genuinely good, some percentage of users will want expert guidance on top of it. And that's enough to build a sustainable business.

Every feature in Repwise is free. No asterisks. No "upgrade to unlock." Just train, track, and grow.`,
  },
  {
    title: 'RPE and RIR: What They Mean and Why They Matter',
    date: 'Feb 1, 2025',
    category: 'Science',
    readTime: '4 min read',
    content: `If you've spent any time reading about training programs online, you've probably seen RPE and RIR thrown around. They sound technical, but they're actually pretty simple once you break them down. And once you start using them, they'll change how you think about effort in the gym.

RPE stands for Rate of Perceived Exertion. It's a 1 to 10 scale where 10 means absolute failure, you physically could not complete another rep. A 9 means you had one rep left. An 8 means two reps left. And so on down the line. It's subjective by design. Nobody knows how hard a set felt except you.

RIR is Reps in Reserve, and it's basically the inverse of RPE. RIR 2 means you stopped with two reps still in the tank. RIR 0 means you went to failure. So RPE 8 equals RIR 2, RPE 9 equals RIR 1, and RPE 10 equals RIR 0.

Here's why this matters for hypertrophy: research consistently shows that the sweet spot for muscle growth is RPE 8 to 9, or RIR 1 to 2. Training in this range gets you close enough to failure to recruit high-threshold motor units and create mechanical tension, but leaves just enough in the tank to recover between sets and sessions. Going to failure on every set sounds hardcore, but it accumulates way more fatigue than it's worth for most people.

The tricky part is being honest with yourself. Most lifters overestimate their RIR by 2 to 3 reps, especially early on. That set you called RPE 8? It was probably a 6.

Repwise helps with this by color-coding your RPE and RIR entries. Green means you're in the productive zone. Yellow means you're sandbagging or pushing too hard. Over time, you start calibrating your internal gauge against real performance data. That's the skill nobody talks about: learning what true effort actually feels like.

Start simple. On your top sets this week, log your RIR honestly. Not what you want it to be. What it actually was.`,
  },
  {
    title: 'Progress Photos: How to Actually Make Them Useful',
    date: 'Feb 8, 2025',
    category: 'Body Composition',
    readTime: '3 min read',
    content: `The scale is a liar. Not intentionally, but it just doesn't tell you what you think it does. You can gain 2 pounds overnight from a salty meal. You can drop 3 pounds after a hard training session just from sweat and glycogen depletion. Water retention from creatine, carb loading, stress, sleep, and your menstrual cycle if that applies to you. All of it moves the number without changing how much muscle or fat you're actually carrying.

This is why progress photos matter. They show you what the scale can't: actual visual changes in body composition over time. But most people take them wrong, and then wonder why they can't see any difference.

The biggest issue is consistency. If you take one photo in bathroom lighting at 7am and the next in gym lighting at 5pm, you're comparing two completely different images. Lighting alone can make you look 10 pounds leaner or 10 pounds softer. Same body, different photo.

Here's what actually works: same time of day (morning, before eating), same location, same lighting, same three poses (front relaxed, side relaxed, back relaxed). Every single time. No flexing unless you also take a separate flexed set. The goal is to remove every variable except your actual physique.

Repwise has pose overlays built into the progress photo feature. When you open the camera, a semi-transparent guide shows you exactly where to stand and how to position your body. It matches the previous photo's framing so your side-by-side comparisons are actually meaningful. You can swipe between weeks or months and see real changes instead of lighting tricks.

Take photos every two weeks. Not every day. Daily photos just feed anxiety. Two-week intervals give your body enough time to show visible changes, especially if you're in a building phase where progress is gradual.`,
  },
  {
    title: 'Understanding Your Fatigue Score',
    date: 'Feb 15, 2025',
    category: 'Science',
    readTime: '4 min read',
    content: `Fatigue in training isn't the same as feeling tired. You can feel great walking into the gym and still be carrying accumulated fatigue that's quietly eating into your recovery capacity. And you can feel sluggish but actually be fine to train hard. The feeling and the reality don't always line up.

In a training context, fatigue is the gap between the stress you've accumulated and your body's ability to recover from it. When that gap gets too wide, performance drops, injury risk goes up, and muscle growth stalls. This is why smart programs include deload weeks. Not because you're lazy, but because your body needs periodic resets to keep adapting.

Repwise calculates a fatigue score automatically using four components. Strength regression makes up 35% of the score. If your working weights are trending down across sessions, that's a strong signal you're digging a recovery hole. Volume load accounts for 30%. This looks at your total weekly volume relative to your historical averages and your estimated MRV. Training frequency is 20% of the score, tracking how many sessions you've done recently and whether you're giving muscle groups enough rest between hits. And nutrition compliance rounds it out at 15%, because undereating during a hard training block accelerates fatigue accumulation significantly.

The score runs from 0 to 100. Under 40 is low fatigue, you're recovering well. 40 to 65 is moderate, keep an eye on it. Above 65 means you're accumulating more stress than you're recovering from, and performance is likely suffering even if you don't feel it yet.

When your fatigue score crosses into the high zone, Repwise suggests a deload. Not a full week off, but a structured reduction. Typically it recommends cutting volume by 40 to 50% while keeping intensity moderate. Most users find that one deload week drops their fatigue score back to the low range, and their strength bounces back within the first session or two after.

Don't wait until you're injured or burnt out to back off. Let the data tell you when it's time.`,
  },
  {
    title: 'Meal Prep Meets Macro Tracking',
    date: 'Feb 22, 2025',
    category: 'Nutrition',
    readTime: '3 min read',
    content: `Meal prep is one of those things that sounds simple until you actually try to do it with specific macro targets. You cook a big batch of chicken and rice on Sunday, portion it out, and then realize you have no idea if each container actually hits your protein and carb goals. You're guessing. And guessing with nutrition is how people spin their wheels for months.

The disconnect is that most meal prep advice ignores macros entirely, and most macro tracking apps ignore meal prep. You end up logging every ingredient manually, doing math on serving sizes, and hoping your Tuesday lunch is close enough to what you planned.

Repwise bridges that gap. The meal plan feature lets you set your daily macro targets, then generates meal templates that actually hit those numbers. You pick your protein sources, your carb sources, your fats, and it builds out portions that add up correctly. No spreadsheet required.

For packaged ingredients, the barcode scanner pulls nutrition data instantly from a database of over 3 million foods. Scan your rice, scan your sauce, scan your protein bars. It logs everything and adjusts the remaining meals in your day to keep you on target.

The feature that saves the most time is copying meals between days. If your Monday lunch works, you can duplicate it to Tuesday through Friday with one tap. Most people eat the same 3 to 4 meals on rotation anyway, so this cuts your weekly logging time down to almost nothing. You set it up once and just confirm each day.

Here's the practical approach: pick 3 to 4 base meals that you actually enjoy eating. Build them in Repwise with accurate macros. Prep them on Sunday. Copy them across your week. That's it. You'll spend less time logging than you did when you were winging it, and you'll actually know your numbers are right.`,
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
