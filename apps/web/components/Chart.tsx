// Reusable chart component (stub)
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required chart types
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function Chart({ type, data }: { type: string; data: any }) {
  // For demo, only line chart is implemented
  if (type === 'line') {
    return <Line data={data} />;
  }
  return null;
}
