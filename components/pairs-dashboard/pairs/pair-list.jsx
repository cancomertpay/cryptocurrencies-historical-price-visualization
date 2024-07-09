"use client";

import { useMemo } from "react";
import PairListItem from "./pair-list-item";
import { calculateHighestAverageDifference } from "@/utils/helper-functions";

/**
 * PairList component renders a list of cryptocurrency pairs,
 * sorted by highest average difference.
 *
 * @param {Object} props - The component props
 * @param {Array} props.data - Array of cryptocurrency data
 * @returns {JSX.Element} The rendered component
 */
function PairList({ data }) {
  const sortedData = useMemo(() => {
    return sortDataByHighestAverageDifference(data);
  }, [data]);

  return (
    <ul className="grid gap-8 mt-36 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-5">
      {sortedData.map((item) => (
        <PairListItem
          key={item.symbol}
          symbol={item.symbol}
          dataList={item.historicalPrice}
        />
      ))}
    </ul>
  );
}

// Sort data by highest average difference
const sortDataByHighestAverageDifference = (data) => {
  return data.sort((a, b) => {
    const highestAvgDiffA = calculateHighestAverageDifference(
      a.historicalPrice
    ).averageDifference;
    const highestAvgDiffB = calculateHighestAverageDifference(
      b.historicalPrice
    ).averageDifference;
    return highestAvgDiffB - highestAvgDiffA;
  });
};

export default PairList;
