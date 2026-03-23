import type { Metadata } from 'next';
import { FullFeatureList } from '@/components/sections/FullFeatureList';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Features — Repwise',
  description: 'Explore 30+ features including hypertrophy science, nutrition tracking, adaptive coaching, and analytics.',
  alternates: { canonical: '/features' },
};

export default function FeaturesPage() {
  return (
    <>
      <section className="pt-32 pb-8 px-6 text-center">
        <ScrollReveal>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Everything You Need. Nothing You Don&apos;t.
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Built for serious lifters who want science-backed training and nutrition in one place.
          </p>
        </ScrollReveal>
      </section>

      <FullFeatureList />

      <section className="pb-24 px-6 text-center">
        <ScrollReveal>
          <Link href="/download">
            <Button variant="primary" size="lg">Start Free Trial</Button>
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
