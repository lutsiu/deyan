import reviews from "../../../public/assets/reviews.png";

export default function HeroReviews() {
  return (
    <div className="flex gap-[1.4rem] items-center mt-[14rem]">
      <img
        src={reviews}
        alt="Customer rating with profile photos"
        width={224}
        height={64}
        loading="lazy"
      />
      <p className="text-[1.6rem] text-beige-200 uppercase">
        500+ довольных клиентов
      </p>
    </div>
  );
}
