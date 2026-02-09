import FolderIcon from "./FolderIcon"
import budgrIcon from "../assets/dollar.png";


export default function SchoolProjectsPage() {

    const projects = [
        {
            name: "Database project",
            icon: budgrIcon,
            tech: ["React", "Spring Boot", "Python"]
        },
        {
            name: "Tutored project",
            icon: budgrIcon,
            tech: ["React", "Express"]
        }
    ]

    return(
        <div className="projects-body">
            <div className="projects-grid">
                {projects.map((project,index) => (
                    <FolderIcon 
                        key={index}
                        name={project.name}
                        imageUrl={project.icon}
                        onClick={() => handleOnClickProject(project)}
                    />
                ))}
            </div>
        </div>
    )
}