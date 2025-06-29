import audi from '../../../../public/assets/audi.svg';
import bmw from '../../../../public/assets/bmw.svg';
import mercedes from '../../../../public/assets/mercedes.svg';
import toyota from '../../../../public/assets/toyota.svg';
import volkswagen from '../../../../public/assets/volkswagen.svg';
import porsche from '../../../../public/assets/porsche.png'; // porsche svg was 2.8, though i've downloaded png version
import type { IPartnerImage } from '../../../types/PartnerImageType';
export default function ist() {

  const partners: IPartnerImage[] = [
  { src: bmw, alt: "BMW Logo" },
  { src: audi, alt: "Audi Logo" },
  { src: mercedes, alt: "Mercedes-Benz Logo" },
  { src: volkswagen, alt: "Volkswagen Logo" },
  { src: porsche, alt: "Porsche Logo" },
  { src: toyota, alt: "Toyota Logo" },
];


  return (
    <div className="bg-beige-200 px-[12.8rem] py-[4rem]">
        <div className="py-[0.8rem] flex  gap-[5.2rem] items-center ">
          {partners.map((partner, i) => (
            <figure key={i} className=' flex items-center justify-center'>
              <img 
                src={partner.src}
                alt={partner.alt}
                loading='lazy'
                className='object-contain h-full max-w-full' />
            </figure>
          ))}
        </div>
    </div>
  )
}