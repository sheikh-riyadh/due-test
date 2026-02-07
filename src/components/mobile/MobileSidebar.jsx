import { useEffect } from "react";
import cn from "../../utils/cn";
import { FaCircleXmark } from "react-icons/fa6";
import Sidebar from "../../layout/Sidebar";
import PropTypes from "prop-types";

const MobileSidebar = ({
  isOpen,
  onClose,
  className,
  title,
  isOutsideClick = true,
}) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isOpen &&
        e.target.classList.contains("modal-overlay") &&
        isOutsideClick
      ) {
        onClose();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose, isOutsideClick]);

  return (
    <div
      className={`fixed  top-0 left-0 z-50  overflow-x-hidden inset-0 h-[calc(100%)] max-h-full bg-black/90 flex flex-col items-start modal-overlay ${
        isOpen ? "block ltr-animation" : "hidden rtl-animation"
      }`}
    >
      <div
        className={cn(
          "bg-widget shadow-lg  overflow-hidden custom-bar",
          className
        )}
      >
        <div className="flex flex-col gap-5">
          {isOutsideClick ? (
            <div className="flex items-center justify-between p-5 z-50">
              <span className="font-bold">{title}</span>
              <FaCircleXmark
                onClick={() => onClose()}
                className="text-2xl text-accent duration-300 cursor-pointer"
              />
            </div>
          ) : null}
          <div className="-mt-20">
            <Sidebar visibleArrow={false} setIsModalOpen={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

MobileSidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  isOutsideClick: PropTypes.bool,
};

export default MobileSidebar;