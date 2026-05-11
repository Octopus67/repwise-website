import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | Repwise',
  description: 'Frequently asked questions about Repwise: subscriptions, account, data, and how the app works.',
  alternates: { canonical: '/faq' },
};

interface QA {
  q: string;
  a: React.ReactNode;
}

const FAQS: QA[] = [
  {
    q: 'What is Repwise?',
    a: (
      <p>
        Repwise is a science-based fitness app combining hypertrophy training, full nutrition
        tracking, and adaptive coaching in one place. Built for serious lifters who want
        evidence-based programming without juggling three apps.
      </p>
    ),
  },
  {
    q: 'How is Repwise different from MyFitnessPal or Strong?',
    a: (
      <p>
        Most apps focus on either training or nutrition. Repwise unifies them with adaptive TDEE,
        per-muscle volume landmarks (MEV/MAV/MRV), proprietary Hypertrophy Units (HU) scoring, and
        a recovery-aware coaching layer. Generic fitness apps do not connect these signals.
      </p>
    ),
  },
  {
    q: 'Is Repwise free?',
    a: (
      <p>
        Yes. Every feature in Repwise is free: hypertrophy science, nutrition tracking, analytics,
        coaching modes, meal plans, periodization, all of it. The only paid option is 1-on-1
        personal coaching.
      </p>
    ),
  },
  {
    q: 'What about 1-on-1 coaching?',
    a: (
      <p>
        1-on-1 personal coaching is the only paid offering. See{' '}
        <Link href="/pricing" className="text-[#06B6D4] hover:underline">Pricing</Link> for
        details and how to get matched with a coach.
      </p>
    ),
  },
  {
    q: 'How do I delete my account?',
    a: (
      <p>
        In the app, go to Profile {'>'} Account {'>'} Delete Account. Your account enters a 30-day
        grace period during which you can reactivate. After 30 days, all personal data is
        permanently and irreversibly removed.
      </p>
    ),
  },
  {
    q: 'Does Repwise work offline?',
    a: (
      <p>
        Yes for core flows. You can log workouts and nutrition entries while offline; they sync
        when you reconnect. Some features that need server-side analysis (food search, coaching
        suggestions) require a connection.
      </p>
    ),
  },
  {
    q: 'Does Repwise read Apple Health or Google Health Connect data?',
    a: (
      <p>
        Only if you grant permission. We read heart rate variability (HRV), resting heart rate,
        and sleep duration to improve readiness scoring. We never write to Apple Health or Health
        Connect, and we never sell or share this data with advertisers or data brokers.
      </p>
    ),
  },
  {
    q: 'Where is my data stored?',
    a: (
      <p>
        Your account and workout data are stored in managed PostgreSQL with encryption at rest.
        Progress photos are stored in Cloudflare R2 object storage. All data in transit uses
        TLS/HTTPS. Passwords are hashed with bcrypt. See our{' '}
        <Link href="/privacy" className="text-[#06B6D4] hover:underline">Privacy Policy</Link>{' '}
        for full details.
      </p>
    ),
  },
  {
    q: 'Can I export my data?',
    a: (
      <p>
        Yes. From the app, go to Profile {'>'} Data &amp; Privacy {'>'} Export Data. We email
        you a JSON or CSV archive of all your workouts, nutrition entries, body measurements,
        and progress photos.
      </p>
    ),
  },
  {
    q: 'I found a bug. How do I report it?',
    a: (
      <p>
        Email{' '}
        <a href="mailto:support@repwise.app" className="text-[#06B6D4] hover:underline">
          support@repwise.app
        </a>{' '}
        with your device model, OS version, Repwise app version, and steps to reproduce.
        Screenshots help.
      </p>
    ),
  },
];

export default function FAQPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-[#F1F5F9] sm:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-[#94A3B8]">
          Quick answers to the most common Repwise questions.
        </p>
      </header>

      <div className="space-y-10 text-[#CBD5E1] leading-relaxed">
        {FAQS.map((item) => (
          <section key={item.q}>
            <h2 className="text-xl font-semibold text-[#F1F5F9] mb-3">{item.q}</h2>
            <div className="[&_p]:mb-3 [&_a]:underline-offset-2">{item.a}</div>
          </section>
        ))}

        <section>
          <h2 className="text-xl font-semibold text-[#F1F5F9] mb-3">Still have questions?</h2>
          <p>
            Email{' '}
            <a href="mailto:support@repwise.app" className="text-[#06B6D4] hover:underline">
              support@repwise.app
            </a>{' '}
            and we will respond within 1-2 business days. See also{' '}
            <Link href="/support" className="text-[#06B6D4] hover:underline">Support</Link>.
          </p>
        </section>
      </div>

      <footer className="mt-16 border-t border-[#1E293B] pt-8">
        <Link href="/" className="text-[#06B6D4] hover:underline text-sm">
          ← Back to home
        </Link>
      </footer>
    </article>
  );
}
