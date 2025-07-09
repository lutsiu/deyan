import { NavLink } from "react-router-dom";

interface Props {
  onClick?: () => void;
}

export default function NavLinks({ onClick }: Props) {
  const baseClass = "text-beige-200 text-[1.6rem] font-normal";

  return (
    <>
      <NavLink to="/" className={baseClass} onClick={onClick}>Главная</NavLink>
      <NavLink to="/services" className={baseClass} onClick={onClick}>Услуги</NavLink>
      <NavLink to="/blog" className={baseClass} onClick={onClick}>Блог</NavLink>
    </>
  );
}
