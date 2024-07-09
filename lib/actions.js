export const fetchAllData = async () => {
  const req = await fetch("https://case-study-api.onrender.com/db", {
    cache: "no-store",
  });

  const data = await req.json();

  const mergedData = [
    { symbol: "ETH", historicalPrice: data.ETH },
    { symbol: "LTC", historicalPrice: data.LTC },
    { symbol: "ETC", historicalPrice: data.ETC },
    { symbol: "SOL", historicalPrice: data.SOL },
    { symbol: "AAVE", historicalPrice: data.AAVE },
    { symbol: "BTC", historicalPrice: data.BTC },
    { symbol: "EGLD", historicalPrice: data.EGLD },
  ];

  return mergedData;
};

export const fetchDataByName = async (dataName) => {
  const req = await fetch(`https://case-study-api.onrender.com/${dataName}`);

  const data = await req.json();

  return { title: dataName, data: data };
};
