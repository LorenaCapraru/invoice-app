import "./Sidebar.css";
import Image from "../../../../node_modules/next/image";

const Sidebar = () => {
  return (
    <div className="sidebar-main">
      <div className="icon-name-wrap">
        <Image
          src="/icons/bars.svg"
          alt="close navbar"
          width={25}
          height={25}
        />
        <p className="overview-text">Overview</p>
      </div>

      <p>Invoices</p>
      <p>Clients</p>
      <p>Employees</p>
    </div>
  );
};

export default Sidebar;
