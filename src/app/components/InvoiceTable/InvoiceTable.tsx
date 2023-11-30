"use client";
import "./InvoiceTable.css";
import Image from "../../../../node_modules/next/image";
import { useState } from "react";

const InvoiceTable = ({ invoicesData }) => {
  const [updatedInvoices, setUpdatedInvoices] = useState(invoicesData.invoices);

  const formattedNumber: string = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  const toggleStatus = (status) => {
    switch (status) {
      case "paid":
        return "send";
      case "send":
        return "pending";
      case "pending":
        return "paid";
      default:
        return status;
    }
  };

  const handleStatusClick = (index) => {
    const updatedStatus = toggleStatus(updatedInvoices[index].status);

    const newInvoices = [...updatedInvoices];
    newInvoices[index].status = updatedStatus;

    setUpdatedInvoices(newInvoices);
  };

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
              <td className="status" onClick={() => handleStatusClick(index)}>
                {el.status}
              </td>
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
