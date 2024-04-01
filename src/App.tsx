/*-------------------------------------------------------------------
|         🚀 CARBON CELL PLATFORM WEB APPLICATION 🚀
|
|  THIS WEB APPLICATION SHOWCASES VARIOUS FEATURES INCLUDING A SIDE 
|  NAVIGATION BAR, POPULATION DATA GRAPH, CRYPTOCURRENCY PRICE DISPLAY, 
|  AND OPTIONAL METAMASK WALLET INTEGRATION. IT UTILIZES MODERN WEB 
|  TECHNOLOGIES SUCH AS REACT JS AND WEB3 JS FOR SEAMLESS 
|  FUNCTIONALITY. FEEL FREE TO EXPLORE THE DIFFERENT TASKS IMPLEMENTED 
|  IN THIS APPLICATION. I BUILT THIS APP AS A TASK
|  FOR AN INTERVIEW. IF YOU HAVE ANY QUESTIONS, FEEL FREE TO REACH
|  OUT TO ME OR OPEN AN ISSUE ON GITHUB. THANKS!
|
|  🔗CREATOR: https://github.com/zehan12
|  🔗SOURCE CODE: https://github.com/zehan12/carbon-cell-frontend-task
|  🔗Live: https://carboncell-ten.vercel.app/home
|
*-------------------------------------------------------------------*/
import { Greeting, Sidebar } from "./components";
import ApplicationRoutes from "./routes";

const App = () => {
  return (
    <div>
      <div className="overflow-hidden md:overflow-visible lg:overflow-visible flex flex-col md:flex-row bg-zinc-800">
        <Sidebar />
        <div className="w-full flex flex-col">
          <Greeting />
          <ApplicationRoutes />
        </div>
      </div>
    </div>
  );
};

export default App;
