import PhoneNumberCard from "../components/ContactPage/PhoneNumberCard"
import phoneNumbers from "../data/Phones"
export default function Contact() {
  return (
    <main className="bg-green-600 px-[8.8rem] pt-[12rem] pb-[28.2rem]">
      <div className="bg-beige-200 rounded-[1.6rem] py-[1.85rem]
                         px-[17.7rem] w-[62rem] mx-auto
                         flex flex-col gap-[4rem]
      ">
        {phoneNumbers.map((p, i) => (
          <PhoneNumberCard {...p} key={i}/>
        ))}
      </div>
    </main>
  )
}