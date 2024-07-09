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

// Register necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

/**
 * LineChart Component
 * @param {string} title - The title for the chart.
 * @param {Array<Object>} dataList - The array of data points for the chart.
 */
function LineChart({ title, dataList }) {
  // Chart options
  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: "#000", // X-axis labels color
          font: {
            size: 14,
            weight: "bold",
          },
          maxRotation: 70, // Rotate labels to fit better
          minRotation: 70,
          autoSkip: true, // Skip labels to avoid crowding
          maxTicksLimit: 25, // Maximum number of labels to show
        },
      },
      y: {
        ticks: {
          color: "#000", // Y-axis labels color
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  // Chart data configuration
  const data = {
    labels: dataList.map((item) => item.Date),
    datasets: [
      {
        label: title,
        data: dataList.map((item) => item.Price),
        borderColor: "#F0D85A",
        borderWidth: 3,
        backgroundColor: "#000",
      },
    ],
  };

  // Render the Line chart using react-chartjs-2
  return <Line options={options} data={data} />;
}

export default LineChart;
