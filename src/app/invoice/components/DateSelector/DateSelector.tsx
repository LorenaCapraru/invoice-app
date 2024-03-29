import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./DateSelector.css";
import "react-datepicker/dist/react-datepicker.css";

interface DateSelectorProps {
  weekStart: Date | null;
  handleDateChange: (date: Date | null) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  weekStart,
  handleDateChange,
}) => {
  return (
    <div className="date-picker">
      <DatePicker
        selected={weekStart}
        onChange={handleDateChange}
        showPopperArrow={true}
        placeholderText="Select a date"
      />
    </div>
  );
};

export default DateSelector;
