import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Homepage from "../pages/Homepage";
import ProjectPage from "../pages/ProjectPage";
import ContributionPage from "../pages/ContributionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/project",
        element: <ProjectPage />,
      },
      {
        path: "/contribution",
        element: <ContributionPage />,
      },
    ],
  },
]);

export default router;
