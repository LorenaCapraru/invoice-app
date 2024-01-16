"use client";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Main from "../clients/Main/Main";
import "./page.css";
import { useRecoilValue } from "recoil";
import { isSliderClickedState } from "../recoilData/atoms";

const Clients = () => {
  const isSliderClicked = useRecoilValue<boolean>(isSliderClickedState);
  return (
    <main className={isSliderClicked ? "dark" : "light"}>
      <Sidebar />
      <div className={`home-body `}>
        <Header />
        <Main />
      </div>
    </main>
  );
};

export default Clients;
