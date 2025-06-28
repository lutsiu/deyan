import carDesktop from "../../../../public/assets/car-desktop.png";

export default function HeroImage() {
  return (
    <div
      className="block absolute top-[10.4rem] right-0 pointer-events-none w-[73.2rem] h-[57.5rem]"
      aria-hidden="true"
    >
      <img
        src={carDesktop}
        alt="Red BMW parked in auto service zone"
        className="w-full h-auto select-none"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
