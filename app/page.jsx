import CryptoList from "@/components/crypto-list/crypto-list";
import DatePicker from "@/components/date-picker/date-picker";
import Modal from "@/components/modal/modal";
import ModalContextProvider from "@/store/modal-context";

// Home Component
// This is the main component for the homepage. It includes a date picker, a list of cryptocurrencies, and a modal component for displaying additional details.

export default function Home() {
  return (
    <main className="lg:my-10 lg:mx-32">
      {/* DatePicker Component */}
      {/* Renders a date picker for selecting a date range. */}
      <DatePicker />

      {/* ModalContextProvider */}
      {/* Provides context for managing the state of the modal (e.g., opening and closing the modal). */}
      <ModalContextProvider>
        {/* CryptoList Component */}
        {/* Renders a list of cryptocurrencies. */}
        <CryptoList />

        {/* Modal Root */}
        {/* A div element to serve as the root for the modal component. This allows the modal to be rendered at the end of the DOM tree for better accessibility and styling control. */}
        <div id="modal-root" />

        {/* Modal Component */}
        {/* Renders a modal for displaying additional details about a selected cryptocurrency. */}
        <Modal />
      </ModalContextProvider>
    </main>
  );
}
