import reviews from "../../../../public/assets/reviews.png";

export default function HeroReviews() {
  return (
  <div className="flex flex-col sm:flex-row gap-[0.8rem] sm:gap-[1.4rem] sm:items-center
                 mt-[33.2rem] car-mobile:mt-[38rem] sm:mt-[47rem] md:mt-[60rem] lg:mt-[74rem] 2xl:mt-[14rem]">
      <img
        src={reviews}
        alt="Customer rating with profile photos"
        className="
        w-[13.6rem] h-[4rem]
        sm:w-[17.9rem] sm:h-[5.1rem]
        lg:w-[22.4rem] lg:h-[6.4rem]
        "
        loading="lazy"
      />
      <p className="text-[1.4rem] sm:text-[1.6rem] text-beige-200 uppercase">
        500+ довольных клиентов
      </p>
    </div>
  );
}
