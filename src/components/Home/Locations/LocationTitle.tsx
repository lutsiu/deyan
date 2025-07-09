import { useTranslation } from "react-i18next";

interface Props {
  title: string;
}

export default function LocationTitle({ title }: Props) {
  const {t} = useTranslation();
  return (
    <h4 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] text-beige-200 font-medium">
      {t(`locations.${title}`)}
    </h4>
  );
}
