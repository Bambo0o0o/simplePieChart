import { useEffect, useState } from "react";
import API from "../services/api";
import PieChartComponent from "../components/PieChartComponent";
import DataForm from "../components/DataForm";

const Dashboard = () => {
  const [charts, setCharts] = useState([]);

  const fetchCharts = async () => {
    const res = await API.get("/charts");
    setCharts(res.data);
  };

  useEffect(() => {
    fetchCharts();
  }, []);

  return (
    <div>
      <h1>Pie Dashboard</h1>
      <DataForm fetchCharts={fetchCharts} />
      {charts.map((chart) => (
        <PieChartComponent
          key={chart._id}
          data={{
            labels: chart.labels,
            datasets: [
              {
                data: chart.values,
              },
            ],
          }}
        />
      ))}
    </div>
  );
};

export default Dashboard;