"use client";

import { useCounter } from "@/hooks/useCounter";

const STATS = [
  {
    target: 14946,
    fmt: (n: number) => `${(n / 1000).toFixed(1)}K`,
    label: "Instagram Followers",
  },
  {
    target: 6249289,
    fmt: (n: number) => `${(n / 1_000_000).toFixed(1)}M+`,
    label: "Monthly Views",
  },
  {
    target: 3885283,
    fmt: (n: number) => `${(n / 1_000_000).toFixed(1)}M+`,
    label: "Monthly Reach",
  },
  {
    target: 840633,
    fmt: (n: number) => `${Math.round(n / 1000)}K+`,
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
