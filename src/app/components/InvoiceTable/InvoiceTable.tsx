import React, { useState } from "react";
import Image from "next/image";

interface Invoice {
  client: string;
  invoice_number: string;
  total: number;
  status: string;
}

interface Props {
  invoicesData: {
    invoices: Invoice[];
  };
}

const InvoiceTable: React.FC<Props> = ({ invoicesData }) => {
  const [updatedInvoices, setUpdatedInvoices] = useState<Invoice[]>(
    invoicesData.invoices
  );

  const formattedNumber: string = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(0);

  const toggleStatus = (status: string): string => {
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

  const handleStatusClick = (index: number): void => {
    const updatedStatus: string = toggleStatus(updatedInvoices[index].status);

    const newInvoices: Invoice[] = [...updatedInvoices];
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
          {invoicesData.invoices.map((el: Invoice, index: number) => (
            <tr key={index}>
              <td className="client-invoiceNo">
                <span className="td-client">{el.client}</span>
                <span className="td-invoice-no">{el.invoice_number}</span>
              </td>
              <td className="sum">{formattedNumber}</td>
              <td
                className={
                  el.status === "pending"
                    ? "status-pending"
                    : el.status === "send"
                    ? "status-sent"
                    : "status-paid"
                }
                onClick={() => handleStatusClick(index)}
              >
                <span>{el.status}</span>
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
