"use client";
import "./Sidebar.css";
import Image from "../../../../node_modules/next/image";
import { useState } from "react";
import Link from "../../../../node_modules/next/link";
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const handleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  console.log(isSidebarOpen);

  return (
    <>
      <div className={`sidebar-main ${!isSidebarOpen ? "close" : ""}`}>
        <div className="icon-name-wrap-overview">
          <Link href="/">
            <div className="icon-name-wrap-overview">
              <Image
                src="/icons/bars.svg"
                alt="close navbar"
                width={25}
                height={25}
              />
              <p className="overview-text">Overview</p>
            </div>
          </Link>

          <div
            className={`close-sidebar ${!isSidebarOpen ? "icon-rotate" : ""}`}
          >
            <Image
              src="/icons/open-sidebar-icon.svg"
              alt="close navbar"
              width={25}
              height={25}
              onClick={handleSideBar}
            />
          </div>
        </div>
        <Link href="/invoice">
          <div className="icon-name-wrap">
            <Image
              src="/icons/invoice.svg"
              alt="close navbar"
              width={25}
              height={25}
            />
            <p>Invoices</p>
          </div>
        </Link>
        <Link href="/clients">
          <div className="icon-name-wrap">
            <Image
              src="/icons/clients.svg"
              alt="close navbar"
              width={25}
              height={25}
            />
            <p>Clients</p>
          </div>
        </Link>
        <Link href="/employees">
          <div className="icon-name-wrap">
            <Image
              src="/icons/employees.svg"
              alt="close navbar"
              width={25}
              height={25}
            />
            <p>Employees</p>
          </div>
        </Link>
        <Link href="/price-list">
          <div className="icon-name-wrap">
            <Image
              src="/icons/price-list.svg"
              alt="close navbar"
              width={25}
              height={25}
            />
            <p>Price List</p>
          </div>
        </Link>
        <div className="switch">
          <label className="theme-switch">
            <input type="checkbox" />
            <div className="slider round"></div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
