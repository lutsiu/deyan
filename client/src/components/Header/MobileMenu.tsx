import CallButton from "../Common/CallButton";
import LanguageSelector from "./LanguageSelector";
import NavLinks from "./NavLinks";
import { Icon } from "@iconify/react";

interface Props {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: Props) {
  return (
    <aside
      className="
        md:hidden 
        fixed top-0 left-0 
        w-full h-full 
        max-w-[100vw] 
        max-h-[100vh]
        overflow-hidden 
        bg-green-600 
        z-50
      "
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
    >
      <div
        className="
          w-full h-full 
          max-w-[100vw] 
          overflow-hidden 
          flex flex-col 
          px-[2.4rem] 
          relative
        "
      >
        {/* Close button */}
        <button
          type="button" // prevent accidental form submission
          onClick={onClose}
          className="absolute top-[3.4rem] right-[2.4rem] text-white z-10"
          aria-label="Close menu"
        >
          <Icon
            icon="system-uicons:cross"
            width={40}
            height={40}
            aria-hidden="true" // decorative icon
          />
        </button>

        {/* Menu content */}
        <nav
          className="flex flex-col gap-[3.2rem] mt-[10.4rem]"
          role="navigation"
          aria-label="Main mobile navigation"
        >
          <NavLinks onClick={onClose} />
          <LanguageSelector />
          <div className="w-[16.7rem] h-[4.4rem]">
            <CallButton />
          </div>
        </nav>
      </div>
    </aside>
  );
}
