import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// 1️⃣ วาง COLORS ไว้บนสุด ใต้ import
const COLORS = [
  "#6366F1",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#14B8A6",
  "#A855F7",
  "#EC4899",
  "#0EA5E9"
];

// 2️⃣ Component
const PieChartView = ({ data }) => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="label"
        cx="50%"
        cy="50%"
        outerRadius={120}
        label
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>

      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartView;