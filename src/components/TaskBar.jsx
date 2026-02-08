import TaskBarIcon from "./TaskBarIcon";
import finderIcon from "../assets/finder.png";
import projectsIcon from "../assets/projects.png";
import photosIcon from "../assets/photos.png";
import spotifyIcon from "../assets/spotify.png";
import mailIcon from "../assets/mail.png";
import contactsIcon from "../assets/contacts.png";

import {useState} from "react";

export default function TaskBar({onOpenFinderWindow, onCloseFinderWindow, onOpenProjectsWindow, onCloseProjectsWindow}) {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const getScale = (index) => {
        if (hoveredIndex === null) return 1;
        const distance = Math.abs(index - hoveredIndex);
        if (distance === 0) return 1.3;      // hovered icon
        if (distance === 1) return 1.15;      // adjacent icons
        if (distance === 2) return 1.05;     // 2 away
        return 1;                             // rest
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

    return(
        <div className="taskbar">
            <TaskBarIcon 
                    key={0}
                    imageUrl={finderIcon} 
                    scale={getScale(0)}
                    onMouseEnter={() => setHoveredIndex(0)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onOpen={onOpenFinder}
                />
                <TaskBarIcon 
                    key={1}
                    imageUrl={projectsIcon} 
                    scale={getScale(1)}
                    onMouseEnter={() => setHoveredIndex(1)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onOpen={onOpenProjects}
                />
                <TaskBarIcon 
                    key={2}
                    imageUrl={photosIcon} 
                    scale={getScale(2)}
                    onMouseEnter={() => setHoveredIndex(2)}
                    onMouseLeave={() => setHoveredIndex(null)}
                />
                
                <TaskBarIcon 
                    key={3}
                    imageUrl={contactsIcon} 
                    scale={getScale(3)}
                    onMouseEnter={() => setHoveredIndex(3)}
                    onMouseLeave={() => setHoveredIndex(null)}
                />
                <TaskBarIcon 
                    key={4}
                    imageUrl={mailIcon} 
                    scale={getScale(4)}
                    onMouseEnter={() => setHoveredIndex(4)}
                    onMouseLeave={() => setHoveredIndex(null)}
                />
           
            
        </div>
    )
}