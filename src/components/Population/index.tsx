import { FC, useEffect } from "react";
import { fetchPopulationData } from "../../services/api";

const Population: FC = () => {
  useEffect(() => {
    const fetchPopulationGraphData = async () => {
      const data = await fetchPopulationData();
      console.log(data);
    };
    fetchPopulationGraphData();
  }, []);
  return <></>;
};

export default Population;
