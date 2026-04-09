import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Repwise',
  description: 'Terms and conditions for using the Repwise fitness application.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-[#F1F5F9] sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-[#94A3B8]">
          Effective Date: March 20, 2026 · Last Updated: March 20, 2026
        </p>
      </header>

      <div className="space-y-12 text-[#CBD5E1] leading-relaxed [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-[#F1F5F9] [&_h2]:mb-4 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ul]:mb-4">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using the Repwise mobile application (&ldquo;App&rdquo;),
            you agree to be bound by these Terms of Service. If you do not agree, do not use the App.
          </p>
        </section>

        <section>
          <h2>2. Description of Service</h2>
          <p>
            Repwise is a fitness application that provides adaptive nutrition tracking, training
            logging, body composition analysis, coaching recommendations, and related health and
            fitness features. The App is available as a free version with limited features and a
            premium subscription with full access.
          </p>
        </section>

        <section>
          <h2>3. Account Registration</h2>
          <ul>
            <li>You must provide a valid email address and create a password</li>
            <li>You are responsible for maintaining the confidentiality of your credentials</li>
            <li>You must be at least 13 years of age to create an account</li>
            <li>You agree to provide accurate information and keep it up to date</li>
          </ul>
        </section>

        <section>
          <h2>4. Subscription &amp; Billing</h2>
          <p>
            Repwise offers the following subscription plans:
          </p>
          <ul>
            <li>Monthly: $9.99/month</li>
            <li>Annual: $79.99/year (equivalent to $6.67/month)</li>
          </ul>
          <p>
            Prices may vary by region and are displayed in your local currency at the time of
            purchase. Subscriptions auto-renew unless cancelled at least 24 hours before the end of
            the current billing period. All payments are processed as in-app purchases through Apple
            App Store or Google Play Store. Repwise never directly handles payment card data. The
            free tier provides basic nutrition tracking and training logging; premium features require
            an active subscription.
          </p>
        </section>

        <section>
          <h2>5. Cancellation &amp; Refunds</h2>
          <p>
            Cancel anytime through your device&apos;s subscription settings. You retain premium access
            until the end of the current billing period. No partial refunds for unused time. Refunds
            are handled by Apple or Google respectively.
          </p>
        </section>

        <section>
          <h2>6. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the App for any unlawful purpose</li>
            <li>Attempt unauthorized access to the App or other accounts</li>
            <li>Reverse engineer, decompile, or disassemble any part of the App</li>
            <li>Use automated scripts, bots, or scrapers</li>
            <li>Upload malicious content or harmful files</li>
            <li>Share account credentials or allow multi-user access on one account</li>
          </ul>
        </section>

        <section>
          <h2>7. Health &amp; Fitness Disclaimer</h2>
          <p>
            Repwise provides general fitness and nutrition information. It is not a substitute for
            professional medical advice. Always consult a qualified healthcare provider before
            starting any new diet or exercise program. TDEE calculations and coaching suggestions are
            algorithmic estimates and may not be appropriate for all individuals.
          </p>
        </section>

        <section>
          <h2>8. Intellectual Property</h2>
          <p>
            The App&apos;s design, code, content, logos, and trademarks are owned by Repwise. You
            retain ownership of data you input (nutrition logs, training logs, photos). By sharing
            content on the social feed, you grant Repwise a non-exclusive, royalty-free license to
            display it within the App. This license ends when you delete the content or your account.
          </p>
        </section>

        <section>
          <h2>9. Limitation of Liability</h2>
          <p>
            Repwise is provided &ldquo;as is&rdquo; without warranties. We are not liable for
            indirect, incidental, or consequential damages. Total liability shall not exceed the
            amount you paid us in the 12 months preceding the claim.
          </p>
        </section>

        <section>
          <h2>10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India, without regard to conflict of law
            principles.
          </p>
        </section>

        <section>
          <h2>Modifications to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated terms on this page and updating the &quot;Effective Date&quot; above. Your continued use of Repwise after changes are posted constitutes acceptance of the modified terms. We encourage you to review these terms periodically.</p>
        </section>

        <section>
          <h2>Apple Licensed Application End User License Agreement</h2>
          <p>
            These Terms of Service are between you and Repwise only, and not with Apple Inc.
            (&ldquo;Apple&rdquo;). Apple is not responsible for the App or its content.
          </p>
          <ul>
            <li>Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the App.</li>
            <li>Apple has no warranty obligation with respect to the App. Any claims, losses, liabilities, damages, costs, or expenses attributable to any failure to conform to any warranty are Repwise&apos;s sole responsibility.</li>
            <li>Apple is not responsible for addressing any claims by you or any third party relating to the App or your possession and/or use of the App, including but not limited to: (i) product liability claims; (ii) any claim that the App fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection, privacy, or similar legislation.</li>
            <li>In the event of any third-party claim that the App or your possession and use of the App infringes that third party&apos;s intellectual property rights, Apple is not responsible for the investigation, defense, settlement, or discharge of any such intellectual property infringement claim.</li>
            <li>Apple and its subsidiaries are third-party beneficiaries of these Terms. Upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary thereof.</li>
          </ul>
          <p>
            This agreement incorporates Apple&apos;s standard Licensed Application End User License
            Agreement, available at{' '}
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className="text-[#06B6D4] hover:underline" target="_blank" rel="noopener noreferrer">
              https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#F1F5F9] mt-12 mb-4">Third-Party Beneficiaries</h2>
          <p className="text-[#94A3B8] mb-4">Apple Inc. and Google LLC are third-party beneficiaries of these Terms of Service. Upon your acceptance of these terms, Apple and Google will have the right to enforce these terms against you as third-party beneficiaries. These terms are between you and Repwise only, not with Apple or Google. Apple and Google are not responsible for the app or its content.</p>
        </section>

        <section>
          <h2>11. Contact</h2>
          <p>
            Questions? Email us at{' '}
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
