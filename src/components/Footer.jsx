const socialIcons = [
  {
    label: 'LinkedIn',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'Twitter',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'YouTube',
    path: 'M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z',
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A0066] py-10 sm:py-14 lg:py-16">
      <div className="container-main">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="text-[22px] font-bold mb-4 inline-block">
              <span className="text-white">Skillzza </span>
              <span className="text-[#A78BFA]">K-12</span>
            </a>
            <p className="text-white/60 text-[13px] leading-relaxed mb-6">
              Empowering the Next Generation of AI Thinkers
            </p>
            <div className="flex items-center gap-2.5">
              {socialIcons.map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-[#2D1B69] rounded-lg flex items-center justify-center hover:bg-[#3D2B79] transition-colors"
                >
                  <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Our Presence */}
          <div>
            <h4 className="text-white font-bold text-[13px] uppercase tracking-wider mb-5">Our Presence</h4>
            <div className="mb-5">
              <p className="text-white/50 text-[11px] font-bold uppercase tracking-wide mb-1.5">India Office</p>
              <p className="text-white/60 text-[12px] leading-relaxed">
                WeWork India, Chromium, CTS No. 106/1-5,
                JPLR Road, Milind Nagar, Powai, Mumbai – 400076.
              </p>
              <p className="text-white/70 text-[12px] mt-1.5 font-semibold">+91 91369 61978</p>
            </div>
            <div>
              <p className="text-white/50 text-[11px] font-bold uppercase tracking-wide mb-1.5">UK Office</p>
              <p className="text-white/60 text-[12px] leading-relaxed">
                132 Drakes Way, Swindon, SN3 3EH, United Kingdom.
              </p>
              <p className="text-white/70 text-[12px] mt-1.5 font-semibold">+44 7500 794772</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-[13px] uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {['Vidya AI', 'Skill Studio', 'Virtual Internship', 'AI Playground'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 text-[13px] hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Audiences */}
          <div>
            <h4 className="text-white font-bold text-[13px] uppercase tracking-wider mb-5">Audiences</h4>
            <ul className="space-y-3">
              {['For Students', 'For Educators', 'For Schools', 'For Parents'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 text-[13px] hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-white/40 text-[11px] sm:text-[12px]">© 2026 Skillzza K-12. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <a key={link} href="#" className="text-white/40 text-[11px] sm:text-[12px] hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
