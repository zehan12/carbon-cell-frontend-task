import { Greeting, Sidebar } from "./components";
import ApplicationRoutes from "./routes";

const App = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-zinc-900">
        <Sidebar />
        <div className="w-full flex flex-col">
          <Greeting />
          <ApplicationRoutes />
        </div>
      </div>
    </>
  );
};

export default App;
