import PhoneNumberCard from "../components/ContactPage/PhoneNumberCard"
import phoneNumbers from "../data/Phones"
export default function Contact() {
  return (
    <main className="bg-green-600 section-padding
                    pt-[11.2rem] pb-[24.4rem]
                    lg:pt-[12rem] lg:pb-[28.2rem]">
      <div className="bg-beige-200 rounded-[1.6rem] 
                        py-[3.95rem] lg:py-[1.85rem]
                        px-[6rem] lg:px-[17.7rem] 
                        lg:w-[62rem] lg:mx-auto
                        flex flex-col gap-[4rem]
      ">
        {phoneNumbers.map((p, i) => (
          <PhoneNumberCard {...p} key={i}/>
        ))}
      </div>
    </main>
  )
}