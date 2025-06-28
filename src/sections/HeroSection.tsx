import reviews from '../../public/assets/reviews.png';
import carDesktop from '../../public/assets/car-desktop.png';
import CallButton from '../components/Common/CallButton';
export default function HeroSection() {

  return (
    <section className="w-full relative bg-green-600 overflow-hidden">
      {/* Text content */}
      <div className='pt-[10.2rem] px-[8.8rem] mx-auto'>
        <div className='flex flex-col gap-[3.2rem] text-beige-200 '>
          <h1 className='font-bold text-[9.6rem] uppercase leading-[120%]'>
            Премиум <br />
            Автосервис
          </h1>

          <p className='uppercase text-[2.4rem]'>    
            Быстро. Надёжно. Доступно.
          </p>

          <div>
            <CallButton />
          </div>
        </div>

        {/* Reviews */}
        <div className='flex gap-[1.4rem] items-center mt-[14rem]'>
          <img 
            src={reviews} 
            alt={"Clients reviews"}
            width={224}
            height={64} />
          <p className='text-[1.6rem] text-beige-200'>500+ довольных клиентов</p>
        </div>
      </div>

      {/* Car Image */}

      <div className='block absolute top-[10.4rem] right-0 pointer-events-none w-[73.2rem] h-[57.5rem]'>
        <img 
          src={carDesktop} 
          alt="Red BMW hero image"
          className="w-full h-auto select-none" />
      </div>
    </section>
  )
}