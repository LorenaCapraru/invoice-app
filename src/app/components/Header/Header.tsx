"use client";
import "./Header.css";
import Image from "../../../../node_modules/next/image";
import { useState, ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { searchState } from "@/app/recoil/atoms";

const Header = () => {
  const [search, setSearch] = useRecoilState(searchState);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  console.log(search);
  return (
    <div className="header-wrapper">
      <div className="header-main">
        <form action="" className="search-bar">
          <input
            type="search"
            required
            value={search}
            onChange={handleSearch}
          />
          <Image
            src="/icons/search.svg"
            alt="user icon"
            width={20}
            height={20}
            className="search-icon"
          />
          <a href="javascript:void(0)" id="clear-btn"></a>
        </form>
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
