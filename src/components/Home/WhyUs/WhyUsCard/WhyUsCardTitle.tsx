interface Props {
  title: string;         
  background: 'beige' | 'green'; // controls background
}

export default function WhyUsCardTitle({title, background} : Props) {

  return (
    <h3
      className={`${
        background === "beige" ? "text-black-600" : "text-beige-200"
      } font-semibold text-[2rem] md:text-[2.4rem]`}
    >
      {title}
    </h3>
  )
}