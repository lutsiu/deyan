import partners from "../../../data/Partners";

export default function PartnersList() {

  return (
    <div className="bg-beige-200 sm:px-[2.4rem] md:px-[4rem] lg:px-[5rem] xl:px-[7rem] 2xl:px-[12.8rem] py-[4rem]">
        <div className="py-[0.8rem] flex lg:gap-[5.2rem] xl:justify-between items-center  ">
          {partners.map((partner, i) => (
            <figure key={i} className='flex items-center justify-center'>
              <img 
                src={partner.src}
                alt={partner.alt}
                loading='lazy'
                className='object-contain h-full max-w-full w-fit' />
            </figure>
          ))}
        </div>
    </div>
  )
}