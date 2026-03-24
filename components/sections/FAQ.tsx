'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Plus } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const faqs = [
  {
    q: 'Is Repwise free?',
    a: 'Yeah, everything is free. Hypertrophy science, nutrition tracking, analytics, coaching modes, all of it. The only paid option is 1-on-1 personal coaching.',
  },
  {
    q: 'What makes Repwise different from Strong or Hevy?',
    a: 'Repwise is the only app combining hypertrophy science (volume landmarks, fatigue scoring, WNS) with full nutrition tracking (3M+ foods, barcode scanning, micronutrients) and adaptive coaching, all in one app.',
  },
  {
    q: 'Does it work offline?',
    a: 'Core workout logging works offline. Nutrition search requires internet for the food database.',
  },
  {
    q: 'Can I import data from other apps?',
    a: 'Yes. Repwise supports importing workout history from Strong, Hevy, and other popular apps.',
  },
  {
    q: 'What food databases do you use?',
    a: 'USDA FoodData Central (300,000+ foods) and Open Food Facts (3,000,000+ products with barcode support).',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. All data is encrypted in transit and at rest. We use JWT authentication with bcrypt password hashing.',
  },
  {
    q: 'What platforms are supported?',
    a: 'iOS and Android. Built with React Native for a native experience on both platforms.',
  },
  {
    q: 'How are Hypertrophy Units calculated?',
    a: 'Hypertrophy Units (HU) measure the actual growth stimulus reaching each muscle. For each set, we calculate stimulating reps. Only the last 0-5 reps before failure count. RIR 0 gives 5 stimulating reps, RIR 4+ gives zero (junk volume). We then apply exercise coefficients (bench press = 1.0× chest, 0.5× triceps), a diminishing returns curve (6 sets ≈ 2× stimulus, not 6×), and subtract atrophy between sessions. The result: a single number that tells you exactly how much growth stimulus each muscle received.',
  },
  {
    q: 'How does the TDEE calculation work?',
    a: 'We start with your BMR using the Katch-McArdle formula (if body fat is known) or Mifflin-St Jeor. We multiply by your activity level, then apply your goal offset (cutting: -500 kcal, bulking: +300 kcal). The key part is weekly recalibration. Every week, we compare your actual weight change to your expected change using EMA-smoothed bodyweight data, and adjust your targets by up to ±300 kcal. Your TDEE gets more accurate every single week.',
  },
  {
    q: 'What is Adaptive Training?',
    a: 'Repwise offers 4 coaching modes. Manual: you set all targets yourself. Coached: the app adjusts your calories and macros based on weekly check-ins. Collaborative: you review and approve the app\'s suggestions before they apply. Recomp: specialized mode for simultaneous fat loss and muscle gain with a recomposition score. All modes use your real data, not generic formulas.',
  },
  {
    q: 'What\'s in the Weekly Intelligence Report?',
    a: 'Every week you get three data sections: Training (total volume, sets by muscle group, Hypertrophy Units, personal records), Nutrition (average daily macros, calorie compliance percentage, TDEE adjustments), and Body (weight trend with EMA smoothing). Plus 3-5 personalized recommendations like \'Chest volume is below MEV — add 2 sets next week\' or \'Protein intake averaged 92% of target — solid consistency.\'',
  },
  {
    q: 'How does onboarding work?',
    a: 'A 9-step wizard personalizes everything in under 3 minutes. You\'ll set your goal (lose fat, build muscle, maintain, recomp), enter body measurements, choose your activity level, see your personalized TDEE breakdown with animated charts, select a diet style (balanced, high protein, low carb, keto), and review your complete plan before starting. Every number is editable and you can change anything later.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden">
                  <button
                    id={`faq-heading-${i}`}
                    onClick={() => toggle(i)}
                    className="w-full flex items-center gap-4 p-5 text-left cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span className="flex-1 font-semibold text-lg">{faq.q}</span>
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
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-heading-${i}`}
                        initial={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-[#94A3B8] leading-relaxed">
                          {faq.a}
                        </p>
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
