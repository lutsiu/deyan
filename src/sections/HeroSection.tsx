import HeroText from '../components/Home/Hero/HeroText';
import HeroReviews from '../components/Home/Hero/HeroReviews';
import HeroImage from '../components/Home/Hero/HeroImage';
export default function HeroSection() {

  return (
    <section 
        className="w-full relative  overflow-hidden"
        aria-label="Premium auto repair service section"
    >
      <div className="
          pt-[6.4rem] md:pt-[8.5rem] 2xl:pt-[13.6rem] mx-auto
          section-padding
          relative z-10">
        <HeroText/>
        <HeroImage/>
        <HeroReviews/>
      </div>  
    </section>
  )
}