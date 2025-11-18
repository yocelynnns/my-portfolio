import { useState } from "react";
import projects from "../../../data/projects";

export function useProjects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => 
        project.categories?.includes(activeFilter)
      );

  return {
    activeFilter,
    setActiveFilter,
    filteredProjects,
    selectedProject,
    setSelectedProject
  };
}