import { Icon } from "@iconify/react";

interface Props {
  direction: "left" | "right";
  onClick?: () => void;
  disabled?: boolean;
}

export default function AboutUsCarouselButton({ direction, onClick, disabled }: Props) {
  const baseClasses = `
    w-[5.6rem] h-[5.6rem] lg:w-[8rem] lg:h-[8rem] 
    flex items-center justify-center rounded-full 
    transition-all duration-200 ease-in-out
  `;

  const buttonClasses = disabled
    ? "bg-beige-200"
    : "bg-green-500 hover:bg-green-400 cursor-pointer";

  const iconColor = disabled ? "text-black-100" : "text-beige-200";

  return (
    <button
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled}
      className={`${baseClasses} ${buttonClasses}`}
    >
      <Icon
        icon={`mdi-light:chevron-${direction}`}
        className={`${iconColor} w-[3.2rem] h-[3.2rem] lg:w-[4.6rem] lg:h-[4.6rem]`}
      />
    </button>
  );
}
