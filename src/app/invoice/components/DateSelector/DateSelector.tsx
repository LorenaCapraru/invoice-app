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
    <div>
      <DatePicker
        selected={weekStart}
        onChange={handleDateChange}
        showPopperArrow={true}
      />
    </div>
  );
};

export default DateSelector;
