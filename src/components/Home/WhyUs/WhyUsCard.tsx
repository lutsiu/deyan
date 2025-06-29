import type { IWhyUsCard } from "../../../types/WhyUsCardType";
import { Icon } from "@iconify/react";

export default function WhyUsCard({ icon, title, description, background }: IWhyUsCard) {
  return (
    <article
      role="listitem"
      aria-label={`Преимущество: ${title}`}
      className={`${background === "beige" ? "bg-beige-200" : ""} 
        w-full py-[7.85rem] border border-beige-200 rounded-[0.8rem] `}
    >
      <div className="max-w-[27.5rem] mx-auto flex flex-col gap-[2.4rem] items-center justify-center text-center">
        <div
          className={`w-[12rem] h-[12rem] flex items-center justify-center rounded-full
            ${background === "beige" ? "bg-green-600" : "bg-beige-200"}`}
        >
          <Icon
            icon={icon}
            width={64}
            height={64}
            className={`${background === "beige" ? "text-beige-200" : "text-green-600"}`}
            aria-hidden="true"
          />
        </div>

        <h3
          className={`${
            background === "beige" ? "text-black-600" : "text-beige-200"
          } font-semibold text-[2.4rem]`}
        >
          {title}
        </h3>

        <p
          className={`${
            background === "beige" ? "text-black-600" : "text-beige-200"
          } font-normal text-[1.6rem]`}
        >
          {description}
        </p>
      </div>
    </article>
  );
}
