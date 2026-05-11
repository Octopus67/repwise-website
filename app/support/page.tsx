import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Support | Repwise',
  description: 'Get help with Repwise. Contact support, manage your subscription, or find answers to common questions.',
  alternates: { canonical: '/support' },
};

export default function SupportPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-[#F1F5F9] sm:text-5xl">
          Support
        </h1>
        <p className="mt-4 text-[#94A3B8]">
          We&apos;re here to help. Most questions are answered within 1-2 business days.
        </p>
      </header>

      <div className="space-y-12 text-[#CBD5E1] leading-relaxed [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-[#F1F5F9] [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-[#E2E8F0] [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ul]:mb-4">
        <section>
          <h2>Contact Us</h2>
          <p>
            For account issues, bug reports, or general questions, email us at{' '}
            <a href="mailto:support@repwise.app" className="text-[#06B6D4] hover:underline">
              support@repwise.app
            </a>.
          </p>
          <p>
            For privacy or data-related questions, write to{' '}
            <a href="mailto:privacy@repwise.app" className="text-[#06B6D4] hover:underline">
              privacy@repwise.app
            </a>.
          </p>
          <p className="text-[#94A3B8] text-sm">
            Please include your device model, OS version, and Repwise app version when reporting bugs.
          </p>
        </section>

        <section>
          <h2>Common Topics</h2>
          <h3>Pricing</h3>
          <p>
            Every feature in Repwise is free, including hypertrophy science, nutrition tracking,
            analytics, coaching modes, and meal plans. The only paid option is 1-on-1 personal
            coaching. See <Link href="/pricing" className="text-[#06B6D4] hover:underline">Pricing</Link>{' '}
            for details.
          </p>

          <h3>Account Deletion</h3>
          <p>
            Open Repwise, go to Profile {'>'} Account {'>'} Delete Account. Your account enters a
            30-day grace period during which you can reactivate. After 30 days, all personal data
            is permanently removed.
          </p>

          <h3>Forgot Password</h3>
          <p>
            On the login screen, tap &ldquo;Forgot password?&rdquo; and follow the email instructions.
            If the email does not arrive within a few minutes, check your spam folder or contact
            support.
          </p>

          <h3>Sign-in with Google or Apple</h3>
          <p>
            If Google or Apple Sign-In is not working, try signing in via email and password
            instead. Make sure the device&apos;s system clock is correct and that you are using the
            most recent Repwise version.
          </p>

          <h3>Push Notifications Not Arriving</h3>
          <p>
            Go to your device&apos;s Settings, find Repwise, and ensure notifications are enabled.
            In Repwise, go to Profile {'>'} Notifications and confirm the categories you want.
          </p>

          <h3>Data Export</h3>
          <p>
            You can export all your Repwise data (workouts, nutrition, body measurements, photos)
            from Profile {'>'} Data &amp; Privacy {'>'} Export Data. Exports are emailed as a JSON
            or CSV archive.
          </p>
        </section>

        <section>
          <h2>Health and Fitness Disclaimer</h2>
          <p>
            Repwise provides general fitness and nutrition information and tools. It is not a
            substitute for professional medical advice. Always consult a qualified healthcare
            provider before starting any new diet or exercise program.
          </p>
        </section>

        <section>
          <h2>Legal</h2>
          <ul>
            <li><Link href="/privacy" className="text-[#06B6D4] hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-[#06B6D4] hover:underline">Terms of Service</Link></li>
          </ul>
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
