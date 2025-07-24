import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

interface PageCardProps {
  icon: string;
  label: string;
}

export default function ServiceCardPage({ icon, label }: PageCardProps) {
  const {t} = useTranslation();
  return (
    <article
      className="w-full relative bg-beige-200 rounded-[0.8rem] flex justify-center cursor-pointer
                items-center pt-[6rem] pb-[4rem] xl:pt-[7.2rem] xl:pb-[4.5rem] px-[2.4rem] text-center lg:h-[19rem] xl:h-full"
      role="listitem"
      aria-label={t(label)}
    >
      <div
        className="absolute top-[-4.4rem] lg:top-[-5.2rem] left-1/2 -translate-x-1/2
                   w-[8.8rem] h-[8.8rem]
                   lg:w-[10rem] lg:h-[10rem] 
                   bg-green-500 flex justify-center items-center rounded-full"
      >
        <Icon icon={icon} width={40} height={40} className="text-beige-200" />
      </div>

      <h3 className="text-black-600 font-medium text-[1.4rem] sm:text-[1.6rem] lg:text-[2rem] text-wrap 2xl:text-nowrap px-[2.3rem]">
        {t(label)}
      </h3>
    </article>
  );
}
