import { useEffect, useState } from "react";
import { CryptoLoading } from "./CryptoLoding";
import { CryptoCard } from "./CyptoCard";

interface CryptoData {
  chartName: string;
  disclaimer: string;
  time: {
    updated: string;
  };
  bpi: {
    [key: string]: {
      code: string;
      symbol: string;
      rate_float: number;
    };
  };
}

const CryptoCurrency = () => {
  const [crypto, setCrypto] = useState<CryptoData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const data = await response.json();
      setCrypto(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching population data:", error);
    }
  };

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
                <h3 className="text-3xl mb-4 text-white font-sans">
                  {crypto && crypto["chartName"]} Prices
                </h3>
                <div className="w-full">
                  <p className="text-white text-xl">
                    {crypto && crypto["disclaimer"]}
                  </p>
                </div>
                <div className="text-white my-5">
                  <div>last updated at {crypto && crypto["time"]?.updated}</div>
                </div>
              </div>
              <div className="w-full h-full flex flex-col md:flex-row lg:flex-row justify-evenly items-center gap-5 mt-10">
                {crypto &&
                  Object.values(crypto["bpi"]).map((data) => (
                    <CryptoCard
                      code={data.code}
                      symbol={data.symbol}
                      floatRate={data.rate_float}
                    />
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CryptoCurrency;
