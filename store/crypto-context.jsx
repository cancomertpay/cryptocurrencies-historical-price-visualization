"use client";

import cryptoList from "@/data";
import { createContext, useContext, useEffect, useState } from "react";

const CryptoContext = createContext({
  originalDataList: [],
  dataList: [],
  slug: "",
  handleParams: () => {},
  handleDateSubmit: () => {},
});

export const useCryptoContext = () => {
  const ctx = useContext(CryptoContext);

  if (!ctx) {
    throw new Error("useCryptoContext must be within CryptoContextProvider.");
  }

  return ctx;
};

const CryptoContextProvider = ({ children }) => {
  const [originalDataList, setOriginalDataList] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [slug, setSlug] = useState("");

  const handleParams = (slug) => {
    setSlug(slug);
  };

  const getData = (slug) => {
    return (
      cryptoList.find((crypto) => crypto.symbol === slug).historicalPrice || []
    );
  };

  const handleDateSubmit = (startDate, endDate) => {
    if (!startDate || !endDate) return;

    const start = startDate.getTime();
    const end = endDate.getTime();

    const filteredData = originalDataList.filter((data) => {
      const dataTime = new Date(data.Date).getTime();
      return dataTime >= start && dataTime <= end;
    });

    setDataList(filteredData);
  };

  useEffect(() => {
    if (slug.trim() !== "") {
      const cryptoData = getData(slug);
      setOriginalDataList(cryptoData);
      setDataList(cryptoData);
    }
  }, [slug]);

  const contextValues = {
    originalDataList,
    dataList,
    slug,
    handleParams,
    handleDateSubmit,
  };

  return (
    <CryptoContext.Provider value={contextValues}>
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoContextProvider;
