import SectionTitle from "../components/Common/SectionTitle";
import WhyUsList from "../components/Home/WhyUs/WhyUsList";

export default function WhyUsSection() {


  return (
    <section className="px-[8.8rem] overflow-hidden">
      <SectionTitle title="Почему именно мы" marginTop={true} />
      <WhyUsList/>
    </section>
  )
}