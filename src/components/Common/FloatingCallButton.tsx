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
        fixed bottom-[2rem] right-[8.8rem] z-50 
        w-[9.6rem] h-[9.6rem]
        rounded-full 
        flex items-center justify-center
        cursor-pointer"
      aria-label="Позвонить нам"
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-green-500 rounded-full opacity-70" />
      <Icon
        icon="mdi-light:phone"
        width={38}
        height={38}
        className="relative z-10 text-beige-200"
      />
    </button>
  );
}
