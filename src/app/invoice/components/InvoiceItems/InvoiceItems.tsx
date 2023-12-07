import "./InvoiceItems.css";
import { ChangeEvent, useState } from "react";

const InvoiceItems = () => {
  let [noOfClicks, setNoOfClicks] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [qty, setQty] = useState<number>(0);

  const handleNoOfClicks = () => {
    setNoOfClicks(noOfClicks + 1);
  };

  const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(parseFloat(e.target.value) || 0);
  };
  const handleChangeQty = (e: ChangeEvent<HTMLInputElement>) => {
    setQty(parseFloat(e.target.value) || 0);
  };

  console.log("no of clicks", noOfClicks);

  const repeatedDivs = Array.from({ length: noOfClicks }, (_, index) => (
    <div key={index} className="repeated-row">
      <div className="empty-header-check-box">
        <input type="checkbox" className="check-box" />
      </div>
      <div className="name-b">
        <input type="text" />
      </div>
      <div className="qty-b">
        <input type="number" onChange={handleChangeQty} />
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
        <input type="number" onChange={handleChangePrice} />
      </div>
      <div className="amount-b">
        {new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP",
        }).format(price * qty)}
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
        <div className="qty">QUANTITY</div>
        <div className="unit">UNIT</div>
        <div className="price">PRICE</div>
        <div className="amount">AMOUNT</div>
      </div>
      {repeatedDivs}
      <button className="add-new-line" onClick={handleNoOfClicks}>
        Add new line
      </button>
    </div>
  );
};

export default InvoiceItems;
