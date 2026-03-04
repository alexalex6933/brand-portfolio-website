/* ─── Static Instagram metrics — last updated March 2026 ─── */

function BarRow({ label, pct, color }: { label: string; pct: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-16 text-xs text-blue-200 flex-shrink-0 font-medium">{label}</span>
      <div className="flex-1 bg-white/10 rounded-full h-1.5">
        <div className="h-1.5 rounded-full" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="w-9 text-right text-xs text-blue-200">{pct.toFixed(0)}%</span>
    </div>
  );
}

function SplitBar({ a, b, labelA, labelB, colorA, colorB }: {
  a: number; b: number; labelA: string; labelB: string; colorA: string; colorB: string;
}) {
  const total = a + b;
  return (
    <div className="space-y-2">
      <div className="flex rounded-full overflow-hidden h-2">
        <div style={{ width: `${(a / total) * 100}%`, background: colorA }} />
        <div style={{ width: `${(b / total) * 100}%`, background: colorB }} />
      </div>
      <div className="flex justify-between text-[11px] text-blue-200">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: colorA }} />
          {labelA} · {a.toFixed(1)}%
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: colorB }} />
          {labelB} · {b.toFixed(1)}%
        </span>
      </div>
    </div>
  );
}

/* ─── Data ───────────────────────────────────────── */
const ACTIVE_HOURS = [
  { label: "12a", followers: 5462 },
  { label: "3a",  followers: 6082 },
  { label: "6a",  followers: 6164 },
  { label: "9a",  followers: 5724 },
  { label: "12p", followers: 5460 },
  { label: "3p",  followers: 5242 },
  { label: "6p",  followers: 5504 },
  { label: "9p",  followers: 5320 },
];
const MAX_ACTIVE = Math.max(...ACTIVE_HOURS.map((h) => h.followers));

export default function Metrics() {
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
            Instagram Professional Dashboard · March 2026
          </p>
        </div>

        {/* Key stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { v: "14.9K",  l: "Instagram Followers" },
            { v: "6.2M",   l: "Views (30d)" },
            { v: "3.9M",   l: "Accounts Reached (30d)" },
            { v: "840K",   l: "Interactions (30d)" },
            { v: "566K",   l: "Accounts Engaged (30d)" },
            { v: "69.4K",  l: "Profile Visits (30d)" },
          ].map((s) => (
            <div key={s.l} className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-1.5 hover:bg-white/8 transition-colors">
              <p className="text-2xl font-extrabold text-white">{s.v}</p>
              <p className="text-xs text-blue-300/70">{s.l}</p>
            </div>
          ))}
        </div>

        {/* Audience breakdown + Content type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* Audience — who sees the content */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
            <p className="text-sm font-bold text-white">Audience Breakdown</p>

            <div className="space-y-2">
              <p className="text-[11px] text-blue-300/60 uppercase tracking-widest font-semibold">Views</p>
              <SplitBar
                a={96.4} b={3.6}
                labelA="Non-followers" labelB="Followers"
                colorA="#1D4ED8" colorB="#93C5FD"
              />
            </div>

            <div className="space-y-2">
              <p className="text-[11px] text-blue-300/60 uppercase tracking-widest font-semibold">Interactions</p>
              <SplitBar
                a={82.5} b={17.5}
                labelA="Non-followers" labelB="Followers"
                colorA="#1D4ED8" colorB="#93C5FD"
              />
            </div>
          </div>

          {/* Content type split */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
            <p className="text-sm font-bold text-white">Content Type (Views)</p>
            <div className="space-y-3">
              <BarRow label="Reels"   pct={97.8} color="#1D4ED8" />
              <BarRow label="Stories" pct={2.2}  color="#93C5FD" />
            </div>
            <p className="text-xs text-blue-300/50 leading-relaxed pt-2">
              97.8% of all views come from Reels — ideal for brand integrations with maximum organic reach.
            </p>
          </div>

        </div>

        {/* Most active hours */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
          <p className="text-sm font-bold text-white">Followers — Most Active Times</p>
          <div className="flex items-end gap-2 h-24">
            {ACTIVE_HOURS.map((h) => {
              const heightPct = (h.followers / MAX_ACTIVE) * 100;
              return (
                <div key={h.label} className="flex flex-col items-center gap-1.5 flex-1">
                  <div className="w-full rounded-t-sm" style={{
                    height: `${heightPct}%`,
                    background: heightPct > 90 ? "#1D4ED8" : "#3B82F6",
                    minHeight: "4px",
                  }} />
                  <span className="text-[10px] text-blue-300/60">{h.label}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}


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
