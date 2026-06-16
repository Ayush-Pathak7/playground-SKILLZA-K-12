const features = [
  {
    title: 'Content Moderation, Always On:',
    desc: 'Every conversation is scanned in real-time against child-safety policies – inappropriate content is blocked before it ever reaches the student.',
  },
  {
    title: 'No Personal Data Sharing:',
    desc: 'Agents never ask for real names, contact details, addresses, or personal information. Full stop.',
  },
  {
    title: 'Parent Dashboard:',
    desc: "Parents see their child's agents, conversation summaries, and time spent – complete visibility without intrusive monitoring.",
  },
  {
    title: 'Teacher-Moderated at School:',
    desc: 'When deployed in classrooms, teachers have admin-level visibility into cohort usage and student creations.',
  },
];

function CheckIcon() {
  return (
    <div className="w-6 h-6 bg-[#22C55E] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

export default function SafeByDesign() {
  return (
    <section className="bg-[#FAFAFA] py-12 sm:py-16 lg:py-20">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-10 lg:gap-16 mb-8 sm:mb-10 lg:mb-12">
          <div className="flex-1 w-full lg:max-w-[480px] text-center lg:text-left">
            <h2 className="section-heading text-[#111827] mb-3 sm:mb-4">
              Safe by Design.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Transparent by Default.
            </h2>
            <p className="text-[#6B7280] text-[13px] sm:text-[14px] mb-6 sm:mb-8 leading-relaxed">
              Because &apos;AI for kids&apos; should mean safety first – not safety eventually.
            </p>

            <div className="relative flex justify-center lg:justify-start">
              <img
                src="/safe-tablet.png"
                alt="Admin dashboard with safety shield"
                className="w-full max-w-[320px] sm:max-w-[420px] object-contain"
              />
            </div>
          </div>

          <div className="flex-1 w-full max-w-[520px] mx-auto lg:mx-0 space-y-5 sm:space-y-7 pt-0 lg:pt-2">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <CheckIcon />
                <div>
                  <p className="text-[#111827] font-bold text-[14px]">{f.title}</p>
                  <p className="text-[#6B7280] text-[14px] mt-1.5 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promise banner — full width */}
        <div className="bg-[#3B82F6] rounded-xl sm:rounded-2xl px-5 sm:px-8 py-6 sm:py-7 text-center">
          <p className="text-white font-bold text-[16px] mb-2">Our Promise to Parents</p>
          <p className="text-white/90 text-[14px] leading-relaxed max-w-[720px] mx-auto">
            If our Playground wouldn&apos;t feel right for our own children, it doesn&apos;t belong on your
            child&apos;s screen. Every design decision is made with that filter first.
          </p>
        </div>
      </div>
    </section>
  );
}
