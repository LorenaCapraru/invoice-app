"use client";
import "./Header.css";
import Image from "../../../../node_modules/next/image";
import Search from "./components/Search/Search";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-main">
        <Search />
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
