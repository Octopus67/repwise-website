'use client';

import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { BRAND } from '@/lib/constants';

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 px-6 overflow-hidden">
      {/* Vivid gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(at 30% 40%, rgba(6,182,212,0.2) 0%, transparent 50%), radial-gradient(at 70% 60%, rgba(139,92,246,0.18) 0%, transparent 50%), radial-gradient(at 50% 50%, rgba(59,130,246,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Ready to Train Smarter?
          </h2>
          <p className="mt-4 text-lg text-[#94A3B8]">
            Join thousands of lifters who&apos;ve upgraded their training with science.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10">
            <MagneticButton
              className="bg-[#06B6D4] hover:bg-[#0891B2] text-[#0F172A] font-semibold px-10 py-5 text-lg rounded-xl transition-colors"
              onClick={() => { window.location.href = '/download'; }}
            >
              Start Free — 7 Days, No Card
            </MagneticButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-8 flex items-center gap-4 justify-center">
            <span aria-disabled="true" role="link" className="text-sm text-[#94A3B8] opacity-50 cursor-not-allowed pointer-events-none underline underline-offset-4" title="Coming Soon">
              App Store — Coming Soon
            </span>
            <span className="text-[#1E293B]">|</span>
            <span aria-disabled="true" role="link" className="text-sm text-[#94A3B8] opacity-50 cursor-not-allowed pointer-events-none underline underline-offset-4" title="Coming Soon">
              Google Play — Coming Soon
            </span>
            <span className="text-[#1E293B]">|</span>
            <a href={BRAND.telegram} className="text-sm text-[#94A3B8] hover:text-[#F1F5F9] transition-colors underline underline-offset-4">
              Telegram Community
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
