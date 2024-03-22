import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="flex flex-col min-h-screen w-screen bg-gray-100">
        <App />
      </div>
    </Provider>
  </React.StrictMode>,
);
