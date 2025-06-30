import SectionTitle from "../components/Common/SectionTitle";
import PartnersList from "../components/Home/Partners/PartnersList";

export default function OurPartnersSection() {

  return (
    <section aria-label="Our partners">
      <SectionTitle marginTop={true} title="наши партнёры"/>
      <PartnersList/>
    </section>
  )
}