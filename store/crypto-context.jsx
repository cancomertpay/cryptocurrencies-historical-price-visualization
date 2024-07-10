"use client";

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";
import { logData } from "@/lib/actions"; // Import logData action from application-specific library
import { debounce } from "@/utils/helper-functions"; // Import debounce utility function from application-specific utils

// Create a context for managing crypto date range selection and selected pair
const CryptoContext = createContext({
  startDate: new Date("2010-07-18"),// Default start date for crypto data range
  endDate: new Date("2021-08-24"),// Default end date for crypto data range
  selectedPair: "",// Currently selected crypto pair
  handleDateSubmit: (newStartDate, newEndDate) => {},// Placeholder function for handling date submission
  handleSelectedPair: (pairName) => {},// Placeholder function for handling selection of a crypto pair
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

// Debounce logData function to prevent rapid successive calls
const debouncedLogData = debounce((startDate, endDate, instantDate) => {
  logData(startDate, endDate, instantDate); // Call logData action with debounced parameters
}, 500);

// Provider component for CryptoContext
const CryptoContextProvider = ({ children }) => {
  // State variables for start and end dates, initialized with default values
  const [startDate, setStartDate] = useState(new Date("2010-07-18"));
  const [endDate, setEndDate] = useState(new Date("2021-08-24"));
  const [selectedPair, setSelectedPair] = useState(""); // State variable for selected crypto pair

  // Function to scroll to the selected crypto pair card
  const scrollToSelectedPairCard = useCallback(() => {
    if (selectedPair) {
      const element = document.getElementById(selectedPair);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [selectedPair]);

  // Function to handle date submission and update context state
  const handleDateSubmit = useCallback((newStartDate, newEndDate) => {
    // Update start and end dates based on provided values
    setStartDate(
      newStartDate instanceof Date ? newStartDate : new Date(newStartDate)
    );
    setEndDate(newEndDate instanceof Date ? newEndDate : new Date(newEndDate));

    // Scroll to the selected crypto pair card
    scrollToSelectedPairCard();

    // Additional logic can be added here, such as logging or validation
    const instantDate = new Date().toISOString();

    // Call debounced logData function with formatted date parameters
    debouncedLogData(
      new Date(newStartDate).toISOString(),
      new Date(newEndDate).toISOString(),
      instantDate
    );
  }, [scrollToSelectedPairCard]);

  // Function to handle selection of a crypto pair
  const handleSelectedPair = useCallback((pairName) => {
    setSelectedPair(pairName); // Set selected crypto pair based on user selection
  }, []);

  // Effect to scroll to the selected pair card whenever selectedPair changes
  useEffect(() => {
    scrollToSelectedPairCard();
  }, [scrollToSelectedPairCard]);

  // Memoized context values to be provided to consumers
  const contextValues = useMemo(
    () => ({
      startDate,
      endDate,
      selectedPair,
      handleDateSubmit,
      handleSelectedPair,
    }),
    [startDate, endDate, selectedPair, handleDateSubmit, handleSelectedPair]
  );

  // Render the provider with the memoized context values and children components
  return (
    <CryptoContext.Provider value={contextValues}>
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoContextProvider;
