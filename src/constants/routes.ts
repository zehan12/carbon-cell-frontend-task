const ROUTE = {
  HOME: "/home",
  POPULATION: "/population",
  CRYPTOCURRENCY: "/crypto-currency",
  
} as const;

export type Route = (typeof ROUTE)[keyof typeof ROUTE];

export default ROUTE;
