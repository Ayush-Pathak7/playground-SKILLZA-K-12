const buttons = [
  'START BUILDING FREE',
  'WATCH THE 2-MIN DEMO',
  'BOOK A SCHOOL DEMO',
];

const sparkles = [
  { top: '12%', left: '8%', delay: '0s' },
  { top: '22%', right: '12%', delay: '0.8s' },
  { bottom: '18%', left: '15%', delay: '1.6s' },
  { bottom: '28%', right: '8%', delay: '2.2s' },
  { top: '45%', left: '45%', delay: '1s' },
];

function RobotIllustration() {
  return (
    <svg viewBox="0 0 160 200" fill="none" className="w-full max-w-[140px] lg:max-w-[160px] mx-auto" aria-hidden="true">
      <ellipse cx="80" cy="195" rx="50" ry="8" fill="#1e3a8a" opacity="0.4" />
      <rect x="55" y="130" width="50" height="55" rx="12" fill="#E8EAF6" />
      <rect x="62" y="138" width="36" height="28" rx="6" fill="#1e1b4b" />
      <circle cx="72" cy="152" r="5" fill="#60a5fa" className="animate-pulse" />
      <circle cx="88" cy="152" r="5" fill="#60a5fa" className="animate-pulse" />
      <path d="M70 162 Q80 168 90 162" stroke="#60a5fa" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="48" y="145" width="14" height="28" rx="7" fill="#E8EAF6" />
      <rect x="98" y="145" width="14" height="28" rx="7" fill="#E8EAF6" />
      <circle cx="55" cy="135" r="10" fill="#8b5cf6" opacity="0.8" />
      <circle cx="105" cy="135" r="10" fill="#8b5cf6" opacity="0.8" />
      <rect x="50" y="70" width="60" height="65" rx="20" fill="#f8fafc" />
      <rect x="58" y="82" width="44" height="38" rx="10" fill="#1e1b4b" />
      <circle cx="72" cy="98" r="6" fill="#60a5fa" />
      <circle cx="88" cy="98" r="6" fill="#60a5fa" />
      <path d="M72 110 Q80 116 88 110" stroke="#60a5fa" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function SideIcons() {
  const icons = [
    { color: 'bg-amber-400', content: '🏆' },
    { color: 'bg-violet-500', content: '< />', isCode: true },
    { color: 'bg-indigo-500', content: '💼' },
  ];

  return (
    <div className="flex flex-col items-center gap-5" style={{ perspective: '600px' }}>
      {icons.map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div
            className={`cta-icon-3d cta-icon-3d-delay-${i} w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-white ${item.isCode ? 'text-xs font-bold tracking-tighter' : 'text-lg'}`}
          >
            {item.content}
          </div>
          {i < icons.length - 1 && (
            <div className="w-px h-5 border-l-2 border-dashed border-violet-400/40" />
          )}
        </div>
      ))}
    </div>
  );
}

export default function CTASection() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container-main cta-scene">
        <div className="cta-banner-inner relative rounded-[20px] overflow-hidden shadow-[0_24px_60px_rgba(5,19,54,0.35)]">
          {/* Background gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #0c1a4a 0%, #051336 50%, #0a1040 100%)',
            }}
          />

          {/* Ambient glow orbs */}
          <div className="cta-glow-orb absolute -top-16 -left-16 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="cta-glow-orb absolute -bottom-12 -right-12 w-40 h-40 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" style={{ animationDelay: '2s' }} />

          {/* Sparkles */}
          {sparkles.map((s, i) => (
            <span
              key={i}
              className="cta-sparkle absolute text-white/40 text-sm pointer-events-none select-none"
              style={{ top: s.top, left: s.left, right: s.right, bottom: s.bottom, animationDelay: s.delay }}
            >
              ✦
            </span>
          ))}

          {/* Content grid */}
          <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr_100px] xl:grid-cols-[180px_1fr_120px] gap-10 lg:gap-8 items-center">

              {/* Left — robot */}
              <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
                <div className="cta-robot-wrap">
                  <RobotIllustration />
                </div>
              </div>

              {/* Centre — content */}
              <div className="order-1 lg:order-2 text-center" style={{ transform: 'translateZ(20px)' }}>
                <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold text-white leading-tight">
                  Ready to Build Your
                  <br />
                  <span className="cta-gold-text">First AI Agent?</span>
                </h2>

                <p className="text-white/60 text-[14px] italic mt-4 mb-8 leading-relaxed max-w-[480px] mx-auto">
                  Start free. No credit card. No setup. Just curiosity, a name, and an idea.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                  {buttons.map((label) => (
                    <button key={label} type="button" className="cta-btn-3d bg-[#0f2048] border border-[#1e3a6e] text-[#FBBF24] px-5 py-2.5 rounded-lg font-bold text-[11px] uppercase tracking-wide">
                      {label}
                    </button>
                  ))}
                </div>

                <p className="mt-8 text-white/40 text-[12px]">
                  playground@skillzza.com&nbsp;&nbsp;|&nbsp;&nbsp;www.skillzza.com/playground
                </p>
              </div>

              {/* Right — icons */}
              <div className="order-3 hidden lg:flex justify-center lg:justify-start">
                <SideIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
