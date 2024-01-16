"use client";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { useRecoilState } from "recoil";
import { isSliderClickedState } from "@/app/recoil/atoms";

export default function Home() {
  const [isSliderClicked, setIsSliderClicked] =
    useRecoilState<boolean>(isSliderClickedState);
  console.log("slideer", isSliderClicked);
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
