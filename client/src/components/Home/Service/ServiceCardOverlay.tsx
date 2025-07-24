import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface ServiceCardOverlayProps {
  icon: string;
  label: string; // i18n key
  description: string; // i18n key
  onClose: () => void;
}

export default function ServiceCardOverlay({ icon, label, description, onClose }: ServiceCardOverlayProps) {
  const { t } = useTranslation();
  const translatedLabel = t(label);
  const translatedDesc = t(description);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex justify-center items-center px-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative bg-beige-200 rounded-[0.8rem] max-w-2xl w-full max-h-[90vh] pt-[6rem] pb-[4rem] px-6
                   text-center text-black-600 overflow-visible"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[0.5rem] right-[1.25rem] text-[2rem] text-black-400 hover:text-red-500 cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Floating Icon */}
        <div
          className="absolute top-[-4rem] lg:top-[-6rem] left-1/2 -translate-x-1/2
                     w-[8.8rem] h-[8.8rem]
                     lg:w-[12rem] lg:h-[12rem]
                     bg-green-500 flex justify-center items-center rounded-full"
        >
          <Icon
            icon={icon}
            aria-hidden="true"
            className="text-beige-200 w-[4rem] h-[4rem] lg:w-[6.4rem] lg:h-[6.4rem]"
          />
        </div>

        {/* Title */}
        <h2 className="text-[2.4rem] font-bold mb-4 mt-4 lg:mt-8">
          {translatedLabel}
        </h2>

        {/* Description */}
        <p className="text-[1.6rem] whitespace-pre-wrap">
          {translatedDesc}
        </p>
      </div>
    </div>
  );
}
