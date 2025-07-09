import SectionTitle from "../components/Common/SectionTitle";
import PartnersList from "../components/Home/Partners/PartnersList";

export default function OurPartnersSection() {

  return (
    <section className="hidden lg:block" aria-label="Our partners">
      <SectionTitle marginTop={true} title="partners.title"/>
      <PartnersList/>
    </section>
  )
}