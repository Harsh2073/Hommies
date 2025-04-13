import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import HouseContextProvider from "./components/HouseContext/HouseContext.jsx";
import setupInterceptors from "./redux/setupInterceptors.js";

setupInterceptors(store);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <HouseContextProvider>
          <App />
        </HouseContextProvider>
      </Router>
    </Provider>
  </StrictMode>
);
