import AboutUsSection from "../sections/AboutUsSection";
import HeroSection from "../sections/HeroSection";
import OurPartnersSection from "../sections/OurPartners";
import ServicesSection from "../sections/ServicesSection";
import WhyUsSection from "../sections/WhyUsSection";

export default function Home() {
  return (
    <main className="bg-green-600">
      <HeroSection/>
      <ServicesSection/>
      <WhyUsSection/>
      <OurPartnersSection/>
      <AboutUsSection/>
    </main>
  )
}