import { Check, X } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const competitors = ['Repwise', 'Strong', 'Hevy', 'MacroFactor', 'RP Hypertrophy'] as const;

const rows: { feature: string; values: Record<(typeof competitors)[number], boolean | string> }[] = [
  { feature: 'Hypertrophy science', values: { Repwise: true, Strong: false, Hevy: false, MacroFactor: false, 'RP Hypertrophy': true } },
  { feature: 'Full nutrition', values: { Repwise: true, Strong: false, Hevy: false, MacroFactor: true, 'RP Hypertrophy': false } },
  { feature: 'Both in one app', values: { Repwise: true, Strong: false, Hevy: false, MacroFactor: false, 'RP Hypertrophy': false } },
  { feature: 'Adaptive coaching', values: { Repwise: true, Strong: false, Hevy: false, MacroFactor: true, 'RP Hypertrophy': false } },
  { feature: 'Body heat map', values: { Repwise: true, Strong: false, Hevy: false, MacroFactor: false, 'RP Hypertrophy': false } },
  { feature: 'Price', values: { Repwise: '$80/yr', Strong: '$30/yr', Hevy: '$50/yr', MacroFactor: '$72/yr', 'RP Hypertrophy': '$300/yr' } },
];

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === 'string') return <span className="text-sm font-medium">{value}</span>;
  return value ? (
    <Check className="w-5 h-5 text-[#06B6D4] mx-auto" aria-label="Yes" />
  ) : (
    <X className="w-5 h-5 text-[#64748B] mx-auto" aria-label="No" />
  );
}

export function ComparisonTable() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
            Why Lifters Switch to Repwise
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[540px] border-collapse">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th scope="col" className="text-left text-sm text-[#64748B] font-medium p-4 sticky left-0 bg-[#0A0E13] z-10">
                    Feature
                  </th>
                  {competitors.map((c) => (
                    <th
                      key={c}
                      scope="col"
                      className={`text-center text-sm font-semibold p-4 ${
                        c === 'Repwise' ? 'text-[#06B6D4] bg-[rgba(6,182,212,0.05)]' : 'text-[#94A3B8]'
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.feature} className="border-b border-white/[0.04]">
                    <th scope="row" className="text-sm text-[#F1F5F9] p-4 sticky left-0 bg-[#0A0E13] z-10 text-left font-normal">
                      {row.feature}
                    </th>
                    {competitors.map((c) => (
                      <td
                        key={c}
                        className={`text-center p-4 ${c === 'Repwise' ? 'bg-[rgba(6,182,212,0.05)]' : ''}`}
                      >
                        <Cell value={row.values[c]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-center mt-12 text-[#94A3B8] text-lg">
            RP + MacroFactor ={' '}
            <span className="text-[#EF4444] line-through">$372/yr</span>.{' '}
            Repwise = <span className="text-[#06B6D4] font-semibold">$80/yr</span>.
            <br className="hidden sm:block" />
            {' '}Same science. More features. One app.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
