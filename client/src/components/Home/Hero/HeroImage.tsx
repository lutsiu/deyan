import { useState } from "react";
import carDesktop from "../../../../public/assets/hero/car-desktop.webp";
import carMobile from "../../../../public/assets/hero/car-mobile.webp";
import ImageSkeleton from "../../Common/ImageSkeleton";

export default function HeroImage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="absolute right-0 pointer-events-none 
                 top-[32rem]
                 sm:top-[38rem]
                 md:top-[45rem] lg:top-[48.6rem] 2xl:top-[10.4rem]
                 w-[32.5rem] h-[24.72rem]
                 car-mobile:w-[40rem] car-mobile:h-[30rem]
                 sm:w-[50rem] sm:h-[50rem]
                 md:w-[60rem]  md:h-[60rem]
                 lg:w-[80rem] lg:h-[65rem]  
                 2xl:w-[73.2rem] 2xl:h-[57.5rem]"
      role="img"
      aria-label="Red BMW parked in auto service zone"
    >
      {!loaded && <ImageSkeleton className="rounded-md" />}

      <picture>
        <source
          srcSet={carDesktop}
          media="(min-width: 768px)"
          onLoad={() => setLoaded(true)} // triggers for <source> images
        />
        <img
          src={carMobile}
          alt="Dekstop car"
          className={`w-full h-auto select-none transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={() => setLoaded(true)} // triggers for fallback <img>
        />
      </picture>
    </div>
  );
}
