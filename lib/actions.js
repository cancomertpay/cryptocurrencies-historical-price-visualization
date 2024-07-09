export const fetchAllData = async () => {
  try {
    const response = await fetch("https://case-study-api.onrender.com/db", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

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
  } catch (error) {
    console.error("Error logging data:", error.message);
  }
};

export const fetchDataByName = async (dataName) => {
  try {
    const response = await fetch(
      `https://case-study-api.onrender.com/${dataName}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    return { title: dataName, data: data };
  } catch (error) {
    console.error("Error logging data:", error.message);
  }
};

export const logData = async (startDate, endDate, instantDate) => {
  try {
    const response = await fetch("https://log-api-7cgr.onrender.com/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ startDate, endDate, instantDate }),
    });

    if (!response.ok) {
      throw new Error("Failed to log data");
    }
  } catch (error) {
    console.error("Error logging data:", error.message);
  }
};
