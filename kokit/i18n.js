// i18n.js
import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en', // 기본 언어
    fallbackLng: 'en',
    debug: true, // 디버깅 활성화
    interpolation: {
      escapeValue: false, // React에는 필요하지 않음
    },
  });

export default i18n;
