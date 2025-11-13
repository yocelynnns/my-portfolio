// components/layout/Navbar.jsx - ENHANCED VERSION
import React, { useState, useEffect } from "react";

const navItems = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Enhanced IntersectionObserver with better performance
    const sections = navItems.map((item) => 
      document.getElementById(item === "Home" ? "hero" : item.toLowerCase())
    );
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.id === "hero" ? "Home" : 
                              entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1);
            setActiveSection(sectionName);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -70% 0px', // Better detection for fixed nav
        threshold: 0,
      }
    );
    
    sections.forEach((sec) => sec && observer.observe(sec));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((sec) => sec && observer.unobserve(sec));
    };
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 p-6 transition-all duration-500 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo/Brand - Added for better UX */}
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

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item === "Home" ? "hero" : item.toLowerCase()}`}
                  className={`relative transition-all duration-500 group py-2 ${
                    activeSection === item 
                      ? "text-transparent bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text font-semibold" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={handleNavClick}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-pink-500 to-purple-600 transition-all duration-500 group-hover:w-full ${
                      activeSection === item ? "w-full" : ""
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

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

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}>
          <ul className="p-6 space-y-4">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item === "Home" ? "hero" : item.toLowerCase()}`}
                  className={`block py-3 px-4 rounded-2xl transition-all duration-300 font-medium ${
                    activeSection === item
                      ? "bg-linear-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                  onClick={handleNavClick}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
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