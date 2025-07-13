import { Trans, useTranslation } from "react-i18next";

export default function AboutUsArticle() {
  const { t } = useTranslation();
  t("about.paragraph1"); // Ensure Vite doesn't tree-shake it

  return (
    <article className="text-center mx-auto text-base sm:text-[1.8rem] lg:text-[2rem] text-beige-200 space-y-[3rem] lg:max-w-[99.5rem] 3xl:max-w-[120rem]">
      <p>
        <Trans i18nKey="about.paragraph1" components={{ bold: <strong /> }} />
      </p>
      <p>
        <Trans i18nKey="about.paragraph2" components={{ bold: <strong /> }} />
      </p>
    </article>
  );
}
