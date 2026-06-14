const stages = [
  {
    image: '/play-robot.png',
    label: 'EXPLORE',
    title: 'AI Playground',
    desc: 'Students discover AI through play – picking, customising, and sharing agents.',
    time: 'Time: minutes to hours.',
    glow: 'from-[#3B82F6]/40 to-[#6366F1]/20',
    ring: 'ring-[#6366F1]/50',
  },
  {
    image: '/play-code.png',
    label: 'LEARN',
    title: 'Skill Studios',
    desc: 'Structured studios across 15+ domains deepen the skills students started exploring in the Playground.',
    time: 'Time: weeks to months.',
    glow: 'from-[#8B5CF6]/40 to-[#A855F7]/20',
    ring: 'ring-[#8B5CF6]/50',
  },
  {
    image: '/play-briefcase.png',
    label: 'APPLY',
    title: 'Virtual Internships',
    desc: 'Students use their skills on real-world, industry-inspired projects with verifiable credentials.',
    time: 'Time: 4–6 weeks.',
    glow: 'from-[#A855F7]/40 to-[#EC4899]/20',
    ring: 'ring-[#A855F7]/50',
  },
  {
    image: '/play-trophy.png',
    label: 'LEAD',
    title: 'Fellowships & Showcases',
    desc: 'Top students become mentors, speakers, and programme ambassadors.',
    time: 'Time: year-long engagement.',
    glow: 'from-[#F59E0B]/40 to-[#EF4444]/20',
    ring: 'ring-[#F59E0B]/50',
  },
];

export default function PlayToMastery() {
  return (
    <section className="bg-[#05052D] py-16 lg:py-20">
      <div className="container-main">
        <div className="text-center mb-14 lg:mb-16">
          <h2 className="text-[32px] lg:text-[38px] font-extrabold text-white leading-tight">
            From Play to Mastery
          </h2>
          <p className="text-white/70 text-[15px] mt-3 font-medium">
            The Playground is just the beginning
          </p>
          <p className="text-white/50 text-[14px] mt-5 max-w-[680px] mx-auto leading-relaxed">
            What starts as curiosity in the Playground naturally progresses into structured learning through
            SKILLZZA K-12&apos;s full ecosystem. Every agent a student builds becomes a doorway to deeper skills.
          </p>
        </div>

        <div className="relative">
          {/* Dotted connector */}
          <div className="hidden lg:block absolute top-[70px] left-[15%] right-[15%] border-t-2 border-dotted border-[#4B5563]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {stages.map((stage) => (
              <div key={stage.title} className="flex flex-col items-center text-center">
                {/* Glowing orb */}
                <div
                  className={`w-[140px] h-[140px] rounded-full bg-gradient-to-br ${stage.glow} ring-2 ${stage.ring} flex items-center justify-center mb-5 relative z-10 shadow-[0_0_40px_rgba(99,102,241,0.3)]`}
                >
                  {stage.image ? (
                    <img src={stage.image} alt={stage.title} className="w-[80px] h-[80px] object-contain" />
                  ) : null}
                </div>

                {/* Label pill */}
                <span className="inline-flex items-center gap-1.5 bg-white rounded-full px-3 py-1 text-[10px] font-bold text-[#3B82F6] uppercase tracking-wide mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  {stage.label}
                </span>

                <h3 className="text-white font-bold text-[17px] mb-2">{stage.title}</h3>
                <p className="text-white/50 text-[12px] leading-relaxed max-w-[220px]">{stage.desc}</p>
                <p className="text-white/40 text-[12px] mt-2 font-medium">{stage.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
