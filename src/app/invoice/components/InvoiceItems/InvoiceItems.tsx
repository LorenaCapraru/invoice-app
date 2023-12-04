import "./InvoiceItems.css";

const InvoiceItems = () => {
  return (
    <div className="invoice-items-main">
      <p className="plain-text">INVOICE LINE ITEMS</p>
      <table>
        <thead>
          <tr className="items-table">
            <th>Item</th>
            <th>Qty</th>
            <th>Unit</th>
            <th>Price</th>
            <th>Amount</th>
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
