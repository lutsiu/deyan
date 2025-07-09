import LANGUAGES from "../../data/Languages";

interface Props {
  currentLangCode: string;
  onChangeLang: (lang: string) => void;
}

export default function LanguageDropdown({ currentLangCode, onChangeLang }: Props) {
  return (
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
        md:text-green-600
      `}
    >
      {LANGUAGES.filter((lang) => lang.code !== currentLangCode).map((lang) => (
        <li
          key={lang.code}
          role="option"
          aria-selected="false"
          className="text-[1.6rem] font-normal cursor-pointer hover:underline"
          onClick={() => onChangeLang(lang.code)}
        >
          {lang.label}
        </li>
      ))}
    </ul>
  );
}
