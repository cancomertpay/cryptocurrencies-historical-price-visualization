/**
 * PaginationButtons component renders pagination controls for navigating through pages.
 *
 * @param {Object} props - The component props
 * @param {Function} props.goToPage - Function to navigate to a specific page
 * @param {number} props.currentPage - The current page number
 * @param {Function} props.getPageNumbers - Function to generate an array of page numbers
 * @param {number} props.totalPages - Total number of pages
 * @returns {JSX.Element} The rendered component
 */
function LoggedPaginationButtons({
  goToPage,
  currentPage,
  getPageNumbers,
  totalPages,
}) {
  return (
    <div className="flex justify-center items-center mt-4 space-x-2">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md cursor-pointer hover:drop-shadow-custom hover:bg-primary/50 hover:text-white/90 transition-all duration-300"
      >
        Previous
      </button>
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
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md cursor-pointer hover:drop-shadow-custom hover:bg-primary/50 hover:text-white/90 transition-all duration-300"
      >
        Next
      </button>
    </div>
  );
}

export default LoggedPaginationButtons;
