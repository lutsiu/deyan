import FooterCopyright from "./Footer/FooterCopyright"
import FooterLogo from "./Footer/FooterLogo"
import FooterNavigation from "./Footer/FooterNavigation"
import FooterSocials from "./Footer/FooterSocials"
export default function Footer() {
  return (
    <footer className="bg-beige-200 px-[8.8rem] pt-[5.6rem] pb-[4.4rem]">
      {/* Container for 3 footer blocks */}
      <div className="flex items-center justify-between">
        <FooterLogo/>
        <FooterNavigation/>
        <FooterSocials/>
      </div>
      <FooterCopyright/>
    </footer>
  )
}