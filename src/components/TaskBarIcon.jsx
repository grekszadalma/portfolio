import { useState } from "react";

export default function TaskBarIcon({ imageUrl, title, scale, onMouseEnter, onMouseLeave, onOpen }) {
    const [isJumping, setIsJumping] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const handleDoubleClick = () => {
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 500);
        if (onOpen) onOpen();
    };

    const handleMouseEnter = () => {
        setShowTooltip(true);
        if (onMouseEnter) onMouseEnter();
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
        if (onMouseLeave) onMouseLeave();
    };

    

    return(
        <div 
            className={`icon ${isJumping ? 'jump' : ''}`}
            style={{ 
                backgroundImage: `url(${imageUrl})`,
                transform: isJumping ? undefined : `scale(${scale})`
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onDoubleClick={handleDoubleClick}
            
        >
            {showTooltip && title && (
                <div className="icon-tooltip">
                    {title}
                </div>
            )}
        </div>
    )
}