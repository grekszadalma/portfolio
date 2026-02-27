import TaskBarIcon from "./TaskBarIcon";
import projectsIcon from "../assets/folder.png";
import photosIcon from "../assets/photos.png";
import notesIcon from "../assets/notes.png";
import mailIcon from "../assets/app.png";
import contactsIcon from "../assets/book.png";

import {useState} from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function TaskBar({
    onOpenFinderWindow, onCloseFinderWindow, 
    onOpenProjectsWindow, onCloseProjectsWindow,
    onOpenContactsWindow, onCloseContactsWindow,
    onOpenMailWindow, onCloseMailWindow
}) {

    const {t} = useLanguage();

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const getScale = (index) => {
        if (hoveredIndex === null) return 1;
        const distance = Math.abs(index - hoveredIndex);
        if (distance === 0) return 1.3;      
        if (distance === 1) return 1.15;     
        if (distance === 2) return 1.05;     
        return 1;                             
    };

    const onOpenFinder = () => {
        onOpenFinderWindow();
    }

    const onCloseFinder = () => {
        onCloseFinderWindow();
    }

    const onOpenProjects = () => {
        onOpenProjectsWindow();
    }

    const onCloseProjects = () => {
        onCloseProjectsWindow();
    }

    const onOpenContacts = () => {
        onOpenContactsWindow();
    }

    const onCloseContacts = () => {
        onCloseContactsWindow();
    }

    const onOpenMail = () => {
        onOpenMailWindow();
    }

    const onCloseMail = () => {
        onCloseMailWindow();
    }

    return(
        <div className="taskbar">
            <TaskBarIcon 
                    key={0}
                    imageUrl={notesIcon} 
                    title={t('aboutMe')}
                    scale={getScale(0)}
                    onMouseEnter={() => setHoveredIndex(0)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onOpen={onOpenFinder}
                />
                <TaskBarIcon 
                    key={1}
                    imageUrl={projectsIcon}
                    title={t('projects')}
                    scale={getScale(1)}
                    onMouseEnter={() => setHoveredIndex(1)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onOpen={onOpenProjects}
                />
                <TaskBarIcon 
                    key={2}
                    imageUrl={photosIcon} 
                    title="Photos"
                    scale={getScale(2)}
                    onMouseEnter={() => setHoveredIndex(2)}
                    onMouseLeave={() => setHoveredIndex(null)}
                />
                
                <TaskBarIcon 
                    key={3}
                    imageUrl={contactsIcon}
                    title="Contacts"
                    scale={getScale(3)}
                    onMouseEnter={() => setHoveredIndex(3)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onOpen={onOpenContacts}
                />
                <TaskBarIcon 
                    key={4}
                    imageUrl={mailIcon} 
                    title="Contact me"
                    scale={getScale(4)}
                    onMouseEnter={() => setHoveredIndex(4)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onOpen={onOpenMail}
                />
           
            
        </div>
    )
}