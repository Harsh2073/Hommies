import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
<<<<<<< HEAD
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
=======
import HouseContextProvider from "./components/HouseContext/HouseContext.jsx";


createRoot(document.getElementById("root")).render(
<StrictMode>
  <Router>
    <HouseContextProvider>
        <App />
    </HouseContextProvider>
  </Router>
</StrictMode>
>>>>>>> 7e3eb3ee3f3ee147be5e7ccac56531f820c645b5
);
