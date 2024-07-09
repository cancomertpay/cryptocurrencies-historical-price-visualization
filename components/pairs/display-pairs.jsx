"use client";

import { useMemo } from "react";
import { useCryptoContext } from "@/store/crypto-context";
import PairListItem from "./pair-list-item";
import PairCard from "./pair-card";

/**
 * DisplayPairs component displays a list of cryptocurrency pairs or a detailed view of a selected pair
 * based on the provided data and selected context from useCryptoContext.
 *
 * @param {Object} props - The component props
 * @param {Array} props.data - Array of cryptocurrency data, each item containing symbol and historicalPrice
 * @returns {JSX.Element} The rendered component
 */
function DisplayPairs({ data }) {
  const { startDate, endDate, selectedPair } = useCryptoContext();

  // Memoize the selected pair data to avoid unnecessary recalculations
  const selectedPairData = useMemo(() => {
    if (selectedPair.trim() === "" || selectedPair === "Pairs") return null;
    return data.find((item) => item.symbol === selectedPair);
  }, [selectedPair, data]);

  // Memoize the filtered data list to avoid unnecessary recalculations
  const filteredDataList = useMemo(() => {
    if (!selectedPairData) return [];
    return selectedPairData.historicalPrice.filter((entry) => {
      const date = new Date(entry.Date).getTime();
      return date >= startDate.getTime() && date <= endDate.getTime();
    });
  }, [selectedPairData, startDate, endDate]);

  if (!selectedPairData) {
    return (
      <ul className="grid gap-8 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-5">
        {data.map((item) => (
          <PairListItem
            key={item.symbol}
            symbol={item.symbol}
            dataList={item.historicalPrice}
          />
        ))}
      </ul>
    );
  }

  return (
    <PairCard
      data={{
        symbol: selectedPairData.symbol,
        historicalPrice: filteredDataList,
      }}
    />
  );
}

export default DisplayPairs;
