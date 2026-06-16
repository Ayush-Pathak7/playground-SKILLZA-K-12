const infoCards = [
  {
    label: 'FOR AGES',
    value: 'Grades 5-12',
    labelColor: 'text-brand-purple',
    iconBg: 'bg-[#EDE9FE]',
    icon: (
      <svg className="w-[18px] h-[18px] text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'SKILL LEVEL',
    value: 'Zero to Creative',
    labelColor: 'text-[#14B8A6]',
    iconBg: 'bg-[#CCFBF1]',
    icon: (
      <svg className="w-[18px] h-[18px] text-[#14B8A6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
      </svg>
    ),
  },
  {
    label: 'TIME TO FIRST AGENT',
    value: 'Under 10 Minutes',
    labelColor: 'text-[#F59E0B]',
    iconBg: 'bg-[#FEF3C7]',
    icon: (
      <svg className="w-[18px] h-[18px] text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function WhatIsSection() {
  return (
    <section className="bg-white py-8 sm:py-10 lg:py-14">
      <div className="container-main">
        <div className="bg-[#FAFAFA] border border-[#EBEBEB] rounded-2xl sm:rounded-[20px] shadow-[0_2px_20px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row items-center">
          <div className="relative w-full lg:w-[42%] flex-shrink-0 h-[220px] sm:h-[280px] lg:h-[380px] overflow-hidden bg-[#FAFAFA] flex items-end justify-center">
            <img
              src="/what-is-student.png"
              alt="Student using laptop in AI Playground"
              className="h-full w-auto max-w-[80%] sm:max-w-none object-contain object-bottom"
            />
          </div>

          <div className="flex-1 px-5 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10 flex flex-col justify-center w-full">
            <h2 className="section-heading text-[#111827] mb-4 sm:mb-5 text-center lg:text-left">
              What is an{' '}
              <span className="text-brand-purple">AI Playground?</span>
            </h2>

            <p className="text-[13px] sm:text-[14px] text-[#4B5563] leading-[1.75] mb-3 sm:mb-4 text-center lg:text-left">
              Think of it as a creative workshop for AI – but without the complexity. Students explore
              a library of ready-made AI agents (mini-assistants designed for specific interests),
              customise them to their voice and style, and share what they create with friends,
              classmates, and teachers.
            </p>

            <p className="text-[13px] sm:text-[14px] text-[#4B5563] leading-[1.75] mb-6 sm:mb-8 text-center lg:text-left">
              No coding. No setup. No overwhelm. Just pick, tweak, build, share – and discover what AI
              can do when you&apos;re the one in charge.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {infoCards.map(({ label, value, labelColor, iconBg, icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 shadow-[0_1px_6px_rgba(0,0,0,0.06)]"
                >
                  <div className={`w-9 h-9 ${iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {icon}
                  </div>
                  <div>
                    <p className={`text-[10px] font-bold uppercase tracking-wide ${labelColor}`}>
                      {label}
                    </p>
                    <p className="text-[14px] font-bold text-[#1F2937] leading-tight mt-0.5">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
