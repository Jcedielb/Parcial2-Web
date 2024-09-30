import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageSelector.css';  

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <button
        className={`language-button ${i18n.language === 'es' ? 'active' : 'inactive'}`}
        onClick={() => changeLanguage('es')}
      >
        Español
      </button>
      <button
        className={`language-button ${i18n.language === 'en' ? 'active' : 'inactive'}`}
        onClick={() => changeLanguage('en')}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSelector;
