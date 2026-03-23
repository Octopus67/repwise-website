import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Repwise',
  description: 'How Repwise collects, uses, stores, and protects your personal information.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-[#F1F5F9] sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-[#94A3B8]">
          Effective Date: March 20, 2026 · Last Updated: March 20, 2026
        </p>
      </header>

      <div className="space-y-12 text-[#CBD5E1] leading-relaxed [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-[#F1F5F9] [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-[#E2E8F0] [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ul]:mb-4">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Repwise (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the Repwise
            mobile application (the &ldquo;App&rdquo;). This Privacy Policy explains how we collect,
            use, store, and protect your personal information when you use our App.
          </p>
          <p>
            By using Repwise, you agree to the collection and use of information as described in this
            policy.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <h3>Account Information</h3>
          <p>
            Email address, name, profile photo URL, and OAuth provider IDs — used for account
            creation, login, and personalization. All stored encrypted at rest.
          </p>
          <h3>Body &amp; Health Data</h3>
          <p>
            Height, weight, and body fat percentage — used for TDEE calculation, body composition
            tracking, and coaching recommendations. Encrypted at rest.
          </p>
          <h3>Activity &amp; Nutrition Data</h3>
          <p>
            Nutrition logs and training logs — used for calorie/macro tracking, progressive overload
            analysis, and PR detection. Encrypted at rest.
          </p>
          <h3>Media</h3>
          <p>
            Progress photos for visual progress tracking — stored encrypted in Cloudflare R2 object
            storage.
          </p>
          <h3>Device &amp; Technical Data</h3>
          <p>
            Push tokens, analytics events (PostHog), and crash reports (Sentry) — used for
            notifications, improving features, and fixing bugs.
          </p>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>Provide core functionality (nutrition tracking, training logging, adaptive TDEE)</li>
            <li>Calculate and adjust personalized nutrition targets</li>
            <li>Deliver coaching recommendations and weekly check-in reminders</li>
            <li>Process subscription payments</li>
            <li>Monitor app performance and fix crashes</li>
            <li>Analyze usage patterns to improve the App</li>
          </ul>
          <p>We do not sell your personal data to third parties.</p>
        </section>

        <section>
          <h2>4. Third-Party Services</h2>
          <p>
            We share limited data with Apple App Store, Google Play Store, RevenueCat, Sentry,
            PostHog, Firebase (FCM), Cloudflare R2, and AWS SES to operate the App. Repwise never
            handles payment card data directly — all payments are processed through Apple or Google
            via in-app purchases.
          </p>
        </section>

        <section>
          <h2>5. Data Storage and Security</h2>
          <ul>
            <li>All data stored in managed PostgreSQL with encryption at rest</li>
            <li>All data in transit encrypted via TLS/HTTPS</li>
            <li>Passwords hashed using bcrypt</li>
            <li>JWT authentication with short-lived access tokens (15 min) and rotating refresh tokens</li>
            <li>Users can only access their own data</li>
          </ul>
        </section>

        <section>
          <h2>6. Data Retention</h2>
          <p>
            Your data is retained while your account is active. Upon deletion request, a 30-day grace
            period begins. After 30 days, all personal data is permanently and irreversibly removed —
            including account info, body measurements, nutrition logs, training logs, progress photos,
            and device tokens.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <ul>
            <li>Access — view all your data within the App</li>
            <li>Correction — update your information directly in the App</li>
            <li>Deletion — request account deletion via account settings</li>
            <li>Data Portability — request a machine-readable export by contacting us</li>
          </ul>
        </section>

        <section>
          <h2>California Privacy Rights (CCPA)</h2>
          <p>If you are a California resident, you have the right to:</p>
          <ul>
            <li>Know what personal information we collect and how it is used</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of the sale of your personal information (we do not sell personal information)</li>
            <li>Non-discrimination for exercising your privacy rights</li>
          </ul>
          <p>To exercise these rights, contact us at privacy@repwise.app.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#F1F5F9] mt-12 mb-4">Children&apos;s Privacy</h2>
          <p className="text-[#94A3B8] mb-4">Repwise is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will delete that information promptly. If you believe a child under 13 has provided us with personal information, please contact us at privacy@repwise.app.</p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>
            Questions about this Privacy Policy? Email us at{' '}
            <a href="mailto:support@repwise.app" className="text-[#06B6D4] hover:underline">
              support@repwise.app
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
