// components/layout/Footer.jsx - ULTIMATE ENHANCED VERSION
import React from "react";

const footerLinks = [
  { 
    icon: "🐙", 
    label: "GitHub", 
    url: "https://github.com/yocelynnns",
    description: "Check out my code"
  },
  { 
    icon: "💼", 
    label: "LinkedIn", 
    url: "https://www.linkedin.com/in/yocelyn-theona-s/",
    description: "Let's connect professionally"
  },
  { 
    icon: "📧", 
    label: "Email", 
    url: "mailto:ytheonas05@gmail.com",
    description: "Send me a message"
  },
  { 
    icon: "📱", 
    label: "Portfolio", 
    url: "#hero",
    description: "Back to top"
  }
];

const quickStats = [
  { number: "5+", label: "Projects Built" },
  { number: "1K+", label: "Lines of Code" },
  { number: "42", label: "Singapore Program" },
  { number: "∞", label: "Passion for Tech" }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-linear-to-br from-pink-500/5 via-purple-500/5 to-blue-500/5" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
      
      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Brand & Description */}
            <div className="text-center lg:text-left" data-aos="fade-right">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-10 h-10 bg-linear-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                  YT
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Yocelyn Theona</h3>
                  <p className="text-gray-600 text-sm">Software Engineering Student</p>
                </div>
              </div>
              
              <p className="text-gray-600 max-w-md text-lg">
                Building the future, one line of code at a time. 
                Passionate about creating digital experiences that matter.
              </p>
            </div>

            {/* Social Links */}
            <div className="text-center lg:text-right" data-aos="fade-left">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Let's Connect</h4>
              
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 justify-center lg:justify-end">
                {footerLinks.map((link, index) => (
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200/50 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Copyright & Made with love */}
              <div className="text-xs md:text-base flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <span>© {year} Yocelyn Theona Setiawan</span>
                  <span className="text-gray-400">•</span>
                  <span>All rights reserved</span>
                </div>
              </div>

              {/* Made with love */}
              <div 
                className="text-xs md:text-base flex items-center gap-3 text-gray-600"
              >
                <div className="flex items-center gap-2">
                  <span>Made with</span>
                  <span className="animate-pulse text-red-500">💖</span>
                  <span>and</span>
                  <span className="text-yellow-600">☕</span>
                  <span>in Singapore & Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-32 h-1 bg-linear-to-r from-pink-500 to-purple-600 rounded-full"></div>
      </div>
    </footer>
  );
}