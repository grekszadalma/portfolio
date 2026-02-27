import "../css/toolbar.css";
import pearLogo from "../assets/pearlogo.png";
import volumeIcon from "../assets/volume.png";
import wifiIcon from "../assets/wifi.png";
import bluetoothIcon from "../assets/bluetooth.png";
import batteryIcon from "../assets/battery.png";
import {useState, useEffect} from "react";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../contexts/LanguageContext";


export default function ToolBar() {

    const {t} = useLanguage();

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
                <span className="toolbar-text" style={{fontWeight: 'bold'}}>{t('toolbarTitle')}</span>
                <span className="toolbar-text">{t('toolbarFile')}</span>
                <span className="toolbar-text">{t('toolbarEdit')}</span>
                <span className="toolbar-text">{t('toolbarView')}</span>
                <span className="toolbar-text">{t('toolbarWindow')}</span>
                <span className="toolbar-text">{t('toolbarHelp')}</span>
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