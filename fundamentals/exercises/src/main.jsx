import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Grades from "./components/Grades";

import "./index.css";
import TextBox from "./components/TextBox";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Profile />
  </StrictMode>
);
