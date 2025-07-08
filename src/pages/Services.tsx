import CallButton from "../components/Common/CallButton";
import services from "../data/Services";
import ServiceCardPage from "../components/ServicePage/ServicePageCard";

export default function Services() {
  return (
    <main className="bg-green-600 px-[8.8rem] pt-[8rem] pb-[9.5rem] text-center ">
      <header>
        <h1 className="font-bold text-[4rem] text-beige-200 uppercase">наши услуги</h1>
      </header>
      <div className="mt-[7rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2.5rem]">
        {services.slice(0, 3).map((s, i) => (
          <ServiceCardPage key={i} {...s}  />
        ))}
      </div>

      <div className="mt-[7.6rem] mb-[5.6rem] flex justify-center gap-[2.5rem] flex-wrap">
        {services.slice(3).map((s, i) => (
          <div key={i} className="w-full md:w-[48%] lg:w-[32%]">
            <ServiceCardPage {...s}  />
          </div>
        ))}
      </div>

      <div className="mx-auto w-fit">
        <CallButton/>
      </div>
    </main>
  )
}