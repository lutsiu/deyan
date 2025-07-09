import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  background: "beige" | "green";
}

export default function WhyUsCardTitle({ title, background }: Props) {
  const { t } = useTranslation();

  return (
    <h3
      className={`${
        background === "beige" ? "text-black-600" : "text-beige-200"
      } font-semibold text-[2rem] md:text-[2.4rem]`}
    >
      {t(title)}
    </h3>
  );
}
