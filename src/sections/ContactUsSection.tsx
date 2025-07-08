import ContactUsForm from "../components/Home/ContactUs/ContactUsForm";

export default function ContactUsSection() {

  return (
    <section className="section-padding pt-[7.8rem] pb-[9.6rem] sm:pt-[0rem] sm:pb-[0rem] sm:py-[8.5rem] lg:py-[10.4rem]">
      <div className="bg-beige-200 rounded-[0.6rem] 
                      px-[3.2rem] sm:px-[4rem] 
                      lg:px-[5.6rem] 
                      py-[5.9rem]  md:py-[5.1rem]"> 
        <h4 className="text-[2.4rem] sm:text-[2.7rem] md:text-[3.2rem] font-semibold uppercase mb-[2.4rem]">написать нам</h4>
        <ContactUsForm/>
      </div>
    </section>
  )
}