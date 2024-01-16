"use client";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import "./InvoiceItems.css";
import Tax from "../Tax/Tax";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  checkedRowsState,
  rowsState,
  isSliderClickedState,
} from "../../../recoil/atoms";
interface InvoiceItem {
  name: string;
  qty?: number;
  price?: number;
}

const InvoiceItems = () => {
  const isSliderClicked = useRecoilValue<boolean>(isSliderClickedState);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [checkedRows, setCheckedRows] =
    useRecoilState<number[]>(checkedRowsState);
  const [rows, setRows] = useRecoilState<InvoiceItem[]>(rowsState);

  const handleChangePrice = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setRows((prevRows) => {
      const updatedRows = prevRows.map((row, i) => {
        if (i === index) {
          return { ...row, price: parseFloat(e.target.value) || 0 };
        }
        return row;
      });

      return updatedRows;
    });
  };

  const handleChangeQty = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[index] = { ...updatedRows[index] };
      updatedRows[index].qty = parseFloat(e.target.value) || 0;
      return updatedRows;
    });
  };

  const handleChangeName = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setRows((prevRows) => {
      const updatedRows = prevRows.map((row, i) => {
        if (i === index) {
          return { ...row, name: e.target.value };
        }
        return row;
      });
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

  const handleHeaderCheckboxChange = () => {
    if (!selectAll) {
      const allRowsIndexes = rows.map((_, index) => index);
      setCheckedRows(allRowsIndexes);
    } else {
      setCheckedRows([]);
    }
    setSelectAll(!selectAll);
  };

  const repeatedDivs =
    rows &&
    rows.map((row, index) => (
      <div
        key={index}
        className={`repeated-row ${
          isSliderClicked ? "dark-component" : "light-component"
        }`}
      >
        {!row.name.includes("Flat") && (
          <div className="empty-header-check-box">
            <input
              type="checkbox"
              className="check-box"
              checked={checkedRows.includes(index)}
              onChange={() => handleCheckboxChange(index)}
            />
          </div>
        )}

        <div className="name-b">
          <input
            type="text"
            placeholder="Add Item"
            value={row.name}
            onChange={(e) => handleChangeName(index, e)}
            className={isSliderClicked ? "dark-component" : "light-component"}
          />
        </div>
        {!row.name.includes("Flat") && (
          <div className="qty-b">
            <input
              type="number"
              onChange={(e) => handleChangeQty(index, e)}
              placeholder="0"
              className={isSliderClicked ? "dark-component" : "light-component"}
            />
          </div>
        )}
        {!row.name.includes("Flat") && (
          <div className="unit-b">
            <select
              className={isSliderClicked ? "dark-component" : "light-component"}
            >
              <option>select unit...</option>
              <option>
                m <sup>{"\u00B2"}</sup>
              </option>
              <option>lm</option>
              <option>pcs</option>
              <option>days</option>
            </select>
          </div>
        )}
        {!row.name.includes("Flat") && (
          <div className="price-b">
            <input
              type="number"
              onChange={(e) => handleChangePrice(index, e)}
              placeholder="0"
              className={isSliderClicked ? "dark-component" : "light-component"}
            />
          </div>
        )}
        {!row.name.includes("Flat") &&
          row.price !== undefined &&
          row.qty !== undefined && (
            <div className="amount-b">
              {new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
              }).format((row.price || 0) * (row.qty || 0))}
            </div>
          )}
      </div>
    ));
  return (
    <div className="invoice-items-main">
      <p className="plain-text">INVOICE LINE ITEMS</p>
      <div
        className={`table-invoice-items ${
          isSliderClicked ? "dark-component" : "light-component"
        }`}
      >
        <div className="empty-header-check-box">
          <input
            type="checkbox"
            className="check-box"
            checked={selectAll}
            onChange={handleHeaderCheckboxChange}
          />
        </div>
        <div className="name-h">NAME</div>
        <div className="qty">QTY</div>
        <div className="unit">UNIT</div>
        <div className="price">PRICE</div>
        <div className="amount">AMOUNT</div>
      </div>
      {repeatedDivs && repeatedDivs.length === 0 ? (
        <div className="empty-table">No items in the table</div>
      ) : (
        repeatedDivs
      )}

      {repeatedDivs && repeatedDivs.length > 0 && (
        <div className="tax-container">
          <Tax rows={rows} />
        </div>
      )}
    </div>
  );
};

export default InvoiceItems;
