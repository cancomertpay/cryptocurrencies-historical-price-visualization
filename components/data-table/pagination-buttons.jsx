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
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md cursor-pointer hover:drop-shadow-custom hover:bg-primary/50 hover:text-white/90  transition-all duration-300"
      >
        {"<<"}
      </button>
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md cursor-pointer hover:drop-shadow-custom hover:bg-primary/50 hover:text-white/90  transition-all duration-300"
      >
        Previous
      </button>
      <div className="flex space-x-2">
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
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
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md cursor-pointer hover:drop-shadow-custom hover:bg-primary/50 hover:text-white/90  transition-all duration-300"
      >
        Next
      </button>
      <button
        onClick={() => goToPage(totalPages)}
        disabled={currentPage === totalPages || totalPages <= 1}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md cursor-pointer hover:drop-shadow-custom hover:bg-primary/50 hover:text-white/90  transition-all duration-300"
      >
        {">>"}
      </button>
    </div>
  );
}

export default PaginationButtons;
