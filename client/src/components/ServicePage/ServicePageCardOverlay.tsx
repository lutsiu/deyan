// components/ServicePage/ServiceCardPageOverlay.tsx
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface OverlayProps {
  icon: string;
  label: string;
  description: string;
  onClose: () => void;
}

export default function ServicePageCardOverlay({ icon, label, description, onClose }: OverlayProps) {
  const { t } = useTranslation();

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
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex justify-center 
                    items-center px-4"
          role="dialog" 
          aria-modal="true"
          onClick={onClose}
        
    >
      <div className="relative bg-beige-200 rounded-[0.8rem] max-w-2xl w-full max-h-[90vh] 
            pt-[6rem] pb-[4rem] px-6 text-center text-black-600 overflow-visible"
            onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-[0.5rem] right-[1.25rem] text-[2rem] text-black-400 hover:text-red-500 cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="absolute top-[-4.4rem] lg:top-[-5.2rem] left-1/2 -translate-x-1/2 w-[8.8rem] h-[8.8rem] lg:w-[10rem] lg:h-[10rem] bg-green-500 flex justify-center items-center rounded-full">
          <Icon icon={icon} width={40} height={40} className="text-beige-200" />
        </div>
        <h2 className="text-[2.4rem] font-bold mb-4 mt-4 lg:mt-8">{t(label)}</h2>
        <p className="text-[1.6rem] whitespace-pre-wrap">{t(description)}</p>
      </div>
    </div>
  );
}
