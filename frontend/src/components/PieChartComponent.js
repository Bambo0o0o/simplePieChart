import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const COLORS = [
  "#6366F1",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#14B8A6",
  "#A855F7",
  "#EC4899",
  "#0EA5E9",
  "#F97316",
  "#10B981"
];

const PieChartComponent = ({ data }) => {
  const formattedData = {
    ...data,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      backgroundColor: dataset.data.map(
        (_, index) => COLORS[index % COLORS.length]
      ),
      borderColor: "#ffffff",
      borderWidth: 2,
      hoverOffset: 10
    }))
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom"
      },
      tooltip: {
        enabled: true
      }
    }
  };

  return <Pie data={formattedData} options={options} />;
};

export default PieChartComponent;