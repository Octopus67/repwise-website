import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Repwise',
  description: 'Built by a lifter, for lifters. The story behind Repwise.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-[#F1F5F9] sm:text-5xl">
          Built by a Lifter, for Lifters
        </h1>
        <p className="mt-6 text-xl text-[#06B6D4] font-medium">
          Make evidence-based fitness accessible to every serious lifter.
        </p>
      </header>

      <div className="space-y-12 text-[#CBD5E1] leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">The Story</h2>
          <p className="text-lg font-medium text-[#06B6D4] mb-3">Built by Manav</p>
          <p className="mb-4 italic text-[#94A3B8]">
            A lifter and engineer who spent years reading hypertrophy research and building the app he wished existed.
          </p>
          <p className="mb-6">
            Repwise started from a simple frustration: every fitness app either oversimplified the
            science or buried it under complexity. As a lifter who spent years reading research on
            hypertrophy, nutrition periodization, and adaptive TDEE, I wanted an app that respected
            the science without requiring a PhD to use. So I built one.
          </p>
          <h3 className="text-xl font-semibold text-[#F1F5F9] mb-3">Why I Built This</h3>
          <p>
            I got tired of juggling three apps — one for training, one for nutrition, one for
            analytics — none of which talked to each other. Repwise is the single app that
            connects your training, nutrition, and recovery into one intelligent system, all
            grounded in peer-reviewed science.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">Built to Last</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            {[
              { stat: '3,187+', label: 'Automated Tests' },
              { stat: '220', label: 'API Endpoints' },
              { stat: '50', label: 'Database Tables' },
              { stat: '100%', label: 'TypeScript' },
            ].map((s) => (
              <div key={s.label} className="bg-[#12171F] rounded-xl p-4 text-center border border-[#1E293B]">
                <p className="text-2xl font-bold text-[#06B6D4] font-mono">{s.stat}</p>
                <p className="text-xs text-[#94A3B8] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <p>
            Built with TypeScript, React Native, and FastAPI. Every feature is backed by automated
            tests. No shortcuts, no tech debt — just solid engineering for an app you can rely on.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">Join the Community</h2>
          <p className="mb-6">
            Got feedback, feature requests, or just want to talk training? Join the Repwise community
            on Telegram.
          </p>
          <a
            href="https://t.me/repwise"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#06B6D4] px-6 py-3 font-semibold text-[#0F172A] transition-colors hover:bg-[#0891B2]"
          >
            Join on Telegram →
          </a>
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
