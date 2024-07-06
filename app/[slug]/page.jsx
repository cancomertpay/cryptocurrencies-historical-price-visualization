"use client";

import { useEffect } from "react";
import { useCryptoContext } from "@/store/crypto-context";
import LineChart from "@/components/charts/line-chart";
import DatePicker from "@/components/date-picker/date-picker";

function Page({ params }) {
  const { handleParams } = useCryptoContext();

  useEffect(() => {
    handleParams(params.slug);
  }, []);

  return (
    <div className="relative">
      <DatePicker />
      <div className="pt-20">
        <LineChart />
      </div>
    </div>
  );
}

export default Page;
