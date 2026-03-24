'use client';

export function DashboardMockup({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="w-[280px] h-[560px] bg-[#0A0E13] rounded-[2.5rem] border-2 border-[#1E293B] overflow-hidden shadow-2xl">
        {/* Status bar */}
        <div className="flex justify-between items-center px-6 pt-3 pb-1">
          <span className="text-[10px] text-[#94A3B8]">9:41</span>
          <div className="flex gap-1">
            <div className="w-3 h-2 rounded-sm bg-[#94A3B8]" />
            <div className="w-3 h-2 rounded-sm bg-[#94A3B8]" />
          </div>
        </div>

        {/* Header */}
        <div className="px-4 py-2">
          <p className="text-xs text-[#94A3B8]">Good evening</p>
          <p className="text-sm font-semibold text-[#F1F5F9]">Dashboard</p>
        </div>

        {/* Macro Rings */}
        <div className="px-4 py-3">
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: 'Cal', value: 1847, color: '#06B6D4', pct: 77 },
              { label: 'Protein', value: 142, color: '#22C55E', pct: 79 },
              { label: 'Carbs', value: 198, color: '#F59E0B', pct: 71 },
              { label: 'Fat', value: 62, color: '#EC4899', pct: 78 },
            ].map((m) => (
              <div key={m.label} className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: `conic-gradient(${m.color} ${m.pct * 3.6}deg, #1E293B ${m.pct * 3.6}deg)` }}
                >
                  <div className="w-9 h-9 rounded-full bg-[#0A0E13] flex items-center justify-center">
                    <span className="text-[8px] font-mono text-[#F1F5F9]">{m.value}</span>
                  </div>
                </div>
                <span className="text-[7px] text-[#94A3B8] mt-1">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Workout */}
        <div className="px-4 py-2">
          <div className="bg-[#12171F] rounded-xl p-3 border border-[#1E293B]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[9px] font-semibold text-[#F1F5F9]">Today&apos;s Workout</span>
              <span className="text-[8px] text-[#06B6D4]">Push Day</span>
            </div>
            <div className="space-y-1.5">
              {['Bench Press - 4×8', 'OHP - 3×10', 'Incline DB - 3×12'].map((ex) => (
                <div key={ex} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                  <span className="text-[8px] text-[#94A3B8]">{ex}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weight Trend */}
        <div className="px-4 py-2">
          <div className="bg-[#12171F] rounded-xl p-3 border border-[#1E293B]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[9px] font-semibold text-[#F1F5F9]">Weight Trend</span>
              <span className="text-[8px] text-[#22C55E]">−0.3 kg</span>
            </div>
            <svg viewBox="0 0 200 40" className="w-full h-8">
              <polyline
                points="0,30 30,28 60,25 90,27 120,22 150,20 180,18 200,15"
                fill="none"
                stroke="#06B6D4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="200" cy="15" r="3" fill="#06B6D4" />
            </svg>
          </div>
        </div>

        {/* Streak */}
        <div className="px-4 py-2">
          <div className="flex items-center gap-2 bg-[#12171F] rounded-xl p-3 border border-[#1E293B]">
            <span className="text-sm">🔥</span>
            <span className="text-[9px] text-[#F1F5F9] font-semibold">12-day streak</span>
            <span className="text-[8px] text-[#94A3B8] ml-auto">3 meals • 1 workout</span>
          </div>
        </div>
      </div>
    </div>
  );
}
