import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App_function from "./App_function";
import App_redux from "./App_redux";
import App_RTK from "./App_RTK";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App_function /> */}
    <App_redux/>
    {/* <App_RTK /> */}
  </StrictMode>
);
