import type { Metadata } from 'next';
import { Pricing } from '@/components/sections/Pricing';
import { ComparisonTable } from '@/components/sections/ComparisonTable';
import { FAQ } from '@/components/sections/FAQ';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StructuredData } from '@/components/shared/StructuredData';

export const metadata: Metadata = {
  title: 'Pricing — Repwise',
  description: 'Free forever or Premium at $9.99/mo. Compare Repwise with Strong, Hevy, and MacroFactor.',
  alternates: { canonical: '/pricing' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Repwise free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! Core features are free forever.' } },
    { '@type': 'Question', name: 'What makes Repwise different?', acceptedAnswer: { '@type': 'Answer', text: 'The only app combining hypertrophy science with full nutrition tracking and adaptive coaching.' } },
  ],
};

export default function PricingPage() {
  return (
    <>
      <StructuredData data={faqJsonLd} />
      <section className="pt-32 pb-8 px-6 text-center">
        <ScrollReveal>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Start free, upgrade when you&apos;re ready. No hidden fees.
          </p>
        </ScrollReveal>
      </section>

      <Pricing />
      <ComparisonTable />
      <FAQ />
    </>
  );
}
