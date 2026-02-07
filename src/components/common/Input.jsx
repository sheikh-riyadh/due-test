import { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import cn from "../../utils/cn";

const Input = forwardRef(
  ({ className, label = "", type = "text", ...rest }, ref) => {
    const [changeType, setChangeType] = useState(type);

    console.log(changeType)

    return (
      <div className="flex flex-col gap-1 overflow-hidden">
        {label && (
          <label className="flex items-center gap-1 py-2 font-medium text-sm text-primary">
            {label} {rest?.required && <span>*</span>}
          </label>
        )}
        <div className="flex items-center justify-between relative w-full overflow-hidden">
          <input
            className={cn(
              `focus:outline-none bg-background w-full p-2 rounded`,
              className
            )}
            {...rest}
            type={changeType}
            ref={ref}
          />
          <div className="absolute right-0">
            {type === "password" && (
              <div
                
                className="p-2.5 flex items-end justify-end cursor-pointer"
              >
                {changeType == "text" ? (
                  <FaEyeSlash onClick={()=>setChangeType("password")} className="text-2xl font-bold h-full" />
                ) : (
                  <FaEye onClick={()=>setChangeType("text")} className="text-2xl font-bold h-full" />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
};

export default Input;