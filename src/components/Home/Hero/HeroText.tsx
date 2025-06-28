import CallButton from "../../Common/CallButton";

export default function HeroText() {
  return (
    <header className="flex flex-col gap-[3.2rem] text-beige-200">
      <h1 className="font-bold text-[9.6rem] uppercase leading-[120%]">
        Премиум <br />
        Автосервис
      </h1>
      <p className="uppercase text-[2.4rem]">
        Быстро. Надёжно. Доступно.
      </p>
      <div>
        <CallButton />
      </div>
    </header>
  );
}
