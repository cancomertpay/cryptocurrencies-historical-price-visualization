import LoggedDataTable from "./logged-data-table/logged-data-table";
import { fetchLoggedData } from "@/lib/actions";

async function LoggedData() {
  const loggedData = await fetchLoggedData();
  return (
    <div className="lg:my-10 lg:mx-32">
      <h1 className="text-3xl text-end p-4 bg-black/80 text-white font-bold border-b border-primary rounded-t-xl">
        Logged Data
      </h1>
      <LoggedDataTable loggedData={loggedData} />
    </div>
  );
}

export default LoggedData;
