import { useTranslation } from "react-i18next";
import SectionTitle from "../components/Common/SectionTitle";
import WhyUsList from "../components/Home/WhyUs/WhyUsList";

export default function WhyUsSection() {
  const { t } = useTranslation();

  return (
    <section
      className="mt-[10.6rem] sm:mt-[7rem] 2xl:mt-[0] section-padding overflow-hidden"
      role="region"
      aria-label="Why Us section"
      aria-labelledby="whyus-heading"
    >
      {/* Section heading for “Why Us” */}
      <SectionTitle
        id="whyus-heading"
        title={
          <>
            {t("why.title.first")} <br className="sm:hidden" />
            {t("why.title.second")}
          </>
        }
        marginTop
      />
      <WhyUsList />
    </section>
  );
}
