import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./en.json";
import hiTranslation from "./hi.json";

i18n.use(LanguageDetector).init({
  resources: {
    en: { translation: enTranslation },
    hi: { translation: hiTranslation },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
