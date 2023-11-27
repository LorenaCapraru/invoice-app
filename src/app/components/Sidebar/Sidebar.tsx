import "./Sidebar.css";
import Image from "../../../../node_modules/next/image";

const Sidebar = () => {
  return (
    <div className="sidebar-main">
      <div className="icon-name-wrap-overview">
        <Image
          src="/icons/bars.svg"
          alt="close navbar"
          width={25}
          height={25}
        />
        <p className="overview-text">Overview</p>
      </div>
      <div className="icon-name-wrap">
        <Image
          src="/icons/invoice.svg"
          alt="close navbar"
          width={25}
          height={25}
        />
        <p>Invoices</p>
      </div>
      <div className="icon-name-wrap">
        <Image
          src="/icons/clients.svg"
          alt="close navbar"
          width={25}
          height={25}
        />
        <p>Clients</p>
      </div>
      <div className="icon-name-wrap">
        <Image
          src="/icons/employees.svg"
          alt="close navbar"
          width={25}
          height={25}
        />
        <p>Employees</p>
      </div>
    </div>
  );
};

export default Sidebar;
