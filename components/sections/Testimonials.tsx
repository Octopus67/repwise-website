import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';

const testimonials = [
  {
    initials: 'MK',
    name: 'Mike K.',
    color: '#06B6D4',
    stat: 'Using Repwise for 4 months',
    quote: 'I was paying for Strong AND MacroFactor. Switched to Repwise and honestly the nutrition tracking is just as good, plus I finally understand what volume landmarks actually mean for my training. The fact that it\'s free is insane.',
  },
  {
    initials: 'SR',
    name: 'Sarah R.',
    color: '#22C55E',
    stat: 'Down 8kg in 12 weeks',
    quote: 'The weekly TDEE recalibration actually works. My calories adjusted automatically when my weight loss stalled at week 6. Didn\'t have to guess or manually change anything. The weekly report told me exactly what to fix.',
  },
  {
    initials: 'JT',
    name: 'James T.',
    color: '#F59E0B',
    stat: 'Hit 3 PRs in first month',
    quote: 'The hypertrophy units thing clicked for me after about 2 weeks. I realized half my sets were basically junk volume — too far from failure. Cut my session time by 20 minutes and actually started growing faster.',
  },
  {
    initials: 'AP',
    name: 'Ananya P.',
    color: '#EC4899',
    stat: 'Switched from RP Hypertrophy',
    quote: 'RP was $300/year and didn\'t even have nutrition tracking. Repwise gives me the same science-based approach with full macro tracking, and it\'s free. The barcode scanner saves me so much time.',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#F1F5F9] text-center mb-4">
            What Lifters Are Saying
          </h2>
          <p className="text-[#94A3B8] text-center max-w-2xl mx-auto mb-12">
            Real feedback from people using Repwise every day.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <GlassCard className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#F1F5F9]">{t.name}</p>
                    <p className="text-xs text-[#06B6D4]">{t.stat}</p>
                  </div>
                </div>
                <p className="text-sm text-[#94A3B8] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
