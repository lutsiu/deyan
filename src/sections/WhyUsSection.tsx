import { useTranslation } from "react-i18next";
import SectionTitle from "../components/Common/SectionTitle";
import WhyUsList from "../components/Home/WhyUs/WhyUsList";

export default function WhyUsSection() {
  const { t } = useTranslation();

  return (
    <section className="mt-[10.6rem] sm:mt-[7rem] 2xl:mt-[0] section-padding overflow-hidden">
      <SectionTitle
        title={
          <>
            {t("why.title.first")} <br className="sm:hidden" />
            {t("why.title.second")}
          </>
        }
        marginTop={true}
      />
      <WhyUsList />
    </section>
  );
}
