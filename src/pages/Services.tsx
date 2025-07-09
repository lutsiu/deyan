import CallButton from "../components/Common/CallButton";
import services from "../data/Services";
import ServiceCardPage from "../components/ServicePage/ServicePageCard";

export default function Services() {
  return (
    <main className="bg-green-600 px-[2.4rem] 
                      sm:px-[4rem] lg:px-[8.8rem] pt-[4.8rem] sm:pt-[6rem] lg:pt-[8rem] 
                      pb-[5.6rem] lg:pb-[9.5rem] text-center">
      <header>
        <h1 className="font-bold text-[2.4rem] sm:text-[3rem] lg:text-[4rem] text-beige-200 uppercase">
          наши услуги
        </h1>
      </header>

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