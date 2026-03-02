export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#3B82F6]">
            About
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#06122B] max-w-lg leading-tight">
            The creator behind the numbers.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Bio with left blue accent */}
          <div className="flex gap-5">
            <div className="w-[3px] rounded-full bg-gradient-to-b from-[#1D4ED8] to-[#93C5FD] flex-shrink-0 self-stretch" />
            <div className="space-y-4">
              <p className="text-base text-[#06122B] leading-relaxed">
                {/* CUSTOMIZE: replace with your actual bio */}
                Hey, I&apos;m Alexander — a content creator based in [City]. I create
                [describe your niche, e.g., &quot;lifestyle and productivity content&quot;] for an
                engaged audience across Instagram, TikTok, and YouTube.
              </p>
              <p className="text-base text-[#5A6B8A] leading-relaxed">
                {/* CUSTOMIZE: replace with your partnership approach */}
                I partner exclusively with brands that align with my values to create
                authentic content that actually converts. My audience trusts my
                recommendations because I only work with products I genuinely believe in.
              </p>
            </div>
          </div>

          {/* Value pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { n: "01", label: "Authenticity", desc: "Real stories and genuine recommendations that my audience trusts." },
              { n: "02", label: "Creativity",   desc: "Scroll-stopping content crafted to engage and convert." },
              { n: "03", label: "Results",       desc: "Measurable outcomes — impressions, clicks, and conversions." },
            ].map((v) => (
              <div
                key={v.label}
                className="group bg-[#F5F9FF] border border-[#DBEAFE] rounded-2xl p-5 space-y-3
                           hover:border-[#3B82F6] hover:bg-[#EFF6FF] hover:-translate-y-1
                           transition-all duration-300 cursor-default"
              >
                <span className="block text-xs font-bold text-[#BFDBFE] group-hover:text-[#3B82F6] transition-colors">
                  {v.n}
                </span>
                <p className="text-sm font-bold text-[#06122B]">{v.label}</p>
                <p className="text-xs text-[#5A6B8A] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
