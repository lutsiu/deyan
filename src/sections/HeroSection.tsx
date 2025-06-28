import HeroText from '../components/Home/Hero/HeroText';
import HeroReviews from '../components/Home/Hero/HeroReviews';
import HeroImage from '../components/Home/Hero/HeroImage';
export default function HeroSection() {

  return (
    <section 
        className="w-full relative  overflow-hidden"
        aria-label="Premium auto repair service section"
    >
      {/* Text content */}
      <div className='pt-[13.2rem] px-[8.8rem] mx-auto'>
        <HeroText/>
        <HeroReviews/>
      </div>  
      <HeroImage/>
    </section>
  )
}