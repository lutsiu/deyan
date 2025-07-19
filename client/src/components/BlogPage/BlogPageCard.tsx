import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { InstagramPost } from "../../types/InstagramPostType";
import ImageSkeleton from "../Common/ImageSkeleton";

export default function BlogPageCard({
  caption,
  media_type,
  media_url,
  thumbnail_url,
  permalink,
}: Partial<InstagramPost>) {
  const { t } = useTranslation();
  const isLoading = !media_url;
  const isVideo = media_type === "VIDEO";
  const [playVideo, setPlayVideo] = useState(false);
  const imageSrc = isVideo && thumbnail_url ? thumbnail_url : media_url;

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (isVideo) {
      e.preventDefault();
      setPlayVideo(true);
    }
  };

  return (
    <article className="flex flex-col items-start gap-[2.4rem]">
      <div className="w-full h-[34.2rem] rounded-[0.8rem] overflow-hidden relative">
        {isLoading ? (
          <ImageSkeleton />
        ) : isVideo && playVideo ? (
          <video
            controls
            autoPlay
            className="w-full h-full object-cover"
            src={media_url!}
          />
        ) : (
          <a
            href={permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
            onClick={handleClick}
          >
            <img
              src={imageSrc!}
              alt={caption || ""}
              className="w-full h-full object-cover"
            />
            {isVideo && (
              <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 text-xs rounded">
                ▶ {t("blog.play")}
              </div>
            )}
          </a>
        )}
      </div>
      <p className="text-[1.6rem] text-beige-200 font-manrope-regular">
        {caption || <span className="opacity-40">{t("blog.loading")}</span>}
      </p>
    </article>
  );
}
