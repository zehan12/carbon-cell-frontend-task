import { SideBar } from "./components/Sidebar";
import ApplicationRoutes from "./routes";

const App = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <SideBar />
        <ApplicationRoutes />
      </div>
    </>
  );
};

export default App;
