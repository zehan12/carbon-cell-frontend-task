import { FC } from "react";
import { Route, Routes } from "react-router-dom";

const ApplicationRoutes: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="w-full h-[100vh] bg-purple-400">
            <h1>home</h1>
          </div>
        }
      />
      <Route path="/about" element={<h1>About</h1>} />
    </Routes>
  );
};

export default ApplicationRoutes;
