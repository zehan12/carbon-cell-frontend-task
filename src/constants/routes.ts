const ROUTE = {
  HOME: "/home",
  POPULATION: "/population",
  CRYPTOCURRENCY: "/crypto-currency",
  WALLET: "/wallet",
} as const;

export type Route = (typeof ROUTE)[keyof typeof ROUTE];

export default ROUTE;
