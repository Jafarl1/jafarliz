import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useWindowWidth from "../../hooks/useWindowWidth/UseWindowWidth";
import home_icon from "../../assets/icons/headerIcons/home.png";
import resume_icon from "../../assets/icons/headerIcons/resume.png";
import projects_icon from "../../assets/icons/headerIcons/projects.png";
import blog_icon from "../../assets/icons/headerIcons/blog.png";
import contact_icon from "../../assets/icons/headerIcons/contact.png";
import s from "./header.module.css";

const navLinks = [
  { to: "/", icon: home_icon, label: "home" },
  { to: "/resume", icon: resume_icon, label: "resume" },
  { to: "/projects", icon: projects_icon, label: "projects" },
  { to: "/blog", icon: blog_icon, label: "blog" },
  { to: "/contact", icon: contact_icon, label: "contact" },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const ww = useWindowWidth();
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [currentLang, setCurrentLang] = useState(
    sessionStorage.getItem("lang") ?? "en"
  );

  const toggleNavbar = () => setIsNavbarVisible((prev) => !prev);

  const changeLanguage = (event: { target: { value: string } }) => {
    const selectedLang = event.target.value;
    setCurrentLang(selectedLang);
    sessionStorage.setItem("lang", selectedLang);
  };

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

  return (
    <header>
      <h1>{ww > 1220 || ww < 440 ? "Jafarli Zohrab" : "JZ"}</h1>

      <div>
        <nav className={isNavbarVisible ? s.showNavbar : ""}>
          {navLinks.map(({ to, icon, label }) => (
            <NavLink key={to} to={to} onClick={() => setIsNavbarVisible(false)}>
              <img src={icon} className={s.mobileIcon} alt={label} />
              {ww > 440 && <span>{t(`navMenu.${label}`)}</span>}
            </NavLink>
          ))}
        </nav>

        <select
          name="language"
          id="language"
          value={currentLang}
          onChange={changeLanguage}
        >
          <option value="en">🇬🇧</option>
          <option value="az">🇦🇿</option>
          <option value="ru">🇷🇺</option>
        </select>

        <div
          className={`${s.burgerMenu} ${
            isNavbarVisible ? s.burgerMenuOpened : ""
          }`}
          onClick={toggleNavbar}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
