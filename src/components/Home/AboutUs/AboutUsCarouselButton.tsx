import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
  direction: "left" | "right";
  onClick?: () => void;
}
// for now icon inside button isn't positioned correctly, i'd change it in a future
export default function AboutUsCarouselButton({ direction, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`w-[5.6rem] h-[5.6rem] lg:w-[8rem] lg:h-[8rem] flex items-center justify-center rounded-full
        ${direction === "left" ? "bg-beige-200" : "bg-green-500"}
        ${direction === "left" ? "hover:bg-beige-200" : "hover:bg-green-400"}
        transition-all duration-200 ease-in-out cursor-pointer`}
    >
      <Icon
        icon={`mdi-light:chevron-${direction}`}
        className={`${
          direction === "left" ? "text-black-100" : "text-beige-200" }
          w-[3.2rem] h-[3.2rem]
          lg:w-[4.6rem] lg:h-[4.6rem]
        `}
      />
    </button>
  );
}
