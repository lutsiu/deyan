import SectionTitle from "../components/Common/SectionTitle";
import WhyUsList from "../components/Home/WhyUs/WhyUsList";

export default function WhyUsSection() {


  return (
    <section className="pt-[10.4rem] px-[8.8rem] overflow-hidden">
      <SectionTitle title="Почему именно мы"/>
      <WhyUsList/>
    </section>
  )
}