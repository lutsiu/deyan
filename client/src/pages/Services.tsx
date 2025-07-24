import CallButton from "../components/Common/CallButton";
import services from "../data/Services";
import ServiceCardPage from "../components/ServicePage/ServicePageCard";
import PageTitle from "../components/Common/PageTitle";
import type { IServiceCard } from "../types/ServiceCardType";
import { useState } from "react";
import ServicePageCardOverlay from "../components/ServicePage/ServicePageCardOverlay";

export default function Services() {
  const [activeCard, setActiveCard] = useState<IServiceCard | null>(null);

  return (
    <section className="blogAndServicesPagesContainer section-padding">
      <PageTitle title="services.title" />

      {/* Mobile + Tablet */}
      <div className="mt-[8.4rem] grid grid-cols-1 gap-[6rem] lg:hidden">
        {services.map((s, i) => (
          <div key={i} onClick={() => setActiveCard(s)}>
            <ServiceCardPage {...s} />
          </div>
        ))}
      </div>

      {/* Desktop top row */}
      <div className="hidden lg:grid mt-[7rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2.5rem]">
        {services.slice(0, 3).map((s, i) => (
          <div key={i} onClick={() => setActiveCard(s)}>
            <ServiceCardPage {...s} />
          </div>
        ))}
      </div>

      {/* Desktop remaining */}
      <div className="hidden lg:flex mt-[7.6rem] mb-[5.6rem] justify-center gap-[2.5rem] flex-wrap">
        {services.slice(3).map((s, i) => (
          <div key={i} className="w-full md:w-[48%] lg:w-[32%]" onClick={() => setActiveCard(s)}>
            <ServiceCardPage {...s} />
          </div>
        ))}
      </div>

      <div className="mt-[4rem] lg:mt-[7.6rem] mx-auto w-fit">
        <CallButton />
      </div>

      {activeCard && (
        <ServicePageCardOverlay
          icon={activeCard.icon}
          label={activeCard.label}
          description={activeCard.description}
          onClose={() => setActiveCard(null)}
        />
      )}
    </section>
  );
}