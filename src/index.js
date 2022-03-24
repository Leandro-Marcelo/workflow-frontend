import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import APIProvider from "./context/APIContext";

ReactDOM.render(
  <React.StrictMode>
    <APIProvider>
      <App />
    </APIProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
