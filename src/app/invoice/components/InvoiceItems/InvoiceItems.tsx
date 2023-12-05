import "./InvoiceItems.css";

const InvoiceItems = () => {
  return (
    <div className="invoice-items-main">
      <p className="plain-text">INVOICE LINE ITEMS</p>
      <table className="table-invoice-items">
        <thead className="items-header">
          <tr className="items-table-header">
            <th>NAME</th>

            <th>PRICE</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr className="items-table">
            <td>
              <span>Metal Frame</span>
              <div>
                <span>33</span>
                <span>m2</span>
              </div>
            </td>

            <td>£3.5</td>
            <td>{33 * 3.5}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceItems;
