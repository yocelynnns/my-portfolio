import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid({ projects, onProjectClick, setActiveFilter, activeFilter }) {
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Reset showAll when filter changes
  React.useEffect(() => {
    setShowAllProjects(false);
  }, [activeFilter]);

  // Show only 5 projects for "All" category unless "More Projects" is clicked
  const displayProjects = activeFilter === "All" && !showAllProjects 
    ? projects.slice(0, 5) 
    : projects;

  if (projects.length === 0) {
    return (
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
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {displayProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              onProjectClick={onProjectClick}
            />
          ))}
        </div>
      </div>

      {/* More Projects Button for All category */}
      {activeFilter === "All" && projects.length > 5 && !showAllProjects && (
        <div className="text-center mt-12" data-aos="fade-up">
          <button
            onClick={() => setShowAllProjects(true)}
            className="px-8 py-4 bg-linear-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 mx-auto group"
          >
            <span className="text-xl">📚</span>
            Show More Projects ({projects.length - 5} more)
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      )}

      {/* Show Less Button when all projects are displayed */}
      {activeFilter === "All" && showAllProjects && (
        <div className="text-center mt-8" data-aos="fade-up">
          <button
            onClick={() => setShowAllProjects(false)}
            className="px-6 py-3 bg-white text-gray-700 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-300 flex items-center gap-2 mx-auto group"
          >
            <span className="text-lg">⬆️</span>
            Show Less
          </button>
        </div>
      )}
    </>
  );
}