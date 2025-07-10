import CallButton from "../components/Common/CallButton";
import services from "../data/Services";
import ServiceCardPage from "../components/ServicePage/ServicePageCard";
import PageTitle from "../components/Common/PageTitle";

export default function Services() {
  return (
    <main className="blogAndServicesPagesContainer section-padding">
      <PageTitle title="services.title"/>

      {/* Mobile + Tablet version (single container) */}
      <div className="mt-[8.4rem] grid grid-cols-1 gap-[6rem] lg:hidden">
        {services.map((s, i) => (
          <ServiceCardPage key={i} {...s} />
        ))}
      </div>

      {/* Desktop version (preserve your original layout) */}
      <div className="hidden lg:grid mt-[7rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2.5rem]">
        {services.slice(0, 3).map((s, i) => (
          <ServiceCardPage key={i} {...s} />
        ))}
      </div>

      <div className="hidden lg:flex mt-[7.6rem] mb-[5.6rem] justify-center gap-[2.5rem] flex-wrap">
        {services.slice(3).map((s, i) => (
          <div key={i} className="w-full md:w-[48%] lg:w-[32%]">
            <ServiceCardPage {...s} />
          </div>
        ))}
      </div>

      <div className="mt-[4rem] lg:mt-[7.6rem] mx-auto w-fit">
        <CallButton />
      </div>
    </main>

  )
}