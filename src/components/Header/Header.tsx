import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LanguageSelector from "./LanguageSelector";
import CallButton from "./CallButton";

export default function Header() {
  return (
    <header className="w-full pl-[3.9rem] pr-[8.8rem] py-[2.4rem] bg-green-600">
      <div className="w-full mx-auto flex items-center justify-between">
        <Logo />

        {/* Navigation + Language + Call */}
        <div className="flex items-center gap-[4rem]">
          <nav className="flex items-center gap-[4rem] text-sm" role="navigation" aria-label="Main navigation">
            <NavLinks />
            <LanguageSelector />
          </nav>
          <CallButton />
        </div>
      </div>
    </header>
  );
}
