import { useState, useEffect, FC } from "react";
import { toast } from "react-hot-toast";
import CountUp from "react-countup";

import { cn } from "../../utils/general.utils";

interface EthereumWindow extends Window {
  ethereum?: {
    selectedAddress: string;
    request: (options: { method: string }) => Promise<string[]>;
    on: (eventName: string, handler: (accounts: string[]) => void) => void;
    removeListener: (
      eventName: string,
      handler: (accounts: string[]) => void
    ) => void;
  };
}

const Wallet: FC = () => {
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const buttonText: string = currentAccount
    ? "Disconnect Wallet"
    : "Connect Wallet";

  useEffect(() => {
    const checkWalletConnection = async () => {
      const { ethereum }: EthereumWindow = window;
      if (ethereum && ethereum.selectedAddress) {
        setCurrentAccount(ethereum.selectedAddress);
      }
    };

    checkWalletConnection();

    const accountChangeHandler = (accounts: string[]) => {
      if (accounts.length === 0) {
        setCurrentAccount(null);
      } else {
        setCurrentAccount(accounts[0]);
        console.log(accounts, "value");
      }
    };

    const { ethereum }: EthereumWindow = window;
    if (ethereum) {
      ethereum.on("accountsChanged", accountChangeHandler);
    }

    return () => {
      const { ethereum }: EthereumWindow = window;
      if (ethereum) {
        ethereum.removeListener("accountsChanged", accountChangeHandler);
      }
    };
  }, []);

  const handleConnect = async () => {
    const { ethereum }: EthereumWindow = window;

    if (!ethereum) {
      toast.error("Please install Metamask wallet extension.");
    } else {
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setCurrentAccount(accounts[0]);
        toast.success("wallet connected");
      } catch (error: unknown) {
        setError(error);
        toast.error("No authorized account found!");
      }
    }
  };

  const handleDisconnect = () => {
    setCurrentAccount(null);
    toast.error("wallet disconnected");
  };

  return (
    <div className="w-full h-full flex flex-col items-center text-white px-10 bg-zinc-800">
      <img className="w-96" src="/assets/MetaMask_Fox.png" />
      <div className="mt-8">
        <button
          className={cn(
            "px-4 py-2 rounded",
            currentAccount
              ? "bg-red-700 hover:bg-red-600"
              : "bg-lime-700 hover:bg-lime-600"
          )}
          onClick={currentAccount ? handleDisconnect : handleConnect}
        >
          {buttonText}
        </button>
        <p className="my-2 text-xs">
          visit this{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
            target="_blank"
          >
            link
          </a>{" "}
          to install extension{" "}
        </p>
      </div>
      {currentAccount && (
        <div className="w-full flex justify-center p-2">
          <div className="flex flex-row items-center justify-between px-4 py-4">
            <div className="flex mr-4">
              <span className="items-center px-4 py-4 m-auto bg-green-200 rounded-full hover:bg-green-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="items-center w-8 h-8 m-auto text-green-500 hover:text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </div>
            <div className="flex-1 pl-1">
              <div className="text-xl font-medium text-gray-600">
                Wallet connected with account
              </div>
              <div className="text-sm text-gray-400 sm:text-base">
                {currentAccount}
              </div>
            </div>
          </div>
        </div>
      )}
      <div>{error ? <p>No authorized account found!</p> : null}</div>
    </div>
  );
};

export default Wallet;
