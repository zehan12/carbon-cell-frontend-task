import { FC, useEffect, useState } from "react";
import { fetchPopulationData } from "../../services/api";
import ReactApexChart from "react-apexcharts";

const Population: FC = () => {
  const [data, setData] = useState<PopulationData[]>([]);
  const [chartData, setChartData] = useState<{ x: string; y: number }[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPopulationGraphData = async () => {
      const data = await fetchPopulationData();
      return setData(data);
    };
    fetchPopulationGraphData();
  }, []);

  useEffect(() => {
    setLoading(true);
    if (data) {
      const formattedData = data.map((entry) => ({
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
    markers: {
      colors: "#7fdb6a",
    },
    stroke: {
      curve: "smooth",
      colors: ["#7fdb6a"],
    },
    title: {
      text: "Population Trend Over Years",
      align: "left",
      style: {
        color: "#ffffff",
        font: "40px",
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
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
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
