'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Target, Dumbbell, TrendingUp } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { staggerContainer, fadeUp } from '@/lib/animations';

const steps = [
  { num: '01', icon: Target, title: 'Set Your Goals', desc: 'A quick onboarding quiz sets your TDEE, macros, and training targets. Takes about 2 minutes.' },
  { num: '02', icon: Dumbbell, title: 'Train & Track', desc: 'Log your sets, scan your food. The app tracks stimulating reps and flags junk volume in real time.' },
  { num: '03', icon: TrendingUp, title: 'See Results', desc: 'Weekly reports show what\u0027s working. Coaching adjusts your plan based on real data.' },
];

export function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-24 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
            How It <span className="text-[#06B6D4]">Works</span>
          </h2>
        </ScrollReveal>

        <motion.div
          variants={!prefersReducedMotion ? staggerContainer : undefined}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative"
        >
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={!prefersReducedMotion ? fadeUp : undefined}
              className="relative text-center px-6"
            >
              {/* Faded step number */}
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-[8rem] font-bold leading-none text-white/[0.03] select-none pointer-events-none">
                {step.num}
              </span>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center mx-auto mb-5">
                  <step.icon className="w-7 h-7 text-[#06B6D4]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
