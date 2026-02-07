import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import DueSample from "../pages/DueSample"
import Phlebotomist from "../pages/Phlebotomist";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/due-sample",
        element: <DueSample/>,
      },
      {
        path: "/phlebotomist",
        element: <Phlebotomist/>,
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
]);

export default routes;
