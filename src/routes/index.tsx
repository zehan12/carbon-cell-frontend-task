import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ROUTE from "../constants/routes";
import { CryptoCurrency, Population, Wallet } from "../components";

const ApplicationRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path={ROUTE.HOME}
          element={
            <div className="w-full h-[100vh] bg-purple-400">
              <h1>home</h1>
            </div>
          }
        />
        <Route path={ROUTE.POPULATION} element={<Population />} />
        <Route path={ROUTE.CRYPTOCURRENCY} element={<CryptoCurrency />} />
        <Route path={ROUTE.WALLET} element={<Wallet />} />
      </Routes>
    </>
  );
};

export default ApplicationRoutes;
