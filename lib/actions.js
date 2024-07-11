"use server"

import { revalidatePath } from "next/cache";

// Function to fetch all cryptocurrency data
export const fetchAllData = async () => {
  try {
    const response = await fetch("https://case-study-api.onrender.com/db");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    // Merge data into a consistent format with symbol and historicalPrice fields
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
    console.error("Error fetching all data:", error.message);
  }
};

// Function to fetch data by name from the API
export const fetchDataByName = async (dataName) => {
  try {
    const response = await fetch(
      `https://case-study-api.onrender.com/${dataName}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    // Return data with title and actual fetched data
    return { title: dataName, data: data };
  } catch (error) {
    console.error(`Error fetching ${dataName} data:`, error.message);
  }
};

// Function to log data to the logging API
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

    revalidatePath("/admin", "page");
  } catch (error) {
    console.error("Error logging data:", error.message);
  }
};

// Function to fetch logged data from the logging API
export const fetchLoggedData = async () => {
  try {
    const response = await fetch("https://log-api-7cgr.onrender.com/logs");

    if (!response.ok) {
      throw new Error("Failed to fetch logged data");
    }

    const loggedData = await response.json();

    return loggedData;
  } catch (error) {
    console.error("Error fetching logged data:", error.message);
  }
};
