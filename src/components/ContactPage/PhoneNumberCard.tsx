import { Icon } from "@iconify/react"

interface Props {
  title: string
  phone: string
}

export default function PhoneNumberCard({ title, phone }: Props) {
  return (
    <article className="flex flex-col gap-[1.6rem] items-start sm:items-center ">
      <h4 className="text-[2rem] lg:text-[2.4rem] font-semibold text-nowrap">{title}</h4>
      <a href={`tel:${phone}`} 
          className="bg-green-500 font-normal text-beige-200 lg:w-[18.5rem]
                      inline-flex items-center gap-[0.8rem] 
                      px-[1.6rem] py-[0.8rem] 
                      rounded-[0.8rem]">
        <Icon 
          icon="mdi-light:phone"
          width={24}
          height={24}
        />
        <span className="text-[1.4rem] lg:text-[1.6rem]">{phone}</span>
      </a>
    </article>
  )
}
