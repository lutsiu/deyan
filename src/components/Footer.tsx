import FooterCopyright from "./Footer/FooterCopyright"
import FooterLogo from "./Footer/FooterLogo"
import FooterNavigation from "./Footer/FooterNavigation"
import FooterSocials from "./Footer/FooterSocials"
export default function Footer() {
  return (
    <footer className="bg-beige-200 section-padding pt-[7rem] pb-[7rem] sm:pt-[5.6rem] sm:pb-[4.4rem]">
      {/* Container for 3 footer blocks */}
      <div className="flex flex-col lg:flex-row gap-[4rem] lg:gap-[0] items-center justify-between">
        <FooterLogo/>
        <FooterNavigation/>
        <FooterSocials/>
      </div>
      <FooterCopyright/>
    </footer>
  )
}