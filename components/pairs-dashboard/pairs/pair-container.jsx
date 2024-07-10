import { fetchAllData } from "@/lib/actions";
import DisplayPairs from "./display-pairs";

// PairContainer component fetches all cryptocurrency data and passes it to DisplayPairs component
async function PairContainer() {
  // Fetch all cryptocurrency data asynchronously
  const data = await fetchAllData();

  // If data fetching fails or returns null, render nothing
  if (!data) return null;

  // Render DisplayPairs component and pass fetched data as props
  return <DisplayPairs data={data} />;
}

export default PairContainer;
