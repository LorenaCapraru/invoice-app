"use client";
import "./Header.css";
import Image from "../../../../node_modules/next/image";
import Search from "./components/Search/Search";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { auth } from "@/app/firebase/firebase";
import {
  userNameState,
  userPictureURLState,
  currentUserState,
  CurrentUser,
  isUserLoggedInState,
} from "@/app/recoil/atoms";

const Header = () => {
  const [userName, setUserName] = useRecoilState<string | null>(userNameState);
  const [userPictureURL, setUserPictureURL] = useRecoilState<string | null>(
    userPictureURLState
  );
  const [currentUser, setCurrentUser] = useRecoilState<CurrentUser | undefined>(
    currentUserState
  );
  const [isUserLoggedIn, setUserLoggedIn] =
    useRecoilState<boolean>(isUserLoggedInState);

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setUserLoggedIn(true);

        if (user && user.email) {
          let name = "";
          let surname = "";
          if (user.displayName !== null) {
            const nameParts = user.displayName.split(" ");
            name = nameParts[0];
            surname = nameParts[1];
          }

          const input: CurrentUser = {
            id: user.uid,
            image: user?.photoURL,
            name: name,
            surname: surname,
            email: user.email,
            type: "",
          };
          setCurrentUser(input);
        }
      } else {
        setUserLoggedIn(false);
        console.log("there is no user");
      }
    });
  }, []);

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
