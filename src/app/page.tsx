"use client";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isSliderClickedState, isUserLoggedInState } from "@/app/recoil/atoms";
import SignIn from "./components/SignIn/SignIn";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  CurrentUser,
  isPopupConfirmOpenState,
  popupConfirmTextState,
} from "@/app/recoil/atoms";
import { signUpWithGoogle } from "../app/firebase/auth";

export default function Home() {
  const [isSliderClicked, setIsSliderClicked] =
    useRecoilState<boolean>(isSliderClickedState);
  const [isUserLoggedIn, setUserLoggedIn] =
    useRecoilState<boolean>(isUserLoggedInState);

  return (
    <main className={isSliderClicked ? "dark" : "light"}>
      <Sidebar />
      <div className={`home-body `}>
        {isUserLoggedIn ? (
          <>
            <Header />
            <Main />
          </>
        ) : (
          <SignIn />
        )}
      </div>
    </main>
  );
}
