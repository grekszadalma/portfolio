import "../css/postit.css";

export default function PostIt() {

    return(
        <div className="postit-container">
            
        <div className="postit-header">

        </div>
        <div className="postit-body">
            <div>
                <p className="postit-text">📌 How to navigate:</p>
                <p className="postit-text">• Hover over dock icons for labels</p>
                <p className="postit-text">• Double-click icons to open apps</p>
                <p className="postit-text">• Drag windows by the header</p>
                <p className="postit-text">• Click red dot to close window</p>
                
                <p className="postit-text">Enjoy exploring! ✨</p>
            </div>
        </div>
        </div>
    )
}