import { Icon } from "@iconify/react"
import { useTranslation } from "react-i18next";

interface Props {
  mapsUrl: string
}
export default function LocationButton({mapsUrl}: Props) {
  const { t } = useTranslation();
  function onClick() {
    window.open(mapsUrl, "_blank") ;
  }

  return (
    <button
      className="bg-beige-200 flex gap-[0.8rem] items-center
                  py-[0.8rem] sm:py-[1.2rem] lg:py-[2rem] 
                  px-[1.6rem] rounded-[0.6rem] cursor-pointer"
      onClick={onClick}>
      <Icon 
        icon="logos:google-maps"
        className="w-[2rem] h-[2.9rem] lg:w-[2.4rem] lg:h-[3.5rem]"
      />
        <span className="text-[1.6rem] sm:text-[1.8rem] lg:text-[2rem] text-green-600 font-medium">
          {t("locations.openInMaps")}
        </span>
    </button>
  )
}