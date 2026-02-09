import { forwardRef } from "react";
import PropTypes from "prop-types";
import cn from "../../utils/cn";

const TextArea = forwardRef(({ className, label = "", ...rest }, ref) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="flex items-center gap-1 py-2 font-medium text-sm text-primary">
          {label} {rest?.required && <span>*</span>}
        </label>
      )}
      <textarea
        className={cn(
          `focus:outline-none bg-[#1C2822] w-full p-2 rounded-sm`,
          className
        )}
        {...rest}
        ref={ref}
      />
    </div>
  );
});
TextArea.displayName = "TextArea";

TextArea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

export default TextArea;