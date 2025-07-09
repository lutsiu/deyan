import { useTranslation } from "react-i18next";

interface Props {
  description: string;
  background: "beige" | "green";
}

export default function WhyUsCardDescription({ description, background }: Props) {
  const { t } = useTranslation();

  return (
    <p
      className={`${
        background === "beige" ? "text-black-600" : "text-beige-200"
      } font-normal text-[1.6rem]`}
    >
      {t(description)}
    </p>
  );
}
