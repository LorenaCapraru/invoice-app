"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./InvoiceTable.css";
import { useRecoilState } from "recoil";
import { searchState } from "@/app/recoil/atoms";
import { isSliderClickedState } from "@/app/recoil/atoms";

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
  const [search, setSearch] = useRecoilState(searchState);
  const [isSliderClicked, setIsSliderClicked] =
    useRecoilState<boolean>(isSliderClickedState);
  const [updatedInvoices, setUpdatedInvoices] = useState<Invoice[]>(
    invoicesData.invoices
  );

  const toggleStatus = (status: string): string => {
    switch (status) {
      case "paid":
        return "sent";
      case "sent":
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
    <div
      className={`table-main ${
        isSliderClicked ? "dark-component" : "light-component"
      }`}
    >
      <table className="table">
        <thead>
          <tr>
            <th>Client</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody
          className={isSliderClicked ? "table-body-dark " : "table-body-light "}
        >
          {invoicesData.invoices
            .filter(
              (el: Invoice) =>
                el.invoice_number
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                el.client
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
            )
            .map((el: Invoice, index: number) => (
              <tr key={index}>
                <td className="client-invoiceNo">
                  <span className="td-client">{el.client}</span>
                  <span className="td-invoice-no">{el.invoice_number}</span>
                </td>
                <td className="sum">
                  {new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP",
                  }).format(el.total)}
                </td>
                <td
                  className={
                    el.status === "pending"
                      ? "status-pending"
                      : el.status === "sent"
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
