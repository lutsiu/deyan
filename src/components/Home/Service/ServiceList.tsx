import ServiceCard from "./ServiceCard";
import type { IServiceCard } from "../../../types/ServiceCardType";

const services: IServiceCard[] = [
  { icon: "mingcute:tyre-line", label: "Шиномонтаж" },
  { icon: "mdi:car-repair", label: "Ремонт и Диагностика" },
  { icon: "fa-solid:motorcycle", label: "Ремонт и обслуживание мотоциклов" },
];

export default function ServiceList() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2.5rem] mt-[44.7rem]"
      role="list"
    >
      {services.map((service, i) => (
        <ServiceCard key={i} {...service} />
      ))}
    </div>
  );
}
