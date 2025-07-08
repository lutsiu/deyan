import { Icon } from "@iconify/react";

interface PageCardProps {
  icon: string;
  label: string;
}

export default function ServiceCardPage({ icon, label }: PageCardProps) {
  return (
    <article
      className="w-full relative bg-beige-200 rounded-[0.8rem] flex justify-center
                 items-end pt-[7.2rem] pb-[4.5rem] px-[2.4rem] text-center"
      role="listitem"
      aria-label={label}
    >
      <div
        className="absolute top-[-5.2rem] left-1/2 -translate-x-1/2
                   w-[10rem] h-[10rem] bg-green-500 flex justify-center items-center rounded-full"
      >
        <Icon icon={icon} width={40} height={40} className="text-beige-200" />
      </div>

      <h3 className="text-black-600 font-medium text-[2rem] lg:text-nowrap">
        {label}
      </h3>
    </article>
  );
}
