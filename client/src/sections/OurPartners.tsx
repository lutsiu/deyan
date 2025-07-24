import SectionTitle from "../components/Common/SectionTitle";
import PartnersList from "../components/Home/Partners/PartnersList";

export default function OurPartnersSection() {

  return (
    <section className="mt-[5.6rem] 2xl:mt-[0rem]" aria-label="Our partners">
      <SectionTitle marginTop={true} title="partners.title"/>
      <PartnersList/>
    </section>
  )
}