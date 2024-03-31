import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ROUTE from "../constants/routes";

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
        <Route path={ROUTE.POPULATION} element={<h1>population</h1>} />
        <Route path={ROUTE.CRYPTOCURRENCY} element={<h1>Cryptocurrency</h1>} />
      </Routes>
    </>
  );
};

export default ApplicationRoutes;
