import { Icon } from "@iconify/react";
import { toast } from "react-toastify";

interface Props {
  address: string;
}

export default function LocationAddress({ address }: Props) {
  function copyToClipboard() {
    navigator.clipboard.writeText(address);
    toast("Адрес скопирован!");
  }

  return (
    <div className="text-beige-200 flex gap-[1.6rem] items-center">
      <div className="flex gap-[0.8rem] items-center">
        <Icon 
          icon="material-symbols-light:location-on-outline"
          width={40}
          height={40}
        />
        <span className="font-normal text-[2.4rem]">{address}</span>
      </div>
      <Icon  
        icon="material-symbols-light:content-copy-outline"
        width={32}
        height={32}
        className="cursor-pointer"
        onClick={copyToClipboard}
      />
    </div>
  );
}
