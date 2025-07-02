import { Icon } from "@iconify/react";

export default function FooterSocials() {
  return (
    <div className="flex items-center gap-[1.6rem]">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Icon
          icon="ic:baseline-tiktok"
          width={36}
          height={36}
          className="cursor-pointer"
        />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Icon
          icon="basil:instagram-solid"
          width={36}
          height={36}
          className="cursor-pointer"
        />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Icon
          icon="ri:telegram-fill"
          width={36}
          height={36}
          className="cursor-pointer"
        />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Icon
          icon="mingcute:whatsapp-fill"
          width={36}
          height={36}
          className="cursor-pointer"
        />
      </a>
    </div>
  );
}
