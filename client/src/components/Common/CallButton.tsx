import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface Props {
  onClick?: () => void;
}

export default function CallButton({onClick}: Props) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate("/contact");
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type="button" // Prevents submitting any parent form
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
        hover:bg-white
      "
      aria-label="Call us"
      onClick={handleClick}
    >
      <Icon
        icon="mdi-light:phone"
        width={26}
        height={26}
        className="md:w-[22px] md:h-[22px] lg:w-[26px] lg:h-[26px]"
        aria-hidden="true" // Decorative icon
      />
      <span className="whitespace-nowrap">{t("button.callUs")}</span>
    </button>
  );
}
