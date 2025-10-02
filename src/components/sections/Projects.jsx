import React from 'react';
import projects from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 px-6">
      <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}