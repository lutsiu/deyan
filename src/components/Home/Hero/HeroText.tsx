import CallButton from "../../Common/CallButton";

export default function HeroText() {
  return (
    <header className="flex flex-col gap-[2.4rem] md:gap-[2.8rem] lg:gap-[3.2rem] text-beige-200">
      <h1 
        className="font-bold text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] 
                    lg:text-[8.5rem] xl:text-[9.6rem] uppercase
                    leading-[140%] md:leading-[120%]">
        <span className="block sm:hidden">Автосервис<br />в Варшаве</span>

        {/* Visible sm and above */}
        <span className="hidden sm:block">Премиум<br />Автосервис</span>
      </h1>
      <p className="uppercase text-[1.6rem] sm:text-[2rem] md:text-[2.4rem]">
        Быстро. Надёжно. Доступно.
      </p>
      <div>
        <CallButton />
      </div>
    </header>
  );
}
