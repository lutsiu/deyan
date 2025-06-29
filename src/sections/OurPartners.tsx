import SectionTitle from "../components/Common/SectionTitle";
import PartnersList from "../components/Home/Partners/PartnersList";

export default function OurPartnersSection() {

  return (
    <section className="pt-[10.4rem]" aria-label="Our partners">
      <SectionTitle title="наши партнёры"/>
      <PartnersList/>
    </section>
  )
}