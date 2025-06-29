import SectionTitle from "../components/Common/SectionTitle";
import ServiceBackground from "../components/Home/Service/ServiceBackground";
import ServiceList from "../components/Home/Service/ServiceList";
import ServiceWatchAllLink from "../components/Home/Service/ServiceWatchAllLink";

export default function ServicesSection() {

  return (
    <section
      className="relative pt-[20.4rem] px-[8.8rem] overflow-hidden"
      aria-labelledby="services-heading"
    >
      <SectionTitle title="Наши Услуги" />
      <ServiceBackground/>
      <ServiceList/>
      <ServiceWatchAllLink/>
    </section>
  );
}
