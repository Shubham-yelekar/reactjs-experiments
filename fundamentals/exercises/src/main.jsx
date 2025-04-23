import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
<<<<<<< Updated upstream
import Counter from "./components/useReducer/Counter";
import ControlForm from "./components/useReducer/ControlForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ControlForm />
=======
import Input from "./components/useRef/Input";
import Video from "./components/useRef/Video";
import GuessNumber from "./components/useRef/GuessNumber";
import Form from "./components/useRef/Form";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Form />
>>>>>>> Stashed changes
  </StrictMode>
);
