import FloatingCallButton from "../components/Common/FloatingCallButton";
import AboutUsSection from "../sections/AboutUsSection";
import ContactUsSection from "../sections/ContactUsSection";
import HeroSection from "../sections/HeroSection";
import LocationsSection from "../sections/LocationsSection";
import OurPartnersSection from "../sections/OurPartners";
import ServicesSection from "../sections/ServicesSection";
import WhyUsSection from "../sections/WhyUsSection";

export default function Home() {
  return (
    
    <main className="bg-green-600">
      {/* + */}
      <HeroSection/> 
      {/* + */}
      <ServicesSection/>
      {/* + */}
      <WhyUsSection/>
      {/* + */}
      <OurPartnersSection/>
      {/* + */}
      <AboutUsSection/>
      {/* + */}
      <LocationsSection/>
      {/* + */}
      <ContactUsSection/>

      <FloatingCallButton/>
    </main>
  )
}