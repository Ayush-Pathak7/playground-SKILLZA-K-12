import { useState } from 'react';

const primaryLinks = ['Interns', 'K - 12', 'Universities', 'Companies'];

const secondaryLinks = [
  { label: 'Vidya AI', active: false },
  { label: 'Skill Studio', active: false },
  { label: 'Virtual Internship', active: false },
  { label: 'AI Playground', active: true },
  { label: 'Learners', active: false },
];

function UserIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Red primary navigation bar */}
      <div className="bg-brand-red">
        <div className="container-main flex items-center justify-between h-[52px]">
          <div className="hidden md:flex items-center gap-8">
            {primaryLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white text-[14px] font-medium hover:opacity-90 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-5">
            <a href="#" className="flex items-center gap-1.5 text-white text-[14px] font-medium hover:opacity-90 transition-opacity">
              <UserIcon />
              Log in
            </a>
            <a
              href="#"
              className="bg-white text-brand-red px-6 py-1.5 rounded-full text-[14px] font-semibold hover:bg-gray-50 transition-colors"
            >
              Sign up
            </a>
          </div>

          <button
            className="md:hidden p-2 text-white ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* White secondary navigation bar */}
      <div className="bg-white shadow-nav">
        <div className="container-main flex items-center justify-between h-[68px]">
          <a href="#" className="text-[22px] font-bold tracking-tight flex-shrink-0">
            <span className="text-[#1F2937]">SKILLZZA </span>
            <span className="text-brand-purple">K-12</span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {secondaryLinks.map(({ label, active }) => (
              <a
                key={label}
                href="#"
                className={`text-[14px] transition-colors ${
                  active
                    ? 'text-[#1F2937] font-bold'
                    : 'text-[#4B5563] font-medium hover:text-brand-purple'
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href="#"
              className="bg-brand-purple text-white px-5 py-2 rounded-md text-[14px] font-semibold hover:bg-brand-purple-dark transition-colors ml-2"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3 shadow-lg">
          {[...primaryLinks, ...secondaryLinks.map((l) => l.label)].map((item) => (
            <a key={item} href="#" className="block text-gray-700 hover:text-brand-purple font-medium py-1 text-sm">
              {item}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <a href="#" className="flex-1 text-center bg-brand-red text-white px-4 py-2 rounded-full font-semibold text-sm">
              Sign up
            </a>
            <a href="#" className="flex-1 text-center bg-brand-purple text-white px-4 py-2 rounded-md font-semibold text-sm">
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
