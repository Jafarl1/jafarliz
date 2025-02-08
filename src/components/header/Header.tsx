import { NavLink } from "react-router-dom";
import s from "./header.module.css";

function Header() {
  return (
    <header>
      <div className={s.info}>
        <img src="" alt="JZ" />
        <h1>JZ</h1>
      </div>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
