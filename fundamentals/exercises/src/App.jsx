import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BrowserRouter from "./components/Router/BrowserRouter";
import Route from "./components/Router/Route";
function App() {
  return (
    <>
      <h1>App</h1>
      <BrowserRouter>
        <h3>Browser</h3>
        <Route path="/1">
          <h4>Route 1</h4>
          <a href="/2">Route 2</a>
        </Route>
        <Route path="/2">
          <h4>Route 2</h4>
          <a href="/1">Route 1</a>
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
