import React, { ChangeEvent, useState, useEffect } from "react";
import Image from "next/image";
import "./PriceList.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { pricesState, searchState } from "@/app/recoil/atoms";
interface PriceList {
  id: number;
  name: string;
  price: number;
  unit: string;
}

const PriceList = () => {
  const [price, setPrice] = useRecoilState<PriceList[]>(pricesState);
  const [rows, setRows] = useState<PriceList[]>(price);
  const [noOfClicks, setNoOfClicks] = useState<number>(0);
  const [checkedRows, setCheckedRows] = useState<number[]>([]);
  const [clickExport, setClickExport] = useState<boolean | null>(false);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const search = useRecoilValue(searchState);

  const handleCheckboxChange = (index: number) => {
    setCheckedRows((prevCheckedRows) => {
      const isChecked = prevCheckedRows.includes(index);
      if (isChecked) {
        return prevCheckedRows.filter((item) => item !== index);
      } else {
        return [...prevCheckedRows, index];
      }
    });
  };
  const handleHeaderCheckboxChange = () => {
    if (!selectAll) {
      const allRowsIndexes = rows.map((_, index) => index);
      setCheckedRows(allRowsIndexes);
    } else {
      setCheckedRows([]);
    }
    setSelectAll(!selectAll);
  };

  const handleClickExport = () => {
    setClickExport(true);
  };
  const [noOfClicksSection, setNoOfClicksSection] = useState<number>(0);

  const handleNoOfClicks = () => {
    setRows((prevRows) => [
      ...prevRows,
      { id: rows.length, name: "", price: 0, unit: "" },
    ]);
    setNoOfClicks(noOfClicks + 1);
  };

  const handleDeleteRow = () => {
    setRows((prevRows) => {
      const updatedRows = prevRows.filter(
        (_, index) => !checkedRows.includes(index)
      );
      setCheckedRows([]);
      return updatedRows;
    });
  };
  const handleChangeUnit = (
    index: number,
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = e.target;
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[index].unit = value;
      return updatedRows;
    });
  };

  const handleChangePrice = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const updatedRows = rows.map((row, rowIndex) => {
      if (rowIndex === index) {
        return { ...row, price: Number(e.target.value) };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleChangeName = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[index].name = e.target.value;
      return updatedRows;
    });
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

  const repeatedDivs = rows
    .filter((el: PriceList) =>
      el.name.toLowerCase().includes(search.toLowerCase())
    )
    .map((row, index) => (
      <div key={index} className="repeated-row">
        <div className="empty-header-check-box">
          <input
            type="checkbox"
            className="check-box"
            checked={checkedRows.includes(index)}
            onChange={() => handleCheckboxChange(index)}
          />
        </div>

        <div className="name-b">
          <input
            type="text"
            placeholder="Add Item"
            value={row.name}
            onChange={(e) => handleChangeName(index, e)}
          />
        </div>

        <div className="unit-b">
          <select defaultValue={row.unit}>
            <option value="">select unit...</option>
            <option value="m2">m2</option>
            <option value="lm">lm</option>
            <option value="pcs">pcs</option>
            <option value="days">days</option>
          </select>
        </div>

        <div className="price-b">
          <input
            defaultValue={row.price}
            type="number"
            onChange={(e) => handleChangePrice(index, e)}
            placeholder="0"
          />
        </div>
      </div>
    ));
  return (
    <div className="invoice-items-main">
      <div id="pdfContentToExport">
        <p className="plain-text">PRICE LIST ITEMS</p>
        <div className="table-invoice-items">
          <div className="empty-header-check-box">
            <input
              type="checkbox"
              className="check-box"
              checked={selectAll}
              onChange={handleHeaderCheckboxChange}
            />
          </div>
          <div className="name-h">NAME</div>
          <div className="unit">UNIT</div>
          <div className="price">PRICE</div>
        </div>
        {repeatedDivs.length > 0 ? (
          repeatedDivs
        ) : (
          <div className="empty-table">No items in the list</div>
        )}
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
  );
};

export default PriceList;
