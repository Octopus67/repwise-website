'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';

const freeFeatures = [
  'Hypertrophy Science Engine (WNS, volume landmarks)',
  'Full nutrition tracking (3M+ foods, barcode scanning)',
  'Adaptive TDEE with weekly recalibration',
  '4 coaching modes (Manual, Coached, Collaborative, Recomp)',
  'Analytics & strength progression charts',
  'Progress photos with pose overlays',
  'Weekly Intelligence Reports',
  'Body measurements & composition',
  'Data export (GDPR compliant)',
  'All future features',
];

const coachingFeatures = [
  'Everything in Free, plus:',
  'A dedicated coach who knows your data',
  'Custom programming based on your analytics',
  'Weekly video check-ins',
  'Nutrition adjustments as your body changes',
  'Form review and feedback on your lifts',
  'Priority support',
];

export function Pricing() {
  return (
    <section className="py-24 lg:py-32" id="pricing">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#F1F5F9] text-center mb-4">
            Everything Free. Seriously.
          </h2>
          <p className="text-[#94A3B8] text-center max-w-2xl mx-auto mb-16">
            Every feature in Repwise is free. Hypertrophy science, nutrition tracking, analytics, coaching, all of it. The only paid option is 1-on-1 personal coaching.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <ScrollReveal>
            <GlassCard className="p-8 border-[#06B6D4]/30 relative">
              <Badge variant="default" className="mb-4">FREE</Badge>
              <h3 className="text-2xl font-bold text-[#F1F5F9] mb-2">Full Access</h3>
              <p className="text-4xl font-bold text-[#06B6D4] mb-6">$0</p>
              <ul className="space-y-3 mb-8">
                {freeFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                    <Check className="w-4 h-4 text-[#06B6D4] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="w-full" onClick={() => { window.location.href = '/download'; }}>Get Repwise Free</Button>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <GlassCard className="p-8 border-[#D4AF37]/30 relative shadow-[0_0_40px_rgba(212,175,55,0.1)]">
              <Badge variant="premium" className="mb-4">PERSONAL COACHING</Badge>
              <h3 className="text-2xl font-bold text-[#F1F5F9] mb-2">1-on-1 Coaching</h3>
              <p className="text-4xl font-bold text-[#D4AF37] mb-2">$9.99<span className="text-lg text-[#94A3B8] font-normal">/month</span></p>
              <p className="text-sm text-[#94A3B8] mb-6">or $79.99/year (save 33%)</p>
              <ul className="space-y-3 mb-8">
                {coachingFeatures.map((f, i) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${i === 0 ? 'text-[#F1F5F9] font-semibold' : 'text-[#94A3B8]'}`}>
                    {i > 0 && <Check className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />}
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#D4AF37] hover:bg-[#B8960C] text-[#0F172A]" onClick={() => { window.location.href = '/download'; }}>Start Coaching</Button>
            </GlassCard>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <p className="text-center text-sm text-[#94A3B8] mt-8">No credit card required. No catch.</p>
          <p className="text-center text-xs text-[#64748B] mt-2">Prices shown in USD. Coaching prices may vary by region.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
