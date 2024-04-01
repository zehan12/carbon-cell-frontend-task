import { useEffect, useState } from "react";

const CryptoCurrency = () => {
  const [crypto, setCrypto] = useState(null);
  const [loading, setLoading] = useState(false); // State to manage loading

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
      <div className="w-full h-full bg-zinc-800">
        <div className="w-full flex flex-col justify-center items-start">
          {loading ? (
            <div className="w-full h-full bg-zinc-800">
              <div className="w-full flex flex-col justify-center items-start">
                <div className="px-9">
                  <div className="animate-pulse">
                    <h3 className="text-3xl mb-4 text-white font-sans">
                      Loading Prices
                    </h3>
                    <div className="w-full">
                      <p className="text-white text-xl">Loading data...</p>
                    </div>
                    <div className="text-white my-5">
                      <div>Loading...</div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full flex flex-col md:flex-row lg:flex-row  justify-evenly items-center gap-5 mt-10">
                  {[1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className="bg-white rounded-3xl border shadow-xl p-8 w-80 animate-pulse"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-gray-400">
                          Loading...
                        </h3>
                        <h4>Loading...</h4>
                        <h1 className="font-semibold text-xl text-gray-700">
                          Loading...
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
                  Object.values(crypto["bpi"]).map((data: any) => (
                    <div
                      key={data.code}
                      className="bg-white rounded-3xl border shadow-xl p-8 w-80"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full">
                          <svg
                            fill="#FFFFFF"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            viewBox="0 0 26 26"
                            width="26px"
                            height="26px"
                          >
                            <path d="M 9 5 L 9 7 L 7 7 L 7 20 L 9 20 L 9 22 L 11 22 L 11 20 L 13 20 L 13 22 L 15 22 L 15 19.90625 C 15.265625 19.871094 15.554688 19.855469 15.8125 19.8125 C 16.414063 19.613281 16.90625 19.394531 17.40625 19.09375 C 17.804688 18.792969 18.199219 18.40625 18.5 17.90625 C 18.800781 17.40625 18.90625 16.886719 18.90625 16.1875 C 18.90625 15.386719 18.585938 14.695313 18.1875 14.09375 C 17.6875 13.492188 17.085938 13.105469 16.1875 12.90625 C 16.886719 12.605469 17.386719 12.210938 17.6875 11.8125 C 17.988281 11.414063 18.1875 10.886719 18.1875 10.1875 C 18.1875 9.585938 18.105469 9.085938 17.90625 8.6875 C 17.707031 8.289063 17.398438 7.886719 17 7.6875 C 16.601563 7.488281 16.195313 7.289063 15.59375 7.1875 C 15.398438 7.15625 15.199219 7.125 15 7.09375 L 15 5 L 13 5 L 13 7 L 11 7 L 11 5 Z M 10 9 L 12.90625 9 C 13.207031 9 13.488281 8.992188 13.6875 9.09375 C 13.988281 9.09375 14.207031 9.210938 14.40625 9.3125 C 14.605469 9.414063 14.804688 9.488281 14.90625 9.6875 C 15.007813 9.886719 15.09375 10.105469 15.09375 10.40625 C 15.09375 11.007813 14.992188 11.394531 14.59375 11.59375 C 14.195313 11.894531 13.789063 12 13.1875 12 L 10 12 Z M 10 14 L 13.5 14 C 14.199219 14 14.8125 14.199219 15.3125 14.5 C 15.8125 14.800781 16 15.394531 16 16.09375 C 16 16.394531 15.914063 16.800781 15.8125 17 C 15.613281 17.300781 15.386719 17.492188 15.1875 17.59375 C 14.988281 17.695313 14.707031 17.804688 14.40625 17.90625 C 14.105469 18.007813 13.707031 18 13.40625 18 L 10 18 Z" />
                          </svg>
                        </button>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-gray-400">
                          BTC
                        </h3>
                        <h4>{data.code}</h4>
                        <h1 className="font-semibold text-xl text-gray-700">
                          <span
                            dangerouslySetInnerHTML={{ __html: data?.symbol }}
                          ></span>{" "}
                          {data.rate}
                        </h1>
                      </div>
                    </div>
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
