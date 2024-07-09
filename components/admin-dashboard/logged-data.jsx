"use client";

import { useState, useEffect } from "react";
import LoggedDataTable from "./logged-data-table/logged-data-table";
import AdminDashboardSkeleton from "../UI/admin-dashboard-skeleton";

function LoggedData() {
  const [loggedData, setLoggedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLoggedData = async () => {
    try {
      const response = await fetch("https://log-api-7cgr.onrender.com/logs");

      if (!response.ok) {
        throw new Error("Failed to log data");
      }
      const loggedData = await response.json();
      return loggedData;
    } catch (error) {
      console.error("Error logging data:", error.message);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await fetchLoggedData();
        setLoggedData(data);
      } catch (error) {
        console.error("Error fetching logged data:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(loggedData);

  return (
    <div className="lg:my-10 lg:mx-32">
      {isLoading ? (
        <AdminDashboardSkeleton />
      ) : (
        <>
          <h1 className="text-3xl text-end p-4 bg-black/80 text-white font-bold border-b border-primary rounded-t-xl">
            Logged Data
          </h1>
          <LoggedDataTable loggedData={loggedData} />
        </>
      )}
    </div>
  );
}

export default LoggedData;
