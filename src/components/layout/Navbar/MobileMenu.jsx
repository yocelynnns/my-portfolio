import React from 'react';

export default function MobileMenu({ isOpen, navItems, activeSection, onNavClick, onClose }) {
  return (
    <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 transition-all duration-500 ${
      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
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
              onClick={() => {
                onNavClick();
                onClose();
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}