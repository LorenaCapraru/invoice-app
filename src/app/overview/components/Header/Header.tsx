"use client";
import "./Header.css";
import Image from "next/image";
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

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push("/");
      setImagePopUp(!imagePopUp);
      setUserLoggedIn(false);
      setCurrentUser(undefined);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
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
        // Redirect to the sign-in page if not logged in
        router.push("/");
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
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
          {isUserLoggedIn && imagePopUp && (
            <div className="sign-out" onClick={handleSignOut}>
              Sign out
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
