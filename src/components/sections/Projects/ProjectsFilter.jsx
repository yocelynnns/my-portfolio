import React from 'react';
import { categories } from './Projects.constants';

export default function ProjectsFilter({ activeFilter, setActiveFilter }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
      {categories.map((category, index) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-500 flex items-center gap-2 ${
            activeFilter === category
              ? "bg-linear-to-r from-pink-500 to-purple-600 text-white shadow-lg transform scale-105"
              : "bg-white/80 text-gray-600 hover:text-gray-800 hover:bg-white hover:shadow-md border border-gray-200"
          }`}
          data-aos="zoom-in"
          data-aos-delay={index * 100}
        >
          <span>{
            category === "All" ? "🌍" :
            category === "Web Dev" ? "💻" :
            category === "Algorithms" ? "⚡" :
            category === "Games" ? "🎮" :
            category === "Full Stack" ? "🚀" :
            "🛠️"
          }</span>
          {category}
        </button>
      ))}
    </div>
  );
}