import { useLanguage } from "../contexts/LanguageContext";
import "../css/postit.css";
import { useState } from "react";

export default function PostIt() {
  const [position, setPosition] = useState({ x: 80, y: 40 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);
  const [prevPosition, setPrevPosition] = useState({ x: 80, y: 40 });
  const { t } = useLanguage();

  const handleMouseDown = (e) => {
    if (isMaximized) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleGreenClick = (e) => {
    e.stopPropagation();
    if (!isMaximized) {
      setPrevPosition(position);
      setPosition({ x: 0, y: 0 });
      setIsMaximized(true);
    } else {
      setPosition(prevPosition);
      setIsMaximized(false);
    }
  };

  return (
    <div
      className="postit-container"
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "none",
        cursor: isDragging ? "grabbing" : "default",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}  // stops drag if mouse leaves the widget
    >
      <div
        className="postit-header"
        onMouseDown={handleMouseDown}
        style={{ cursor: isMaximized ? "default" : "grab" }}
      />

      <div className="postit-body">
        <div>
          <p className="postit-text">{t("welcomeTitle")}</p>
          <p className="postit-text">{t("welcomeLabel")}</p>
          <p className="postit-text">{t("welcomeOpen")}</p>
          <p className="postit-text">{t("welcomeDrag")}</p>
          <p className="postit-text">{t("welcomeClose")}</p>
          <p className="postit-text">{t("welcomeEnjoy")}</p>
        </div>
      </div>
    </div>
  );
}