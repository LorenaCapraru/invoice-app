"use client";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Main from "./Main/Main";
import { useRecoilValue } from "recoil";
import { isSliderClickedState, isUserLoggedInState } from "../recoil/atoms";
import SignIn from "../components/SignIn/SignIn";
import "./page.css";

const PriceList = () => {
  const isSliderClicked = useRecoilValue<boolean>(isSliderClickedState);
  const isUserLoggedIn = useRecoilValue<boolean>(isUserLoggedInState);

  return isUserLoggedIn ? (
    <main className={isSliderClicked ? "dark" : "light"}>
      <Sidebar />
      <div className="home-body">
        <Header />
        <Main />
      </div>
    </main>
  ) : (
    <SignIn />
  );
};

export default PriceList;
