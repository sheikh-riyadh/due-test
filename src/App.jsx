import { RouterProvider } from "react-router";
import routes from "./routes/routes";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useHandleTheme } from "./hooks/useHandleTheme";
import { useGetTheme } from "./hooks/useGetTheme";

const App = () => {
   /* Get default theme from redux persist */
  const { theme } = useGetTheme();

  /* Here we set the default theme which is user clicked */
  const handleTheme = useHandleTheme();
  useEffect(() => {
    handleTheme(theme);
  }, [theme, handleTheme]);
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster />
    </>
  );
};

export default App;
