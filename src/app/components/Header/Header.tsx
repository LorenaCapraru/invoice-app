"use client";
import "./Header.css";
import Image from "../../../../node_modules/next/image";
import Search from "./components/Search/Search";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { auth } from "@/app/firebase/firebase";
import { signOutUser } from "@/app/firebase/auth";
import { useRouter } from "next/navigation";

import {
  userNameState,
  userPictureURLState,
  currentUserState,
  CurrentUser,
  isUserLoggedInState,
  imagePopUpState,
} from "@/app/recoil/atoms";

const Header = () => {
  const [userName, setUserName] = useRecoilState<string | null>(userNameState);
  const [userPictureURL, setUserPictureURL] = useRecoilState<string | null>(
    userPictureURLState
  );
  const [currentUser, setCurrentUser] = useRecoilState<CurrentUser | undefined>(
    currentUserState
  );
  const [imagePopUp, setImagePopUp] = useRecoilState<boolean>(imagePopUpState);
  const [isUserLoggedIn, setUserLoggedIn] =
    useRecoilState<boolean>(isUserLoggedInState);
  const handleLogoImageClick = () => {
    setImagePopUp(!imagePopUp);
  };
  const router = useRouter();

  const handleLogOutOnClick = async () => {
    await signOutUser()
      .then((result) => {
        result ? router.push("/") : console.log("The logout was unsuccessful");
      })
      .catch((error) => {
        console.log("The logout was unsuccessful with error:", error);
      });
  };
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
          Hi, {currentUser?.name}
          <Image
            src={currentUser?.image || "public/icons/clients.svg"}
            alt="user icon"
            width={50}
            height={50}
            className="user-icon"
            onClick={handleLogoImageClick}
          />
          {imagePopUp && (
            <div className="sign-out" onClick={handleLogOutOnClick}>
              Sign out
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
