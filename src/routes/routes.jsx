import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import DueSample from "../pages/DueSample";
import Phlebotomist from "../pages/Phlebotomist";
import PrivateRoute from "./privateRoute";
import Overview from "../pages/Overview";
import Login from "../pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          // <PrivateRoute>
            <Overview />
          // </PrivateRoute>
        ),
      },
      {
        path: "/overview",
        element: (
          // <PrivateRoute>
            <Overview />
          // </PrivateRoute>
        ),
      },
      {
        path: "/due-sample",
        element: (
          // <PrivateRoute>
            <DueSample />
          // </PrivateRoute>
        ),
      },
      {
        path: "/phlebotomist",
        element: (
          // <PrivateRoute>
            <Phlebotomist />
          // </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
