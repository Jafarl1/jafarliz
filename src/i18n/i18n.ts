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
        mainText: {
          firstLine: "All in One",
          secondLine: "Personal Portfolio",
          thirdLine: [
            "Web Developer.",
            "Freelancer.",
            "Content Writer.",
            "Instructor.",
          ],
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
        mainText: {
          firstLine: "Все в одном",
          secondLine: "Личное портфолио",
          thirdLine: [
            "Веб Разработчик.",
            "Фрилансер.",
            "Автор Контента",
            "Инструктор.",
          ],
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
        mainText: {
          firstLine: "Hamısı bir Arada",
          secondLine: "Şəxsi Portfel",
          thirdLine: [
            "Veb Developer.",
            "Frilanser.",
            "Məzmun Yazarı.",
            "Təlimçi.",
          ],
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
