import React from "react";
import FooterLinks from "./FooterLinks";
// Remove this line: import FooterStats from "./FooterStats";
import { footerLinks, quickStats } from "./Footer.constants";

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

            <FooterLinks links={footerLinks} />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200/50 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Copyright */}
              <div className="text-xs md:text-base flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <span>© {year} Yocelyn Theona Setiawan</span>
                  <span className="text-gray-400">•</span>
                  <span>All rights reserved</span>
                </div>
              </div>

              {/* Made with love */}
              <div className="text-xs md:text-base flex items-center gap-3 text-gray-600">
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