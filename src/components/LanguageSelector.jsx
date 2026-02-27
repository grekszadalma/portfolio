import ukFlag from "../assets/flag_uk.png";
import frFlag from "../assets/flag_fr.png";
import huFlag from "../assets/flag_hu.png";
import { useState } from "react";
import "../css/languageselector.css";
import { useLanguage } from "../contexts/LanguageContext";


export default function LanguageSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const {language, setLanguage} = useLanguage();

    const languages = [
        { code: "en", name: "English", flag: ukFlag },
        { code: "fr", name: "Français", flag: frFlag },
        { code: "hu", name: "Magyar", flag: huFlag }
    ];

    const selectedLang = languages.find(lang => lang.code === language);


     return (
        <div className="custom-select">
            <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="hidden-select"
            >
                {languages.map(lang => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
            </select>
            
            <div className="select-styled">
               
                    <img src={selectedLang.flag} alt="" className="flag-img" />
                
            </div>

            
        </div>
    );

}