"use client";
import Sidebar from "../components/Sidebar/Sidebar";
import "./page.css";
import Image from "../../../node_modules/next/image";
import DateSelector from "./components/DateSelector/DateSelector";
import { useState, useEffect } from "react";
import Link from "../../../node_modules/next/link";
import CompanyCard from "./components/CompanyCard/CompanyCard";
import SelectClient from "./components/SelectClient/SelectClient";
import InvoiceItems from "./components/InvoiceItems/InvoiceItems";
import CompanyData from "./components/CompanyData/CompanyData";

const Invoice = () => {
  const [startWeekClick, seStartWeekClick] = useState<boolean | null>(false);
  const [endWeekClick, seEndWeekClick] = useState<boolean | null>(false);
  const [weekStart, setWeekStart] = useState<Date | null>(null);
  const [weekEnd, setWeekEnd] = useState<Date | null>(null);
  const [clickExport, setClickExport] = useState<boolean | null>(false);
  const [invoiceNumber, setInvoiceNumber] = useState<number | undefined>(0);
  const handleDateChangeStart = (date: Date | null) => {
    setWeekStart(date);
  };
  const handleDateChangeEnd = (date: Date | null) => {
    setWeekEnd(date);
  };

  const handleClickExport = () => {
    setClickExport(true);
  };

  const updateInvoiceNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvoiceNumber(Number(e.target.value));
  };

  useEffect(() => {
    const generatePDF = async (): Promise<void> => {
      const element: HTMLElement | null =
        document.getElementById("pdfContentToExport");
      try {
        if (element) {
          const html2canvas = await import("html2canvas");
          const html2pdf = await import("html2pdf.js");

          const canvas: HTMLCanvasElement = await html2canvas.default(element);
          console.log("Canvas generated:", canvas);

          if (canvas) {
            const pdf: any = new html2pdf.default(element, {
              margin: 10,
              filename: "Invoice_CGM.pdf",
              image: { type: "pdf", quality: 0.98 },
              html2canvas: { scale: 2, logging: true },
              jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
            });

            pdf.fromCanvas(canvas);
          } else {
            console.error("Canvas not generated");
          }
        } else {
          console.error("Element not found");
        }
      } catch (error) {
        console.error("Error occurred while generating PDF:", error);
      }
    };

    if (clickExport) {
      generatePDF();
      setClickExport(false);
    }
  }, [clickExport]);

  return (
    <div className="invoice-main">
      <Sidebar />
      <div className="invoice-body" id="pdfContentToExport">
        <div className="invoice-header">
          <Link href="/">
            <Image
              src="./icons/cross.svg"
              alt="cross to close"
              width={20}
              height={15}
            />
          </Link>
          <div className="invoice-name-date">
            <div>
              <p className="invoice-header-number">
                Invoice
                <input
                  type="number"
                  defaultValue={0}
                  className="invoice-number"
                  onChange={updateInvoiceNumber}
                />
              </p>
              <p className="invoice-header-company">#001 TRU GROUP </p>
            </div>
          </div>
          <Image
            src="./icons/edit.svg"
            alt="cross to close"
            width={20}
            height={20}
          />
        </div>
        <div className="date-client">
          <div className="invoice-to">
            <p className="plain-text">BILL TO</p>
            <SelectClient />
            <div className="invoice-date">
              <div className="week-start">
                <div className="calendar-icon">
                  <p>Week Start</p>
                  <DateSelector
                    weekStart={weekStart}
                    handleDateChange={handleDateChangeStart}
                  />
                </div>
              </div>
              <div className="week-end">
                <div className="calendar-icon">
                  <p>Week End</p>
                  <DateSelector
                    weekStart={weekEnd}
                    handleDateChange={handleDateChangeEnd}
                  />
                </div>
              </div>
            </div>
          </div>
          <CompanyData />
        </div>
        <div id="pdfContentToExport">
          <InvoiceItems handleClickExport={handleClickExport} />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
