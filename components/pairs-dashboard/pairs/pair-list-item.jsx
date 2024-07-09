"use client";

import { useMemo } from "react";
import { useCryptoContext } from "@/store/crypto-context";
import { useModalContext } from "@/store/modal-context";
import {
  calculateHighestAverageDifference,
  calculateLowestAndHighestPrice,
} from "@/utils/helper-functions";

/**
 * PairListItem component displays a summary of a cryptocurrency pair,
 * including the highest average difference and the lowest/highest prices.
 *
 * @param {Object} props - The component props
 * @param {string} props.symbol - The symbol of the cryptocurrency pair
 * @param {Array} props.dataList - Array of historical price data for the cryptocurrency pair
 * @returns {JSX.Element} The rendered component
 */
function PairListItem({ symbol, dataList }) {
  const { startDate, endDate } = useCryptoContext();
  const { handleOpenModal } = useModalContext();

  // Memoize the filtered data list to avoid unnecessary recalculations
  const filteredDataList = useMemo(() => {
    return dataList.filter((entry) => {
      const date = new Date(entry.Date).getTime();
      return date >= startDate.getTime() && date <= endDate.getTime();
    });
  }, [dataList, startDate, endDate]);

  // Memoize the calculations to avoid unnecessary recalculations
  const highestAverageDifference = useMemo(() => {
    return calculateHighestAverageDifference(filteredDataList);
  }, [filteredDataList]);

  const lowestAndHighestPrice = useMemo(() => {
    return calculateLowestAndHighestPrice(filteredDataList);
  }, [filteredDataList]);

  // Skip rendering if highestAverageDifference is 0.000
  if (highestAverageDifference.averageDifference === "0.000") {
    return null;
  }

  return (
    <li
      className="bg-black/90 rounded-xl p-5 shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer hover:drop-shadow-custom"
      onClick={() =>
        handleOpenModal({ symbol, historicalPrice: filteredDataList })
      }
    >
      <h2 className="text-2xl font-bold text-primary pb-2">{symbol}</h2>
      <div className="font-md text-sm text-white">
        <p>
          Highest Av. Difference:{" "}
          <span className="font-bold text-primary">
            {highestAverageDifference.averageDifference}
          </span>
        </p>
        <p>
          Percentage Value:{" "}
          <span className="font-bold text-primary">
            {highestAverageDifference.percentageDifference}%
          </span>
        </p>
      </div>
      <div className="text-white/90 font-bold text-sm">
        <p>
          Lowest price:{" "}
          <span className="font-bold text-primary">
            {lowestAndHighestPrice.lowestPrice}
          </span>
        </p>
        <p>
          Highest Price:{" "}
          <span className="font-bold text-primary">
            {lowestAndHighestPrice.highestPrice}
          </span>
        </p>
      </div>
    </li>
  );
}

export default PairListItem;
