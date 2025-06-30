interface SectionTitleProps {
  title: string;
  id?: string;
  marginTop?: boolean // adds 10.4rem of margin top
}

export default function SectionTitle({ title, id, marginTop }: SectionTitleProps) {
  return (
    <header className={`text-center mb-[4.8rem] ${marginTop ? "mt-[10.4rem]" : ""}`}>
      <h2
        id={id}
        className="text-beige-200 uppercase font-bold text-[4rem] "
      >
        {title}
      </h2>
    </header>
  );
}
