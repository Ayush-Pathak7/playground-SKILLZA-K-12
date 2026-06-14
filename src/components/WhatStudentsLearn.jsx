const skills = [
  {
    number: '01',
    numColor: 'text-[#3B82F6]',
    title: 'Prompt Thinking',
    desc: 'The most future-critical skill of our time – how to ask AI clearly, specifically, and creatively to get great results.',
    bg: 'bg-[#EFF6FF]',
    accent: true,
    accentColor: 'bg-[#3B82F6]',
  },
  {
    number: '02',
    numColor: 'text-brand-purple',
    title: 'Logical Sequencing',
    desc: 'Breaking problems into steps – the foundational mindset for coding, systems thinking, and structured reasoning.',
    bg: 'bg-[#F5F3FF]',
    accent: true,
    accentColor: 'bg-brand-purple',
  },
  {
    number: '03',
    numColor: 'text-[#22C55E]',
    title: 'Creative Confidence',
    desc: 'The courage to iterate, test, fail, and refine – core to every creative and entrepreneurial endeavour.',
    bg: 'bg-[#F0FDF4]',
    accent: true,
    accentColor: 'bg-[#22C55E]',
  },
  {
    number: '04',
    numColor: 'text-[#3B82F6]',
    title: 'AI Literacy & Ethics',
    desc: 'Understanding what AI can and cannot do, its biases, and how to use it responsibly – digital citizenship in practice.',
    bg: 'bg-[#EFF6FF]',
    accent: false,
  },
  {
    number: '05',
    numColor: 'text-[#F59E0B]',
    title: 'Self-Directed Learning',
    desc: 'Curiosity-led exploration where students choose what to build and learn – the habit of lifelong learning, formed early.',
    bg: 'bg-[#FFFBEB]',
    accent: false,
  },
  {
    number: '06',
    numColor: 'text-[#3B82F6]',
    title: 'Computational Empathy',
    desc: "Understanding how machines 'think' and learning to communicate with them effectively – an essential modern skill.",
    bg: 'bg-[#EFF6FF]',
    accent: false,
  },
];

export default function WhatStudentsLearn() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-main">
        <div className="text-center mb-12 lg:mb-14">
          <h2 className="text-[32px] lg:text-[38px] font-extrabold text-[#111827] leading-tight">
            What Students Learn –{' '}
            <span className="text-brand-purple">Without Realising It</span>
          </h2>
          <p className="text-[#6B7280] mt-4 text-[14px]">
            Play is the best teacher. Here&apos;s what&apos;s happening behind the fun.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.number}
              className={`${skill.bg} rounded-2xl p-6 lg:p-7 relative overflow-hidden min-h-[200px]`}
            >
              <p className={`text-[13px] font-bold ${skill.numColor} mb-3`}>{skill.number}</p>
              <h3 className="text-[20px] font-extrabold text-[#111827] mb-3">{skill.title}</h3>
              <p className="text-[#6B7280] text-[13px] leading-relaxed">{skill.desc}</p>
              {skill.accent && (
                <div className={`absolute bottom-0 left-0 right-0 h-[4px] ${skill.accentColor}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
