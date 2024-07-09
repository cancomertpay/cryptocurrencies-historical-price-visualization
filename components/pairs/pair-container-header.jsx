import DatePicker from "../date-picker/date-picker";
import PairSelector from "./pair-selector";

function PairContainerHeader() {
  return (
    <>
      {/* PairSelector Component */}
      {/* Renders a select input for choosing a cryptocurrency pair. */}
      <PairSelector />

      {/* DatePicker Component */}
      {/* Renders a date picker for selecting a date range. */}
      <DatePicker />
    </>
  );
}

export default PairContainerHeader;
