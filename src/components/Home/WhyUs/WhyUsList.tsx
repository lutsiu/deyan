import type { IWhyUsCard } from "../../../types/WhyUsCardType";
import WhyUsCard from "../../../components/Home/WhyUs/WhyUsCard";

export default function WhyUsList() {
  
    const whyUsCards: IWhyUsCard[] = [
    {
      icon: "mdi-light:clock",
      title: "Скорость и Качество",
      description: "Оперативный сервис без потери в качестве — всегда вовремя и на высоком уровне.",
      background: "green",
    },
    {
      icon: "mdi-light:forum",
      title: "Общение без барьеров",
      description: "Три языка, один стандарт — удобство общения на русском, польском и английском.",
      background: "beige",
    },
    {
      icon: "mdi-light:thumb-up",
      title: "Прозрачность",
      description: "Честные цены, понятные условия и индивидуальный подход к каждому клиенту.",
      background: "green",
    },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2.4rem]">
        {whyUsCards.map((c, i) => (
          <WhyUsCard key={i} {...c}/>
        ))}
    </div>
  )
}