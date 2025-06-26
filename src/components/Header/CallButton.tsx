import { Icon } from "@iconify/react";

export default function CallButton() {
  return (
    <button
      className="flex items-center gap-[8px] bg-beige-200 rounded-md text-[16px] font-normal p-[10px] cursor-pointer"
      aria-label="Позвонить нам"
    >
      <Icon icon="mdi-light:phone" width={26} height={26} />
      <span>Позвонить нам</span>
    </button>
  );
}
