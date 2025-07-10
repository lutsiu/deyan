import type { IWhyUsCard } from "../../../../types/WhyUsCardType";
import WhyUsCardDescription from "./WhyUsCardDescription";
import WhyUsCardTitle from "./WhyUsCardTitle";
import WhyUsCardIcon from "./WhyUsICardcon";

export default function WhyUsCard({
  icon,
  title,
  description,
  background,
}: IWhyUsCard) {
  return (
    // Marks this as an item in the “Why Us” list and announces its title
    <article
      role="listitem"
      aria-label={`Преимущество: ${title}`}
      className={`${background === "beige" ? "bg-beige-200" : ""} 
        w-full py-[4rem] sm:py-[5rem] lg:py-[7.85rem] border-[0.2rem] border-beige-200 rounded-[1.5rem] `}
    >
      {/* Card content container */}
      <div className="max-w-[26.6rem] mx-auto flex flex-col gap-[2.4rem] items-center justify-center text-center">
        <WhyUsCardIcon background={background} icon={icon} />
        <WhyUsCardTitle background={background} title={title} />
        <WhyUsCardDescription background={background} description={description} />
      </div>
    </article>
  );
}
