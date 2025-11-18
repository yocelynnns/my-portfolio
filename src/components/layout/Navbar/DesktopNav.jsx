import React from 'react';

export default function DesktopNav({ navItems, activeSection, onNavClick }) {
  return (
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
            onClick={onNavClick}
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
  );
}