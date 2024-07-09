/**
 * PaginationButtons component renders pagination controls for navigating through pages of data.
 *
 * @param {Object} props - The component props
 * @param {function} props.goToPage - Function to change the current page
 * @param {number} props.currentPage - The current page number
 * @param {function} props.getPageNumbers - Function to get an array of page numbers for pagination
 * @param {Array} props.sortedAndPaginatedData - Array of sorted and paginated data items
 * @param {number} props.pageSize - Number of data items per page
 * @param {number} props.totalPages - Total number of pages
 * @returns {JSX.Element} The rendered component
 */
function PaginationButtons({
  goToPage,
  currentPage,
  getPageNumbers,
  sortedAndPaginatedData,
  pageSize,
  totalPages,
}) {
  return (
    <div className="flex justify-center items-center mt-4 p-5 gap-5">
      <button
        onClick={() => goToPage(1)}
        disabled={currentPage === 1}
        aria-label="Go to first page"
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md cursor-pointer hover:drop-shadow-custom hover:bg-primary/50 hover:text-white/90 transition-all duration-300"
      >
        {"<<"}
      </button>
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md cursor-pointer hover:drop-shadow-custom hover:bg-primary/50 hover:text-white/90 transition-all duration-300"
      >
        Previous
      </button>
      <div className="flex space-x-2">
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            aria-label={`Go to page ${page}`}
            className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
              currentPage === page
                ? "text-white bg-primary drop-shadow-custom"
                : "hover:drop-shadow-custom hover:bg-primary/50 hover:text-white/90 text-gray-700 bg-gray-200"
            } rounded-md cursor-pointer`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={sortedAndPaginatedData.length < pageSize}
        aria-label="Go to next page"
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md cursor-pointer hover:drop-shadow-custom hover:bg-primary/50 hover:text-white/90 transition-all duration-300"
      >
        Next
      </button>
      <button
        onClick={() => goToPage(totalPages)}
        disabled={currentPage === totalPages || totalPages <= 1}
        aria-label="Go to last page"
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md cursor-pointer hover:drop-shadow-custom hover:bg-primary/50 hover:text-white/90 transition-all duration-300"
      >
        {">>"}
      </button>
    </div>
  );
}

export default PaginationButtons;
