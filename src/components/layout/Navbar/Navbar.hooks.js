import { useState, useEffect } from "react";
import { navItems } from '../../../data/navigation';

export function useNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

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
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );
    
    sections.forEach((sec) => sec && observer.observe(sec));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((sec) => sec && observer.unobserve(sec));
    };
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return {
    scrolled,
    activeSection,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    handleNavClick
  };
}