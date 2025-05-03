import React, { createContext, useState, useEffect } from "react";

const BrowserContext = createContext();
const routerState = {};

const BrowserRouter = ({ children }) => {
  const [currentUrl, setCurrentUrl] = useState(new URL(window.location.href));

  useEffect(() => {
    function handlePopStateEvent(e) {
      console.log(e);
    }
    window.addEventListener("popstate", handlePopStateEvent);
    return () => {
      window.removeEventListener("popstate", handlePopStateEvent);
    };
  }, []);

  return (
    <BrowserContext.Provider value={{ routerState, currentUrl, setCurrentUrl }}>
      {children}
    </BrowserContext.Provider>
  );
};

export default BrowserRouter;

export { BrowserContext };
