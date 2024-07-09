import { RxCross1 } from "react-icons/rx";
import LineChart from "../chart/line-chart";
import DataTable from "../data-table/data-table";

function PairCard({ data, modal, handleCloseModal }) {
  return (
    <div
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
            />
          </div>
        )}
      </div>
      <div className={modal ? "h-screen overflow-auto" : ""}>
        {/* LineChart component displaying historical price data */}
        <LineChart title={data.symbol} dataList={data.historicalPrice} />
        <DataTable data={data.historicalPrice} />
      </div>
    </div>
  );
}

export default PairCard;
