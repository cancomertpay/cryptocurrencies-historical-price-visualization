import { fetchAllData } from "@/lib/actions";
import DisplayPairs from "./display-pairs";

async function PairContainer() {
  const data = await fetchAllData();

  if (!data) return;

  return <DisplayPairs data={data} />;
}

export default PairContainer;
