import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Grades from "./components/Grades";

import "./index.css";
import TextBox from "./components/TextBox";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import Interval from "./components/Interval";
import Home from "./components/Home";
import Section from "./components/Section";
import FetchPokemon from "./components/FetchPokemon";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FetchPokemon />
  </StrictMode>
);
