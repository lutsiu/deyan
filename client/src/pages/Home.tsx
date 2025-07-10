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
    // Main homepage content
    <main
      className="bg-green-600"
      role="main"
      aria-label="Homepage"
    >
      {/* Hero banner */}
      <HeroSection /> 
      {/* Services overview */}
      <ServicesSection />
      {/* Why choose us */}
      <WhyUsSection />
      {/* Partner logos */}
      <OurPartnersSection />
      {/* About us info */}
      <AboutUsSection />
      {/* Location details */}
      <LocationsSection />
      {/* Contact form */}
      <ContactUsSection />
      {/* Always-on call button */}
      <FloatingCallButton />
    </main>
  )
}
