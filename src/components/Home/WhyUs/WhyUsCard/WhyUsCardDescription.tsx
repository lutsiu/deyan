interface Props {
  description: string;         
  background: 'beige' | 'green'; // controls background
}

export default function WhyUsCardDescription({description, background} : Props) {

  return (
    <p
      className={`${
        background === "beige" ? "text-black-600" : "text-beige-200"
      } font-normal text-[1.6rem]`}
    >
      {description}
    </p>
  )
}