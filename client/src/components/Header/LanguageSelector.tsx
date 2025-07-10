import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./LanguageDropdown";
import LANGUAGES from "../../data/Languages";

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang =
    LANGUAGES.find(lang => lang.code === i18n.language)?.label || "Lang";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-[0.8rem] text-beige-200 font-normal text-[1.6rem] cursor-pointer"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="language-dropdown"
        aria-label={`Select language, current language ${currentLang}`}  // Clarifies purpose and state
        onClick={() => setOpen(prev => !prev)}
      >
        <Icon
          icon="material-symbols-light:language"
          width={25}
          height={25}
          aria-hidden="true"  // decorative
        />
        {currentLang}
        <Icon
          icon="mdi-light:chevron-down"
          width={25}
          height={25}
          aria-hidden="true"  // decorative
        />
      </button>

      {/* language-dropdown is a custom component so no SEO props here */}
      {open && (
        <LanguageDropdown
          currentLangCode={i18n.language}
          onChangeLang={code => {
            i18n.changeLanguage(code);
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}
