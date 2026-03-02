"use client";

import { useCounter } from "@/hooks/useCounter";

// CUSTOMIZE: replace these with your real stats
const STATS = [
  {
    target: 1200000,
    fmt: (n: number) => n >= 1e6 ? `${(n / 1e6).toFixed(1)}M+` : `${Math.round(n / 1000)}K+`,
    label: "Combined Followers",
  },
  {
    target: 500000,
    fmt: (n: number) => n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : `${Math.round(n / 1000)}K+`,
    label: "Monthly Reach",
  },
  {
    // ×10 so the counter can animate integers; displayed as X.X%
    target: 48,
    fmt: (n: number) => `${(n / 10).toFixed(1)}%`,
    label: "Avg. Engagement Rate",
  },
  {
    target: 50,
    fmt: (n: number) => `${n}+`,
    label: "Brand Collaborations",
  },
];

function Stat({ target, fmt, label }: { target: number; fmt: (n: number) => string; label: string }) {
  const { count, ref } = useCounter(target);
  return (
    <div ref={ref} className="flex flex-col items-center text-center px-4">
      <p className="text-3xl sm:text-4xl font-extrabold text-[#06122B] tabular-nums leading-none">
        {fmt(count)}
      </p>
      <p className="mt-2 text-sm text-[#5A6B8A]">{label}</p>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="py-14 px-6 bg-white border-y border-[#DBEAFE]">
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-[#DBEAFE]">
        {STATS.map((s) => (
          <Stat key={s.label} target={s.target} fmt={s.fmt} label={s.label} />
        ))}
      </div>
    </section>
  );
}
