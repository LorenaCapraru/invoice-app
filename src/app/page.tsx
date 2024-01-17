"use client";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { useRecoilState } from "recoil";
import { isSliderClickedState } from "@/app/recoil/atoms";
import { signOutUser, auth } from "./firebase/auth"; // Adjust the path accordingly

export default function Home() {
  const [isSliderClicked, setIsSliderClicked] =
    useRecoilState<boolean>(isSliderClickedState);

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
