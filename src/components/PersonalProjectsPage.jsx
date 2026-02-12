import FolderIcon from "./FolderIcon";
import budgrIcon from "../assets/dollar.png";
import { useState } from "react";
import ProjectDetailModal from "./ProjectDetailModal";
import { personalProjects, schoolProjects } from "../projects.js";

export default function PersonalProjectsPage({ onOpenProjectDetails }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showSelectedProject, setShowSelectedProject] = useState(false);

  

  
  const handleCloseProject = () => setSelectedProject(null);

  return (
    <div className="projects-body">
      <div className="projects-grid">
        {personalProjects.map((project, index) => (
          <FolderIcon
            key={index}
            name={project.name}
            imageUrl={project.icon}
            onDoubleClick={() => onOpenProjectDetails(project)}
          />
        ))}
      </div>

      
      
    </div>
  );
}
