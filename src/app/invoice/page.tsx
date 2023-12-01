import Sidebar from "../components/Sidebar/Sidebar";
import "./page.css";
import Image from "../../../node_modules/next/image";

const Invoice = () => {
  return (
    <div>
      <Sidebar />
      <div className="invoice-header">
        <Image
          src="./icons/cross.svg"
          alt="cross to close"
          width={20}
          height={20}
        />
        <div>
          <p className="invoice-header-number">Invoice01</p>
          <p className="invoice-header-company">TRU GROUP</p>
        </div>
        <Image
          src="./icons/edit.svg"
          alt="cross to close"
          width={20}
          height={20}
        />
      </div>
      <div className="invoice-date">date</div>
      <div className="invoice-body">invoiceee</div>
    </div>
  );
};

export default Invoice;
