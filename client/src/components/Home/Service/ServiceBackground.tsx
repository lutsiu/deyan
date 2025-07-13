import servicesDesktop from "../../../../public/assets/services/services-dekstop.jpg";


export default function ServiceBackground() {
  return (
    <div className="absolute inset-0 z-0
                    md:px-[4rem] lg:px-[5rem] xl:px-[7rem] 2xl:px-[8.8rem]
                    top-[16.9rem] 2xl:top-[30.8rem]">
      <img
        src={servicesDesktop}
        alt="Engine's repare"
        className="w-full h-[28.5rem] md:h-[35rem] lg:h-[39rem] 2xl:h-[46.1rem] 
                  object-cover md:rounded-[0.8rem] "
      />
    </div>
  );
}
