import { useTranslation } from "react-i18next";
import Typewriter from "../typeWriter/TypeWriter";
import "./main.module.css";

export default function Main() {
  const { t } = useTranslation();

  const texts: string[] = t("mainText.thirdLine", {
    returnObjects: true,
  }) as string[];

  return (
    <main>
      <h1>
        <span>{t("mainText.firstLine")}</span>
        <span>{t("mainText.secondLine")}</span>
        <Typewriter texts={texts} />
      </h1>

      <section>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </main>
  );
}
