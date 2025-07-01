interface Props {
  title: string;
}

export default function LocationTitle({ title }: Props) {
  return (
    <h4 className="text-[3.2rem] text-beige-200 font-medium">{title}</h4>
  );
}
