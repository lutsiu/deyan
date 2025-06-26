import { Icon } from "@iconify/react";

export default function CallButton() {
  return (
    <button
      className="
        flex items-center gap-[0.8rem]
        bg-beige-200 rounded-md
        text-[1.6rem]
        md:text-[1.5rem] lg:text-[1.6rem] font-normal 
        p-[1rem]
        md:p-[0.7rem]
        lg:p-[1rem] 
        cursor-pointer
        transition-all
        duration-150
        hover:bg-white"
      aria-label="Call us"
    >
      <Icon icon="mdi-light:phone"
         width={2.6 * 10} height={2.6 * 10}
         className="md:w-[22px] md:h-[22px] lg:w-[26px] lg:h-[26px]" />
      <span className="whitespace-nowrap">Позвонить нам</span>
    </button>
  );
}
