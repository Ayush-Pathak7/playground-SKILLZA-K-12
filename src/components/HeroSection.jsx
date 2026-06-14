const features = [
  {
    label: 'No Coded',
    sublabel: 'Needed',
    bg: 'bg-brand-blue',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    label: 'Prebuilt',
    sublabel: 'Agents',
    bg: 'bg-brand-green',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    label: 'Safe &',
    sublabel: 'Moderated',
    bg: 'bg-brand-purple',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: 'Parent',
    sublabel: 'Visible',
    bg: 'bg-brand-yellow',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto h-[480px]">
      {/* Purple glow circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, #DDD6FE 0%, #C4B5FD 40%, #EDE9FE 70%, transparent 100%)',
        }}
      />

      {/* Sparkle dots */}
      <div className="absolute top-[15%] left-[20%] w-2 h-2 bg-brand-purple-light rounded-full opacity-60" />
      <div className="absolute top-[25%] right-[15%] w-1.5 h-1.5 bg-brand-purple rounded-full opacity-40" />
      <div className="absolute bottom-[30%] left-[10%] w-1 h-1 bg-brand-purple-light rounded-full opacity-50" />

      {/* Story Weaver card */}
      <div className="absolute top-[8%] right-[0%] z-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-card p-3 flex items-start gap-2.5 w-[190px] border border-purple-100">
        <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p className="text-[12px] font-bold text-[#1F2937] leading-tight">Story Weaver</p>
          <p className="text-[10px] text-[#6B7280] leading-snug mt-0.5">
            Let&apos;s create an amazing story together! ✨
          </p>
        </div>
      </div>

      {/* Code bracket */}
      <div className="absolute left-[-2%] top-[42%] z-20 bg-brand-purple/90 backdrop-blur-sm rounded-xl p-3.5 shadow-card">
        <span className="text-white text-xl font-bold">&lt;/&gt;</span>
      </div>

      {/* Chart icon top-right */}
      <div className="absolute right-[5%] top-[38%] z-20 bg-brand-purple rounded-xl p-3 shadow-card">
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>

      {/* Bar chart card bottom-right */}
      <div className="absolute right-[0%] bottom-[18%] z-20 bg-[#1E1B4B] rounded-xl p-3 shadow-card">
        <svg className="w-10 h-8" viewBox="0 0 40 30" fill="none">
          <rect x="2" y="20" width="6" height="8" fill="#A78BFA" rx="1" />
          <rect x="12" y="12" width="6" height="16" fill="#818CF8" rx="1" />
          <rect x="22" y="6" width="6" height="22" fill="#C4B5FD" rx="1" />
          <rect x="32" y="15" width="6" height="13" fill="#7C3AED" rx="1" />
        </svg>
      </div>

      {/* Shield icon bottom-left */}
      <div className="absolute left-[5%] bottom-[22%] z-20 bg-brand-purple/80 backdrop-blur-sm rounded-xl p-2.5 shadow-card">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>

      {/* Student image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[320px] h-[400px]">
        <div className="relative w-full h-full overflow-hidden rounded-t-[160px]">
          <img
            src="/hero-student.jpg"
            alt="Student building AI agent"
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden w-full h-full bg-gradient-to-b from-brand-purple-light to-brand-purple items-end justify-center">
            <div className="text-white text-center pb-8">
              <div className="text-6xl mb-2">👨‍💻</div>
              <p className="text-sm opacity-80">AI Student</p>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop glow at bottom */}
      <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 z-20 bg-white rounded-xl p-2.5 shadow-lg">
        <svg className="w-7 h-7 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-white relative">
      <div className="container-main pt-8 lg:pt-10 pb-28 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 items-center">
          {/* Left content */}
          <div className="max-w-[560px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F3F4F6] rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-blue flex-shrink-0" />
              <span className="text-[11px] font-semibold text-brand-blue tracking-wide uppercase">
                AI Playground | Build Your First AI Agent
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-extrabold text-[#1F2937] leading-[1.1] mb-4">
              <span className="block text-[38px] lg:text-[44px]">Build Your First</span>
              <span className="flex flex-wrap items-baseline gap-x-3">
                <span className="text-brand-purple text-[52px] lg:text-[62px] leading-none">AI AGENT</span>
                <span className="text-[38px] lg:text-[44px]">in Minutes</span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-[16px] text-[#374151] font-medium mb-3">
              No coding. No complexity.{' '}
              <span className="text-brand-purple font-semibold">Just curiosity</span>
            </p>

            {/* Description */}
            <p className="text-[14px] text-[#6B7280] leading-relaxed mb-8 max-w-[480px]">
              AI Playground is a safe, plug-and-play creative space where students pick a prebuilt AI agent,
              shape it to their own interests, and bring their ideas to life – whether that&apos;s a story
              companion, a homework helper, a debate partner, or something entirely their own.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="bg-brand-purple text-white px-6 py-2.5 rounded-lg text-[14px] font-semibold hover:bg-brand-purple-dark transition-colors shadow-sm">
                Try The Playground
              </button>
              <button className="border border-brand-purple text-brand-purple px-5 py-2.5 rounded-lg text-[13px] font-semibold hover:bg-brand-purple/5 transition-colors tracking-wide">
                WATCH 2-MIN DEMO
              </button>
              <button className="border border-brand-purple text-brand-purple px-5 py-2.5 rounded-lg text-[14px] font-semibold hover:bg-brand-purple/5 transition-colors">
                For Schools
              </button>
            </div>
          </div>

          {/* Right illustration */}
          <div className="flex justify-center lg:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </div>

      {/* Feature bar — overlaps hero bottom */}
      <div className="container-main relative z-10 -mt-6 lg:-mt-10 mb-8">
        <div className="bg-[#F5F5F7] rounded-full shadow-feature px-8 lg:px-12 py-5 flex flex-wrap justify-center lg:justify-between items-center gap-y-4 gap-x-6">
          {features.map(({ label, sublabel, bg, icon }) => (
            <div key={label} className="flex items-center gap-3">
              <div className={`w-11 h-11 ${bg} rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}>
                {icon}
              </div>
              <div>
                <p className="text-[13px] font-bold text-[#1F2937] leading-tight">{label}</p>
                <p className="text-[13px] font-bold text-[#1F2937] leading-tight">{sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
