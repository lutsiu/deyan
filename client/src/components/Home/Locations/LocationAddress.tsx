import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

interface Props {
  address: string;
}

export default function LocationAddress({ address }: Props) {
  const { t } = useTranslation();

  function copyToClipboard() {
    navigator.clipboard.writeText(address);
    toast.success(t("toast.addressCopied"));
  }

  return (
    <div className="text-beige-200 flex gap-[0.8rem] sm:gap-[1.2rem] lg:gap-[1.6rem] items-center">
      <div className="flex gap-[0.8rem] items-center">
        <Icon 
          icon="material-symbols-light:location-on-outline"
          width={40}
          height={40}
        />
        <span className="w-[19rem] sm:w-full font-normal text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem]">
          {address}
        </span>
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
