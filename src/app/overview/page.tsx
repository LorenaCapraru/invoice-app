"use client";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isSliderClickedState, isUserLoggedInState } from "@/app/recoil/atoms";
import { CurrentUser, currentUserState } from "@/app/recoil/atoms";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";

export default function Home() {
  const [isSliderClicked, setIsSliderClicked] =
    useRecoilState<boolean>(isSliderClickedState);
  const [isUserLoggedIn, setUserLoggedIn] =
    useRecoilState<boolean>(isUserLoggedInState);
  const [currentUser, setCurrentUser] = useRecoilState<CurrentUser | undefined>(
    currentUserState
  );

  return (
    <main className={isSliderClicked ? "dark" : "light"}>
      <Sidebar />
      <div className={`home-body `}>
        <Header />
        <Main />
      </div>
    </main>
  );
}
