import axios from "axios";
import { CRYPTO_PRICE_API, POPULATION_API } from "../constants/api";

const fetchPopulationData = async () => {
  try {
    const response = await axios.get(POPULATION_API);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching population data:", error);
    return null;
  }
};

const fetchCryptoPrice = async () => {
  try {
    const response = await axios.get(CRYPTO_PRICE_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching population data:", error);
    return null;
  }
};

export { fetchPopulationData, fetchCryptoPrice };
