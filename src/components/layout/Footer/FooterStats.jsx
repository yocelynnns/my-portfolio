import React from "react";

export default function FooterStats({ stats }) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8" data-aos="fade-up">
      {stats.map((stat, index) => (
        <div 
          key={stat.label}
          className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          data-aos="zoom-in"
          data-aos-delay={index * 100}
        >
          <div className="text-2xl font-bold text-transparent bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text">
            {stat.number}
          </div>
          <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}