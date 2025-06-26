import CallButton from "./CallButton";
import LanguageSelector from "./LanguageSelector";
import NavLinks from "./NavLinks";
import { Icon } from "@iconify/react";

interface Props {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: Props) {
  return (
    <aside
      className="md:hidden fixed top-0 left-0 w-full h-full bg-green-600 z-50 flex flex-col px-[2.4rem]"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-[2.4rem] top-[3.4rem] text-white"
        aria-label="Close menu"
      >
        <Icon icon="system-uicons:cross" width={40} height={40} />
      </button>

      {/* Menu content */}
      <nav className="flex flex-col gap-[3.2rem] mt-[10.4rem]" role="navigation" aria-label="Main mobile navigation">
        <NavLinks />
        <LanguageSelector />
        <div className="w-[16.7rem] h-[4.4rem]">
          <CallButton />
        </div>
      </nav>
    </aside>
  );
}
