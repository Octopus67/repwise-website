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

export default function Home() {
  return (
    <>
      <StructuredData data={jsonLd} />
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
