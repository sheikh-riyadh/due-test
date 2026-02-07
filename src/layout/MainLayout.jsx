import { Outlet } from "react-router";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import Sidebar from "./Sidebar";
import { useHandleTheme } from "../hooks/useHandleTheme";
import { useGetTheme } from "../hooks/useGetTheme";
import Header from "../components/common/Header";

const MainLayout = () => {
  const { theme } = useGetTheme();
  const handleTheme = useHandleTheme();
  return (
    <div className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        <div className="p-5 w-full">
          <Outlet />
        </div>
      </div>

      <div className="fixed top-2/4 right-0 bg-card p-2 rounded-l-lg border border-border-primary">
        <div>
          {theme === "light" ? (
            <FaMoon
              onClick={() => handleTheme("dark")}
              className="text-2xl text-primary cursor-pointer"
            />
          ) : (
            <IoMdSunny
              onClick={() => handleTheme("light")}
              className="text-2xl spin text-primary cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
