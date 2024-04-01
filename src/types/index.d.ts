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

interface CryptoCardProps {
  code: string;
  floatRate: number;
  symbol: string;
}

interface PopulationData {
  "ID Nation": string;
  Nation: string;
  "ID Year": number;
  Year: string;
  Population: number;
  "Slug Nation": string;
}

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

interface MenuItem {
  icon: JSX.Element;
  path: string;
  label: string;
}

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuItems: MenuItem[];
}
