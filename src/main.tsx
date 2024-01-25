import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { DataContextProvider } from "./views/contex.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </HashRouter>
  </React.StrictMode>
);
