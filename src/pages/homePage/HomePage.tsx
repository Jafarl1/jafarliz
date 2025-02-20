import { useState, useEffect } from "react";
import Main from "../../components/main/Main";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";
import s from "./home.module.css";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Main />
      <Skills />
      <Projects />
      <div
        className={`${s.mainBackground} ${scrolled ? s.secondBackground : ""}`}
      >
        <div className="background-overlay"></div>
      </div>
    </div>
  );
}
