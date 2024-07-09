"use client";

import React, { useEffect, useState, useMemo } from "react";
import DataTableHead from "./data-table-head";
import DataTableBody from "./data-table-body";
import { useCryptoContext } from "@/store/crypto-context";
import PaginationButtons from "./pagination-buttons";

/**
 * DataTable component displays a table of cryptocurrency data with sorting and pagination features.
 *
 * @param {Object} props - The component props
 * @param {Array} props.data - Array of cryptocurrency data objects
 * @returns {JSX.Element} The rendered component
 */
function DataTable({ data }) {
  const { startDate, endDate, selectedPair } = useCryptoContext();

  const pageSize = 10; // Number of data items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [sortConfig, setSortConfig] = useState({
    key: "Date", // Default sorting key
    direction: "descending", // Default sorting direction
  });

  // Memoized sorted and paginated data
  const sortedAndPaginatedData = useMemo(() => {
    // Create a copy of data to avoid mutating the original
    let sortableItems = [...data];

    // Sorting operation
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        // Handle numeric values
        if (sortConfig.key === "Vol.") {
          // Check if values are valid strings for parsing
          aValue =
            typeof aValue === "string"
              ? parseInt(aValue.replace(/,/g, ""), 10)
              : aValue;
          bValue =
            typeof bValue === "string"
              ? parseInt(bValue.replace(/,/g, ""), 10)
              : bValue;
        } else if (sortConfig.key === "Change %") {
          // Check if values are valid strings for parsing
          aValue = typeof aValue === "string" ? parseFloat(aValue) : aValue;
          bValue = typeof bValue === "string" ? parseFloat(bValue) : bValue;
        }

        // Compare based on sorting direction
        if (aValue < bValue) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    // Pagination operation
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return sortableItems.slice(startIndex, endIndex);
  }, [data, sortConfig, currentPage]);

  /**
   * Handles sorting requests for table columns.
   *
   * @param {string} key - The key of the column to sort by
   */
  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key) {
      direction =
        sortConfig.direction === "ascending" ? "descending" : "ascending";
    }
    setSortConfig({ key, direction });
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  /**
   * Returns the sorting icon for a given column key.
   *
   * @param {string} key - The key of the column
   * @returns {string|null} - The sorting icon or null
   */
  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? "↑" : "↓";
    }
    return null;
  };

  /**
   * Changes the current page.
   *
   * @param {number} page - The page number to navigate to
   */
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Calculate total number of pages
  const totalPages = useMemo(
    () => Math.ceil(data.length / pageSize),
    [data.length, pageSize]
  );

  /**
   * Generates an array of page numbers for pagination.
   *
   * @returns {number[]} - Array of page numbers
   */
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

  // Reset to first page when context values change
  useEffect(() => {
    setCurrentPage(1);
  }, [startDate, endDate, selectedPair]);

  return (
    <div className="mt-20">
      {sortedAndPaginatedData.length > 0 && (
        <div className="overflow-x-auto shadow-md rounded-lg min-h-[717px] h-full flex flex-col">
          {/* Sorting information display */}
          <div className="text-end p-2 bg-black/80 text-white font-bold border-b border-primary">
            {sortConfig.key && (
              <div>
                Sorted by {sortConfig.key} ({sortConfig.direction})
              </div>
            )}
          </div>
          <div className="flex-grow flex flex-col justify-between h-full">
            {/* Table structure */}
            <table className="min-w-full divide-y divide-gray-200">
              {/* Table header */}
              <DataTableHead
                requestSort={requestSort}
                getSortIcon={getSortIcon}
              />
              {/* Table body */}
              <DataTableBody sortedData={sortedAndPaginatedData} />
            </table>
            {/* Pagination buttons */}
            <PaginationButtons
              goToPage={goToPage}
              currentPage={currentPage}
              getPageNumbers={getPageNumbers}
              sortedAndPaginatedData={sortedAndPaginatedData}
              pageSize={pageSize}
              totalPages={totalPages}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DataTable;
