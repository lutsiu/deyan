import type { ILocationData } from "../types/LocationData"

const locations: ILocationData[] = [
  {
    title: "Центр Варшавы",
    address: "Skwer Kardynała Stefana Wyszyńskiego 1",
    mapsUrl: "https://www.google.com/maps/place/Skwer+Kardyna%C5%82a+Stefana+Wyszy%C5%84skiego+1,+01-015+Warszawa/@52.2392645,20.9801982,17z/data=!3m1!4b1!4m6!3m5!1s0x471ecc81b9909afd:0x49456684e54b1f1d!8m2!3d52.2392645!4d20.9827731!16s%2Fg%2F11c5c0r5x0?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D",
    lat: 52.239300,
    lng: 20.982823
  },
  {
    title: "Центр Старого города",
    address: "Długa 44/50",
    mapsUrl: "https://www.google.com/maps/place/D%C5%82uga+44%2F50,+00-241+Warszawa/@52.2463752,21.0032936,19.54z/data=!4m6!3m5!1s0x471ecc64cb418801:0x3d81414ed97adb6a!8m2!3d52.2462869!4d21.0032863!16s%2Fg%2F11s1bnw2by?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D",
    lat: 52.246220,
    lng: 21.003331
  },
  {
    title: "Пясечно",
    address: "Syrenki 26",
    mapsUrl: "https://www.google.com/maps/place/Syrenki+26,+05-500+Piaseczno/@52.0829864,21.0134813,17z/data=!3m1!4b1!4m6!3m5!1s0x47192e17b981d197:0x2b8b55cc8ef80f21!8m2!3d52.0829864!4d21.0160562!16s%2Fg%2F11h8trz3jh?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D",
    lat: 52.082995,
    lng: 21.016140
  }
];

export default locations;