import "../css/aboutme.css";
import profilePhoto from "../assets/profil.jpg";
import {useState} from "react";


export default function ContactsPage({onCloseFinder}) {

    const [selectedItem, setSelectedItem] = useState("Summary");
    const [position, setPosition] = useState({x: 80, y: 40});
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({x: 0, y: 0});

    
    const onClose = () => {
        onCloseFinder();
    }

    const handleMouseDown = (e) => {
        if (e.target.closest(".aboutme-header")) {
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

    return(
        <div className="aboutme"
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
            <div className="aboutme-header" style={{cursor: 'grab'}}>
                <div className="traffic-lights">
                    <span className="light red" style={{cursor: 'default'}} onClick={onClose}></span>
                    <span className="light yellow"></span>
                    <span className="light green"></span>
                </div>
                <div className="aboutme-title">About me</div>
            </div>
            <div className="aboutme-body">
                <div className="aboutme-sidebar">
                   
    
                <div className="sidebar-menu">
                    <div 
                    className={`sidebar-item ${selectedItem === "Summary" ? "active" : ""}`}
                    onClick={() => setSelectedItem("Summary")}
                    >
                        Summary
                    </div>
                    
                </div>
                </div>
                <div className="aboutme-content">
                     <div className="profile-section">
                        <img src={profilePhoto} alt="Profile" className="profile-photo" />
                        <h3 className="profile-name">Dalma Greksza</h3>
                        <p className="profile-title">Software Engineer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}