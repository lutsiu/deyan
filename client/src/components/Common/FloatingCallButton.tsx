import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function FloatingCallButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <button
      className="
        fixed bottom-[2rem] z-50 
        right-[2.4rem] md:right-[4rem] lg:right-[5rem] xl:right-[7rem] 2xl:right-[8.8rem]
        w-[8rem] h-[8rem] md:w-[9.6rem] md:h-[9.6rem]
        rounded-full
        flex items-center justify-center
        cursor-pointer
        bg-[#49816F]/50 hover:bg-[#74B49F]/60
        transition-colors duration-300
        shadow-[0_4px_8px_rgba(116,180,159,0.15)]
      "
      aria-label="Позвонить нам"
      onClick={handleClick}
    >
      <Icon
        icon="mdi-light:phone"
        className="text-beige-200 w-[4rem] h-[4rem] md:w-[4.8rem] md:h-[4.8rem]"
      />
    </button>
  );
}
