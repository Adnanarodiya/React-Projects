import React from "react";
import { useId } from "react";
function Select({ options, lable, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {lable && <label htmlFor={id}></label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}{" "}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
