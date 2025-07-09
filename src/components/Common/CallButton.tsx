import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function CallButton() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  const {t} = useTranslation();

  return (
    <button
      className="
        flex items-center gap-[0.8rem]
        bg-beige-200 rounded-[0.8rem]
        text-[1.6rem]
        md:text-[1.5rem] lg:text-[1.6rem] font-normal 
        p-[1rem]
        md:p-[0.7rem]
        lg:p-[1rem] 
        cursor-pointer
        transition-all
        duration-150
        text-green-600
        hover:bg-white"
        aria-label="Call us"
        onClick={handleClick}
    >
      <Icon icon="mdi-light:phone"
         width={2.6 * 10} height={2.6 * 10}
         className="md:w-[22px] md:h-[22px] lg:w-[26px] lg:h-[26px]" />
      <span className="whitespace-nowrap">{t("button.callUs")}</span>
    </button>
  );
}
