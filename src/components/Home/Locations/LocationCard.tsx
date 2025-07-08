import type { ILocationData } from "../../../types/LocationData";
import LocationButton from "./LocationButton";
import LocationMap from "./LocationMap";
import LocationTitle from "./LocationTitle";
import LocationAddress from "./LocationAddress";
import LocationDivider from "./LocationDivider";
export default function LocationCard(props: ILocationData) {

  const {title, address, mapsUrl, lat, lng, isLast} = props;

  return (
    <>
      <div className="flex flex-col gap-[1.6rem] sm:gap-[2.6rem] lg:gap-[3.2rem] items-start">
        <LocationTitle title={title}/>
        <LocationMap lat={lat} lng={lng} title={title}/>
        <LocationAddress address={address}/>
        <LocationButton mapsUrl={mapsUrl}/>
      </div>
      {!isLast && <LocationDivider/>}
    </>
  )
}