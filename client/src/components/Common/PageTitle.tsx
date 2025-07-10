import { useTranslation } from "react-i18next"

interface Props {
  title: string
}

export default function PageTitle({title}: Props) {
  const {t} = useTranslation();

  return (
    <header>
      <h1 className="font-bold text-[2.4rem] sm:text-[3rem] lg:text-[4rem] text-beige-200 uppercase">
        {t(`${title}`)}
      </h1>
    </header>
  )
}