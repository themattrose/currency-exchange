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
import { Line } from "react-chartjs-2";
import { LineChartProps } from "./types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

export function LineChart({
  title,
  labels,
  values,
  borderColor,
}: LineChartProps) {
  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: values,
        borderColor,
      },
    ],
  };

  return <Line options={options} data={data} />;
}
