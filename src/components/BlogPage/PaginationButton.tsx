interface Props {
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
  ariaLabel?: string;
}

export default function PaginationButton({ children, onClick, isActive = false, ariaLabel }: Props) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`w-[3.2rem] h-[3.2rem] sm:w-[6.4rem] sm:h-[6.4rem] rounded-full flex justify-center items-center 
                  text-[1.6rem] lg:text-[2rem] font-medium transition-colors cursor-pointer
                  ${isActive ? "bg-beige-200 text-green-500" : "bg-green-500 text-beige-200"}`}
    >
      {children}
    </button>
  );
}
