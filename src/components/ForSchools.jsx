const features = [
  {
    iconBg: 'bg-[#DBEAFE]',
    iconColor: 'text-[#3B82F6]',
    cardBg: 'bg-[#EFF6FF]',
    accent: 'bg-[#3B82F6]',
    title: 'Teacher Admin Dashboard',
    desc: 'Cohort-level visibility, engagement analytics, and the ability to curate which agents are available during class time.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    iconBg: 'bg-[#EDE9FE]',
    iconColor: 'text-brand-purple',
    cardBg: 'bg-[#F5F3FF]',
    accent: 'bg-brand-purple',
    title: 'Lesson Plan Library',
    desc: 'Ready-to-use lesson plans mapping each prebuilt agent to specific curriculum outcomes across subjects.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    iconBg: 'bg-[#DCFCE7]',
    iconColor: 'text-[#22C55E]',
    cardBg: 'bg-[#F0FDF4]',
    accent: 'bg-[#22C55E]',
    title: 'Classroom Competitions',
    desc: "Pre-designed creative challenges – 'Build the Best Story Weaver', 'Design a Wellness Agent' – ready to run in class.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    iconBg: 'bg-[#FEF3C7]',
    iconColor: 'text-[#F59E0B]',
    cardBg: 'bg-[#FFFBEB]',
    accent: 'bg-[#F59E0B]',
    title: 'Integration With Studios',
    desc: 'Students use Playground agents to warm up before diving into deeper Skill Studios – creating a seamless learning flow.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
];

export default function ForSchools() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-main">
        <div className="text-center mb-12 lg:mb-14">
          <h2 className="text-[32px] lg:text-[38px] font-extrabold text-[#111827] leading-tight">
            For <span className="text-brand-purple">Schools & Educators</span>
          </h2>
          <p className="text-[#6B7280] text-[14px] mt-5 max-w-[680px] mx-auto leading-relaxed">
            Bring AI Playground into your classroom as a structured, moderated learning tool – not a black-box
            toy. Perfect for AI clubs, computer labs, creative writing periods, and cross-disciplinary projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {features.map((f) => (
            <div key={f.title} className={`${f.cardBg} rounded-2xl p-7 relative overflow-hidden`}>
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 ${f.iconBg} ${f.iconColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-[19px] font-extrabold text-[#111827] mb-2">{f.title}</h3>
                  <p className="text-[#6B7280] text-[13px] leading-relaxed">{f.desc}</p>
                </div>
              </div>
              <div className={`absolute bottom-0 left-0 right-0 h-[4px] ${f.accent}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
