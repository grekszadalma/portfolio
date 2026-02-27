import "../css/aboutme.css";
import profilePhoto from "../assets/profil.jpg";
import {useState} from "react";
import Summary from "../components/Summary";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Interests from "../components/Interests";
import { useLanguage } from "../contexts/LanguageContext";

export default function AboutMePage({onCloseFinder}) {

    const { t } = useLanguage();

    const [selectedItem, setSelectedItem] = useState("Summary");
   
    const [position, setPosition] = useState({x: 80, y: 40});
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({x: 0, y: 0});
    const [isMaximized, setIsMaximized] = useState(false);
    const [prevPosition, setPrevPosition] = useState({ x: 80, y: 40 });

    const renderContent = () => {
        switch (selectedItem) {
            case "Summary":

                return <Summary />

            case "Work experience":

                return <Experience/>

            case "Education":

                return <Education />
                
            case "Skills":

                return <Skills />
                
            case "Interests":

                return <Interests />
                
        }
    }

    const onClose = () => {
        onCloseFinder();
    }

    const handleMouseDown = (e) => {
        if (isMaximized) return;
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

    const handleGreenClick = (e) => {
    e.stopPropagation();

    if (!isMaximized) {
        // Save current position
        setPrevPosition(position);

        // Move window to top-left and make it fill the screen
        setPosition({ x: 0, y: 0 });
        setIsMaximized(true);
    } else {
        // Restore previous position
        setPosition(prevPosition);
        setIsMaximized(false);
    }
};



    return(
        <div
        className={`aboutme ${isMaximized ? "maximized" : ""}`}
        style={
            isMaximized
            ? { transform: "none" }
            : { left: `${position.x}px`, top: `${position.y}px`, transform: "none" }
        }
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        >


            <div className="aboutme-header" onDoubleClick={handleGreenClick} style={{cursor: 'grab'}}>
                <div className="traffic-lights">
                    <span className="light red" style={{cursor: 'default'}} onClick={onClose}></span>
                    <span className="light yellow"></span>
                    <span className="light green" style={{ cursor: "pointer" }}></span>
                </div>
                <div className="aboutme-title">{t('aboutMeTitle')}</div>
            </div>
            <div className="aboutme-body">
                <div className="aboutme-sidebar">
    
                <div className="sidebar-menu">
                    <div 
                    className={`sidebar-item ${selectedItem === "Summary" ? "active" : ""}`}
                    onClick={() => setSelectedItem("Summary")}
                    >
                        {t('summary')}
                    </div>
                    <div 
                    className={`sidebar-item ${selectedItem === "Work experience" ? "active" : ""}`}
                    onClick={() => setSelectedItem("Work experience")}
                    >
                        {t('workExperience')}
                    </div>
                    <div 
                    className={`sidebar-item ${selectedItem === "Education" ? "active" : ""}`}
                    onClick={() => setSelectedItem("Education")}
                    >
                        Education
                    </div>
                    <div 
                    className={`sidebar-item ${selectedItem === "Skills" ? "active" : ""}`}
                    onClick={() => setSelectedItem("Skills")}
                    >
                        Skills
                    </div>
                    <div 
                    className={`sidebar-item ${selectedItem === "Interests" ? "active" : ""}`}
                    onClick={() => setSelectedItem("Interests")}
                    >
                        Interests
                    </div>
                </div>
                </div>
                <div className="aboutme-content">
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}