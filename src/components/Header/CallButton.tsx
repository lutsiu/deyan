import { Icon } from "@iconify/react";

export default function CallButton() {
  return (
    <button
      className="flex items-center gap-[0.8rem] bg-beige-200 rounded-md text-[1.6rem] font-normal p-[1rem] cursor-pointer"
      aria-label="Позвонить нам"
    >
      <Icon icon="mdi-light:phone" width={2.6 * 10} height={2.6 * 10} />
      <span>Позвонить нам</span>
    </button>
  );
}
