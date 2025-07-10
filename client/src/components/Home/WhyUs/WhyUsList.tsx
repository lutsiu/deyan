import whyUsCards from "../../../data/WhyUsCards";
import WhyUsCard from "./WhyUsCard/WhyUsCard";

export default function WhyUsList() {
  return (
    <div
      className="mt-[4rem] 2xl:mt-[0] grid grid-cols-1 lg:grid-cols-3 gap-[2.4rem]"
      role="list"
      aria-label="Reasons to choose us"  // Identifies this list of cards
    >
      {whyUsCards.map((c, i) => (
        <WhyUsCard key={i} {...c} />
      ))}
    </div>
  );
}
