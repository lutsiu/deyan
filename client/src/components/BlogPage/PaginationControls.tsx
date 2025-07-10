import { Icon } from "@iconify/react";
import PaginationButton from "./PaginationButton";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PaginationControls({ currentPage, totalPages, onPageChange }: Props) {
const getPageNumbers = (): (number | "...")[] => {
  const pages: (number | "...")[] = [];

  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    if (currentPage === 1) {
      pages.push(1, 2, 3, "...");

    } else if (currentPage === totalPages) {
      pages.push("...", totalPages - 2, totalPages - 1, totalPages);

    } else if (currentPage === 2) {
      pages.push(1, 2, 3, "...");

    } else if (currentPage === totalPages - 1) {
      pages.push("...", totalPages - 2, totalPages - 1, totalPages);

    } else {
      pages.push("...", currentPage - 1, currentPage, currentPage + 1, "...");
    }
  }

  return pages;
};

  return (
    <div className="flex justify-center items-center gap-[1.6rem] mt-[4rem] lg:mt-[6.4rem]">
      {currentPage > 1 && (
        <PaginationButton
          onClick={() => onPageChange(currentPage - 1)}
          ariaLabel="Previous Page"
        >
          <Icon icon="mdi-light:chevron-left" className="h-[2.4rem] w-[2.4rem] lg:h-[4rem] lg:w-[4rem]" />
        </PaginationButton>
      )}

      {getPageNumbers().map((item, index) => {
        if (item === "...") {
          return (
            <PaginationButton key={`ellipsis-${index}`} onClick={() => {}} ariaLabel="Ellipsis">
              ...
            </PaginationButton>
          );
        }

        return (
          <PaginationButton
            key={item}
            isActive={currentPage === item}
            onClick={() => onPageChange(item as number)}
            ariaLabel={`Page ${item}`}
          >
            {item}
          </PaginationButton>
        );
      })}

      {currentPage < totalPages && (
        <PaginationButton
          onClick={() => onPageChange(currentPage + 1)}
          ariaLabel="Next Page"
        >
          <Icon icon="mdi-light:chevron-right" className="h-[2.4rem] w-[2.4rem] lg:h-[4rem] lg:w-[4rem]" />
        </PaginationButton>
      )}
    </div>
  );
}
