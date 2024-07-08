"use client";

import { createContext, useContext, useState } from "react";

// Create Modal Context with default values
const ModalContext = createContext({
  isModalOpen: false,
  selectedCrypto: null,
  handleOpenModal: () => {},
  handleCloseModal: () => {},
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
    setSelectedCrypto(cryptoData);
    setIsModalOpen(true);
  };

  // Function to close the modal and clear the selected cryptocurrency
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCrypto(null);
  };

  // Context values to be provided
  const contextValues = {
    isModalOpen,
    selectedCrypto,
    handleOpenModal,
    handleCloseModal,
  };

  return (
    <ModalContext.Provider value={contextValues}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
