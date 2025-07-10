import { useTranslation } from "react-i18next";
import CallButton from "../../Common/CallButton";

export default function HeroText() {
  const { t } = useTranslation();

  return (
    <header className="flex flex-col gap-[2.4rem] md:gap-[2.8rem] lg:gap-[3.2rem] text-beige-200">
      <h1 
        className="font-bold text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] 
                   lg:text-[8.5rem] xl:text-[9.6rem] uppercase
                   leading-[140%] md:leading-[120%]">
        {/* Mobile version */}
        <span className="block sm:hidden whitespace-pre-line">
          {t("hero.titleMobile")}
        </span>

        {/* Desktop version */}
        <span className="hidden sm:block whitespace-pre-line">
          {t("hero.titleDesktop")}
        </span>
      </h1>

      <p className="uppercase text-[1.6rem] sm:text-[2rem] md:text-[2.4rem]">
        {t("hero.subtitle")}
      </p>

      <div>
        <CallButton />
      </div>
    </header>
  );
}
