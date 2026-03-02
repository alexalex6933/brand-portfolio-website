"use client";

import { useEffect, useState } from "react";

/* ─── Types ─────────────────────────────────────── */
interface IGData {
  followers: number;
  media_count: number;
  profile_views_30d: number;
  impressions_30d: number;
  reach_30d: number;
  demographics: Breakdown[];
  countries: Breakdown[];
}
interface Breakdown {
  dimension_keys: string[];
  results: { dimension_values: string[]; value: number }[];
}

/* ─── Helpers ───────────────────────────────────── */
function fmt(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

const BLUE_SHADES = ["#1D4ED8", "#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"];

/* ─── Platform icons ─────────────────────────────── */
function IGIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TTIcon() {
  return (
    <svg width="15" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
    </svg>
  );
}
function YTIcon() {
  return (
    <svg width="20" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.38.55A3.02 3.02 0 00.5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 002.12 2.14C4.45 20.5 12 20.5 12 20.5s7.55 0 9.38-.55a3.02 3.02 0 002.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" />
    </svg>
  );
}

/* ─── Bar chart row ──────────────────────────────── */
function BarRow({ label, pct, color }: { label: string; pct: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-16 text-xs text-blue-200 flex-shrink-0 font-medium">{label}</span>
      <div className="flex-1 bg-white/10 rounded-full h-1.5">
        <div className="h-1.5 rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="w-9 text-right text-xs text-blue-200">{pct.toFixed(0)}%</span>
    </div>
  );
}

export default function Metrics() {
  const [data, setData] = useState<IGData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/instagram")
      .then((r) => r.json())
      .then((d) => { if (d.error) setError(d.error); else setData(d); })
      .catch(() => setError("Failed to load metrics"))
      .finally(() => setLoading(false));
  }, []);

  /* Derived demographics */
  const genderMap: Record<string, number> = {};
  if (data?.demographics?.[0]?.results) {
    for (const r of data.demographics[0].results) {
      const g = r.dimension_values[1] ?? r.dimension_values[0] ?? "Other";
      genderMap[g] = (genderMap[g] ?? 0) + r.value;
    }
  }
  const totalGender = Object.values(genderMap).reduce((a, b) => a + b, 0);

  const ageMap: Record<string, number> = {};
  if (data?.demographics?.[0]?.results) {
    for (const r of data.demographics[0].results) {
      const age = r.dimension_values[0];
      ageMap[age] = (ageMap[age] ?? 0) + r.value;
    }
  }
  const topAges = Object.entries(ageMap).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const totalAge = topAges.reduce((a, b) => a + b[1], 0);

  const topCountries = (data?.countries?.[0]?.results ?? []).sort((a, b) => b.value - a.value).slice(0, 5);
  const totalCountry = topCountries.reduce((a, b) => a + b.value, 0);

  return (
    <section id="metrics" className="py-24 px-6 bg-[#06122B]">
      <div className="max-w-5xl mx-auto space-y-14">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#3B82F6]">
              Audience Metrics
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Real numbers, real results.
            </h2>
          </div>
          <p className="text-sm text-blue-300/70 sm:text-right max-w-xs">
            Live data pulled from Instagram each page load.
          </p>
        </div>

        {/* Platform chips — CUSTOMIZE TikTok + YouTube counts manually */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: <IGIcon />, platform: "Instagram", count: data ? fmt(data.followers) : "—", sub: "Followers" },
            { icon: <TTIcon />, platform: "TikTok",    count: "000K", sub: "Followers" },   // CUSTOMIZE
            { icon: <YTIcon />, platform: "YouTube",   count: "000K", sub: "Subscribers" }, // CUSTOMIZE
          ].map((p) => (
            <div
              key={p.platform}
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-4 hover:bg-white/8 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1D4ED8]/20 flex items-center justify-center text-[#60A5FA]">
                {p.icon}
              </div>
              <div>
                <p className="text-xl font-extrabold text-white leading-none">{p.count}</p>
                <p className="text-xs text-blue-300/70 mt-0.5">{p.sub} on {p.platform}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white/5 rounded-2xl h-24 animate-pulse" />
            ))}
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="bg-white/5 border border-blue-800/40 rounded-2xl p-5 text-sm">
            <p className="font-semibold text-white mb-1">Metrics unavailable</p>
            <p className="text-blue-300/70">{error}</p>
          </div>
        )}

        {/* Live stat cards */}
        {data && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { v: fmt(data.followers),         l: "Instagram Followers" },
              { v: fmt(data.profile_views_30d), l: "Profile Views (30d)" },
              { v: fmt(data.impressions_30d),   l: "Impressions (30d)" },
              { v: fmt(data.reach_30d),         l: "Reach (30d)" },
            ].map((s) => (
              <div key={s.l} className="bg-white/5 border border-white/8 rounded-2xl p-5 space-y-1.5">
                <p className="text-2xl font-extrabold text-white">{s.v}</p>
                <p className="text-xs text-blue-300/70">{s.l}</p>
              </div>
            ))}
          </div>
        )}

        {/* Demographics — only shown when API data is available */}
        {data && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            {/* Gender */}
            {totalGender > 0 && (
              <div className="space-y-4">
                <p className="text-sm font-bold text-white">Gender</p>
                <div className="flex rounded-full overflow-hidden h-2">
                  {Object.entries(genderMap).map(([g, c], i) => (
                    <div key={g} style={{ width: `${(c / totalGender) * 100}%`, background: BLUE_SHADES[i] ?? "#3B82F6" }} />
                  ))}
                </div>
                <div className="space-y-1">
                  {Object.entries(genderMap).map(([g, c], i) => (
                    <div key={g} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: BLUE_SHADES[i] ?? "#3B82F6" }} />
                      <span className="text-xs text-blue-200">{g} · {((c / totalGender) * 100).toFixed(0)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Age */}
            {topAges.length > 0 && (
              <div className="space-y-3">
                <p className="text-sm font-bold text-white">Age Groups</p>
                <div className="space-y-2">
                  {topAges.map(([age, c], i) => (
                    <BarRow key={age} label={age} pct={(c / totalAge) * 100} color={BLUE_SHADES[i] ?? "#3B82F6"} />
                  ))}
                </div>
              </div>
            )}

            {/* Countries */}
            {topCountries.length > 0 && (
              <div className="space-y-3">
                <p className="text-sm font-bold text-white">Top Countries</p>
                <div className="space-y-2">
                  {topCountries.map((c, i) => (
                    <BarRow
                      key={c.dimension_values[0]}
                      label={c.dimension_values[0].toUpperCase()}
                      pct={(c.value / totalCountry) * 100}
                      color={BLUE_SHADES[i] ?? "#3B82F6"}
                    />
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
