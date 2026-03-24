import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';

const testimonials = [
  {
    initials: 'MK',
    name: 'Mike K.',
    color: '#06B6D4',
    stat: 'Using Repwise for 4 months',
    quote: 'Was using Strong for workouts and MacroFactor for food. Repwise replaced both. The thing that got me was seeing exactly how much stimulus each muscle actually got per session. Cut my workout time down too. Oh and it\'s free, which is wild.',
  },
  {
    initials: 'SR',
    name: 'Sarah R.',
    color: '#22C55E',
    stat: 'Down 8kg in 12 weeks',
    quote: 'My weight loss stalled around week 6 and the app just... adjusted my calories automatically. Didn\'t have to Google "why am I not losing weight" for the hundredth time. The weekly report showed me exactly what changed.',
  },
  {
    initials: 'JT',
    name: 'James T.',
    color: '#F59E0B',
    stat: 'Hit 3 PRs in first month',
    quote: 'Took me about 2 weeks to get the hypertrophy units thing. Then I realized like half my sets were junk volume because I was stopping too far from failure. Shorter sessions, better results. Wish I\'d known this years ago.',
  },
  {
    initials: 'AP',
    name: 'Ananya P.',
    color: '#EC4899',
    stat: 'Switched from RP Hypertrophy',
    quote: 'I was paying RP $300 a year and they don\'t even do nutrition. Repwise has the same volume landmark stuff, fatigue tracking, WNS scoring, plus full macro tracking with barcode scanning. And it\'s free. I don\'t get how but I\'m not complaining.',
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
