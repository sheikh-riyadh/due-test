import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import DueSample from "../pages/DueSample"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/due-sample",
        element: <DueSample/>,
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
]);

export default routes;
