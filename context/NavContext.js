"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("Home");
  const pathname = usePathname(); // Get the current path

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const routeToNameMap = {
      "/": "Home",
      "/mystory": "My Story",
      "/projects": "Projects",
    };

    // Update active page based on the current path
    if (routeToNameMap[pathname]) {
      setActivePage(routeToNameMap[pathname]);
    }
  }, [pathname]);

  return (
    <NavContext.Provider
      value={{ activePage, setActivePage, isLoading, setIsLoading }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
