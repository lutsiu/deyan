import { useEffect, useRef, useState } from "react";
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
  const isVideo = media_type === "VIDEO";

  const [videoReady, setVideoReady] = useState(false);
  const [thumbnailReady, setThumbnailReady] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const imageSrc = thumbnail_url || media_url;

  // Preload video
  useEffect(() => {
    if (isVideo && media_url && !videoReady) {
      const video = document.createElement("video");
      video.src = media_url;
      video.preload = "auto";
      video.oncanplaythrough = () => setVideoReady(true);
    }
  }, [isVideo, media_url, videoReady]);

  // Preload thumbnail separately to ensure onLoad triggers
  useEffect(() => {
    if (imageSrc) {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => setThumbnailReady(true);
      img.onerror = () => setThumbnailReady(false);
    }
  }, [imageSrc]);

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (isVideo && videoReady && thumbnailReady) {
      e.preventDefault();
      setPlayVideo(true);
    }
  };

  const showSkeleton = isVideo && (!videoReady || !thumbnailReady);

  return (
    <article className="flex flex-col items-start gap-[2.4rem]">
      <div className="w-full h-[34.2rem] rounded-[0.8rem] overflow-hidden relative">
        {showSkeleton ? (
          <ImageSkeleton />
        ) : playVideo ? (
          <video
            ref={videoRef}
            src={media_url!}
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        ) : (
          <a
            href={permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full relative"
            onClick={handleClick}
          >
            <img
              src={imageSrc!}
              alt={caption || ""}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 text-xs rounded">
              ▶ {t("blog.play")}
            </div>
          </a>
        )}
      </div>

      <p className="text-[1.6rem] text-beige-200 font-manrope-regular">
        {caption || <span className="opacity-40">{t("blog.loading")}</span>}
      </p>
    </article>
  );
}
