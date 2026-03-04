import { useLanguage } from "../contexts/LanguageContext";
import "../css/index.css";

export default function Summary() {

    const { t } = useLanguage();

    return (
       <div >
            <h2 className="section-title">{t('summaryTitle')}</h2>
                

      <p style={{ marginBottom: 10 }}>
        {t('summaryIntro')}
      </p>

      <p style={{ marginBottom: 10 }}>
        {t('summaryName')}
      </p>

      <p style={{ marginBottom: 10 }}>
        {t('summaryOrigin')}
      </p>

      <p style={{ marginBottom: 10 }}>
        {t('summaryBachelor')}
      </p>
      

      <p style={{ marginBottom: 10 }}>
        {t('summaryErasmus')}
      </p>

      <p style={{ marginBottom: 10 }}>
        <p>
          {t('summaryMaster')}
        </p>

      </p>

      <p style={{ marginBottom: 10 }}>
        {t('summaryLanguages')}
      </p>

      <p style={{ marginBottom: 10 }}>
        {t('summaryTravel')}
      </p>

      <p>
        {t('summaryHobbies')}
      </p>
        </div>
    )
}


