import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AboutUsCarouselButton from "./AboutUsCarouselButton";
import carouselImages from "../../../data/Carousel";
import ImageSkeleton from "../../Common/ImageSkeleton";

export default function AboutUsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center", loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const [loadedStates, setLoadedStates] = useState<boolean[]>(
    Array(carouselImages.length).fill(false)
  );

  const handleImageLoad = (index: number) => {
    setLoadedStates((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

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
        className="
          mt-[9.6rem]
          sm:mt-[10.4rem] 
          overflow-hidden 
          h-[29.2rem] 
          sm:h-[40rem] 
          md:h-[50rem] 
          lg:h-[71.1rem] 
          max-h-[71.1rem]
        "
      >
        <div className="flex h-full">
          {carouselImages.map((img, i) => (
            <div
              key={i}
              className="min-w-full flex justify-center items-center"
            >
              <div className="relative w-full h-full">
                {!loadedStates[i] && (
                  <ImageSkeleton className="w-full h-full rounded-none" />
                )}
                <img
                  src={img}
                  alt={`Slide ${i + 1} of worker`}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => handleImageLoad(i)}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    loadedStates[i] ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
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
