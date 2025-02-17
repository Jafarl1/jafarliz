import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { navLinks } from "./navLinks";
import useWindowWidth from "../../hooks/useWindowWidth/UseWindowWidth";
import s from "./header.module.css";

export default function Header() {
  const { t, i18n } = useTranslation();
  const ww = useWindowWidth();
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [currentLang, setCurrentLang] = useState(
    sessionStorage.getItem("lang") ?? "en"
  );

  const { pathname } = useLocation();

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
        <nav
          className={isNavbarVisible ? s.showNavbar : ""}
          onClick={() => setIsNavbarVisible(false)}
        >
          {navLinks.map(({ to, icon, active_icon, label }) => (
            <NavLink key={to} to={to}>
              {ww < 1020 && (
                <img
                  src={pathname === to ? active_icon : icon}
                  className={s.mobileIcon}
                  alt={label}
                />
              )}
              {ww > 440 && (
                <span className={`${pathname === to ? s.navLink_active : ""}`}>
                  {t(`navMenu.${label}`)}
                </span>
              )}
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
