"use client";

import { useCryptoContext } from "@/store/crypto-context";

const cryptoOptions = [
  "Pairs",
  "BTC",
  "ETH",
  "ETC",
  "LTC",
  "AAVE",
  "SOL",
  "EGLD",
];

/**
 * PairSelector component renders a dropdown menu to select a cryptocurrency pair.
 * It uses context to handle the selected pair.
 *
 * @returns {JSX.Element} Rendered PairSelector component.
 */
const PairSelector = () => {
  const { handleSelectedPair } = useCryptoContext();
  /**
   * Handles change event when a new cryptocurrency pair is selected.
   * @param {Object} e - Event object containing the selected value.
   */
  const handleChange = (e) => {
    handleSelectedPair(e.target.value);
  };

  return (
    <div className="flex justify-center items-center bg-black/50 lg:rounded-t-xl py-3 border-b border-primary">
      <div className="w-full max-w-xs">
        <label
          htmlFor="crypto-select"
          className="block text-sm font-medium text-white"
        >
          Choose a pair
        </label>
        <select
          id="crypto-select"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-white bg-black border border-gray-700 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md hover:bg-black/50 transition-all duration-300 cursor-pointer"
          onChange={handleChange}
        >
          {cryptoOptions.map((option, index) => (
            <option
              key={index}
              value={option}
              className="text-white bg-black hover:bg-primary"
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PairSelector;
