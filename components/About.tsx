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
                Hey, I&apos;m Alexander — a Sydney-based creator focused on modern relationships,
                masculinity, and personal growth. I&apos;m also a Computer Science student, so I
                naturally share content around studying, tech, productivity, and navigating
                university life while building toward bigger goals.
              </p>
              <p className="text-base text-[#5A6B8A] leading-relaxed">
                My content speaks to young men who want to improve — in dating, discipline,
                confidence, fitness, and career. I document the journey honestly, which builds
                strong trust and engagement with my audience.
              </p>
              <p className="text-base text-[#5A6B8A] leading-relaxed">
                Beyond relationships and self-development, my hobbies and interests include
                running, lifting, coding, technology, and vlogging — making me a strong fit for
                collaborations across fitness, tech, education, productivity tools, lifestyle,
                and performance brands.
              </p>
              <p className="text-base text-[#5A6B8A] leading-relaxed">
                I partner with brands that align with growth and ambition, creating native,
                story-driven content that feels real and drives action — not just impressions.
              </p>
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
