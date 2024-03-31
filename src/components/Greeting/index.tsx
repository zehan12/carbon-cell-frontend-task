import { useLocation } from "react-router-dom";
import ROUTE, { Route } from "../../constants/routes";

const Greeting = () => {
  const location = useLocation();

  const isRouteExists = (route: Route) => {
    return Object.values(ROUTE).includes(route);
  };

  return (
    <div className="p-10 bg-zinc-800 text-white">
      {isRouteExists(location.pathname as Route) ? (
        <>
          <div className="flex items-center gap-4">
            <h4 className="text-4xl">Hello,</h4>
            <span className="animate-wave text-4xl">👋</span>
          </div>
          <h5 className="text-3xl">
            Welcome to{" "}
            <span className="text-lime-500">{location.pathname.slice(1)}</span>
          </h5>
        </>
      ) : (
        <div className="w-full h-screen">
            <p>Page not found</p>
        </div>
      )}
    </div>
  );
};

export default Greeting;
