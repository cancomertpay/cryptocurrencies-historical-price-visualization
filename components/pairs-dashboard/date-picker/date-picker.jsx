"use client";

import { useState } from "react";
import { useCryptoContext } from "@/store/crypto-context";
import DateInput from "./date-input";
import SubmitButton from "./submit-button";

// DatePicker Component
// This component renders a date picker interface allowing users to select a date range and submit it.

function DatePicker() {
  // Destructuring handleDateSubmit from the crypto context
  const { handleDateSubmit } = useCryptoContext();

  // State variables for start and end dates
  const [startDate, setStartDate] = useState("2010-07-18");
  const [endDate, setEndDate] = useState("2021-08-24");
  const [error, setError] = useState(""); // State variable for error messages

  // Handler functions to update state on date input change
  const handleStartDateChange = (e) => {
    setError("");
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setError("");
    setEndDate(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (!startDate || !endDate) {
      setError("Both start date and end date must be selected.");
      return;
    }

    // Validate dates
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) {
      setError("Start date cannot be later than end date.");
      return;
    } else if (end < start) {
      setError("End date cannot be later than start date.");
      return;
    } else if (start.toDateString() === end.toDateString()) {
      setError("Start date and end date cannot be the same.");
      return;
    }

    // If no error, clear error state and submit dates
    setError("");
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

        {/* Error Message */}
        <div className="mt-4 text-red-500 font-medium min-h-[24px]">
          {error}
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
