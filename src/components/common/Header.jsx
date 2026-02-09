import { useEffect, useState } from "react";
import only_head from "../../assets/only-head.png"
import eyes_off from "../../assets/eyes_off.png"
import MobileSidebar from "../mobile/MobileSidebar";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOff, setIsOff] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOff((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full bg-[#1f2e2c] sticky top-0 flex items-center justify-between lg:justify-end p-3.5 z-30">
      <div
        className="cursor-pointer lg:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FaBars className="text-2xl text-primary" />
      </div>
      <nav>
        <ul className="flex items-center gap-5">
          <li>
            <div className="w-10 h-10">
              <img
                className="w-full h-full object-contain"
                src={!isOff ? only_head : eyes_off}
                alt="user"
              />
            </div>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <MobileSidebar
          isOpen={isOpen}
          onClose={setIsOpen}
          key={"mobleSidebar"}
          className={"bg-card h-screen z-50"}
        />
      )}
    </header>
  );
};

export default Header;
