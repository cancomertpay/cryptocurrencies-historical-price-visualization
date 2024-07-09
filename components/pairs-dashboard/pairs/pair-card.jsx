import { RxCross1 } from "react-icons/rx";
import LineChart from "../chart/line-chart";
import DataTable from "../data-table/data-table";

function PairCard({ data, modal, handleCloseModal }) {
  let content;
  if (data.historicalPrice.length > 0) {
    content = (
      <>
        {/* LineChart component displaying historical price data */}
        <LineChart title={data.symbol} dataList={data.historicalPrice} />
        <DataTable data={data.historicalPrice} />
      </>
    );
  } else {
    content = (
      <p className="text-lg text-black/90 font-bold w-full h-full flex items-center justify-center">
        No data was found for this pair in this date range.
      </p>
    );
  }
  return (
    <div
      id={data.symbol}
      className={`relative bg-white w-full p-10 rounded-xl shadow-lg ${
        modal ? "mt-52" : "mt-20"
      }`}
    >
      <div className="w-full flex items-center justify-between pb-5 ">
        {/* Cryptocurrency symbol as modal title */}
        <h2 className="text-5xl text-primary font-bold">{data.symbol}</h2>
        {/* Close button */}
        {modal && (
          <div>
            <RxCross1
              className="cursor-pointer w-[24px] h-[24px] hover:text-primary transition-colors duration-300"
              onClick={handleCloseModal}
              aria-label="Close button"
            />
          </div>
        )}
      </div>
      <div className={modal ? "h-screen overflow-auto" : ""}>{content}</div>
    </div>
  );
}

export default PairCard;
