import React, { useState } from 'react';
import ProjectsFilter from './ProjectsFilter';
import ProjectsGrid from './ProjectsGrid';
import ProjectsCTA from './ProjectsCTA';
import ProjectModal from './ProjectModal';
import { useProjects } from './Projects.hooks';

export default function Projects() {
  const { activeFilter, setActiveFilter, filteredProjects, selectedProject, setSelectedProject } = useProjects();
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Reset showAllProjects when filter changes
  React.useEffect(() => {
    setShowAllProjects(false);
  }, [activeFilter]);

  // Show only 5 projects for "All" category unless "More Projects" is clicked
  const displayProjects = activeFilter === "All" && !showAllProjects 
    ? filteredProjects.slice(0, 5) 
    : filteredProjects;

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

        <ProjectsFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        
        {/* Projects Grid */}
        <ProjectsGrid 
          projects={filteredProjects} 
          onProjectClick={setSelectedProject}
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
        />
        
        <ProjectsCTA />

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
}