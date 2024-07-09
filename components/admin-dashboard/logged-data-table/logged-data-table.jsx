"use client";

import React, { useState, useMemo } from "react";
import LoggedDataTb from "./logged-data-tb";
import LoggedDataTh from "./logged-data-th";
import LoggedPaginationButtons from "./logged-pagination-buttons";

function LoggedDataTable({ loggedData }) {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Memoized paginated data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return loggedData.slice(startIndex, endIndex);
  }, [loggedData, currentPage, pageSize]);

  // Calculate total number of pages
  const totalPages = useMemo(
    () => Math.ceil(loggedData.length / pageSize),
    [loggedData.length, pageSize]
  );

  // Generates an array of page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }
    return pages;
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full flex flex-col items-center justify-between">
      <table className="min-w-full min-h-[653px] bg-black/90 rounded-b-xl shadow-md overflow-auto">
        <LoggedDataTh />
        <LoggedDataTb loggedData={paginatedData} />
      </table>
      <LoggedPaginationButtons
        goToPage={goToPage}
        currentPage={currentPage}
        getPageNumbers={getPageNumbers}
        totalPages={totalPages}
      />
    </div>
  );
}

export default LoggedDataTable;
