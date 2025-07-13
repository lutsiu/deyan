import { useState } from "react";
import { useTranslation } from "react-i18next";
import reviews from "../../../../public/assets/reviews.png";
import ImageSkeleton from "../../Common/ImageSkeleton";

export default function HeroReviews() {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);

  const imageStyles = `w-[13.6rem] h-[4rem]
                       sm:w-[17.9rem] sm:h-[5.1rem]
                       lg:w-[22.4rem] lg:h-[6.4rem]`;

  return (
    <div
      className="flex flex-col sm:flex-row gap-[0.8rem] sm:gap-[1.4rem] sm:items-center
                 mt-[33.2rem] car-mobile:mt-[38rem] sm:mt-[47rem] md:mt-[60rem] lg:mt-[74rem] 2xl:mt-[14rem]"
      role="region"
      aria-label="Customer reviews and ratings"
    >
      {/* Image wrapper keeps layout stable */}
      <div className={imageStyles}>
        {!loaded && <ImageSkeleton className="w-full h-full rounded-sm" />}
        <img
          src={reviews}
          alt="Customer rating with profile photos"
          className={`w-full h-full transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
      </div>

      <p className="text-[1.4rem] sm:text-[1.6rem] text-beige-200 uppercase">
        <span className="font-bold">500+&nbsp;</span>
        {t("hero.clients")}
      </p>
    </div>
  );
}
