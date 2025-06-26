import logo from "../../../public/assets/logo.png";

export default function Logo() {
  return (
    <div className="w-[17.3rem] h-[6.3rem] md:w-[20rem] md:h-[8rem] lg:w-[25.8rem] lg:h-[10.4rem]">
      <img
        src={logo}
        alt="Deyan Auto Logo"
        className="w-full h-full"
      />
    </div>
  );
}

