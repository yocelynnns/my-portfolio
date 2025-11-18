import React from 'react';

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div 
        className="bg-white/90 backdrop-blur-lg rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 transform scale-95 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          {/* Modal Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-linear-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-3xl">
                {project.emoji}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800">{project.title}</h3>
                {project.featured && (
                  <span className="px-3 py-1 bg-linear-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                    ⭐ Featured Project
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-300 hover:scale-110"
            >
              ✕
            </button>
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            {/* Detailed Description */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📖</span>
                Project Overview
              </h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.longDescription}
              </p>
            </div>

            {/* Key Features */}
            {project.features && (
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-gray-200">
                      <div className="w-2 h-2 bg-linear-to-r from-pink-500 to-purple-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🛠️</span>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-linear-to-r from-pink-50 to-purple-50 text-pink-700 font-medium rounded-xl border border-pink-200 hover:shadow-md transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges & Learnings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Challenges
                </h4>
                <p className="text-gray-600 bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                  {project.challenges}
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Key Learnings
                </h4>
                <p className="text-gray-600 bg-blue-50 p-4 rounded-xl border border-blue-200">
                  {project.learnings}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-900 text-white py-4 px-6 rounded-2xl font-semibold text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 group"
                >
                  <span>📁</span>
                  View Source Code
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              )}

              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-linear-to-r from-pink-500 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 group"
                >
                  <span>🌐</span>
                  Live Demo
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}