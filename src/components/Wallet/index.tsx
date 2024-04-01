import { useState, useEffect } from "react";

interface EthereumWindow extends Window {
  ethereum?: {
    selectedAddress: string;
    request: (options: { method: string }) => Promise<string[]>;
    on: (eventName: string, handler: (accounts: string[]) => void) => void;
    removeListener: (eventName: string, handler: (accounts: string[]) => void) => void;
  };
}

const Wallet: React.FC = () => {
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const buttonText: string = currentAccount ? "Trade Ether" : "Connect Wallet";

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
      alert("Please install Metamask wallet extension.");
    } else {
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setCurrentAccount(accounts[0]);
      } catch (error) {
        setError(error);
        console.log("No authorised account found!");
      }
    }
  };

  const handleDisconnect = () => {
    setCurrentAccount(null);
  };

  return (
    <div className="w-full h-full flex flex-col items-center text-white px-10 bg-zinc-800">
      <h1 className="text-right text-3xl font-semibold">Connect your wallet</h1>
      <img className="w-96" src="/assets/MetaMask_Fox.png" />
      <div className="mt-8">
        <button
          className="px-4 py-2 rounded bg-[#2AB42A]"
          onClick={currentAccount ? handleDisconnect : handleConnect}
        >
          {buttonText}
        </button>
      </div>
      <div className="mt-8">
        {currentAccount && <p>Wallet connected with account: {currentAccount}</p>}
        {currentAccount && (
          <div className="mt-4">
            <button
              className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black"
              onClick={handleDisconnect}
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
      <div>{error ? <p>No authorized account found!</p> : null}</div>
    </div>
  );
};

export default Wallet;
