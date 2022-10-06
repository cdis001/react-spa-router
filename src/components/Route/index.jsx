import { useState, useEffect, useContext } from "react";

import { useRouterContext } from "../Router";

const Route = ({ path, component }) => {
  const [isPath, setIsPath] = useState(false);
  const { pathname, setPathname } = useRouterContext();

  useEffect(() => {
    path === pathname ? setIsPath(true) : setIsPath(false);

    window.onpopstate = (e) => {
      setPathname(window.location.pathname);
    };
  }, [pathname]);

  return isPath ? component : null;
};

export default Route;
