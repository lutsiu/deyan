import SectionTitle from "../components/Common/SectionTitle";
import AboutUsArticle from "../components/Home/AboutUs/AboutUsArticle";
import AboutUsCarousel from "../components/Home/AboutUs/AboutUsCarousel";

export default function AboutUsSection() {

  return (
    <section className="section-padding mt-[5.6rem] 2xl:mt-[0rem]" aria-label="About us">
      <div className="">
        <SectionTitle title="about.title" marginTop={true}/>
        <AboutUsArticle/>
      </div>
      <AboutUsCarousel/>
    </section>
  )
}