import { Icon } from "@iconify/react";

interface Props {
  icon: string;         
  background: 'beige' | 'green'; // controls background
}

export default function WhyUsCardIcon({ icon, background }: Props) {
  return (
    // Decorative icon container
    <div
      className={`
        w-[8rem] h-[8rem]
        sm:w-[9rem] sm:h-[9rem]
        lg:w-[12rem] lg:h-[12rem] 
        flex items-center justify-center rounded-full
        ${background === "beige" ? "bg-green-500" : "bg-beige-200"}`}
      aria-hidden="true"
      role="presentation"
    >
      <Icon
        icon={icon}
        className={`
          ${background === "beige" ? "text-beige-200" : "text-green-600"}
            w-[4.8rem] h-[4.8rem]
            sm:w-[5rem] sm:h-[5rem]
            lg:w-[6.4rem] lg:h-[6.4rem] 
          `}
        aria-hidden="true" // ensure screen readers skip the graphic
      />
    </div>
  );
}
