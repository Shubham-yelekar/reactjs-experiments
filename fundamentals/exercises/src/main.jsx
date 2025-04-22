import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Counter from "./components/useReducer/Counter";
import ControlForm from "./components/useReducer/ControlForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ControlForm />
  </StrictMode>
);
