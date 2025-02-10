import { useState } from "react";
import { NavLink } from "react-router-dom";
import useWindowWidth from "../../hooks/useWindowWidth/UseWindowWisth";
import home_icon from "../../assets/icons/headerIcons/home.png";
import resume_icon from "../../assets/icons/headerIcons/resume.png";
import projects_icon from "../../assets/icons/headerIcons/projects.png";
import blog_icon from "../../assets/icons/headerIcons/blog.png";
import contact_icon from "../../assets/icons/headerIcons/contact.png";
import s from "./header.module.css";

const navLinks = [
  { to: "/", icon: home_icon, label: "Home" },
  { to: "/resume", icon: resume_icon, label: "Resume" },
  { to: "/projects", icon: projects_icon, label: "Projects" },
  { to: "/blog", icon: blog_icon, label: "Blog" },
  { to: "/contact", icon: contact_icon, label: "Contact" },
];

export default function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const ww = useWindowWidth();
  const toggleNavbar = () => setIsNavbarVisible((prev) => !prev);

  return (
    <header>
      <h1>{ww > 1220 || ww < 440 ? "Jafarli Zohrab" : "JZ"}</h1>

      <nav className={isNavbarVisible ? s.showNavbar : ""}>
        {navLinks.map(({ to, icon, label }) => (
          <NavLink key={to} to={to}>
            <img src={icon} className={s.mobileIcon} alt={label} />
            {ww > 440 && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>

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
    </header>
  );
}
