"use client";

import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useModalContext } from "@/store/modal-context";
import PairContainer from "../pairs/pair-card";

/**
 * Modal component renders a modal dialog when `isModalOpen` is true.
 * Uses ReactDOM.createPortal to render outside of component hierarchy for accessibility.
 *
 * @returns {JSX.Element | null} Rendered Modal component or null if modal is closed.
 */
function Modal() {
  // Retrieve modal context values
  const { isModalOpen, selectedCrypto, handleCloseModal } = useModalContext();

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen, handleCloseModal]);

  // Handle body overflow when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Clean up on unmount
    };
  }, [isModalOpen]);

  // If modal is not open, return null to prevent rendering
  if (!isModalOpen) return null;

  // Render modal content using ReactDOM.createPortal to render outside of component hierarchy
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto lg:p-40 w-screen">
      <PairContainer
        data={selectedCrypto}
        handleCloseModal={handleCloseModal}
        modal
      />
    </div>,
    document.getElementById("modal-root") // Render portal content in modal-root element
  );
}

export default Modal;
