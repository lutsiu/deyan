import { Icon } from "@iconify/react";
 
interface Props {
  toggleMenu: () => void;
}

export default function HamburgerMenu({toggleMenu}: Props) {
  return (
    <div
      onClick={toggleMenu}
      aria-label="Open menu"
      className="w-[4rem] h-[4rem] flex items-center justify-center cursor-pointer"
    >
      <Icon icon="mdi-light:menu" width={40} height={40} className="text-white" />
    </div>
  );
}
