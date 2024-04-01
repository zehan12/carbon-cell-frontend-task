import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <App />
    <Toaster />
  </Router>
);
