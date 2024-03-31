import Greeting from "./components/Greeting";
import { SideBar } from "./components/Sidebar";
import ApplicationRoutes from "./routes";

const App = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-zinc-900">
        <SideBar />
        <div className="w-full flex flex-col">
          <Greeting />
          <ApplicationRoutes />
        </div>
      </div>
    </>
  );
};

export default App;
