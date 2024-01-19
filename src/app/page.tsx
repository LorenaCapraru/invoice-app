"use client";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { useRecoilState, useRecoilValue } from "recoil";
import { isSliderClickedState, isUserLoggedInState } from "@/app/recoil/atoms";
import SignIn from "./components/SignIn/SignIn";

export default function Home() {
  const [isSliderClicked, setIsSliderClicked] =
    useRecoilState<boolean>(isSliderClickedState);
  const isUserLoggedIn = useRecoilValue<boolean>(isUserLoggedInState);

  return isUserLoggedIn ? (
    <main className={isSliderClicked ? "dark" : "light"}>
      <Sidebar />
      <div className={`home-body `}>
        <Header />
        <Main />
      </div>
    </main>
  ) : (
    <SignIn />
  );
}
