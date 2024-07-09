import { fetchAllData } from "@/lib/actions";
import DisplayPairs from "./display-pairs";

async function PairContainer() {
  const data = await fetchAllData();

  if (!data) return null;

  return <DisplayPairs data={data} />;
}

export default PairContainer;
