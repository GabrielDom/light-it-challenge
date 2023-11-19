import React from "react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

interface PaginationProps {
  patientsPerPage: number;
  totalPatients: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  patientsPerPage,
  totalPatients,
  // currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPatients / patientsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ToggleGroup type="single">
      {pageNumbers.map((number) => (
        <ToggleGroupItem
          key={number}
          value={number.toString()}
          aria-label={`Go to page ${number}`}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default Pagination;
