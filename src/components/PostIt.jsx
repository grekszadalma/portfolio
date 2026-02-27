import { useLanguage } from "../contexts/LanguageContext";
import "../css/postit.css";

export default function PostIt() {

    const {t} = useLanguage();

    return(
        <div className="postit-container">
            
        <div className="postit-header">

        </div>
        <div className="postit-body">
            <div>
                <p className="postit-text">{t('welcomeTitle')}</p>
                <p className="postit-text">{t('welcomeLabel')}</p>
                <p className="postit-text">{t('welcomeOpen')}</p>
                <p className="postit-text">{t('welcomeDrag')}</p>
                <p className="postit-text">{t('welcomeClose')}</p>
                
                <p className="postit-text">{t('welcomeEnjoy')}</p>
            </div>
        </div>
        </div>
    )
}