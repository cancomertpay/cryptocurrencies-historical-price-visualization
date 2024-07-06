import React from "react";

function DateInput({value, min, max, onChange}) {
  return (
    <div>
      <label htmlFor="start-date" className="block text-gray-200">
        Start Date
      </label>
      <input
        type="date"
        id="start-date"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        className="mt-1 block w-full px-3 py-2 bg-white border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary  focus:border-primary text-black min-w-[200px] min-h-[60px]"
      />
    </div>
  );
}

export default DateInput;
