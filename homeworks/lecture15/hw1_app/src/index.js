import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./ProtectedRoutes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


