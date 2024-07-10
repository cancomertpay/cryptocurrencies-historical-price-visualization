"use client";

import { useMemo } from "react";
import PairListItem from "./pair-list-item";
import {
  sortDataByHigh,
} from "@/utils/helper-functions";

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
    return sortDataByHigh(data);
  }, [data]);

  return (
    <div className="lg:min-h-[480px] mt-10 mx-5 pb-32">
      <ul className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {sortedData.map((item) => (
          <PairListItem
            key={item.symbol}
            symbol={item.symbol}
            dataList={item.historicalPrice}
          />
        ))}
      </ul>
    </div>
  );
}

export default PairList;
