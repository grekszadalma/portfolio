import FolderIcon from "./FolderIcon"
import budgrIcon from "../assets/dollar.png";
import { personalProjects, schoolProjects } from "../content/projects.js";

export default function SchoolProjectsPage({onOpenProjectDetails}) {


    return(
        <div className="projects-body">
            <div className="projects-grid">
                {schoolProjects.map((project,index) => (
                    <FolderIcon 
                        key={index}
                        name={project.name}
                        imageUrl={project.icon}
                        onDoubleClick={() => onOpenProjectDetails(project)}
                    />
                ))}
            </div>
        </div>
    )
}