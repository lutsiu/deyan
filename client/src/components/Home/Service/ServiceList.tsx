import ServiceCard from "./ServiceCard";
import services from "../../../data/Services";

export default function ServiceList() {
  return (
    <div
      className="grid grid-cols-1  lg:grid-cols-3 gap-[6rem] lg:gap-[2.5rem]
                mt-[25.8rem]
                sm:mt-[25rem]
                2xl:mt-[44.7rem]" 
      role="list"
    >
      {services.slice(0,3).map((service, i) => (
        <ServiceCard key={i} {...service}/>
      ))}
    </div>
  );
}
