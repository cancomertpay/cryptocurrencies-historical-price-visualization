"use client";

import { useState } from "react";
import { useCryptoContext } from "@/store/crypto-context";
import DateInput from "./date-input";
import SubmitButton from "./submit-button";

// DatePicker Component
// This component renders a date picker interface allowing users to select a date range and submit it.

function  DatePicker() {
  // Destructuring handleDateSubmit from the crypto context
  const { handleDateSubmit } = useCryptoContext();

  // State variables for start and end dates
  const [startDate, setStartDate] = useState("2010-07-18");
  const [endDate, setEndDate] = useState("2021-08-24");

  // Handler functions to update state on date input change
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    handleDateSubmit(startDate, endDate);
  };

  return (
    <div className="w-full rounded-full">
      <div
        className={`flex flex-col items-center justify-center p-6 bg-black/80 text-white lg:rounded-b-xl shadow-md transition-all duration-300 ease-in-out`}
      >
        {/* Header for the Date Picker */}
        <h2 className="text-2xl font-semibold mb-4">Select Date Range</h2>
        
        {/* Date Input Fields and Submit Button */}
        <div className="flex flex-col lg:flex-row items-end justify-center gap-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
            {/* Start Date Input */}
            <DateInput
              title="Start Date"
              value={startDate}
              onChange={handleStartDateChange}
            />
            {/* End Date Input */}
            <DateInput
              title="End Date"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
          <div>
            {/* Submit Button */}
            <SubmitButton onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
