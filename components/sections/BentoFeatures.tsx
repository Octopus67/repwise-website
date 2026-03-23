'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Dumbbell, ScanBarcode, BotMessageSquare, BarChart3, Camera, BrainCircuit } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Badge } from '@/components/ui/Badge';
import { staggerContainer, fadeUp } from '@/lib/animations';

const features = [
  {
    icon: Dumbbell,
    title: 'Hypertrophy Science Engine',
    description: 'Watch your Hypertrophy Units add up in real-time as you log sets. Only the last 0-5 reps before failure count as stimulating reps — so you know exactly which sets drove growth and which were junk volume.',
    bullets: ['Stimulating rep tracking', 'Exercise coefficients per muscle', 'Diminishing returns curve', 'Per-session volume caps'],
    tags: ['Volume Landmarks', 'WNS', 'Fatigue Engine'],
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    icon: ScanBarcode,
    title: 'Smart Nutrition',
    description: 'Search 3M+ foods from USDA and Open Food Facts, or scan any barcode. Track 27 micronutrients, build meal plans, and see your dietary gaps at a glance.',
    bullets: ['Barcode scanning', '27 micronutrient tracking', 'Meal plans with shopping lists', 'Dietary gap analysis'],
    tags: ['Barcode Scan', 'Macros', 'Micronutrients'],
    span: 'md:col-span-2',
  },
  {
    icon: BotMessageSquare,
    title: 'Adaptive Coaching',
    description: 'TDEE recalibrates weekly based on your real data. 4 coaching modes adapt to your style.',
    tags: [],
    span: '',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Strength curves, body composition trends, fatigue scoring, and periodization calendar.',
    tags: [],
    span: '',
  },
  {
    icon: Camera,
    title: 'Progress Photos',
    description: 'Guided pose overlays for consistent photos. Compare side-by-side across any timeframe.',
    tags: [],
    span: '',
  },
  {
    icon: BrainCircuit,
    title: 'Weekly Intelligence',
    description: 'Training volume, nutrition compliance, and weight trends — plus personalized recommendations.',
    tags: [],
    span: '',
  },
];

export function BentoFeatures() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight">
            Everything You Need
          </h2>
          <p className="text-[#94A3B8] text-center mb-16 text-lg">One app. Zero compromises.</p>
        </ScrollReveal>

        <motion.div
          variants={!prefersReducedMotion ? staggerContainer : undefined}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {features.map((f) => (
            <motion.div key={f.title} variants={!prefersReducedMotion ? fadeUp : undefined} className={f.span}>
              <SpotlightCard className="h-full">
                <f.icon className="w-8 h-8 text-[#06B6D4] mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
                <p className="text-[#94A3B8] text-sm mb-3">{f.description}</p>
                {f.bullets && f.bullets.length > 0 && (
                  <ul className="text-[#94A3B8] text-xs mb-4 space-y-1">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#06B6D4] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2">
                  {f.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}