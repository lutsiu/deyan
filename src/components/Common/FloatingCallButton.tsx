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
        w-[8rem] h-[8rem] 
        md:w-[9.6rem] md:h-[9.6rem]
        rounded-full 
        flex items-center justify-center
        cursor-pointer"
      aria-label="Позвонить нам"
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-green-500 rounded-full opacity-70" />
      <Icon
        icon="mdi-light:phone"
        className="relative z-10 text-beige-200 w-[4rem] h-[4rem] md:w-[3.8rem] md:h-[3.8rem]"
      />
    </button>
  );
}
