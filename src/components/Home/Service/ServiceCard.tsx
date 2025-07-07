import { Icon } from "@iconify/react";

interface Props {
  icon: string;
  label: string;
  variant: "section" | "page";
}

export default function ServiceCard({ icon, label, variant }: Props) {

  const isPage = variant === "page";

  return (
    <article
      className={`
        w-full relative bg-beige-200 rounded-[0.8rem] flex justify-center
        items-end ${isPage ? "pt-[7.2rem]" : "pt-[9.2rem]"} ${isPage ? 'pb-[4.5rem]': "pb-[4.8rem]"} text-center  
        ${isPage ? "px-[2.4rem]" : ""}
      `}
      role="listitem"
      aria-label={label}
    >
      <div className={`
        absolute ${isPage ? "top-[-5.2rem]" : "top-[-6rem]"} 
        left-1/2 -translate-x-1/2 ${isPage ? "w-[10rem]": "w-[12rem]"} ${isPage ? "h-[10rem]": "h-[12rem]"}
        bg-green-500 flex justify-center items-center rounded-full  
        
      `}>
        <Icon icon={icon} width={isPage? 40: 64} height={isPage? 40: 64} className="text-beige-200" />
      </div>

      <h3 className={`
        text-black-600 font-medium text-${isPage ?"[2rem]": "[2.4rem]"}  lg:text-nowrap 
      `}>{label}</h3>
    </article>
  );
}
