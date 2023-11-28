"use client";
import Sidebar from "../Sidebar/Sidebar";
import "./Header.css";
import Image from "../../../../node_modules/next/image";
import { useState } from "react";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Sidebar />
      <div className="header-main">
        <Image
          src="/icons/search.svg"
          alt="user icon"
          width={20}
          height={20}
          className="search-icon"
        />
        <div className="search-user">
          Hi, Gabriel
          <Image
            src="/images/user1.png"
            alt="user icon"
            width={30}
            height={30}
            className="user-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
