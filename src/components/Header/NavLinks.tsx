import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <>
      <NavLink to="/" className="text-beige-200 text-[16px] font-normal">Главная</NavLink>
      <NavLink to="/services" className="text-beige-200 text-[16px] font-normal">Услуги</NavLink>
      <NavLink to="/blog" className="text-beige-200 text-[16px] font-normal">Блог</NavLink>
    </>
  );
}
