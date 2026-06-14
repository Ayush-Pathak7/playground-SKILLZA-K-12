const steps = [
  {
    number: '01',
    numColor: 'text-[#93C5FD]',
    iconBg: 'bg-[#DBEAFE]',
    iconColor: 'text-[#3B82F6]',
    cardBg: 'bg-[#EFF6FF]',
    border: 'border-[#BFDBFE]',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    title: 'Pick an Agent',
    desc: 'Browse 12+ prebuilt AI agents across creativity, academics, science, wellness, and more. Each one has a clear purpose and personality.',
  },
  {
    number: '02',
    numColor: 'text-[#C4B5FD]',
    iconBg: 'bg-[#EDE9FE]',
    iconColor: 'text-brand-purple',
    cardBg: 'bg-[#F5F3FF]',
    border: 'border-[#DDD6FE]',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: 'Customise It',
    desc: 'Give your agent a name, tweak how it talks, choose its knowledge focus, and add your own twist – all through simple sliders and prompts.',
  },
  {
    number: '03',
    numColor: 'text-[#86EFAC]',
    iconBg: 'bg-[#DCFCE7]',
    iconColor: 'text-[#22C55E]',
    cardBg: 'bg-[#F0FDF4]',
    border: 'border-[#BBF7D0]',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Build & Test',
    desc: 'Chat with your agent, test how it responds, and refine it until it feels right. Every iteration teaches prompt-thinking and AI logic.',
  },
  {
    number: '04',
    numColor: 'text-[#FCD34D]',
    iconBg: 'bg-[#FEF3C7]',
    iconColor: 'text-[#F59E0B]',
    cardBg: 'bg-[#FFFBEB]',
    border: 'border-[#FDE68A]',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    title: 'Share & Showcase',
    desc: 'Share your creation with friends and classmates, get feedback, or showcase it at the annual Skillizza AI Showcase.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-main">
        <div className="text-center mb-12 lg:mb-14">
          <span className="inline-block bg-[#EFF6FF] text-[#3B82F6] text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="text-[32px] lg:text-[38px] font-extrabold text-[#111827] mt-5 leading-tight">
            From Curiosity to Creation in{' '}
            <span className="text-brand-purple">4 Steps</span>
          </h2>
        </div>

        <div className="relative">
          {/* Dotted connector line */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] border-t-2 border-dashed border-[#D1D5DB]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`${step.cardBg} border ${step.border} rounded-2xl p-6 relative`}
              >
                <div className="flex justify-between items-start mb-5">
                  <div className={`w-12 h-12 ${step.iconBg} ${step.iconColor} rounded-xl flex items-center justify-center`}>
                    {step.icon}
                  </div>
                  <span className={`text-[28px] font-extrabold ${step.numColor} leading-none`}>
                    {step.number}
                  </span>
                </div>
                <h3 className="text-[17px] font-bold text-[#111827] mb-2">{step.title}</h3>
                <p className="text-[#6B7280] text-[13px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
