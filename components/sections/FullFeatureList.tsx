'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Dumbbell, FlaskConical, Apple, BarChart3, UserCog, Plus } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const categories = [
  {
    icon: Dumbbell,
    title: 'Workout Tracking',
    features: [
      'Active workout logging',
      'PR detection (1RM, volume, estimated, rep)',
      'Smart rest timer',
      'Progressive overload suggestions',
      'Superset & circuit grouping',
      'Exercise swap recommendations',
      'Custom workout templates',
      'Full session history',
    ],
  },
  {
    icon: FlaskConical,
    title: 'Hypertrophy Science',
    features: [
      'Weekly Needed Sets (WNS) calculator',
      'Volume landmarks (MV → MEV → MAV → MRV)',
      'Fatigue accumulation engine',
      'RPE / RIR tracking per set',
      'SVG body heat map visualization',
    ],
  },
  {
    icon: Apple,
    title: 'Nutrition',
    features: [
      '3M+ food database',
      'Barcode scanner',
      'Macro tracking (P/C/F)',
      'Micronutrient dashboard (27 nutrients)',
      'Customizable meal plans',
      'Food DNA profiling',
      'Water intake tracking',
    ],
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    features: [
      'Strength progression charts',
      'Body composition trends',
      'Adaptive TDEE estimation',
      'Periodization calendar',
      'Weekly intelligence report',
    ],
  },
  {
    icon: UserCog,
    title: 'Body & Coaching',
    features: [
      'Progress photos with overlays',
      'Body measurements tracking',
      'Adaptive coaching engine',
      'Weekly check-ins & adjustments',
      '4 coaching modes (cut, bulk, maintain, recomp)',
    ],
  },
];

export function FullFeatureList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight">
            30 Features. Zero Compromises.
          </h2>
          <p className="text-[#94A3B8] text-center mb-16 text-lg">
            Everything a serious lifter needs, nothing they don&apos;t.
          </p>
        </ScrollReveal>

        <div className="space-y-3">
          {categories.map((cat, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={cat.title} delay={i * 0.05}>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden">
                  <button
                    id={`heading-${i}`}
                    onClick={() => toggle(i)}
                    className="w-full flex items-center gap-4 p-5 text-left cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${i}`}
                  >
                    <cat.icon className="w-6 h-6 text-[#06B6D4] shrink-0" strokeWidth={1.5} />
                    <span className="flex-1 font-semibold text-lg">{cat.title}</span>
                    <span className="text-[#64748B] text-sm mr-3">{cat.features.length}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Plus className="w-5 h-5 text-[#94A3B8]" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`panel-${i}`}
                        role="region"
                        aria-labelledby={`heading-${i}`}
                        initial={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <ul className="px-5 pb-5 pl-15 space-y-2">
                          {cat.features.map((f) => (
                            <li key={f} className="text-[#94A3B8] text-sm flex items-start gap-2">
                              <span className="text-[#06B6D4] mt-1.5 w-1.5 h-1.5 rounded-full bg-[#06B6D4] shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
