'use client';

import { motion, useReducedMotion } from 'motion/react';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { staggerContainer, fadeUp } from '@/lib/animations';

const citations: Record<string, string> = {
  'Hypertrophy Units (WNS)': 'Based on Schoenfeld et al. (2017) dose-response meta-analysis.',
  'Volume Landmarks': 'Framework from Israetel, Hoffmann & Smith (2021).',
  'Fatigue Engine': 'Informed by Beardsley (2023) fatigue research.',
  'RPE/RIR Tracking': 'Validated against Zourdos et al. (2016) RPE scale.',
};

const cards = [
  { title: 'Hypertrophy Units (WNS)', desc: 'We quantify your muscle-building stimulus with Weighted Number of Sets' },
  { title: 'Volume Landmarks', desc: 'Know exactly when you\u2019re doing too little (below MEV), hitting the sweet spot (MAV), or risking overtraining (above MRV)' },
  { title: 'Fatigue Engine', desc: '4-component fatigue scoring: strength regression (35%), volume load (30%), training frequency (20%), and nutrition compliance (15%)' },
  { title: 'RPE/RIR Tracking', desc: 'Rate of Perceived Exertion and Reps in Reserve \u2014 color-coded, with built-in education' },
];

export function ScienceSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-24 lg:py-32 px-6 overflow-hidden">
      {/* Topographic grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight">
            Built on <span className="text-[#06B6D4]">Peer-Reviewed</span> Exercise Science
          </h2>
          <p className="text-[#94A3B8] text-center mb-16 text-lg max-w-2xl mx-auto">
            Not bro-science. Not AI-generated plans. Real hypertrophy research, implemented as software.
          </p>
        </ScrollReveal>

        <motion.div
          variants={!prefersReducedMotion ? staggerContainer : undefined}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {cards.map((card) => (
            <motion.div key={card.title} variants={!prefersReducedMotion ? fadeUp : undefined}>
              <GlassCard className="h-full">
                <h3 className="text-lg font-semibold mb-2 text-[#06B6D4]">{card.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{card.desc}</p>
                {citations[card.title] && <span className="block text-xs text-[#64748B] mt-2 italic">{citations[card.title]}</span>}
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
