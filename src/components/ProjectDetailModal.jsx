import { useState } from "react";
import "../css/projectdetails.css";

export default function ProjectDetailModal({ project, onClose }) {
    const [position, setPosition] = useState({ x: 200, y: 120 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        if (e.target.closest(".project-header")) {
            setIsDragging(true);
            setDragStart({
                x: e.clientX - position.x,
                y: e.clientY - position.y
            });
        }
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            className="project-modal"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div className="project-header" style={{ cursor: isDragging ? 'grabbing' : 'grab' }}>
                <div className="traffic-lights">
                    <span className="light red" style={{cursor: 'default'}}onClick={onClose}></span>
                    <span className="light yellow"></span>
                    <span className="light green"></span>
                </div>
                <div className="project-title">{project.name}</div>
            </div>

            <div className="project-body">

                <div className="project-section">
                    <span className="project-label">Description:</span>
                    <p className="project-description">{project.description}</p>
                </div>

                <div className="project-section">
                    <span className="project-label">Type:</span>
                    <span className="project-value">{project.type}</span>
                </div>

                {project.duration && (
                    <div className="project-section">
                        <span className="project-label">Duration:</span>
                        <span className="project-value">{project.duration}</span>
                    </div>
                )}

                {project.teamSize && (
                    <div className="project-section">
                        <span className="project-label">Team:</span>
                        <span className="project-value">{project.teamSize} people</span>
                    </div>
                )}

                {project.role && (
                    <div className="project-section">
                        <div className="tech-stack">
                            {project.role.map((role, i) => (
                                <span key={i} className="tech-badge">{role}</span>
                            ))}
                        </div>
                    </div>
                )}

                <div className="project-section">
                    <span className="project-label">Tech Stack:</span>
                    <div className="tech-stack">
                        {project.tech.map((tech, i) => (
                            <span key={i} className="tech-badge">{tech}</span>
                        ))}
                    </div>
                </div>

                {project.details && (
                    <div className="project-section">
                        <span className="project-label">Key Features:</span>
                        <ul className="project-details">
                            {project.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
                        View on GitHub →
                    </a>
                )}
            </div>
        </div>
    );
}