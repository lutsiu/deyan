import { NavLink } from "react-router-dom";

export default function FooterNavigation() {

  return (
    <nav className="flex gap-[4rem] text-beige-600 text-[1.6rem]"> 
        <NavLink to="/" className="hover:underline">Главная</NavLink>
        <NavLink to="/services" className="hover:underline">Услуги</NavLink>
        <NavLink to="/blog" className="hover:underline">Блог</NavLink>
    </nav>
  )
}