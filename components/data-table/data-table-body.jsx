function DataTableBody({ sortedData }) {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {sortedData.map((item, index) => (
        <tr
          key={index}
          className="hover:bg-black/10 transition-all duration-300 ease-linear"
        >
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 w-1/6">
            {item.Date}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 w-1/6">
            {item.Price.toFixed(2)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 w-1/6">
            {item.Open.toFixed(2)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 w-1/6">
            {item.High.toFixed(2)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 w-1/6">
            {item.Low.toFixed(2)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 w-1/6">
            {item["Vol."]}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 w-1/6">
            {item["Change %"]}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default DataTableBody;
