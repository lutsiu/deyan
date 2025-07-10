import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ServiceWatchAllLink() {
  const { t } = useTranslation();

  const label = t("services.seeAll");

  return (
    <Link
      to="/services"
      className="block mt-[3.2rem] lg:mt-[4rem] text-center text-beige-200 font-semibold 
                 text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] underline cursor-pointer z-[1000]"
      title={label}         // Hover text and SEO hint
      aria-label={label}    // Announces the full link text for screen readers
    >
      {label}
    </Link>
  );
}
