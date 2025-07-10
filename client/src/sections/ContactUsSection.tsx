import { useTranslation } from "react-i18next";
import ContactUsForm from "../components/Home/ContactUs/ContactUsForm";

export default function ContactUsSection() {
  const { t } = useTranslation();

  return (
    <section
      className="section-padding pb-[9.6rem] pt-[7.8rem] lg:pt-[10.4rem] lg:pb-[10.1rem]"
      role="region"
      aria-label="Contact us section"
      aria-labelledby="contactus-heading"
    >
      <div
        className="bg-beige-200 rounded-[0.6rem] 
                   px-[3.2rem] sm:px-[4rem] 
                   lg:px-[5.6rem] 
                   py-[5.9rem] md:py-[5.1rem]"
      >
        {/* Section heading */}
        <h4
          id="contactus-heading"
          className="text-[2.4rem] sm:text-[2.7rem] md:text-[3.2rem] font-semibold uppercase mb-[2.4rem]"
        >
          {t("form.title")}
        </h4>
        <ContactUsForm />
      </div>
    </section>
  );
}
