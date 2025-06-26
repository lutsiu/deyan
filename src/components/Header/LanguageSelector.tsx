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
        <Icon icon="material-symbols-light:language" width={25} height={25} />
        Русский
        <Icon icon="mdi-light:chevron-down" width={25} height={25} />
      </button>

      {open && (
        <ul
          id="language-dropdown"
          role="listbox"
          className={`
            flex flex-col gap-[1.6rem] z-10
            mt-[1.6rem]
            md:mt-[2.3rem]
            text-beige-200 text-[1.6rem] font-normal
            md:absolute md:left-0 md:px-[2.9rem] md:py-[3.4rem]
            md:bg-beige-200 md:rounded-md md:shadow-md
            md:text-green-600 md:mt-[2.3rem]
          `}
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
