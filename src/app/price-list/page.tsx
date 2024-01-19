"use client";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Main from "./Main/Main";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  CurrentUser,
  currentUserState,
  isSliderClickedState,
  isUserLoggedInState,
} from "../recoil/atoms";
import SignIn from "../components/SignIn/SignIn";
import "./page.css";

const PriceList = () => {
  const isSliderClicked = useRecoilValue<boolean>(isSliderClickedState);
  const isUserLoggedIn = useRecoilValue<boolean>(isUserLoggedInState);
  const [currentUser, setCurrentUser] = useRecoilState<CurrentUser | undefined>(
    currentUserState
  );

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
