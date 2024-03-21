import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex flex-col min-h-screen w-screen bg-gray-100">
      <App />
    </div>
  </React.StrictMode>,
);
