import { useState, useEffect, useContext } from "react";

import { useRouterContext } from "../Router";

const Route = ({ path, component }) => {
  const { pathname, setPathname } = useRouterContext();

  useEffect(() => {
    window.onpopstate = (e) => {
      setPathname(window.location.pathname);
    };
  }, [pathname]);

  return path === pathname ? component : null;
};

export default Route;
