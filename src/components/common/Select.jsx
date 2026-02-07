import { forwardRef } from "react";
import PropTypes from "prop-types";
import cn from "../../utils/cn";

const Select = forwardRef(({ className, label = "", ...rest }, ref) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="flex items-center gap-1 py-2 font-medium text-sm text-primary">
          {label} {rest?.required && <span>*</span>}
        </label>
      )}
      <select
        className={cn(
          `focus:outline-none bg-background w-full py-2 px-2 rounded-sm`,
          className
        )}
        {...rest}
        ref={ref}
      >
        <option disabled value="" selected>Select</option>
        {rest?.options?.map((option) => (
          <option value={option} key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
});
Select.displayName = "Select";

Select.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
};

export default Select;
