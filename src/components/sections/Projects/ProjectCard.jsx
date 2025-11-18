import React, { useState } from 'react';

export default function ProjectCard({ project, index, onProjectClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-gray-200 transition-all duration-700 cursor-pointer overflow-hidden flex flex-col h-full"
      data-aos="fade-up"
      data-aos-delay={index * 150}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onProjectClick(project)}
    >
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-linear-to-br from-pink-500 to-purple-600 transition-all duration-700 ${
        isHovered ? 'opacity-5' : 'opacity-0'
      }`} />
      
      {/* Project Badge */}
      <div className="relative z-10 flex-1">
        <div className="flex items-center justify-between mb-6">
          <div className={`w-14 h-14 flex items-center justify-center rounded-2xl text-white text-2xl shadow-lg transition-all duration-500 group-hover:scale-110 ${
            project.featured 
              ? 'bg-linear-to-r from-yellow-500 to-orange-500' 
              : 'bg-linear-to-r from-pink-500 to-purple-600'
          }`}>
            {project.emoji}
          </div>
          
          {project.featured && (
            <span className="px-3 py-1 bg-linear-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-md">
              ⭐ Featured
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-pink-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags?.map((tag, tagIndex) => (
            <span 
              key={tagIndex}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full border border-gray-300 group-hover:border-pink-300 group-hover:bg-pink-50 group-hover:text-pink-700 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="relative z-10 mt-auto pt-4">
        <div className="flex gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 bg-gray-900 text-white py-3 px-4 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group/link"
            >
              <span>🔗</span>
              Code
              <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 bg-linear-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group/demo"
            >
              <span>🎯</span>
              Demo
              <span className="group-hover/demo:translate-x-1 transition-transform duration-300">→</span>
            </a>
          )}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className={`absolute inset-0 border-2 border-transparent bg-linear-to-r from-pink-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-all duration-500 -z-10 ${
        isHovered ? 'scale-105' : 'scale-100'
      }`} />
    </article>
  );
}