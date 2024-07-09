// react
import React, { Suspense } from "react";

// context provider
import ModalContextProvider from "@/store/modal-context";

// components
import Modal from "@/components/pairs-dashboard/modal/modal";
import PairContainer from "@/components/pairs-dashboard/pairs/pair-container";
import PairContainerHeader from "@/components/pairs-dashboard/pairs/pair-container-header";

// loading skeleton
import CryptoListSkeleton from "@/components/UI/crypto-list-skeleton";

// Home Component
// This is the main component for the homepage. It includes a date picker, a list of cryptocurrencies, and a modal component for displaying additional details.
export default function Home() {
  return (
    <main className="lg:my-10 lg:mx-32">
      {/* CryptoHeaderContainer */}
      {/* Renders a date picker for selecting a date range. */}
      <PairContainerHeader />

      {/* ModalContextProvider */}
      {/* Provides context for managing the state of the modal (e.g., opening and closing the modal). */}
      <ModalContextProvider>
        {/* Suspense for lazy loading */}
        <Suspense fallback={<CryptoListSkeleton />}>
          {/* PairContainer */}
          {/* Renders a list of pairs. */}
          <PairContainer />
        </Suspense>

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
