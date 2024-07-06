"use client";

import { useEffect, useState } from "react";
import { useCryptoContext } from "@/store/crypto-context";
import TogglePicker from "./toggle-picker";
import DateInput from "../UI/date-input";
import SubmitButton from "./submit-button";

function DatePicker() {
  const { originalDataList, slug, handleDateSubmit } = useCryptoContext();

  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [initialSet, setInitialSet] = useState(false);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = () => {
    handleDateSubmit(new Date(startDate), new Date(endDate));
  };

  const togglePicker = () => {
    setIsPickerOpen((prev) => !prev);
  };

  useEffect(() => {
    if (originalDataList.length > 0 && !initialSet) {
      const initialMinDate = originalDataList[0].Date;
      const initialMaxDate = originalDataList[originalDataList.length - 1].Date;
      setMinDate(initialMinDate);
      setMaxDate(initialMaxDate);
      setStartDate(initialMinDate);
      setEndDate(initialMaxDate);
      setInitialSet(true);
    }
  }, [originalDataList, initialSet]);

  useEffect(() => {
    setInitialSet(false);
  }, [slug]);

  return (
    <div className="absolute top-0 right-0 w-full px-32 rounded-full">
      <TogglePicker togglePicker={togglePicker} isPickerOpen={isPickerOpen} />
      {isPickerOpen && (
        <div
          className={`flex flex-col items-center justify-center p-6 bg-black/80 text-white rounded-b-xl shadow-md transition-all duration-300 ease-in-out`}
        >
          <h2 className="text-2xl font-semibold mb-4">Select Date Range</h2>
          <div className="flex items-end justify-center gap-10">
            <div className="flex items-center justify-center gap-5">
              <DateInput
                value={startDate}
                min={minDate}
                max={maxDate}
                onChange={handleStartDateChange}
              />
              <DateInput
                value={endDate}
                min={minDate}
                max={maxDate}
                onChange={handleEndDateChange}
              />
            </div>
            <div>
              <SubmitButton onClick={handleSubmit} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DatePicker;
