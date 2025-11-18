import React from 'react';

export default function ProjectsCTA() {
  return (
    <div className="text-center mt-20" data-aos="fade-up">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Want to see more?
        </h3>
        <p className="text-gray-600 mb-6 text-lg">
          Check out my GitHub for all my projects, contributions, and open-source work!
        </p>
        <a
          href="https://github.com/yocelynnns"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <span className="text-2xl">🐙</span>
          Visit My GitHub
        </a>
      </div>
    </div>
  );
}