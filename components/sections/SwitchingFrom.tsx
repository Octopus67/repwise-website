import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';

const competitors = [
  {
    name: 'Strong',
    description: 'Import your workout history. Keep your PRs. Add nutrition tracking and hypertrophy science on top.',
  },
  {
    name: 'MyFitnessPal',
    description: 'Bring your nutrition habits. Get a 3M+ food database with barcode scanning, plus real training intelligence.',
  },
  {
    name: 'RP Hypertrophy',
    description: 'Same science-based approach at 78% less cost. Plus full nutrition tracking, analytics, and adaptive coaching.',
  },
];

export function SwitchingFrom() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#F1F5F9] text-center mb-4">
            Switching From Another App?
          </h2>
          <p className="text-[#94A3B8] text-center max-w-2xl mx-auto mb-16">
            Repwise supports importing your data. Your history comes with you.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {competitors.map((c, i) => (
            <ScrollReveal key={c.name} delay={i * 0.1}>
              <GlassCard>
                <p className="text-sm text-[#06B6D4] font-semibold mb-2">Coming from {c.name}?</p>
                <p className="text-sm text-[#94A3B8]">{c.description}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
