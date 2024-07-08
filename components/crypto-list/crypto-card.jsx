"use client";

import { useCryptoContext } from "@/store/crypto-context";
import { useModalContext } from "@/store/modal-context";
import {
  calculateHighestAverageDifference,
  calculateLowestAndHighestPrice,
} from "@/utils/helper-functions";

function CryptoCard({ symbol, dataList }) {
  const { startDate, endDate } = useCryptoContext();
  const { handleOpenModal } = useModalContext();

  // Filter the data based on the selected date range
  const filteredDataList = dataList.filter((entry) => {
    const date = new Date(entry.Date).getTime();
    return date >= startDate.getTime() && date <= endDate.getTime();
  });

  // Calculate the highest average difference and the lowest/highest prices
  const highestAverageDifference =
    calculateHighestAverageDifference(filteredDataList);
  const lowestAndHighestPrice =
    calculateLowestAndHighestPrice(filteredDataList);

  return (
    <li
      className="bg-white rounded-xl p-5 shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer hover:drop-shadow-custom"
      onClick={() =>
        handleOpenModal({ symbol, historicalPrice: filteredDataList })
      }
    >
      <h2 className="text-4xl font-bold text-primary pb-2">{symbol}</h2>
      <div>
        <p>
          Highest Average Difference:{" "}
          {highestAverageDifference.averageDifference}
        </p>
        <p>
          Percentage Value: {highestAverageDifference.percentageDifference}%
        </p>
      </div>
      <div>
        <p>Lowest price: {lowestAndHighestPrice.lowestPrice}</p>
        <p>Highest Price: {lowestAndHighestPrice.highestPrice}</p>
      </div>
    </li>
  );
}

export default CryptoCard;
