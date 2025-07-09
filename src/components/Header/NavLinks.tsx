import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

interface Props {
  onClick?: () => void;
}

export default function NavLinks({ onClick }: Props) {
  const baseClass = "text-beige-200 text-[1.6rem] font-normal";
  const {t} = useTranslation();

  return (
    <>
      <NavLink to="/" className={baseClass} onClick={onClick}>{t("nav.home")}</NavLink>
      <NavLink to="/services" className={baseClass} onClick={onClick}>{t("nav.services")}</NavLink>
      <NavLink to="/blog" className={baseClass} onClick={onClick}>{t("nav.blog")}</NavLink>
    </>
  );
}
