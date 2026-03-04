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
                Hey, I&apos;m Alexander — a Sydney-based creator covering relationships,
                masculinity, and self-improvement. CS student, so I also post on tech,
                productivity, and university life.
              </p>
              <p className="text-base text-[#5A6B8A] leading-relaxed">
                My audience is young men who want to level up. I document the journey
                honestly — which drives real trust and engagement.
              </p>
              <div className="space-y-3 pt-1">
                <p className="text-xs font-bold tracking-widest uppercase text-[#3B82F6]">I&apos;d love to work with</p>
                <div className="flex flex-wrap gap-2">
                  {["Fitness", "Tech", "Productivity", "Education", "Lifestyle", "Performance", "Men's Health", "Finance"].map((tag) => (
                    <span key={tag} className="text-xs font-medium text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border border-[#DBEAFE] shadow-xl shadow-blue-100/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.JPG"
                alt="Alexander Leung"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
