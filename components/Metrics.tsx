"use client";

import { useEffect, useState } from "react";

interface InstagramData {
  followers: number;
  media_count: number;
  profile_views_30d: number;
  impressions_30d: number;
  reach_30d: number;
  demographics: DemographicBreakdown[];
  countries: CountryBreakdown[];
}

interface DemographicBreakdown {
  dimension_keys: string[];
  results: { dimension_values: string[]; value: number }[];
}

interface CountryBreakdown {
  dimension_keys: string[];
  results: { dimension_values: string[]; value: number }[];
}

function fmt(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

export default function Metrics() {
  const [data, setData] = useState<InstagramData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/instagram")
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setError(d.error);
        else setData(d);
      })
      .catch(() => setError("Failed to load metrics"))
      .finally(() => setLoading(false));
  }, []);

  const topStats = data
    ? [
        { label: "Followers", value: fmt(data.followers) },
        { label: "Profile Views (30d)", value: fmt(data.profile_views_30d) },
        { label: "Impressions (30d)", value: fmt(data.impressions_30d) },
        { label: "Reach (30d)", value: fmt(data.reach_30d) },
      ]
    : [];

  // Build gender split from demographics
  const genderMap: Record<string, number> = {};
  if (data?.demographics?.[0]?.results) {
    for (const r of data.demographics[0].results) {
      const gender = r.dimension_values[1] ?? r.dimension_values[0] ?? "Other";
      genderMap[gender] = (genderMap[gender] ?? 0) + r.value;
    }
  }
  const totalGender = Object.values(genderMap).reduce((a, b) => a + b, 0);

  // Build age buckets
  const ageMap: Record<string, number> = {};
  if (data?.demographics?.[0]?.results) {
    for (const r of data.demographics[0].results) {
      const age = r.dimension_values[0];
      ageMap[age] = (ageMap[age] ?? 0) + r.value;
    }
  }
  const topAges = Object.entries(ageMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  const totalAge = topAges.reduce((a, b) => a + b[1], 0);

  // Top countries
  const topCountries =
    data?.countries?.[0]?.results
      ?.sort((a, b) => b.value - a.value)
      .slice(0, 5) ?? [];
  const totalCountry = topCountries.reduce((a, b) => a + b.value, 0);

  return (
    <section id="metrics" className="py-20 px-6 border-t border-[#E0DFDA]">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Label */}
        <div>
          <span className="text-xs font-medium tracking-widest uppercase text-[#737373]">
            Audience Metrics
          </span>
          <p className="text-xs text-[#737373] mt-2 leading-relaxed">
            Live data from Instagram. Updated each page load.
          </p>
        </div>

        {/* Content */}
        <div className="sm:col-span-2 space-y-8">
          {loading && (
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-10 bg-[#E0DFDA] rounded animate-pulse" />
              ))}
            </div>
          )}

          {error && (
            <div className="text-sm text-[#737373] bg-[#EEEEE9] rounded-lg p-4">
              <p className="font-medium text-[#1C1C1C] mb-1">Metrics unavailable</p>
              <p>{error}</p>
            </div>
          )}

          {data && (
            <>
              {/* Top-line stats */}
              <div className="grid grid-cols-2 gap-4">
                {topStats.map((s) => (
                  <div key={s.label} className="bg-[#EEEEE9] rounded-xl p-4 space-y-1">
                    <p className="text-2xl font-semibold text-[#1C1C1C]">{s.value}</p>
                    <p className="text-xs text-[#737373]">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Gender breakdown */}
              {totalGender > 0 && (
                <div className="space-y-3">
                  <p className="text-sm font-medium text-[#1C1C1C]">Gender</p>
                  <div className="flex rounded-full overflow-hidden h-2">
                    {Object.entries(genderMap).map(([gender, count], i) => (
                      <div
                        key={gender}
                        style={{ width: `${(count / totalGender) * 100}%`, background: i === 0 ? "#1C1C1C" : "#A0A09A" }}
                      />
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {Object.entries(genderMap).map(([gender, count], i) => (
                      <div key={gender} className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: i === 0 ? "#1C1C1C" : "#A0A09A" }} />
                        <span className="text-xs text-[#737373]">
                          {gender} · {((count / totalGender) * 100).toFixed(0)}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Age breakdown */}
              {topAges.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-[#1C1C1C]">Age Groups</p>
                  {topAges.map(([age, count]) => (
                    <div key={age} className="flex items-center gap-3">
                      <span className="w-14 text-xs text-[#737373] flex-shrink-0">{age}</span>
                      <div className="flex-1 bg-[#E0DFDA] rounded-full h-1.5">
                        <div
                          className="bg-[#1C1C1C] h-1.5 rounded-full"
                          style={{ width: `${(count / totalAge) * 100}%` }}
                        />
                      </div>
                      <span className="w-10 text-xs text-right text-[#737373]">
                        {((count / totalAge) * 100).toFixed(0)}%
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Top countries */}
              {topCountries.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-[#1C1C1C]">Top Countries</p>
                  {topCountries.map((c) => (
                    <div key={c.dimension_values[0]} className="flex items-center gap-3">
                      <span className="w-14 text-xs text-[#737373] flex-shrink-0 uppercase">
                        {c.dimension_values[0]}
                      </span>
                      <div className="flex-1 bg-[#E0DFDA] rounded-full h-1.5">
                        <div
                          className="bg-[#1C1C1C] h-1.5 rounded-full"
                          style={{ width: `${(c.value / totalCountry) * 100}%` }}
                        />
                      </div>
                      <span className="w-10 text-xs text-right text-[#737373]">
                        {((c.value / totalCountry) * 100).toFixed(0)}%
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
