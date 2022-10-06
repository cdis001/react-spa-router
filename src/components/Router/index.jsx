import { useState, useContext, createContext } from "react";

const RouterContext = createContext();

const Router = ({ children }) => {
  const [pathname, setPathname] = useState(window.location.pathname);

  return (
    <RouterContext.Provider value={{ pathname, setPathname }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;

export const useRouterContext = () => {
  return useContext(RouterContext);
};
