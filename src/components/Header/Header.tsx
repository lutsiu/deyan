import HeaderLogo from "./HeaderLogo";
import NavLinks from "./NavLinks";
import LanguageSelector from "./LanguageSelector";
import CallButton from "../Common/CallButton";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";
export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="
      w-full
      pl-[1.7rem] pr-[2.4rem]         
      md:pl-[0rem] md:pr-[4rem] 
      lg:pl-[0rem] lg:pr-[5rem] 
      xl:pl-[2.2rem] xl:pr-[7rem] 
      2xl:pl-[3.9rem] 2xl:pr-[8.8rem]
      py-[2.4rem]
      bg-green-600 z-[100] shadow-[0_4px_16px_rgba(0,0,0,0.25)] 
    ">
      <div className="w-full mx-auto flex items-center justify-between">
        <HeaderLogo />

        {/* Navigation + Language + Call, DESKTOP ONE */}
        <div className=" hidden md:flex items-center gap-[2.5rem] md:gap-[2.5rem] lg:gap-[4rem]">
          <nav className="flex items-center gap-[2.5rem] md:gap-[2.5rem] lg:gap-[4rem] text-sm"
              role="navigation"
              aria-label="Main navigation">
            <NavLinks />
            <LanguageSelector />
          </nav>
          <CallButton />
        </div>

        {/* MOBILE HAMBURGER ICON */}

        <div className="md:hidden">
          <HamburgerMenu toggleMenu={toggleMenu} />
        </div>
      </div>

      {/* MOBILE SLIDE-OUT MENU */}
      {isMenuOpen && (
        <MobileMenu onClose={toggleMenu}/>
      )}
    </header>
  );
}
