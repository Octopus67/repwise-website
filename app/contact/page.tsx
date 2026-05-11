import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact | Repwise',
  description: 'Get in touch with the Repwise team. Support, privacy, and partnerships.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-[#F1F5F9] sm:text-5xl">
          Contact
        </h1>
        <p className="mt-4 text-[#94A3B8]">
          Reach the right inbox. We respond within 1-2 business days.
        </p>
      </header>

      <div className="space-y-10 text-[#CBD5E1] leading-relaxed [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-[#F1F5F9] [&_h2]:mb-3 [&_p]:mb-4">
        <section>
          <h2>Support</h2>
          <p>
            App issues, bug reports, account questions:{' '}
            <a href="mailto:support@repwise.app" className="text-[#06B6D4] hover:underline">
              support@repwise.app
            </a>
          </p>
          <p className="text-[#94A3B8] text-sm">
            See <Link href="/support" className="text-[#06B6D4] hover:underline">Support</Link> for
            common topics like cancellation, account deletion, and password reset.
          </p>
        </section>

        <section>
          <h2>Privacy</h2>
          <p>
            Data requests, deletion, GDPR/CCPA inquiries:{' '}
            <a href="mailto:privacy@repwise.app" className="text-[#06B6D4] hover:underline">
              privacy@repwise.app
            </a>
          </p>
          <p className="text-[#94A3B8] text-sm">
            See our <Link href="/privacy" className="text-[#06B6D4] hover:underline">Privacy Policy</Link>{' '}
            for full details on data handling.
          </p>
        </section>

        <section>
          <h2>Press and Partnerships</h2>
          <p>
            Press inquiries, brand partnerships, content collaborations:{' '}
            <a href="mailto:hello@repwise.app" className="text-[#06B6D4] hover:underline">
              hello@repwise.app
            </a>
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
