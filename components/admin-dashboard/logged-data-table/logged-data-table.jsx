import LoggedDataTb from "./logged-data-tb";
import LoggedDataTh from "./logged-data-th";

function LoggedDataTable({ loggedData }) {
  return (
    <table className="min-w-full bg-white rounded-b-xl shadow-md overflow-hidden">
      <LoggedDataTh />
      <LoggedDataTb loggedData={loggedData} />
    </table>
  );
}

export default LoggedDataTable;
