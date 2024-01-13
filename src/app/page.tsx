"use client";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { useRecoilState } from "recoil";
import { isSliderClickedState } from "@/app/recoilData/atoms";
export default function Home() {
  const [isSliderClicked, setIsSliderClicked] =
    useRecoilState<boolean>(isSliderClickedState);

  return (
    <main>
      <Sidebar />
      <div
        className={`home-body ${isSliderClicked === true ? "dark" : "light"}`}
      >
        <Header />
        <Main />
      </div>
    </main>
  );
}
