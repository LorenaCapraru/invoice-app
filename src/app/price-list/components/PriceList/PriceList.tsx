import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import "./PriceList.css";
import { useRecoilState } from "recoil";
import { pricesState } from "@/app/recoil/atoms";
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
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[index].price = parseFloat(e.target.value) || 0;
      return updatedRows;
    });
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
  // const dbPrices = price.map((row, index) => (
  //   <div key={index} className="repeated-row">
  //     <div className="empty-header-check-box">
  //       <input
  //         type="checkbox"
  //         className="check-box"
  //         checked={checkedRows.includes(index)}
  //         onChange={() => handleCheckboxChange(index)}
  //       />
  //     </div>

  //     <div className="name-b">
  //       <input
  //         type="text"
  //         placeholder="Add Item"
  //         value={row.name}
  //         onChange={(e) => handleChangeName(index, e)}
  //       />
  //     </div>

  //     <div className="unit-b">{row.unit}</div>

  //     <div className="price-b">
  //       <input
  //         type="number"
  //         value={row.price}
  //         onChange={(e) => handleChangePrice(index, e)}
  //         placeholder="0"
  //       />
  //     </div>
  //   </div>
  // ));

  const repeatedDivs = rows.map((row, index) => (
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
        <select value={row.unit} onChange={(e) => handleChangeUnit(index, e)}>
          <option value="">select unit...</option>
          <option value="m²">
            m <sup>{"\u00B2"}</sup>
          </option>
          <option value="lm">lm</option>
          <option value="pcs">pcs</option>
          <option value="days">days</option>
        </select>
      </div>

      <div className="price-b">
        <input
          value={row.price}
          type="number"
          onChange={(e) => handleChangePrice(index, e)}
          placeholder="0"
        />
      </div>
    </div>
  ));
  return (
    <div className="invoice-items-main">
      <p className="plain-text">PRICE LIST ITEMS</p>
      <div className="table-invoice-items">
        <div className="empty-header-check-box">
          <input type="checkbox" className="check-box" />
        </div>
        <div className="name-h">NAME</div>
        <div className="unit">UNIT</div>
        <div className="price">PRICE</div>
      </div>
      {/* {dbPrices} */}
      {repeatedDivs}

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
