import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

interface SectionCardProps {
  icon: string;
  label: string; // i18n key 
}

export default function ServiceCard({ icon, label }: SectionCardProps) {
  const { t } = useTranslation();
  const translatedLabel = t(label);

  return (
    <article
      className="w-full h-full relative bg-beige-200 rounded-[0.8rem] flex justify-center
                 pt-[6rem] pb-[4rem] 
                 lg:pt-[9.2rem] lg:pb-[2.3rem] 
                 text-center cursor-pointer"
      role="listitem"
      aria-label={translatedLabel}
    >
      <div
        className="absolute top-[-4rem] lg:top-[-6rem] left-1/2 -translate-x-1/2
                   w-[8.8rem] h-[8.8rem]
                   lg:w-[12rem] lg:h-[12rem] 
                   bg-green-500 flex justify-center items-center rounded-full"
      >
        <Icon
          icon={icon}
          aria-hidden="true"  // Decorative icon; label is provided via heading
          className="text-beige-200
                     w-[4rem] h-[4rem]
                     lg:w-[6.4rem] lg:h-[6.4rem]"
        />
      </div>

      <h3
        className="text-black-600 font-medium text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] px-[1.1rem]"
      >
        {translatedLabel}
      </h3>
    </article>
  );
}