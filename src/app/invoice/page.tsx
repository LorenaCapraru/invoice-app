"use client";
import Sidebar from "../components/Sidebar/Sidebar";
import "./page.css";
import Image from "../../../node_modules/next/image";
import DateSelector from "./components/DateSelector/DateSelector";
import { useState, useEffect } from "react";
import Link from "../../../node_modules/next/link";
import SelectClient from "./components/SelectClient/SelectClient";
import InvoiceItems from "./components/InvoiceItems/InvoiceItems";
import CompanyData from "./components/CompanyData/CompanyData";
import { useRecoilState } from "recoil";
import {
  checkedRowsState,
  rowsState,
  isSliderClickedState,
} from "../recoilData/atoms";

interface InvoiceItem {
  name: string;
  qty?: number;
  price?: number;
}
const Invoice = () => {
  const [weekStart, setWeekStart] = useState<Date | null>(null);
  const [weekEnd, setWeekEnd] = useState<Date | null>(null);
  const [clickExport, setClickExport] = useState<boolean | null>(false);
  const [invoiceNumber, setInvoiceNumber] = useState<number | undefined>(0);
  const [rows, setRows] = useRecoilState<InvoiceItem[]>(rowsState);
  const [noOfClicks, setNoOfClicks] = useState<number>(0);
  const [checkedRows, setCheckedRows] =
    useRecoilState<number[]>(checkedRowsState);
  const [isSliderClicked, setIsSliderClicked] =
    useRecoilState<boolean>(isSliderClickedState);
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
    setInvoiceNumber(parseInt(e.target.value, 10));
  };

  const handleNoOfClicks = () => {
    setRows((prevRows) => [...prevRows, { name: "", qty: 0, price: 0 }]);
    setNoOfClicks(noOfClicks + 1);
  };

  const handleDeleteRow = () => {
    const rowsToDelete = rows.filter((_, index) => checkedRows.includes(index));
    setRows((prevRows) =>
      prevRows.filter((_, index) => !checkedRows.includes(index))
    );
    setCheckedRows([]);
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
    <main className={`invoice-main ${isSliderClicked ? "dark" : "light"}`}>
      <Sidebar />
      <div className="home-body">
        <div className="invoice-no-buttons" id="pdfContentToExport">
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
                <p className="invoice-header-company">TRU GROUP </p>
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
                    <p className="plain-text-week">WEEK START</p>
                    <DateSelector
                      weekStart={weekStart}
                      handleDateChange={handleDateChangeStart}
                    />
                  </div>
                </div>
                <div className="week-end">
                  <div className="calendar-icon">
                    <p className="plain-text-week">WEEK END</p>
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
          <div>
            <InvoiceItems />
          </div>
        </div>
        <div className="buttons">
          <div>
            <button className="add-new-line" onClick={handleNoOfClicks}>
              <Image
                src={"./icons/add.svg"}
                alt="add line"
                width={20}
                height={20}
              />
              Add new line
            </button>
            <button className="add-new-line" onClick={handleDeleteRow}>
              <Image
                src={"./icons/delete.svg"}
                alt="add line"
                width={20}
                height={20}
              />
              Delete line
            </button>
          </div>
          <button className="export-pdf" onClick={handleClickExport}>
            <Image
              src={"./icons/pdf.svg"}
              alt="add line"
              width={20}
              height={20}
            />
            Export as PDF
          </button>
        </div>
      </div>
    </main>
  );
};

export default Invoice;
