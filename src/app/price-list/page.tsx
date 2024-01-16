"use client";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Main from "./Main/Main";
import { useRecoilValue } from "recoil";
import { isSliderClickedState } from "../recoil/atoms";
import "./page.css";

const PriceList = () => {
  const isSliderClicked = useRecoilValue<boolean>(isSliderClickedState);

  return (
    <main className={isSliderClicked ? "dark" : "light"}>
      <Sidebar />
      <div className="home-body">
        <Header />
        <Main />
      </div>
    </main>
  );
};

export default PriceList;
