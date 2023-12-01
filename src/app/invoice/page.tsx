"use client";
import Sidebar from "../components/Sidebar/Sidebar";
import "./page.css";
import Image from "../../../node_modules/next/image";
import DateSelector from "./components/DateSelector/DateSelector";
import { useState } from "react";
import Link from "../../../node_modules/next/link";

const Invoice = () => {
  const [startWeekClick, seStartWeekClick] = useState<boolean | null>(false);
  const [endWeekClick, seEndWeekClick] = useState<boolean | null>(false);

  const [weekStart, setWeekStart] = useState<Date | null>(null);
  const [weekEnd, setWeekEnd] = useState<Date | null>(null);

  const handleDateChangeStart = (date: Date | null) => {
    setWeekStart(date);
  };
  const handleDateChangeEnd = (date: Date | null) => {
    setWeekEnd(date);
  };
  const handleStartWeekClick = () => {
    seStartWeekClick(!startWeekClick);
  };
  const handleEndWeekClick = () => {
    seEndWeekClick(!endWeekClick);
  };

  return (
    <div className="invoice-main">
      <Sidebar />
      <div className="invoice-body">
        <div className="invoice-header">
          <Link href="/">
            <Image
              src="./icons/cross.svg"
              alt="cross to close"
              width={20}
              height={20}
            />
          </Link>
          <div>
            <p className="invoice-header-number">Invoice01</p>
            <p className="invoice-header-company">TRU GROUP</p>
          </div>
          <Image
            src="./icons/edit.svg"
            alt="cross to close"
            width={20}
            height={20}
          />
        </div>
        <div className="invoice-date">
          <div className="week-start">
            <div className="calendar-icon">
              <Image
                src="./icons/calendar.svg"
                alt="calendar"
                width={20}
                height={20}
                onClick={handleStartWeekClick}
              />
              <p>Week Start</p>
            </div>
            {startWeekClick && (
              <DateSelector
                weekStart={weekStart}
                handleDateChange={handleDateChangeStart}
              />
            )}
          </div>
          <div className="week-end">
            <div className="calendar-icon">
              <Image
                src="./icons/calendar.svg"
                alt="calendar"
                width={20}
                height={20}
                onClick={handleEndWeekClick}
              />
              <p>Week End</p>
            </div>
            {endWeekClick && (
              <DateSelector
                weekStart={weekEnd}
                handleDateChange={handleDateChangeEnd}
              />
            )}
          </div>
        </div>
        <div>invoiceee</div>
      </div>
    </div>
  );
};

export default Invoice;
