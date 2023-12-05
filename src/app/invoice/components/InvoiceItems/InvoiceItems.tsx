import "./InvoiceItems.css";

const InvoiceItems = () => {
  return (
    <div className="invoice-items-main">
      <p className="plain-text">INVOICE LINE ITEMS</p>
      <table className="table-invoice-items">
        <thead className="items-header">
          <tr className="items-table-header">
            <th>NAME</th>
            <th>QTY</th>
            <th>UNIT</th>
            <th>PRICE</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr className="items-table">
            <td>Item</td>
            <td>Qty</td>
            <td>Unit</td>
            <td>Price</td>
            <td>Amount</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceItems;
