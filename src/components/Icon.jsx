import { useState } from "react";

export default function Icon({ imageUrl, scale, onMouseEnter, onMouseLeave, onOpen }) {
    const [isJumping, setIsJumping] = useState(false);

    const handleDoubleClick = () => {
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 500);
        if (onOpen) onOpen();
    };

    return(
        <div 
            className={`icon ${isJumping ? 'jump' : ''}`}
            style={{ 
                backgroundImage: `url(${imageUrl})`,
                transform: isJumping ? undefined : `scale(${scale})`
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onDoubleClick={handleDoubleClick}
            
        >
        </div>
    )
}