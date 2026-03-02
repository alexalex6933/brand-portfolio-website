// CUSTOMIZE: Replace these with real testimonials from brand partners.
// For each: quote, name, title, company, initials (for avatar).

const QUOTES = [
  {
    quote:
      "Working with Alexander was seamless from brief to delivery. The content exceeded our engagement benchmarks and drove a measurable uplift in conversions.",
    name: "Sarah M.",
    title: "Brand Partnerships Manager",
    company: "Brand A",
    initials: "SM",
  },
  {
    quote:
      "Authentic, professional, and results-driven. Our campaign reached 500K views in under 48 hours. We\u2019ve already booked a follow-up partnership.",
    name: "James T.",
    title: "Head of Growth",
    company: "Brand B",
    initials: "JT",
  },
  {
    quote:
      "Rare to find a creator who genuinely understands brand objectives. Our 6-month ambassador deal delivered 3.2M impressions and strong brand recall.",
    name: "Priya K.",
    title: "Marketing Director",
    company: "Brand C",
    initials: "PK",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#3B82F6]">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#06122B] max-w-lg leading-tight">
            What brands say.
          </h2>
        </div>

        {/* Quotes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {QUOTES.map((q) => (
            <div
              key={q.name}
              className="group bg-[#F5F9FF] border border-[#DBEAFE] rounded-2xl p-6 space-y-5
                         hover:border-[#3B82F6] hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100/50
                         transition-all duration-300 cursor-default"
            >
              {/* Large quotation mark */}
              <span
                className="block text-5xl font-extrabold leading-none text-[#BFDBFE] group-hover:text-[#3B82F6] transition-colors select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote */}
              <p className="text-sm text-[#06122B] leading-relaxed -mt-3">
                {q.quote}
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#DBEAFE]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-white">{q.initials}</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#06122B]">{q.name}</p>
                  <p className="text-xs text-[#5A6B8A]">{q.title}, {q.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
