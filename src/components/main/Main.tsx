import { useTranslation } from "react-i18next";
import Typewriter from "../typeWriter/TypeWriter";
import s from "./main.module.css";

import developerIcon from "../../assets/icons/mainIcons/developer.png";
import targetIcon from "../../assets/icons/mainIcons/target.png";
import badgeIcon from "../../assets/icons/mainIcons/badge.png";

export default function Main() {
  const { t } = useTranslation();

  const texts: string[] = t("mainText.thirdLine", {
    returnObjects: true,
  }) as string[];

  const cards = [
    {
      icon: developerIcon,
      title: t("cards.whatIDo.title"),
      text: t("cards.whatIDo.text"),
      alt: "What I do",
    },
    {
      icon: targetIcon,
      title: t("cards.myApproach.title"),
      text: t("cards.myApproach.text"),
      alt: "My Approach",
    },
    {
      icon: badgeIcon,
      title: t("cards.whyMe.title"),
      text: t("cards.whyMe.text"),
      alt: "Why Me",
    },
  ];

  return (
    <main>
      <h1>
        <span>{t("mainText.firstLine")}</span>
        <span>{t("mainText.secondLine")}</span>
        <Typewriter texts={texts} />
      </h1>

      <section>
        {cards.map(({ icon, title, text, alt }, index) => (
          <div key={index} className={s.card}>
            <div className={s.content}>
              <img src={icon} alt={alt} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
