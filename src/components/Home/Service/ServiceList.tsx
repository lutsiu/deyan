import ServiceCard from "./ServiceCard";
import services from "../../../data/Services";

export default function ServiceList() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2.5rem] mt-[44.7rem]"
      role="list"
    >
      {services.slice(0,3).map((service, i) => (
        <ServiceCard key={i} {...service} variant="section" />
      ))}
    </div>
  );
}
