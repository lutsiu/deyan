import SectionTitle from "../components/Common/SectionTitle";
import AboutUsArticle from "../components/Home/AboutUs/AboutUsArticle";
import AboutUsCarousel from "../components/Home/AboutUs/AboutUsCarousel";

export default function AboutUsSection() {

  return (
    <section className="px-[8.8rem]">
      <SectionTitle title="про нас" marginTop={true}/>
      <AboutUsArticle/>
      <AboutUsCarousel/>
    </section>
  )
}