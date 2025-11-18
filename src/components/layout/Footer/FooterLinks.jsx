import React from "react";

export default function FooterLinks({ links }) {
  return (
    <div className="text-center lg:text-right" data-aos="fade-left">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">Let's Connect</h4>
      
      <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 justify-center lg:justify-end">
        {links.map((link, index) => (
          <a
            key={link.label}
            href={link.url}
            aria-label={link.label}
            target={link.url.startsWith('http') ? "_blank" : "_self"}
            rel={link.url.startsWith('http') ? "noopener noreferrer" : ""}
            className="group flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 text-gray-700 hover:text-gray-900"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
              {link.icon}
            </span>
            <div className="text-left">
              <div className="font-semibold">{link.label}</div>
              <div className="text-sm text-gray-500">{link.description}</div>
            </div>
            <span className="text-gray-400 group-hover:text-pink-500 transition-colors duration-300">
              →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}