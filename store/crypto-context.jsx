"use client";

import { createContext, useContext, useState } from "react";

// Create a context for managing crypto date range selection
const CryptoContext = createContext({
  startDate: "",
  endDate: "",
  handleDateSubmit: () => {},
});

// Custom hook to use the CryptoContext
export const useCryptoContext = () => {
  const ctx = useContext(CryptoContext);

  if (!ctx) {
    throw new Error("useCryptoContext must be used within a CryptoContextProvider.");
  }

  return ctx;
};

// Provider component for CryptoContext
const CryptoContextProvider = ({ children }) => {
  // State variables for start and end dates, initialized with default values
  const [startDate, setStartDate] = useState(new Date("2010-07-18"));
  const [endDate, setEndDate] = useState(new Date("2021-08-24"));

  // Function to handle date submission and update context state
  const handleDateSubmit = (startDate, endDate) => {
    setStartDate(new Date(startDate));
    setEndDate(new Date(endDate));

    // Logging into MongoDB soon...
  };

  // Context values to be provided
  const contextValues = {
    startDate,
    endDate,
    handleDateSubmit,
  };

  // Render the provider with the context values and children components
  return (
    <CryptoContext.Provider value={contextValues}>
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoContextProvider;
