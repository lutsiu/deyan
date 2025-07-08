export interface ILocationData {
  title: string, // title of location itself
  address: string, // address to copy below the map
  mapsUrl: string, // Google maps url 
  lat: number, // latitude
  lng: number, // longtitude
  isLast?: boolean
}