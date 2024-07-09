/**
 * Table header component for displaying column headers with sorting functionality.
 *
 * @param {Object} props - Component props.
 * @param {Function} props.requestSort - Function to request sorting based on column header.
 * @param {Function} props.getSortIcon - Function to retrieve sorting icon based on column header.
 * @returns {JSX.Element} Rendered table header component.
 */
function DataTableHead({ requestSort, getSortIcon }) {
  const headers = ["Date", "Price", "Open", "High", "Low", "Vol.", "Change %"];

  return (
    <thead className="bg-black/90">
      <tr>
        {headers.map((header) => (
          <th
            key={header}
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer"
            onClick={() => requestSort(header)}
          >
            {header} {getSortIcon(header)}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default DataTableHead;
