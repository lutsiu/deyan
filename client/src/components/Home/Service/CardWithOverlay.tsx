// components/Home/Service/CardWithOverlay.tsx
import { useState } from "react";
import ServiceCard from "./ServiceCard"; // this is your original card
import ServiceCardOverlay from "./ServiceCardOverlay"; // this is the modal
import type { IServiceCard } from "../../../types/ServiceCardType";


export default function CardWithOverlay({ icon, label, description }: IServiceCard) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="" onClick={() => setOpen(true)}>
        <ServiceCard icon={icon} label={label} />
      </div>

      {open && (
        <ServiceCardOverlay
          icon={icon}
          label={label}
          description={description}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
