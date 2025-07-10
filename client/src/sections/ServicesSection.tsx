import SectionTitle from "../components/Common/SectionTitle";
import ServiceBackground from "../components/Home/Service/ServiceBackground";
import ServiceList from "../components/Home/Service/ServiceList";
import ServiceWatchAllLink from "../components/Home/Service/ServiceWatchAllLink";

export default function ServicesSection() {
  return (
    <section
      className="relative 
                 pt-[9.6rem] 2xl:pt-[20.4rem] 
                 section-padding overflow-hidden"
      role="region"
      aria-label="Services"
      aria-labelledby="services-heading"
    >
      {/* Section title should render an <h2> with id="services-heading" */}
      <SectionTitle title="services.title" />
      <ServiceBackground />
      <ServiceList />
      <ServiceWatchAllLink />
    </section>
  );
}
