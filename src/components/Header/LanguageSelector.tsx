import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        className="flex items-center gap-[8px] text-beige-200 font-normal text-[16px] cursor-pointer"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="language-dropdown"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Icon icon="material-symbols-light:language" width={25} height={25} />
        Русский
        <Icon icon="mdi-light:chevron-down" width={25} height={25} />
      </button>

      {/* Dropdown */}
      {open && (
        <ul
          id="language-dropdown"
          role="listbox"
          className="absolute left-0 mt-[23px] px-[29px] py-[34px] bg-beige-200 rounded-md shadow-md flex flex-col gap-[16px] z-10"
        >
          <li
            role="option"
            aria-selected="false"
            className="text-[16px] font-normal cursor-pointer hover:underline"
            onClick={() => setOpen(false)}
          >
            English
          </li>
          <li
            role="option"
            aria-selected="false"
            className="text-[16px] font-normal cursor-pointer hover:underline"
            onClick={() => setOpen(false)}
          >
            Polska
          </li>
        </ul>
      )}
    </div>
  );
}
