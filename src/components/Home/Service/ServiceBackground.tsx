import servicesImage from "../../../../public/assets/services.jpg";


export default function ServiceBackground() {
  return (
    <div className="absolute inset-0 px-[8.8rem] z-0 top-[30.5rem]">
      <img
        src={servicesImage}
        alt="Engine's repare"
        className="w-full h-[46.1rem] object-cover rounded-[0.8rem]"
      />
    </div>
  );
}
