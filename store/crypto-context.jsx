"use client";

import React, { createContext, useContext, useState } from "react";

// Create a context for managing crypto date range selection and selected pair
const CryptoContext = createContext({
  startDate: new Date("2010-07-18"),
  endDate: new Date("2021-08-24"),
  selectedPair: "",
  handleDateSubmit: () => {},
  handleSelectedPair: () => {},
});

// Custom hook to use the CryptoContext
export const useCryptoContext = () => {
  const ctx = useContext(CryptoContext);

  if (!ctx) {
    throw new Error(
      "useCryptoContext must be used within a CryptoContextProvider."
    );
  }

  return ctx;
};

// Provider component for CryptoContext
const CryptoContextProvider = ({ children }) => {
  // State variables for start and end dates, initialized with default values
  const [startDate, setStartDate] = useState(new Date("2010-07-18"));
  const [endDate, setEndDate] = useState(new Date("2021-08-24"));
  const [selectedPair, setSelectedPair] = useState("");

  // Function to handle date submission and update context state
  const handleDateSubmit = (newStartDate, newEndDate) => {
    setStartDate(
      newStartDate instanceof Date ? newStartDate : new Date(newStartDate)
    );
    setEndDate(newEndDate instanceof Date ? newEndDate : new Date(newEndDate));

    // Additional logic can be added here, such as logging or validation
  };

  // Function to handle selection of a crypto pair
  const handleSelectedPair = (pairName) => {
    setSelectedPair(pairName);
  };

  // Memoized context values to be provided
  const contextValues = React.useMemo(
    () => ({
      startDate,
      endDate,
      selectedPair,
      handleDateSubmit,
      handleSelectedPair,
    }),
    [startDate, endDate, selectedPair]
  );

  // Render the provider with the context values and children components
  return (
    <CryptoContext.Provider value={contextValues}>
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoContextProvider;
