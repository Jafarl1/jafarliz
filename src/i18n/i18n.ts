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
        cards: {
          whatIDo: {
            title: "What I do?",
            text: "I create modern web applications in JavaScript/TypeScript, React, optimize interfaces and make user-friendly UX/UI designs.",
          },
          myApproach: {
            title: "My Approach",
            text: "I write clean code, taking into account performance, adaptability, and user friendliness.",
          },
          whyMe: {
            title: "Why Me?",
            text: "I have experience working in different teams with server and database developers, I pay attention to the smallest details and establish contacts easily and clearly.",
          },
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
        cards: {
          whatIDo: {
            title: "Чем я занимаюсь?",
            text: "Создаю современные веб-приложения на JavaScript/TypeScript, React, оптимизирую интерфейсы и делаю удобные UX/UI-дизайны.",
          },
          myApproach: {
            title: "Мой подход",
            text: "Пишу чистый код, учитывая производительность, адаптивность и удобство для пользователей.",
          },
          whyMe: {
            title: "Почему я?",
            text: "Имею опыт работы в команде с серверными и базовыми разработчиками, уделяю внимание мельчайшим деталям и легко нахожу общий язык с коллегами.",
          },
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
        cards: {
          whatIDo: {
            title: "Mən nə edirəm?",
            text: "JavaScript/TypeScript, React ilə müasir veb tətbiqlər hazırlayıram, interfeysləri optimallaşdırıram və istifadəçiyə uyğun UX/UI dizaynları yaradıram.",
          },
          myApproach: {
            title: "Mənim yanaşmam",
            text: "Təmiz kod yazıram, performans, uyğunlaşma və istifadəçi rahatlığını nəzərə alıram.",
          },
          whyMe: {
            title: "Niyə mən?",
            text: "Server və verilənlər bazası tərtibatçıları ilə müxtəlif komandalarla iş təcrübəsinə malikəm, ən kiçik detallara diqqət yetirirəm və asanlıqla ünsiyyət yaradıram.",
          },
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
