import SectionTitle from "../components/Common/SectionTitle";
import AboutUsArticle from "../components/Home/AboutUs/AboutUsArticle";
import AboutUsCarousel from "../components/Home/AboutUs/AboutUsCarousel";

export default function AboutUsSection() {

  return (
    <section className="section-padding">
      <div className="hidden sm:block">
        <SectionTitle title="about.title" marginTop={true}/>
        <AboutUsArticle/>
      </div>
      <AboutUsCarousel/>
    </section>
  )
}