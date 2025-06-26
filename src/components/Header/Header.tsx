import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LanguageSelector from "./LanguageSelector";
import CallButton from "./CallButton";

export default function Header() {
  return (
    <header className="
      w-full
      pl-[1.7rem] pr-[2.4rem]         /* Mobile default (390px) */
      sm:pl-[2.4rem] sm:pr-[3.2rem]   /* ≥ 640px */
      md:pl-[0rem] md:pr-[4rem]       /* ≥ 768px */
      lg:pl-[3.5rem] lg:pr-[5rem]     /* ≥ 1024px */
      xl:pl-[3.7rem] xl:pr-[7rem]     /* ≥ 1280px */
      2xl:pl-[3.9rem] 2xl:pr-[8.8rem] /* ≥ 1440px */
      py-[2.4rem]
      bg-green-600
    ">
      <div className="w-full mx-auto flex items-center justify-between">
        <Logo />

        {/* Navigation + Language + Call */}
        <div className="flex items-center gap-[2.5rem] md:gap-[2.5rem] lg:gap-[4rem]">
          <nav className="flex items-center gap-[2.5rem] md:gap-[2.5rem] lg:gap-[4rem] text-sm"
              role="navigation"
              aria-label="Main navigation">
            <NavLinks />
            <LanguageSelector />
          </nav>
          <CallButton />
        </div>
      </div>
    </header>
  );
}
