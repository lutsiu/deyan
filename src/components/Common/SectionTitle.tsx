interface SectionTitleProps {
  title: string | React.ReactNode;
  id?: string;
  marginTop?: boolean // adds 10.4rem of margin top
}

export default function SectionTitle({ title, id, marginTop }: SectionTitleProps) {
  return (
    <header className={`text-center 2xl:mb-[4.8rem] ${marginTop ? "2xl:mt-[10.4rem]" : ""}`}>
      <h2
        id={id}
        className="text-beige-200 uppercase font-bold text-[2.4rem] sm:text-[3rem] lg:text-[4rem]"
      >
        {title}
      </h2>
    </header>
  );
}
