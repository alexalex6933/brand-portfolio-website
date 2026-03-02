export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#1D4ED8] to-[#1a3fb5]">
      <div className="max-w-5xl mx-auto text-center space-y-8">

        {/* Headline */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Ready to reach<br className="hidden sm:block" /> my audience?
          </h2>
          <p className="text-base sm:text-lg text-blue-200 max-w-md mx-auto leading-relaxed">
            Let&apos;s create content that converts — and build a partnership your brand will want to repeat.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* CUSTOMIZE: replace with your actual email */}
          <a
            href="mailto:you@email.com"
            className="inline-flex items-center gap-2 bg-white text-[#1D4ED8] text-sm font-bold
                       px-7 py-4 rounded-full hover:bg-blue-50 active:scale-95
                       transition-all duration-200 shadow-lg shadow-blue-900/30"
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#metrics"
            className="inline-block text-sm font-semibold text-white/90 px-7 py-4 rounded-full
                       border border-white/30 hover:bg-white/10 transition-colors duration-200"
          >
            View audience data
          </a>
        </div>

        {/* Trust note */}
        <p className="text-xs text-blue-300/60">
          Usually responds within 24 hours · All partnerships are selective
        </p>

      </div>
    </section>
  );
}
