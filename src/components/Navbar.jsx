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

function MenuIcon({ open }) {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Red primary navigation bar */}
      <div className="bg-brand-red">
        <div className="container-main flex items-center justify-between h-[48px] sm:h-[52px]">
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {primaryLinks.map((link) => (
              <a key={link} href="#" className="text-white text-[14px] font-medium hover:opacity-90 transition-opacity">
                {link}
              </a>
            ))}
          </div>

          {/* Mobile logo on red bar */}
          <a href="#" className="md:hidden text-[18px] font-bold tracking-tight">
            <span className="text-white">SKILLZZA </span>
            <span className="text-white/80">K-12</span>
          </a>

          <div className="hidden md:flex items-center gap-5">
            <a href="#" className="flex items-center gap-1.5 text-white text-[14px] font-medium hover:opacity-90 transition-opacity">
              <UserIcon />
              Log in
            </a>
            <a href="#" className="bg-white text-brand-red px-5 lg:px-6 py-1.5 rounded-full text-[14px] font-semibold hover:bg-gray-50 transition-colors">
              Sign up
            </a>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {/* White secondary navigation bar */}
      <div className="bg-white shadow-nav">
        <div className="container-main flex items-center justify-between h-[56px] sm:h-[68px]">
          <a href="#" className="hidden md:block text-[20px] lg:text-[22px] font-bold tracking-tight flex-shrink-0">
            <span className="text-[#1F2937]">SKILLZZA </span>
            <span className="text-brand-purple">K-12</span>
          </a>

          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {secondaryLinks.map(({ label, active }) => (
              <a
                key={label}
                href="#"
                className={`text-[14px] transition-colors whitespace-nowrap ${
                  active ? 'text-[#1F2937] font-bold' : 'text-[#4B5563] font-medium hover:text-brand-purple'
                }`}
              >
                {label}
              </a>
            ))}
            <a href="#" className="bg-brand-purple text-white px-5 py-2 rounded-md text-[14px] font-semibold hover:bg-brand-purple-dark transition-colors ml-2 whitespace-nowrap">
              Get Started
            </a>
          </div>

          {/* Tablet: show Get Started only */}
          <a href="#" className="hidden md:flex lg:hidden bg-brand-purple text-white px-4 py-2 rounded-md text-[13px] font-semibold hover:bg-brand-purple-dark transition-colors ml-auto">
            Get Started
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="container-main py-4 space-y-1">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-1 pt-1 pb-2">Browse</p>
            {primaryLinks.map((item) => (
              <a key={item} href="#" className="block text-gray-700 hover:text-brand-purple font-medium py-2.5 px-1 text-[15px] border-b border-gray-50">
                {item}
              </a>
            ))}
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-1 pt-4 pb-2">Products</p>
            {secondaryLinks.map(({ label, active }) => (
              <a
                key={label}
                href="#"
                className={`block py-2.5 px-1 text-[15px] border-b border-gray-50 ${active ? 'text-brand-purple font-bold' : 'text-gray-700 hover:text-brand-purple font-medium'}`}
              >
                {label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a href="#" className="flex items-center justify-center gap-2 text-gray-700 font-medium py-2 text-[15px]">
                <UserIcon />
                Log in
              </a>
              <a href="#" className="text-center bg-brand-red text-white px-4 py-3 rounded-full font-semibold text-[14px]">
                Sign up
              </a>
              <a href="#" className="text-center bg-brand-purple text-white px-4 py-3 rounded-md font-semibold text-[14px]">
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
