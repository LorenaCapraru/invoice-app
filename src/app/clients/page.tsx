"use client";
import Sidebar from "../overview/components/Sidebar/Sidebar";
import Header from "../overview/components/Header/Header";
import Main from "../clients/Main/Main";
import "./page.css";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  isSliderClickedState,
  currentUserState,
  CurrentUser,
} from "../recoil/atoms";


const Clients = () => {
  const isSliderClicked = useRecoilValue<boolean>(isSliderClickedState);
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

export default Clients;
