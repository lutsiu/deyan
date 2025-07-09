import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import AboutUsCarouselButton from "./AboutUsCarouselButton";

import carousel1 from "../../../../public/assets/carousel-1.jpg";
import carousel2 from "../../../../public/assets/carousel-2.jpg";
import carousel3 from "../../../../public/assets/carousel-3.jpg";
import carousel4 from "../../../../public/assets/carousel-4.jpg";
import carousel5 from "../../../../public/assets/carousel-5.jpg";
import carousel6 from "../../../../public/assets/carousel-6.jpg";
import carousel7 from "../../../../public/assets/carousel-7.jpg";

export default function AboutUsCarousel() {
  const images: string[] = [
    carousel1, carousel2, carousel3,
    carousel4, carousel5, carousel6, carousel7,
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center", loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const updateScrollButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", updateScrollButtons);
    updateScrollButtons();
  }, [emblaApi]);

  return (
    <>
      <div
        ref={emblaRef}
        className="mt-[10.4rem] overflow-hidden h-[29.2rem] sm:h-[unset] max-h-[71.1rem]"
      >
        <div className="flex h-full">
          {images.map((img, i) => (
            <div key={i} className="min-w-full flex justify-center h-full">
              <img
                src={img}
                loading="lazy"
                alt={`Slide ${i + 1} of worker`}
                className="w-full object-cover h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[4rem] flex justify-center items-center gap-[5.6rem]">
        <AboutUsCarouselButton
          direction="left"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        />
        <AboutUsCarouselButton
          direction="right"
          onClick={scrollNext}
          disabled={!canScrollNext}
        />
      </div>
    </>
  );
}
