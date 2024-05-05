import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "./Home";
import Fund from "./Fund";
import Erech from "./Erech";
import Consoult from "./Consoult/Consult";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/fundpage',
        element: <Fund />
      },
      {
        path: '/erechladerech',
        element: <Erech />
      },
      {
        path: '/consoult',
        element: <Consoult />
      },
    ],
  },
]);