import { useEffect, useState } from "react";
import { CryptoLoading } from "./CryptoLoding";
import { CryptoCard } from "./CyptoCard";
import { fetchCryptoPrice } from "../../services/api";

const CryptoCurrency = () => {
  const [crypto, setCrypto] = useState<CryptoData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetchCryptoPrice();
      console.log(data);
      setCrypto(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching population data:", error);
    }
  };

  const handleFetch = () => {
    return fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-zinc-800">
        <div className="w-full flex flex-col justify-center items-start">
          {loading ? (
            <CryptoLoading />
          ) : (
            <>
              <div className="px-9">
                {crypto && (
                  <h3 className="text-3xl mb-4 text-white font-sans">
                    {crypto["chartName"]} Prices
                  </h3>
                )}
                <div className="w-full">
                  <p className="text-white text-xl">
                    {crypto && crypto["disclaimer"]}
                  </p>
                </div>
                <div className="text-white my-5">
                  {crypto && (
                    <div>
                      last updated at
                      {crypto["time"]?.updated}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full h-full flex flex-col md:flex-row lg:flex-row justify-evenly items-center gap-5 mt-10">
                {crypto &&
                  Object.values(crypto["bpi"]).map((data) => (
                    <CryptoCard
                      key={data.code}
                      code={data.code}
                      symbol={data.symbol}
                      floatRate={data.rate_float}
                    />
                  ))}
              </div>
            </>
          )}
        </div>
        <div>
          {!crypto && !loading && (
            <div className="w-full flex flex-col items-center">
              <h5 className="text-white text-4xl">No Data Fetched</h5>
              <button
                onClick={handleFetch}
                className="my-5 bg-lime-600 hover:bg-lime-500 h-8 w-40 rounded-md text-white"
              >
                Retry
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CryptoCurrency;
