import { Icon } from "@iconify/react";

interface Props {
  icon: string;
  label: string;
}

export default function ServiceCard({ icon, label }: Props) {
  return (
    <article
      className="w-full relative bg-beige-200 rounded-[0.8rem] flex justify-center items-end pt-[9.2rem] pb-[4.8rem] text-center"
      role="listitem"
      aria-label={label}
    >
      <div className="absolute top-[-6rem] left-1/2 -translate-x-1/2 w-[12rem] h-[12rem] bg-green-600 flex justify-center items-center rounded-full">
        <Icon icon={icon} width={64} height={64} className="text-beige-200" />
      </div>

      <h3 className="text-black-600 font-medium text-[2.4rem]">{label}</h3>
    </article>
  );
}
