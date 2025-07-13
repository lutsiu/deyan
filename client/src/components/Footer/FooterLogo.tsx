import { Link } from "react-router-dom"
import logoFooter from "../../../public/assets/logo/logo-footer.png"

export default function FooterLogo() {

  return (
    <Link to={"/"} className="w-[22.8rem] h-[7.2rem]">
      <img 
        src={logoFooter} 
        alt="Deyan Auto logo"
        className="w-full h-full object-contain" />
    </Link>
  )
}