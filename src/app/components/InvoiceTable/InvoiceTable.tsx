"use client";
import "./InvoiceTable.css";
import Image from "../../../../node_modules/next/image";
const InvoiceTable = ({ invoicesData }) => {
  console.log(invoicesData);
  const formattedNumber: string = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  return (
    <div className="table-main">
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {invoicesData.invoices.map((el, index) => (
            <tr key={index}>
              <td className="client-invoiceNo">
                <span className="td-client">{el.client}</span>
                <span className="td-invoice-no">{el.invoice_number}</span>
              </td>
              <td className="sum">{formattedNumber.format(el.total)}</td>
              <td className="status">{el.status}</td>
              <td>
                <Image
                  src="./icons/ellipsis.svg"
                  width={15}
                  height={15}
                  alt="ellipsis options icon"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
