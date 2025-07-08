import carDesktop from "../../../../public/assets/car-desktop.png";
import carMobile from "../../../../public/assets/car-mobile.png";

export default function HeroImage() {
  return (
    <div
      className="absolute  right-0 pointer-events-none 
                top-[32rem]
                sm:top-[38rem]
                md:top-[45rem] lg:top-[48.6rem] 2xl:top-[10.4rem]
                w-[32.5rem] h-[24.72rem]
                car-mobile:w-[40rem] car-mobile:h-[30rem]
                sm:w-[50rem] sm:h-[50rem]
                md:w-[60rem]  md:h-[60rem]
                lg:w-[80rem] lg:h-[65rem]  
                2xl:w-[73.2rem] 2xl:h-[57.5rem]"
      aria-hidden="true"
    >
      <picture>
        {/* This source is used if screen is at least md */}
        <source srcSet={carDesktop} media="(min-width: 768px)" />
        {/* This img tag will be used by default (i.e., < md) */}
        <img
          src={carMobile}
          alt="Red BMW parked in auto service zone"
          className="w-full h-auto select-none"
          loading="eager"
          decoding="async"
        />
      </picture>
    </div>
  );
}
