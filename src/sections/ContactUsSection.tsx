import ContactUsForm from "../components/Home/ContactUs/ContactUsForm";

export default function ContactUsSection() {

  return (
    <section className="px-[8.8rem] py-[10.4rem]">
      <div className="bg-beige-200 rounded-[0.6rem] px-[5.6rem] py-[5.1rem]"> 
        <h4 className="text-[3.2rem] font-semibold uppercase mb-[2.4rem]">написать нам</h4>
        <ContactUsForm/>
      </div>
    </section>
  )
}