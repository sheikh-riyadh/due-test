import { Outlet } from "react-router";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import Sidebar from "./Sidebar";
import Header from "../components/common/Header";

const MainLayout = () => {
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
    </div>
  );
};

export default MainLayout;
