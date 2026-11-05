import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import brandLogo from '../assets/brand-buzzers-logo.png';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'FAQs', href: '#faq' },
];

export default function Navbar({
  onBookCall = () => { },
  activeItem = 'Home',
  customLinks = NAV_ITEMS,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentActive, setCurrentActive] = useState(activeItem);

  const handleNavClick = (name, href) => {
    setCurrentActive(name);
    setMobileMenuOpen(false);

    if (href.startsWith('#')) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center bg-[#050505] border-b border-[#1a1a1a]">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">

        {/* Left: Brand Signature Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick('Home', '#home')}
          className="group flex items-center transition-opacity duration-200 hover:opacity-80 focus:outline-none"
          aria-label="Brand Buzzers Home"
        >
          <img
            src={brandLogo}
            alt="Brand Buzzers"
            className="h-9 sm:h-10 w-auto object-contain transition-opacity duration-200"
          />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {customLinks.map((item) => {
            const isActive = currentActive === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name, item.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 relative py-1 ${isActive
                    ? 'text-white font-semibold'
                    : 'text-neutral-400 hover:text-white'
                  }`}
              >
                {item.name}

                {/* Subtle active neon accent indicator dot */}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#CCFF00] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Book A Call Button */}
        <div className="hidden md:flex items-center">
          <button
            type="button"
            onClick={onBookCall}
            className="group relative inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#CCFF00] text-black hover:bg-[#bbf438] active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(204,255,0,0.35)] hover:shadow-[0_0_25px_rgba(204,255,0,0.55)] cursor-pointer"
          >
            <span>BOOK A CALL</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#CCFF00]" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 transition-all duration-300 ease-in-out overflow-hidden border-b border-[#222222] bg-[#050505]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] ${mobileMenuOpen
            ? 'max-h-96 opacity-100 py-6 px-6'
            : 'max-h-0 opacity-0 py-0 px-6 border-transparent pointer-events-none'
          }`}
      >
        <div className="flex flex-col gap-3">
          {customLinks.map((item) => {
            const isActive = currentActive === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name, item.href)}
                className={`flex items-center justify-between text-base font-medium py-2.5 px-4 rounded-xl transition-all ${isActive
                    ? 'text-[#CCFF00] bg-neutral-900 font-semibold'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-900/50'
                  }`}
              >
                <span>{item.name}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
                )}
              </a>
            );
          })}

          <div className="pt-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookCall();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-[#CCFF00] text-black hover:bg-[#bbf438] active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(204,255,0,0.35)]"
            >
              <span>BOOK A CALL</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
