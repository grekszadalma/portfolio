import "../css/toolbar.css";
import pearLogo from "../assets/pearlogo.png";
import volumeIcon from "../assets/volume.png";
import wifiIcon from "../assets/wifi.png";
import bluetoothIcon from "../assets/bluetooth.png";
import batteryIcon from "../assets/battery.png";
import {useState, useEffect} from "react";
import LanguageSelector from "./LanguageSelector";


export default function ToolBar() {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000); 

        return () => clearInterval(timer); 
    }, []);

   
    const formatDateTime = (date) => {
        const options = {
            weekday: 'short',  
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        };
        
        return date.toLocaleString('en-US', options)
            .replace(',', '');
    };

    return(
        <div className="main-toolbar">
            <div className="toolbar-left">
                <img src={pearLogo} alt="Apple" className="toolbar-image" />
                <span className="toolbar-text" style={{fontWeight: 'bold'}}>Dalma's page</span>
                <span className="toolbar-text">File</span>
                <span className="toolbar-text">Edit</span>
                <span className="toolbar-text">View</span>
                <span className="toolbar-text">Window</span>
                <span className="toolbar-text">Help</span>
            </div>
            
            <div className="toolbar-right">
                <LanguageSelector/>
                <img src={volumeIcon} alt="Volume" className="toolbar-image" />
                <img src={wifiIcon} alt="Wifi" className="toolbar-image" />
                <img src={bluetoothIcon} alt="Bluetooth" className="toolbar-image" />
                <img src={batteryIcon} alt="Battery" className="toolbar-image" />
                <span className="toolbar-time">{formatDateTime(currentTime)}</span>
            </div>
        </div>
    )
}