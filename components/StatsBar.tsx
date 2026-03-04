"use client";

import { useCounter } from "@/hooks/useCounter";

const STATS = [
  {
    target: 57179,
    fmt: (n: number) => `${(n / 1000).toFixed(1)}K`,
    label: "Total Followers",
  },
  {
    target: 11661544,
    fmt: (n: number) => `${(n / 1_000_000).toFixed(1)}M+`,
    label: "Monthly Views",
  },
  {
    target: 9248370,
    fmt: (n: number) => `${(n / 1_000_000).toFixed(1)}M+`,
    label: "Monthly Reach",
  },
  {
    target: 1572585,
    fmt: (n: number) => `${(n / 1_000_000).toFixed(1)}M+`,
    label: "Monthly Interactions",
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
