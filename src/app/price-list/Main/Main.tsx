"use client";
import "./Main.css";
import InvoiceItems from "@/app/invoice/components/InvoiceItems/InvoiceItems";
import { useState } from "react";
const Main = () => {
  const [clickExport, setClickExport] = useState<boolean | null>(false);
  const handleClickExport = () => {
    setClickExport(true);
  };
  return (
    <div>
      main price list <InvoiceItems handleClickExport={handleClickExport} />
    </div>
  );
};

export default Main;
