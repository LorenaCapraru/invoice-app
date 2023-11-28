"use client";
import "./Sidebar.css";
import Image from "../../../../node_modules/next/image";
import { useState } from "react";
import { isObject } from "util";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const handleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  console.log(isSidebarOpen);

  return (
    <>
      {isSidebarOpen && (
        <div className="sidebar-main ">
          <div className="icon-name-wrap-overview">
            <Image
              src="/icons/bars.svg"
              alt="close navbar"
              width={25}
              height={25}
            />
            <p className="overview-text">Overview</p>
            <div className="close-sidebar">
              <Image
                src="/icons/open-sidebar-icon.svg"
                alt="close navbar"
                width={25}
                height={25}
                onClick={handleSideBar}
              />
            </div>
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
      )}
      {!isSidebarOpen && (
        <div className="sidebar-main-close" onClick={handleSideBar}>
          <Image
            src="/icons/close-sidebar-icon.svg"
            alt="close navbar"
            width={25}
            height={25}
          />
        </div>
      )}
    </>
  );
};

export default Sidebar;
