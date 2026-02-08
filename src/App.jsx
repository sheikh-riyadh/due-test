import { RouterProvider } from "react-router";
import routes from "./routes/routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster />
    </>
  );
};

export default App;
