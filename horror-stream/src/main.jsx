import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import OptionsProvider from "./Providers/OptionsProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OptionsProvider>
      <App />
    </OptionsProvider>
  </React.StrictMode>
);
