import Bubblegum from "./components/Bubblegum";
import Home from "./components/Home";
import Starred from "./components/Starred";

export const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <Home />
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <Bubblegum />
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  },
  {
    path: "/starred",
    sidebar: () => <div>starred!</div>,
    main: () => <Starred />
  }
];
