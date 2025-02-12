import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navMenu: {
          home: "Home",
          resume: "Resume",
          projects: "Projects",
          blog: "Blog",
          contact: "Contact",
        },
      },
    },
    ru: {
      translation: {
        navMenu: {
          home: "Главная",
          resume: "Резюме",
          projects: "Проекты",
          blog: "Блог",
          contact: "Контакты",
        },
      },
    },
    az: {
      translation: {
        navMenu: {
          home: "Ana səhifə",
          resume: "Tərcümeyi-hal",
          projects: "Layihələr",
          blog: "Bloq",
          contact: "Əlaqə",
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
