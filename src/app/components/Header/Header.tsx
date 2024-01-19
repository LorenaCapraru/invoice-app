"use client";
import "./Header.css";
import Image from "../../../../node_modules/next/image";
import Search from "./components/Search/Search";
import { useRecoilState } from "recoil";
import { userNameState, userPictureURLState } from "@/app/recoil/atoms";

const Header = () => {
  const [userName, setUserName] = useRecoilState<string | null>(userNameState);
  const [userPictureURL, setUserPictureURL] = useRecoilState<string | null>(
    userPictureURLState
  );
  return (
    <div className="header-wrapper">
      <div className="header-main">
        <Search />
        <div className="search-user">
          Hi, {userName?.split(" ")[0]}
          <Image
            src={userPictureURL}
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
