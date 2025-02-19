import { useTranslation } from "react-i18next";
import Typewriter from "../typeWriter/TypeWriter";
import developerIcon from "../../assets/icons/mainIcons/developer.png";
import targetIcon from "../../assets/icons/mainIcons/target.png";
import badgeIcon from "../../assets/icons/mainIcons/badge.png";
import s from "./main.module.css";

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
      data_aos: "fade-up-right",
      data_aos_duration: "1200",
    },
    {
      icon: targetIcon,
      title: t("cards.myApproach.title"),
      text: t("cards.myApproach.text"),
      data_aos: "fade-up",
      data_aos_duration: "1000",
    },
    {
      icon: badgeIcon,
      title: t("cards.whyMe.title"),
      text: t("cards.whyMe.text"),
      data_aos: "fade-up-left",
      data_aos_duration: "1400",
    },
  ];

  return (
    <main>
      <h1>
        <span data-aos="fade-right" data-aos-duration="1000">
          {t("mainText.firstLine")}
        </span>
        <span data-aos="zoom-in" data-aos-duration="500">
          {t("mainText.secondLine")}
        </span>
        <span data-aos="fade-left" data-aos-duration="1500">
          <Typewriter texts={texts} />
        </span>
      </h1>

      <section>
        {cards.map(
          ({ icon, title, text, data_aos, data_aos_duration }, index) => (
            <div
              key={index}
              className={s.card}
              data-aos={data_aos}
              data-aos-duration={data_aos_duration}
            >
              <div className={s.content}>
                <img src={icon} alt={title} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          )
        )}
      </section>
    </main>
  );
}
