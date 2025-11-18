import React from 'react';
import AboutTabs from './AboutTabs';
import AboutContent from './AboutContent';
import { useAbout } from './About.hooks';

export default function About() {
  const { activeTab, setActiveTab } = useAbout();

  return (
    <section id="about" className="py-20 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <AboutTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-10" />

          <AboutContent activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
}