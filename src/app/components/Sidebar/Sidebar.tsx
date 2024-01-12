"use client";
import "./Sidebar.css";
import Image from "../../../../node_modules/next/image";
import { useState } from "react";
import Link from "../../../../node_modules/next/link";
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isSliderClicked, setIsSliderClicked] = useState<boolean>(false);

  const handleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSliderClick = () => {
    setIsSliderClicked(!isSliderClicked);
  };
  console.log("slider", isSliderClicked);

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
        <div className="dark-light-mode">
          {isSliderClicked === true ? (
            <Image
              src="/icons/sun.svg"
              alt="close navbar"
              width={25}
              height={25}
            />
          ) : (
            <Image
              src="/icons/sun-2.svg"
              alt="close navbar"
              width={25}
              height={25}
            />
          )}
          <div className="switch">
            <label className="theme-switch">
              <input type="checkbox" onClick={handleSliderClick} />
              <div className="slider round"></div>
            </label>
          </div>
          {isSliderClicked === false ? (
            <Image
              src="/icons/moon.svg"
              alt="close navbar"
              width={25}
              height={25}
            />
          ) : (
            <Image
              src="/icons/moon-2.svg"
              alt="close navbar"
              width={25}
              height={25}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
