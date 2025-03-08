import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import HouseContextProvider from "./components/HouseContext/HouseContext.jsx";
import AgentContextProvider from "./components/AgentContext/AgentContext.jsx";


createRoot(document.getElementById("root")).render(
<StrictMode>
  <Router>
    <HouseContextProvider>
      <AgentContextProvider>
        <App />
      </AgentContextProvider>
    </HouseContextProvider>
  </Router>
</StrictMode>
);
