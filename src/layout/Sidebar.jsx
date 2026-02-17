import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router";
import PropTypes from "prop-types";
import { FaArrowLeft, FaArrowRight, FaSignOutAlt } from "react-icons/fa";
import { sidebar_data } from "../data/sidebar_data";
import { removeUser } from "../store/features/user/userSlice";
import eyes_off from "../assets/eyes_off.png";
import only_head from "../assets/only-head.png";
import { useGetUser } from "../hooks/useGetUser";
import { useLogutMutation } from "../store/services/auth/authApi";
import SubmitButton from "../components/common/SubmitButton";
import { FaSpinner } from "react-icons/fa6";

const Sidebar = ({ visibleArrow = true, setIsModalOpen = () => {} }) => {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const { user } = useGetUser();
  const [handleLogout, { isLoading }] = useLogutMutation();

  const [isOff, setIsOff] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOff((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const logout = async () => {
    const result = await handleLogout();
    if (result?.data?.message == "Logged out successfully") {
      dispatch(removeUser());
    }
  };

  return (
    <aside
      className={`h-[calc(100vh)] transition-all block bg-[#1f2e2c] sticky top-0 z-40 ${
        isOpen ? "w-[250px]" : "w-[85px]"
      }`}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between py-5 px-8">
            <h1
              className={`${
                isOpen ? "block" : "hidden"
              } font-bold text-xl text-primary uppercase`}
            >
              Due sample
            </h1>
            <div
              className={`text-3xl -mr-11 z-50 text-[#fff] ${
                !visibleArrow ? "hidden" : "block"
              }`}
            >
              {isOpen ? (
                <FaArrowLeft
                  className="bg-[#abd006] p-2 rounded-full border border-border-primary cursor-pointer z-[999]"
                  onClick={() => setIsOpen((prev) => !prev)}
                />
              ) : (
                <FaArrowRight
                  className="bg-[#abd006] p-2 rounded-full cursor-pointer z-[999]"
                  onClick={() => setIsOpen((prev) => !prev)}
                />
              )}
            </div>
          </div>
          <div>
            <span
              className={`px-8 font-semibold text-primary ${
                isOpen ? "text-base" : "text-sm"
              }`}
            >
              Menu
            </span>
            {sidebar_data?.map((item, index) => {
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsModalOpen(false)}
                  className={`w-full flex items-center gap-5 py-3 px-8 font-semibold transition-all text-primary ${pathname == item?.path ? "bg-[#047857]" : null}`}
                  title={item.name}
                >
                  <div
                    className={`${index == 1 || index == 2 ? "text-3xl" : "text-2xl"}`}
                  >
                    {item.icon}
                  </div>
                  <div className={`${isOpen ? "block" : "hidden"}`}>
                    {item.name}
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="px-4 py-5 pb-7">
          <div>
            <div className="flex items-center gap-2 pb-5">
              <div className="w-12 h-12">
                <img
                  className="w-full h-full object-contain"
                  src={!isOff ? only_head : eyes_off}
                  alt="user"
                />
              </div>
              <div
                className="text-primary"
                style={{ display: isOpen ? "block" : "none" }}
              >
                <h3 className="text-base font-semibold capitalize">
                  {user?.role}
                </h3>
              </div>
            </div>
            <div
              className={`flex cursor-pointer gap-3 items-center bg-[#047857] rounded-lg text-xl text-[#fff] p-4`}
              onClick={logout}
            >
              {isLoading ? (
                <FaSpinner className="animate-spin"/>
              ) : (
                <FaSignOutAlt className="text-base" />
              )}
              <button className="font-semibold" style={{ display: isOpen ? "block" : "none" }}>
                {isLoading?"Loging out...":"Logout"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  visibleArrow: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
};

export default Sidebar;
