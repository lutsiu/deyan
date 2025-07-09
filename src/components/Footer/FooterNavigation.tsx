import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function FooterNavigation() {
  const {t} = useTranslation();

  return (
    <nav className="flex gap-[4rem] text-beige-600 text-[1.6rem]"> 
        <NavLink to="/" className="hover:underline">{t("nav.home")}</NavLink>
        <NavLink to="/services" className="hover:underline">{t("nav.services")}</NavLink>
        <NavLink to="/blog" className="hover:underline">{t("nav.blog")}</NavLink>
    </nav>
  )
}