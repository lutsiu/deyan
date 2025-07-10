import { useTranslation } from "react-i18next";

interface SectionTitleProps {
  title: string | React.ReactNode;
  id?: string;         // Optional id for aria-labelledby
  marginTop?: boolean; // adds extra top margin
}

export default function SectionTitle({
  title,
  id,
  marginTop,
}: SectionTitleProps) {
  const { t } = useTranslation();
  const isString = typeof title === "string";

  return (
    // This header wraps the section’s title and serves as a region labelled by the heading
    <header
      className={`text-center sm:mb-[4.8rem] ${
        marginTop ? "sm:mt-[7rem] 2xl:mt-[10.4rem]" : ""
      }`}
      role="region"
      aria-labelledby={title as string}
    >
      <h2
        id={id}
        className="text-beige-200 uppercase font-bold text-[2.4rem] sm:text-[3rem] lg:text-[4rem]"
      >
        {isString ? t(title) : title}
      </h2>
    </header>
  );
}
