import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LanguageSelector from "./LanguageSelector";
import CallButton from "./CallButton";

export default function Header() {
  return (
    <header className="w-full pl-[39px] pr-[88px] py-[24px] bg-green-600">
      <div className="w-full mx-auto flex items-center justify-between">
        <Logo />

        {/* Navigation + Language + Call */}
        <div className="flex items-center gap-[40px]">
          <nav className="flex items-center gap-[40px] text-sm" role="navigation" aria-label="Main navigation">
            <NavLinks />
            <LanguageSelector />
          </nav>
          <CallButton />
        </div>
      </div>
    </header>
  );
}
