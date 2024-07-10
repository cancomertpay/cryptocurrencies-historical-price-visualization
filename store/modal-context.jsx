"use client";

import { createContext, useContext, useState } from "react";

// Create Modal Context with default values
const ModalContext = createContext({
  isModalOpen: false,       // Default state: modal is closed
  selectedCrypto: null,     // Default state: no selected cryptocurrency
  handleOpenModal: () => {},   // Placeholder function to open modal
  handleCloseModal: () => {},  // Placeholder function to close modal
});

// Custom hook to use ModalContext
export const useModalContext = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModalContext must be within ModalContextProvider.");
  }

  return ctx;
};

// ModalContextProvider Component
// This component provides context values for managing the state of a modal and the selected cryptocurrency.
const ModalContextProvider = ({ children }) => {
  // State to manage whether the modal is open
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to manage the selected cryptocurrency data
  const [selectedCrypto, setSelectedCrypto] = useState(null);

  // Function to open the modal and set the selected cryptocurrency
  const handleOpenModal = (cryptoData) => {
    setSelectedCrypto(cryptoData);   // Set selected cryptocurrency data
    setIsModalOpen(true);            // Open the modal
  };

  // Function to close the modal and clear the selected cryptocurrency
  const handleCloseModal = () => {
    setIsModalOpen(false);     // Close the modal
    setSelectedCrypto(null);   // Clear selected cryptocurrency data
  };

  // Context values to be provided
  const contextValues = {
    isModalOpen,        // Current state: modal open or closed
    selectedCrypto,     // Currently selected cryptocurrency data
    handleOpenModal,    // Function to open the modal and set selected cryptocurrency
    handleCloseModal,   // Function to close the modal and clear selected cryptocurrency
  };

  // Render the provider with the context values and children components
  return (
    <ModalContext.Provider value={contextValues}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
