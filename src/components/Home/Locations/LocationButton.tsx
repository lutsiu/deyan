import { Icon } from "@iconify/react"

interface Props {
  mapsUrl: string
}
export default function LocationButton({mapsUrl}: Props) {

  function onClick() {
    window.open(mapsUrl, "_blank") ;
  }

  return (
    <button
      className="bg-beige-200 flex gap-[0.8rem] py-[2rem] px-[1.6rem] rounded-[0.6rem] cursor-pointer"
      onClick={onClick}>
      <Icon 
        icon="logos:google-maps"
        width={24}
        height={35} />
        <span className="text-[2rem] text-green-600 font-medium">Открыть в Google Картах</span>
    </button>
  )
}