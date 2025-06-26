import { NavLink } from "react-router-dom";

export default function NavLinks() {
  const baseClass = "text-beige-200 text-[1.6rem] font-normal";
  return (
    <>
      <NavLink to="/" className={baseClass}>Главная</NavLink>
      <NavLink to="/services" className={baseClass}>Услуги</NavLink>
      <NavLink to="/blog" className={baseClass}>Блог</NavLink>
    </>
  );
}
