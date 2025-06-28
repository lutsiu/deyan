import HeroText from '../components/Hero/HeroText';
import HeroReviews from '../components/Hero/HeroReviews';
import HeroImage from '../components/Hero/HeroImage';
export default function HeroSection() {

  return (
    <section 
        className="w-full relative bg-green-600 overflow-hidden"
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