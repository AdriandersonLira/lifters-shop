import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

import { BagProvider } from "./providers/Bag.provider";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BagProvider>
      <App />
    </BagProvider>
  </React.StrictMode>
);
