import { useState, useEffect, FC } from "react";
import { toast } from "react-hot-toast";

import { cn } from "../../utils/general.utils";
import { WalletDetailCard } from "./WalletDetailCard";
import { METAMASK_EXTENSION_URL } from "../../constants/api";

const Wallet: FC = () => {
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);
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
        toast.error("No authorized account found!");
      }
    }
  };

  const handleDisconnect = () => {
    setCurrentAccount(null);
    toast.error("wallet disconnected");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center text-white px-10 bg-zinc-800">
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
            href={METAMASK_EXTENSION_URL}
            target="_blank"
          >
            link
          </a>{" "}
          to install extension{" "}
        </p>
      </div>
      {currentAccount && <WalletDetailCard currentAccount={currentAccount} />}
    </div>
  );
};

export default Wallet;
