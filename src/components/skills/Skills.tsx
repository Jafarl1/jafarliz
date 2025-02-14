import doneIcon from "../../assets/icons/done.png";
import s from "./skills.module.css";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Redux Toolkit",
    "Git",
    "GitHub",
    "Responsive Design",
    "Material UI",
    "Tailwind CSS",
    "Ant Design",
    "Chakra UI",
    "Web Applications",
  ];

  return (
    <section className={s.skills}>
      <div className={s.line}>
        <div className={s.content}>
          {skills.map((skill, i) => (
            <span key={i}>
              <img src={doneIcon} />
              {skill}
            </span>
          ))}
          {skills.map((skill, i) => (
            <span key={i}>
              <img src={doneIcon} />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
