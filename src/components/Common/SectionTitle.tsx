interface SectionTitleProps {
  title: string;
  id?: string;
}

export default function SectionTitle({ title, id }: SectionTitleProps) {
  return (
    <header className="text-center mb-[4.8rem]">
      <h2
        id={id}
        className="text-beige-200 uppercase font-bold text-[4rem] "
      >
        {title}
      </h2>
    </header>
  );
}
