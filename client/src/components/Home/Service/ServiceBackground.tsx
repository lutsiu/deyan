import { useState } from "react";
import servicesDesktop from "../../../../public/assets/services/services-dekstop.jpg";
import servicesMobile from "../../../../public/assets/services/services-mobile.webp";
import ImageSkeleton from "../../Common/ImageSkeleton";

export default function ServiceBackground() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="absolute inset-0 z-0
                 md:px-[4rem] lg:px-[5rem] xl:px-[7rem] 2xl:px-[8.8rem]
                 top-[16.9rem] 2xl:top-[30.8rem]"
    >
      {/* Wrapper for consistent layout */}
      <div className="w-full h-[28.5rem] md:h-[35rem] lg:h-[39rem] 2xl:h-[46.1rem] relative">
        {!loaded && (
          <ImageSkeleton className="w-full h-full md:rounded-[0.8rem]" />
        )}

        <picture>
          <source
            srcSet={servicesDesktop}
            media="(min-width: 768px)"
            onLoad={() => setLoaded(true)}
          />
          <img
            src={servicesMobile}
            alt="Engine's repare"
            className={`w-full h-full object-cover md:rounded-[0.8rem] transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
          />
        </picture>
      </div>
    </div>
  );
}
