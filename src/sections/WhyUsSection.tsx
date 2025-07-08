import SectionTitle from "../components/Common/SectionTitle";
import WhyUsList from "../components/Home/WhyUs/WhyUsList";

export default function WhyUsSection() {


  return (
    <section className="mt-[10.6rem] sm:mt-[7rem] 2xl:mt-[0] section-padding overflow-hidden">
      <SectionTitle 
        title=
        { <>
          ПОЧЕМУ <br className="sm:hidden" />
          ИМЕННО МЫ
          </> 
        } 
        marginTop={true} 
      />
      <WhyUsList/>
    </section>
  )
}