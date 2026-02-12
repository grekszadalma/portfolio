import "../css/projects.css"
import {useState} from "react";
import folderIcon from "../assets/folder.png";
import FolderIcon from "./FolderIcon";
import PersonalProjectsPage from "./PersonalProjectsPage";
import SchoolProjectsPage from "./SchoolProjectsPage";

export default function ProjectsPage({onCloseProjects, onOpenProjectDetails}) {

        const [selectedFolder, setSelectedFolder] = useState("");
        const [position, setPosition] = useState({x: 80, y: 40});
        const [isDragging, setIsDragging] = useState(false);
        const [dragStart, setDragStart] = useState({x: 0, y: 0});
    
    const onClose = () => {
            onCloseProjects();
        }
    
        const handleMouseDown = (e) => {
            if (e.target.closest(".projects-header")) {
                setIsDragging(true);
                setDragStart({
                    x: e.clientX - position.x,
                    y: e.clientY - position.y
                });
            }
        }
    
        const handleMouseMove = (e) => {
            if (isDragging) {
                setPosition({
                    x: e.clientX - dragStart.x,
                    y: e.clientY - dragStart.y
                });
            }
        }
    
        const handleMouseUp = () => {
            setIsDragging(false);
        }

        const handleOpenFolder = (folderName) => {
            setSelectedFolder(folderName);
        }

        const renderContent = () => {
            if (selectedFolder === "") {
                return (
                    <div className="projects-body">
                    <div className="projects-grid">
                    <FolderIcon 
                                    
                                    imageUrl={folderIcon} 
                                    name="School"
                                    onDoubleClick={() => handleOpenFolder("School")}
                                        
                    />
                    <FolderIcon 
                                    
                                    imageUrl={folderIcon} 
                                    name="Personal"
                                    onDoubleClick={() => handleOpenFolder("Personal")}
                                        
                    />

                    </div>
                    
                    
                
                </div>
                )
            } else if (selectedFolder === "Personal") {
                return(
                    <PersonalProjectsPage onOpenProjectDetails={onOpenProjectDetails}/>
                )
            } else if (selectedFolder === "School") {
                return(
                    <SchoolProjectsPage />
                )
            }
        }
    
        return(
            <div className="projects"
            style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'none'  // Remove the centering transform
                }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
    
            
            >
                <div className="projects-header" style={{cursor: 'grab'}}>
                    <div className="traffic-lights">
                        <span className="light red" style={{cursor: 'default'}} onClick={onClose}></span>
                        <span className="light yellow"></span>
                        <span className="light green"></span>
                    </div>
                    <div className="projects-title">Projects</div>
                </div>
                {renderContent()}
            </div>
        )

}