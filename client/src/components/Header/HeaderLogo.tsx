import { Link } from "react-router-dom";
import logoDesktop from "../../../public/assets/logo/logo-desktop.png";
import logoMobile from "../../../public/assets/logo/logo-mobile.png";

export default function HeaderLogo() {
  return (
    // Logo links back to home
    <Link to="/" aria-label="Go to homepage">
      {/* Mobile Logo */}
      <div className="block md:hidden w-[17.3rem] h-[6.3rem]">
        <img
          src={logoMobile}
          alt="Deyan Auto Logo Mobile"
          className="w-full h-full object-contain"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Desktop + Tablet Logo */}
      <div className="hidden md:block w-[20rem] h-[8rem] lg:w-[25.8rem] lg:h-[10.4rem]">
        <img
          src={logoDesktop}
          alt="Deyan Auto Logo"
          className="w-full h-full object-contain"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </Link>
  );
}
