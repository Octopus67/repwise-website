'use client';

import { useReducedMotion } from 'motion/react';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { DashboardMockup } from '@/components/shared/DashboardMockup';
import { BRAND } from '@/lib/constants';

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient mesh background */}
      <div
        className={`absolute inset-0 ${prefersReducedMotion ? '' : 'animate-[meshDrift_20s_ease-in-out_infinite]'}`}
        style={{
          background:
            'radial-gradient(at 20% 30%, rgba(6,182,212,0.12) 0%, transparent 50%), radial-gradient(at 80% 70%, rgba(59,130,246,0.08) 0%, transparent 50%), radial-gradient(at 50% 50%, rgba(139,92,246,0.05) 0%, transparent 50%)',
        }}
      />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #F1F5F9 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <AnimatedText
            text="Train Smarter. Eat Smarter. One App."
            as="h1"
            animation="words"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
          />

          <ScrollReveal delay={0.5}>
            <p className="mt-6 text-lg text-[#94A3B8] max-w-lg mx-auto lg:mx-0">
              {BRAND.tagline}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
              <MagneticButton
                className="bg-[#06B6D4] hover:bg-[#0891B2] text-[#0F172A] font-semibold px-8 py-4 text-lg rounded-xl transition-colors"
                onClick={() => { window.location.href = '/download'; }}
              >
                Start Free — 7 Days, No Card
              </MagneticButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.9}>
            <div className="mt-6 flex items-center gap-4 justify-center lg:justify-start">
              <span aria-disabled="true" role="link" className="text-sm text-[#94A3B8] opacity-50 cursor-not-allowed pointer-events-none underline underline-offset-4" title="Coming Soon">
                App Store — Coming Soon
              </span>
              <span className="text-[#1E293B]">|</span>
              <span aria-disabled="true" role="link" className="text-sm text-[#94A3B8] opacity-50 cursor-not-allowed pointer-events-none underline underline-offset-4" title="Coming Soon">
                Google Play — Coming Soon
              </span>
            </div>
            <p className="mt-2 text-xs text-[#64748B] text-center lg:text-left">
              Available on iOS and Android
            </p>
          </ScrollReveal>
        </div>

        {/* Phone mockup placeholder */}
        <ScrollReveal direction="right" delay={0.4} className="flex justify-center">
          <DashboardMockup />
        </ScrollReveal>
      </div>

    </section>
  );
}
