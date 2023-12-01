import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./DateSelector.css";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector: React.FC = ({ weekStart, handleDateChange }) => {
  return (
    <div>
      {
        <DatePicker
          selected={weekStart}
          onChange={handleDateChange}
          showPopperArrow={true}
        />
      }
    </div>
  );
};

export default DateSelector;
