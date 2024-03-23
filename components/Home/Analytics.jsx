import { BarElement, Legend, LinearScale, Title, Tooltip } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};
const data = {
  labels: ["Boat", "Sugar", "Lenskart", "Oyo", "Titan", "Shaadi.com"],
  datasets: [
    {
      label: "No of impressions",
      data: [20, 17, 30, 42, 28, 50],
      backgroundColor: [
        "rgb(59, 130, 246)",
      ],
      borderColor: [
        "rgb(0,0,0)",
      ],
      borderWidth: 1,
    },
  ],
};

const Analytics = () => {
  const chartRef = useRef();

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef?.current?.chartInstance?.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white shadow-md p-10 rounded-lg">
      <p className="text-3xl font-bold mb-7"><span className="text-blue-500">This</span> Months Report</p>
      <Bar
        data={data}
        width={400}
        height={200}
        options={options}
        ref={chartRef}
        
      />
    </div>
  );
};

export default Analytics;