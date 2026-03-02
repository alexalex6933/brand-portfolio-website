// CUSTOMIZE: Replace these placeholders with your actual case studies.
// For each study, update: tag, headline, brand, metric, metricLabel, desc.

const STUDIES = [
  {
    tag: "Sponsored Content",
    brand: "Brand A",
    headline: "Product Launch Campaign",
    metric: "+127%",
    metricLabel: "website traffic uplift",
    desc: "Created a 3-part Instagram series and TikTok explainer driving viewers directly to the product landing page via swipe-up links.",
  },
  {
    tag: "Brand Integration",
    brand: "Brand B",
    headline: "Viral Unboxing Series",
    metric: "500K",
    metricLabel: "views in first 48 hours",
    desc: "Authentic unboxing content integrated naturally into the regular upload schedule, achieving organic spread without paid amplification.",
  },
  {
    tag: "Long-term Partnership",
    brand: "Brand C",
    headline: "6-Month Ambassador Deal",
    metric: "3.2M",
    metricLabel: "total impressions delivered",
    desc: "Recurring monthly deliverables across YouTube and Instagram, producing 12 unique pieces of content and building sustained brand recall.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-6 bg-[#F5F9FF]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#3B82F6]">
            Past Work
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#06122B] max-w-lg leading-tight">
            Campaigns that delivered.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STUDIES.map((s) => (
            <div
              key={s.headline}
              className="group bg-white border border-[#DBEAFE] rounded-2xl p-6 space-y-4
                         hover:border-[#3B82F6] hover:shadow-xl hover:shadow-blue-100/60
                         hover:-translate-y-1.5 transition-all duration-300 cursor-default"
            >
              {/* Tag + brand */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-wider uppercase bg-[#EFF6FF] text-[#1D4ED8] px-2.5 py-1 rounded-full">
                  {s.tag}
                </span>
                <span className="text-xs text-[#5A6B8A]">{s.brand}</span>
              </div>

              {/* Headline */}
              <p className="text-base font-bold text-[#06122B] leading-snug">
                {s.headline}
              </p>

              {/* Key result */}
              <div className="pt-1 pb-2 border-t border-[#DBEAFE]">
                <p className="text-3xl font-extrabold text-[#1D4ED8] leading-none group-hover:text-[#06122B] transition-colors">
                  {s.metric}
                </p>
                <p className="text-xs text-[#5A6B8A] mt-1">{s.metricLabel}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-[#5A6B8A] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
