"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useCryptoContext } from "@/store/crypto-context";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
  const { dataList, slug } = useCryptoContext();
  const options = {
    responsive: true,
  };
  const data = {
    labels: dataList.map((item) => item.Date),
    datasets: [
      {
        label: slug,
        data: dataList.map((item) => item.Price),
        borderColor: "#F0D85A",
        borderWidth: 3,
        backgroundColor: "#000"
      },
    ],
  };

  return (
    <Line
      className="px-20 pb-40 min-h-[700px] text-white"
      options={options}
      data={data}
    />
  );
}

export default LineChart;
