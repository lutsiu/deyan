import SectionTitle from "../components/Common/SectionTitle"
import LocationCard from "../components/Home/Locations/LocationCard";
import locations from "../data/Locations";

export default function LocationsSection() {

  return (
    <section className="section-padding mt-[5.6rem] 2xl:mt-[0rem]">
      <SectionTitle title="локации" marginTop={true} />
      <div className="mt-[4rem] 2xl:mt-[0rem]">
        {locations.map((l, i) => (
          <LocationCard key={i} {...l} isLast={i === locations.length -1}/>
        ))}
      </div>
    </section>
  )
}