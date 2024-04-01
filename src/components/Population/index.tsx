import { FC, useEffect, useState } from "react";
import { fetchPopulationData } from "../../services/api";
import ReactApexChart from "react-apexcharts";

const Population: FC = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPopulationGraphData = async () => {
      const data = await fetchPopulationData();
      console.log(data);
      return setData(data);
    };
    fetchPopulationGraphData();
  }, []);

  useEffect(() => {
    setLoading(true);
    if (data) {
      const formattedData = data.map((entry: any) => ({
        x: entry.Year,
        y: entry.Population,
      }));
      setChartData(formattedData);
      setLoading(false);
    }
  }, [data]);

  const chartOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Population Trend Over Years",
      align: "left",
      style: {
        color: "#ffffff",
      },
    },
    xaxis: {
      type: "category",
      labels: {
        style: {
          colors: "#ffffff",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#ffffff",
        },
      },
    },
  };

  return (
    <div className="bg-zinc-800 h-screen overflow-hidden">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ReactApexChart
          options={chartOptions}
          series={[
            {
              name: "Population",
              data: chartData,
            },
          ]}
          type="line"
          height={600}
        />
      )}
    </div>
  );
};

export default Population;
