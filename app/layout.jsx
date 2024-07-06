import { Inter } from "next/font/google";
import "./globals.css";
import CryptoContextProvider from "@/store/crypto-context";
import Header from "@/components/header.js/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black/90 ${inter.className}`}>
        <Header />
        <main>
          <CryptoContextProvider>{children}</CryptoContextProvider>
        </main>
      </body>
    </html>
  );
}