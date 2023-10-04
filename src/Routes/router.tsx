import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import App from "../App";
import Project from "../Components/Project";
import Contribution from "../Components/Contribution";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/contribution",
        element: <Contribution />,
      },
    ],
  },
]);

export default router;
