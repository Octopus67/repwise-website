'use client';

import { motion, useReducedMotion } from 'motion/react';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { staggerContainer, fadeUp } from '@/lib/animations';

const competitors = [
  { name: 'Workout App', price: 30, category: 'Training' },
  { name: 'Nutrition App', price: 72, category: 'Nutrition' },
  { name: 'Coaching App', price: 300, category: 'Coaching' },
];

export function ProblemSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
            Stop Juggling <span className="text-[#06B6D4]">3 Apps</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Competitor cards */}
          <motion.div
            variants={!prefersReducedMotion ? staggerContainer : undefined}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {competitors.map((app) => (
              <motion.div key={app.name} variants={!prefersReducedMotion ? fadeUp : undefined}>
                <GlassCard hover={false} className="opacity-50 border-white/[0.04]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#64748B]">{app.category}</p>
                      <p className="text-[#94A3B8] font-medium">{app.name}</p>
                    </div>
                    <p className="text-[#94A3B8] font-mono text-lg">${app.price}<span className="text-xs text-[#64748B]">/yr</span></p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
            <motion.div variants={!prefersReducedMotion ? fadeUp : undefined}>
              <div className="flex justify-end pt-2 pr-2">
                <p className="text-[#64748B] font-mono text-lg">= $30–$300/yr each</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Repwise card */}
          <ScrollReveal direction="right">
            <GlassCard className="border-[#06B6D4]/30 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
              <div className="text-center py-6">
                <p className="text-sm text-[#06B6D4] font-medium mb-2">All-in-one</p>
                <p className="text-2xl font-bold mb-1">Repwise</p>
                <p className="text-4xl font-bold font-mono text-[#06B6D4]">
                  Free
                </p>
                <p className="text-sm text-[#64748B] mt-3">Training + Nutrition + Coaching</p>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <p className="text-center text-[#94A3B8] mt-12 max-w-xl mx-auto text-lg leading-relaxed">
            Other apps make you choose between training science and nutrition tracking.
            Repwise gives you both. <span className="text-[#06B6D4] font-semibold">For free</span>.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}