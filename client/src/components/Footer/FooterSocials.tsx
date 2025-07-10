import { Icon } from "@iconify/react";

export default function FooterSocials() {
  return (
    <div className="flex items-center gap-[1.6rem]">
      <a href="https://www.tiktok.com/@deyan_auto" target="_blank" rel="noopener noreferrer">
        <Icon
          icon="ic:baseline-tiktok"
          width={36}
          height={36}
          className="cursor-pointer"
        />
      </a>
      <a href="https://www.instagram.com/deyan_auto?igsh=ajdidDVscGV2ZWN5" target="_blank" rel="noopener noreferrer">
        <Icon
          icon="basil:instagram-solid"
          width={36}
          height={36}
          className="cursor-pointer"
        />
      </a>
      <a href="https://web.telegram.org/k/#@deyanauto1" target="_blank" rel="noopener noreferrer">
        <Icon
          icon="ri:telegram-fill"
          width={36}
          height={36}
          className="cursor-pointer"
        />
      </a>
      <a href="https://wa.me/48451547276" target="_blank" rel="noopener noreferrer">
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
