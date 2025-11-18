import React from 'react';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';
import { useNavbar } from './Navbar.hooks';
import { navItems } from '../../../data/navigation';

export default function Navbar() {
  const { scrolled, activeSection, isMobileMenuOpen, setIsMobileMenuOpen, handleNavClick } = useNavbar();

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 p-6 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo/Brand */}
          <a 
            href="#hero" 
            className="flex items-center gap-3 group"
            onClick={handleNavClick}
          >
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${
              scrolled 
                ? "bg-linear-to-r from-pink-500 to-purple-600 shadow-lg" 
                : "bg-white/80 backdrop-blur-sm border border-white/50"
            }`}>
              <span className={`font-bold transition-all duration-500 ${
                scrolled ? "text-white text-lg" : "text-gray-800 text-sm"
              }`}>
                YT
              </span>
            </div>
            {scrolled && (
              <span className="text-lg font-bold text-gray-800 hidden sm:block">
                Yocelyn
              </span>
            )}
          </a>

          <DesktopNav 
            navItems={navItems}
            activeSection={activeSection}
            onNavClick={handleNavClick}
          />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`} />
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`} />
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`} />
          </button>
        </div>

        <MobileMenu 
          isOpen={isMobileMenuOpen}
          navItems={navItems}
          activeSection={activeSection}
          onNavClick={handleNavClick}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </nav>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}