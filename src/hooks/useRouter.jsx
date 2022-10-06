import { useRouterContext } from "../components/Router";

export const useRouter = () => {
  const { setPathname } = useRouterContext();

  const push = (path) => {
    setPathname(path);

    window.history.pushState("", "", path);
  };

  return { push };
};
