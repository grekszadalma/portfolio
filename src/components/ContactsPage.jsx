import "../css/aboutme.css";
import "../css/contacts.css";
import profilePhoto from "../assets/profil.jpg";
import {useState} from "react";


export default function ContactsPage({onCloseContacts}) {

    const [selectedItem, setSelectedItem] = useState("Summary");
    const [position, setPosition] = useState({x: 80, y: 40});
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({x: 0, y: 0});

    
    const onClose = () => {
        onCloseContacts();
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
                <div className="aboutme-title">Contacts</div>
            </div>
            <div className="aboutme-body">
                <div className="aboutme-sidebar">
                   
    
                <div className="sidebar-menu">
                    <div 
                    className="sidebar-item active"
                    
                    >
                        Dalma Greksza
                    </div>
                    
                </div>
                </div>
                <div className="aboutme-content">
    <div className="profile-section">
        <div className="picture-section">
            <img src={profilePhoto} alt="Profile" className="profile-photo" />
        </div>
        <div className="name-section">
                <h2 className="contact-name">Dalma Greksza</h2>
                <p>Software Engineer</p>
        </div>
        
        
        
    </div>
    
    <div className="contact-info">
        <div className="contact-row">
            <span className="contact-label">Iphone</span>
            <span className="contact-value">+33 6 40 98 29 33</span>
        </div>
        
        <div className="contact-row">
            <span className="contact-label">Email</span>
            <a href="mailto:dalma.greksza@gmail.com" className="contact-value contact-link">
                dalma.greksza@gmail.com
            </a>
        </div>
        
        <div className="contact-row">
            <span className="contact-label">Github</span>
            <a href="https://github.com/grekszadalma" target="_blank" className="contact-value contact-link">
                grekszadalma
            </a>
        </div>
        
        <div className="contact-row">
            <span className="contact-label">Linkedin</span>
            <a href="https://linkedin.com/in/dalma-greksza" target="_blank" className="contact-value contact-link">
                dalma-greksza
            </a>
        </div>
    </div>
</div>
            </div>
        </div>
    )
}