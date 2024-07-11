"use client";

import { useState, useEffect } from "react";
import LoggedDataTable from "./logged-data-table/logged-data-table";
import AdminDashboardSkeleton from "../UI/admin-dashboard-skeleton";
import { fetchLoggedData } from "@/lib/actions";

function LoggedData() {
  const [loggedData, setLoggedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await fetchLoggedData();
        if (!data) {
          throw new Error("Error fetching logged data");
        }
        setLoggedData(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!loggedData) return;

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
