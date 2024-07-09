import { formatDateTime } from "@/utils/helper-functions";

function LoggedDataTb({ loggedData }) {
  return (
    <tbody className="bg-black/90 text-white/90 font-bold">
      {loggedData.map((logData, index) => (
        <tr key={index} className="border-b border-primary">
          <td className="py-2 px-4 border-r border-primary">
            {formatDateTime(logData.startDate)}
          </td>
          <td className="py-2 px-4 border-r border-primary">
            {formatDateTime(logData.endDate)}
          </td>
          <td className="py-2 px-4">{formatDateTime(logData.instantDate)}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default LoggedDataTb;
