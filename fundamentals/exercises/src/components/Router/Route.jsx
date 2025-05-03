import React, { useContext } from "react";
import { BrowserContext } from "./BrowserRouter";
import Page404 from "../Page404";

const Route = ({ children, path }) => {
  // my current location
  const { currentUrl } = useContext(BrowserContext);
  return currentUrl.pathname === path ? <>{children}</> : null;
};

export default Route;
