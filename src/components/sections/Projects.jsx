// components/sections/Projects.jsx - ULTIMATE ENHANCED VERSION
import React, { useState } from "react";
import projects from "../../data/projects";

// Enhanced projects data with more details
const enhancedProjects = projects.map(project => ({
  ...project,
  tags: project.tags || ["React", "JavaScript", "Tailwind"],
  featured: project.featured || false
}));

const categories = ["All", "Web Dev", "Algorithms", "Games", "Full Stack", "Tools"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === "All" 
    ? enhancedProjects 
    : enhancedProjects.filter(project => 
        project.tags?.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
    <section id="projects" className="py-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-linear-to-br from-pink-50 via-white to-purple-50 -z-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto w-full px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills, creativity, and passion for building 
            innovative digital solutions
          </p>
        </div>

        {/* Filter Tabs */}
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

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20" data-aos="fade-up">
              <div className="text-6xl mb-4">😢</div>
              <p className="text-xl text-gray-500">No projects found in this category.</p>
              <button 
                onClick={() => setActiveFilter("All")}
                className="mt-4 px-6 py-3 bg-linear-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Show All Projects
              </button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={index} 
                  project={project} 
                  index={index}
                  onProjectClick={setSelectedProject}
                />
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
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
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}

// Enhanced Project Card Component
function ProjectCard({ project, index, onProjectClick }) {
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

      {/* Action Buttons - ALIGNED TO BOTTOM */}
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

// Project Modal Component
function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div 
        className="bg-white/90 backdrop-blur-lg rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 transform scale-95 animate-scaleIn"
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
                  <span className="px-3 py-1 bg-linear-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full">
                    ⭐ Featured Project
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-300"
            >
              ✕
            </button>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-linear-to-r from-pink-50 to-purple-50 text-pink-700 font-medium rounded-xl border border-pink-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-900 text-white py-4 px-6 rounded-2xl font-semibold text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <span>📁</span>
                  View Source Code
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-linear-to-r from-pink-500 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <span>🌐</span>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}