import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import "./InvoiceItems.css";

interface InvoiceItem {
  name: string;
  qty: number;
  price: number;
}

const InvoiceItems: React.FC = () => {
  const [rows, setRows] = useState<InvoiceItem[]>([]);
  const [noOfClicks, setNoOfClicks] = useState<number>(0);
  const [checkedRows, setCheckedRows] = useState<number[]>([]);

  const handleNoOfClicks = () => {
    setRows((prevRows) => [...prevRows, { name: "", qty: 0, price: 0 }]);
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

  const handleChangeQty = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[index].qty = parseFloat(e.target.value) || 0;
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
      <div className="qty-b">
        <input
          type="number"
          onChange={(e) => handleChangeQty(index, e)}
          placeholder="0"
        />
      </div>
      <div className="unit-b">
        <select>
          <option>select unit...</option>
          <option>
            m <sup>{"\u00B2"}</sup>
          </option>
          <option>ml</option>
          <option>pcs</option>
          <option>days</option>
        </select>
      </div>
      <div className="price-b">
        <input
          type="number"
          onChange={(e) => handleChangePrice(index, e)}
          placeholder="0"
        />
      </div>
      <div className="amount-b">
        {new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP",
        }).format(row.price * row.qty)}
      </div>
    </div>
  ));

  return (
    <div className="invoice-items-main">
      <p className="plain-text">INVOICE LINE ITEMS</p>
      <div className="table-invoice-items">
        <div className="empty-header-check-box">
          <input type="checkbox" className="check-box" />
        </div>
        <div className="name-h">NAME</div>
        <div className="qty">QTY</div>
        <div className="unit">UNIT</div>
        <div className="price">PRICE</div>
        <div className="amount">AMOUNT</div>
      </div>
      {repeatedDivs}
      <div className="buttons">
        <button className="add-new-line" onClick={handleNoOfClicks}>
          <Image
            src={"./icons/add.svg"}
            alt="add line"
            width={20}
            height={20}
          />
          Add new line
        </button>
        <button className="delete-a-line" onClick={handleDeleteRow}>
          <Image
            src={"./icons/delete.svg"}
            alt="add line"
            width={20}
            height={20}
          />
          Delete line
        </button>
      </div>
    </div>
  );
};

export default InvoiceItems;
