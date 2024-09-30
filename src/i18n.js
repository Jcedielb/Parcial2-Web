// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Cycling": "Cycling",
      "Running": "Running",
      "Swimming": "Swimming",
      "City": "City",
      "Length": "Length",
      "Duration": "Duration",
      "Close": "Close"
    }
  },
  es: {
    translation: {
      "Cycling": "Ciclismo",
      "Running": "Carrera",
      "Swimming": "Natación",
      "City": "Ciudad",
      "Length": "Longitud",
      "Duration": "Duración",
      "Close": "Cerrar"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', 
    fallbackLng: 'en', 

    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
