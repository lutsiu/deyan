import { Icon } from "@iconify/react";

interface Props {
  toggleMenu: () => void;
}

export default function HamburgerMenu({ toggleMenu }: Props) {
  return (
    <div
      // Make this div behave like a button for accessibility
      role="button"
      tabIndex={0}
      onClick={toggleMenu}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") toggleMenu();
      }}
      aria-label="Open menu"
      className="w-[4rem] h-[4rem] flex items-center justify-center cursor-pointer"
    >
      <Icon
        icon="mdi-light:menu"
        width={40}
        height={40}
        className="text-white"
        aria-hidden="true" // decorative icon
      />
    </div>
  );
}
