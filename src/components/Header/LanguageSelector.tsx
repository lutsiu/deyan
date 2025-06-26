import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      <button
        className="flex items-center gap-[0.8rem] text-beige-200 font-normal text-[1.6rem] cursor-pointer"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="language-dropdown"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Icon icon="material-symbols-light:language" width={2.5 * 10} height={2.5 * 10} />
        Русский
        <Icon icon="mdi-light:chevron-down" width={2.5 * 10} height={2.5 * 10} />
      </button>

      {open && (
        <ul
          id="language-dropdown"
          role="listbox"
          className="absolute left-0 mt-[2.3rem] px-[2.9rem] py-[3.4rem] bg-beige-200 rounded-md shadow-md flex flex-col gap-[1.6rem] z-10"
        >
          <li
            role="option"
            aria-selected="false"
            className="text-[1.6rem] font-normal cursor-pointer hover:underline"
            onClick={() => setOpen(false)}
          >
            English
          </li>
          <li
            role="option"
            aria-selected="false"
            className="text-[1.6rem] font-normal cursor-pointer hover:underline"
            onClick={() => setOpen(false)}
          >
            Polska
          </li>
        </ul>
      )}
    </div>
  );
}
