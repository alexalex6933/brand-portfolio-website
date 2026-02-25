export default function About() {
  return (
    <section id="about" className="py-20 px-6 border-t border-[#E0DFDA]">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Label */}
        <div>
          <span className="text-xs font-medium tracking-widest uppercase text-[#737373]">
            About
          </span>
        </div>

        {/* Content */}
        <div className="sm:col-span-2 space-y-6">
          <p className="text-base text-[#1C1C1C] leading-relaxed">
            {/* Replace with your actual bio */}
            Hey, I'm [Your Name] — a content creator based in [City]. I create
            [describe your content, e.g., "lifestyle and travel content"] for an
            audience of engaged followers across Instagram, TikTok, and YouTube.
          </p>
          <p className="text-base text-[#737373] leading-relaxed">
            {/* Replace with your mission / what you offer to brands */}
            I partner with brands that align with my values to create authentic
            content that actually converts. My audience trusts my recommendations,
            and I only work with products I believe in.
          </p>

          {/* Values / pillars */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { label: "Authenticity", desc: "Real stories, real impact" },
              { label: "Creativity", desc: "Unique, scroll-stopping content" },
              { label: "Results", desc: "Measurable brand outcomes" },
            ].map((v) => (
              <div key={v.label} className="space-y-1">
                <p className="text-sm font-medium text-[#1C1C1C]">{v.label}</p>
                <p className="text-xs text-[#737373] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
