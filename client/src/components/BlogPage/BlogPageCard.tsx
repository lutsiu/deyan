interface Props {
  title: string
}


export default function BlogPageCard({title} : Props) {

  return (
    <article className="flex flex-col items-start gap-[2.4rem]">
      <div className="w-full h-[34.2rem] bg-gray-400 rounded-[0.8rem]">

      </div>
      <p className="text-[1.6rem] text-beige-200 font-manrope-regular">{title}</p>
    </article>
  )
}