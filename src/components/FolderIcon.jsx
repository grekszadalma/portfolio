

import { useState } from "react";
import "../css/index.css";

export default function FolderIcon({ imageUrl, name, onDoubleClick }) {
    return (
        <div className="project-item" onDoubleClick={onDoubleClick}>
            <div 
                className="folder-image"
                style={{ 
                    backgroundImage: `url(${imageUrl})`,
                    width: '70px',
                    height: '70px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            <span className="folder-name">{name}</span>
        </div>
    )
}