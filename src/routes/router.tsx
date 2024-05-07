import { createHashRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "./Home";
import Fund from "./Fund";
import Erech from "./Erech";
import Consoult from "./Consoult/Consult";
import ErrorEelement from "../components/ErrorElement/ErrorEelement";

export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorEelement />,
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