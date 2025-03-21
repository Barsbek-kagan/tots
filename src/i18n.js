import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Импортируем переводы
import translationEN from './locales/en.json';
import translationRU from './locales/ru.json';
import translationKG from './locales/kg.json'; // Добавляем кыргызский

// Ресурсы для переводов
const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  kg: {
    // Добавляем кыргызский язык
    translation: translationKG,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
