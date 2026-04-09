import dynamic from 'next/dynamic';

// Static (above fold)
import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { BentoFeatures } from '@/components/sections/BentoFeatures';
import { MidPageCTA } from '@/components/sections/MidPageCTA';
import { StructuredData } from '@/components/shared/StructuredData';

import { SwitchingFrom } from '@/components/sections/SwitchingFrom';

// Dynamic (below fold)
const HowItWorks = dynamic(() => import('@/components/sections/HowItWorks').then(m => m.HowItWorks));
const ScienceSection = dynamic(() => import('@/components/sections/ScienceSection').then(m => m.ScienceSection));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then(m => m.Testimonials));
const ComparisonTable = dynamic(() => import('@/components/sections/ComparisonTable').then(m => m.ComparisonTable));
const Pricing = dynamic(() => import('@/components/sections/Pricing').then(m => m.Pricing));
const NewsletterSection = dynamic(() => import('@/components/sections/NewsletterSection').then(m => m.NewsletterSection));
const FAQ = dynamic(() => import('@/components/sections/FAQ').then(m => m.FAQ));
const FinalCTA = dynamic(() => import('@/components/sections/FinalCTA').then(m => m.FinalCTA));

export const metadata = {
  alternates: { canonical: '/' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Repwise',
  operatingSystem: 'iOS, Android',
  applicationCategory: 'HealthApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Science-based fitness app combining hypertrophy training, nutrition tracking, and adaptive coaching.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Repwise free?', acceptedAnswer: { '@type': 'Answer', text: 'Every feature in Repwise is free. Hypertrophy science, nutrition tracking, analytics, coaching modes, all of it. The only paid option is 1-on-1 personal coaching.' } },
    { '@type': 'Question', name: 'What makes Repwise different from Strong or Hevy?', acceptedAnswer: { '@type': 'Answer', text: 'Repwise is the only app combining hypertrophy science (volume landmarks, fatigue scoring, WNS) with full nutrition tracking (3M+ foods, barcode scanning, micronutrients) and adaptive coaching, all in one app.' } },
    { '@type': 'Question', name: 'How are Hypertrophy Units calculated?', acceptedAnswer: { '@type': 'Answer', text: 'Hypertrophy Units measure the actual growth stimulus reaching each muscle. For each set, we calculate stimulating reps based on proximity to failure, apply exercise coefficients per muscle, and account for diminishing returns.' } },
    { '@type': 'Question', name: 'How does the TDEE calculation work?', acceptedAnswer: { '@type': 'Answer', text: 'We start with your BMR, multiply by activity level, then recalibrate every week by comparing your actual weight change to expected change using EMA-smoothed bodyweight data.' } },
    { '@type': 'Question', name: 'What platforms are supported?', acceptedAnswer: { '@type': 'Answer', text: 'iOS and Android. Built with React Native for a native experience on both platforms.' } },
  ],
};

export default function Home() {
  return (
    <>
      <StructuredData data={jsonLd} />
      <StructuredData data={faqJsonLd} />
      <Hero />
      <SocialProof />
      <ProblemSection />
      <BentoFeatures />
      <MidPageCTA />
      <HowItWorks />
      <ScienceSection />
      <Testimonials />
      <ComparisonTable />
      <SwitchingFrom />
      <Pricing />
      <NewsletterSection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
