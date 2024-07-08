"use client";

import ReactDOM from "react-dom";
import LineChart from "../charts/line-chart";
import { RxCross1 } from "react-icons/rx";
import { useModalContext } from "@/store/modal-context";

function Modal() {
  // Retrieve modal context values
  const { isModalOpen, selectedCrypto, handleCloseModal } = useModalContext();

  // If modal is not open, return null to prevent rendering
  if (!isModalOpen) return null;

  // Render modal content using ReactDOM.createPortal to render outside of component hierarchy
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto lg:p-40 w-screen">
      <div className="relative bg-white w-full mt-20 p-10 rounded-xl shadow-lg">
        <div className="w-full flex items-center justify-between bg-white">
          {/* Cryptocurrency symbol as modal title */}
          <h2 className="text-5xl text-primary font-bold">
            {selectedCrypto.symbol}
          </h2>
          {/* Close button */}
          <div>
            <RxCross1
              className="cursor-pointer w-[24px] h-[24px] hover:text-primary transition-colors duration-300"
              onClick={handleCloseModal}
            />
          </div>
        </div>
        {/* LineChart component displaying historical price data */}
        <LineChart
          title={selectedCrypto.symbol}
          dataList={selectedCrypto.historicalPrice}
        />
      </div>
    </div>,
    document.getElementById("modal-root") // Render portal content in modal-root element
  );
}

export default Modal;
