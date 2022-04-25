   
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { StatContextProvider } from "./context/StatContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StatContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </StatContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);