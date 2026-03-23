'use client';

import { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PRICING } from '@/lib/constants';
import { Check } from 'lucide-react';

const freeFeatures = ['Workout tracking', 'Basic exercise library', 'Set & rep logging', 'Rest timer'];
const premiumFeatures = ['Everything in Free', 'Hypertrophy Science Engine', 'Full nutrition tracking (300k+ foods)', 'AI coaching & periodization', 'Volume landmarks & fatigue management', 'Advanced analytics & PR detection', 'Priority support'];

export function Pricing() {
  const [yearly, setYearly] = useState(false);
  const price = yearly ? PRICING.yearly : PRICING.monthly;
  const period = yearly ? '/year' : '/month';

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#F1F5F9] mb-4">
            Start Free. Upgrade When You&apos;re Ready.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white/[0.05] rounded-xl p-1 border border-white/[0.06]">
              <button onClick={() => setYearly(false)} className={`px-5 py-2 text-sm rounded-lg transition-colors ${!yearly ? 'bg-[#06B6D4] text-[#0A0E13] font-semibold' : 'text-[#94A3B8] hover:text-[#F1F5F9]'}`}>Monthly</button>
              <button onClick={() => setYearly(true)} className={`px-5 py-2 text-sm rounded-lg transition-colors ${yearly ? 'bg-[#06B6D4] text-[#0A0E13] font-semibold' : 'text-[#94A3B8] hover:text-[#F1F5F9]'}`}>
                Yearly <span className="text-xs opacity-80">(-{PRICING.yearlySavings})</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <ScrollReveal delay={0.15}>
            <GlassCard className="h-full">
              <h3 className="text-xl font-bold text-[#F1F5F9] mb-2">Free</h3>
              <p className="text-3xl font-bold text-[#F1F5F9] mb-6">$0 <span className="text-sm font-normal text-[#94A3B8]">forever</span></p>
              <ul className="space-y-3 mb-8">
                {freeFeatures.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <Check className="w-4 h-4 text-[#06B6D4] shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button variant="secondary" className="w-full">Download Free</Button>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <GlassCard className="h-full border-[#D4AF37]/30 scale-[1.02] shadow-[0_0_40px_rgba(212,175,55,0.15)]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-[#F1F5F9]">Premium</h3>
                <Badge variant="premium">BEST VALUE</Badge>
              </div>
              <p className="text-3xl font-bold text-[#F1F5F9] mb-6">
                ${price} <span className="text-sm font-normal text-[#94A3B8]">{period}</span>
              </p>
              <ul className="space-y-3 mb-8">
                {premiumFeatures.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button variant="primary" className="w-full">Start {PRICING.trialDays}-Day Free Trial</Button>
            </GlassCard>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-[#64748B] text-sm mt-8">No credit card required for trial</p>
          <p className="text-xs text-[#64748B] mt-2">Prices shown in USD. Actual price may vary by region in the App Store and Google Play.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
