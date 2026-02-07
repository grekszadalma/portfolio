import "../css/aboutme.css";
import profilePhoto from "../assets/profil.jpg";
import {useState} from "react";
import Summary from "../components/Summary";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Interests from "../components/Interests";

export default function AboutMePage({onCloseFinder}) {

    const [selectedItem, setSelectedItem] = useState("Summary");

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

    return(
        <div className="aboutme">
            <div className="aboutme-header">
                <div className="traffic-lights">
                    <span className="light red" onClick={onClose}></span>
                    <span className="light yellow"></span>
                    <span className="light green"></span>
                </div>
                <div className="aboutme-title">About me</div>
            </div>
            <div className="aboutme-body">
                <div className="aboutme-sidebar">
                    <div className="profile-section">
                        <img src={profilePhoto} alt="Profile" className="profile-photo" />
                        <h3 className="profile-name">Dalma Greksza</h3>
                        <p className="profile-title">Software Engineer</p>
                    </div>
    
                <div className="sidebar-menu">
                    <div 
                    className={`sidebar-item ${selectedItem === "Summary" ? "active" : ""}`}
                    onClick={() => setSelectedItem("Summary")}
                    >
                        Summary
                    </div>
                    <div 
                    className={`sidebar-item ${selectedItem === "Work experience" ? "active" : ""}`}
                    onClick={() => setSelectedItem("Work experience")}
                    >
                        Work experience
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