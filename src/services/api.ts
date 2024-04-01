import axios from "axios";
import { POPULATION_API } from "../constants/api";

const fetchPopulationData = async () => {
  try {
    const response = await axios.get(POPULATION_API);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching population data:", error);
    return null;
  }
};

export { fetchPopulationData };
