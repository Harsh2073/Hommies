import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import HouseContextProvider from "./components/HouseContext/HouseContext.jsx";


createRoot(document.getElementById("root")).render(
<StrictMode>
  <Router>
    <HouseContextProvider>
        <App />
    </HouseContextProvider>
  </Router>
</StrictMode>
);
