"use client";
import Sidebar from "../Sidebar/Sidebar";
import "./Header.css";
import Image from "../../../../node_modules/next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuClick, setIsMenuClick] = useState<boolean>(false);
  const handleMenuClick = () => {
    setIsMenuClick(!isMenuClick);
  };

  return (
    <div className="header-main">
      {isMenuClick && <Sidebar />}
      <Image
        src="/icons/menu.svg"
        alt="close navbar"
        width={30}
        height={30}
        onClick={handleMenuClick}
      />
    </div>
  );
};

export default Header;
