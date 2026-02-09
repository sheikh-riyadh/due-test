import { useEffect } from "react";
import PropTypes from "prop-types";
import { FaCircleXmark } from "react-icons/fa6";
import cn from "../../utils/cn";

const Modal = ({
  isOpen,
  onClose,
  className,
  title,
  children,
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
      className={`fixed  top-0 left-0 z-50 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%)] max-h-full bg-[#2222227c] backdrop-blur flex flex-col justify-center items-center zoom-in-element ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div
        className={cn(
          "bg-[#171f12] rounded-lg p-5 shadow-lg  overflow-y-auto border border-[#1f2e2c]",
          className
        )}
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between text-white">
            <span className="font-bold text-primary">{title}</span>
            <FaCircleXmark
              onClick={() => onClose()}
              className="text-2xl text-primary duration-300 cursor-pointer"
            />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  isOutsideClick: PropTypes.bool,
};

export default Modal;