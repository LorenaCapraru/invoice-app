"use client";
import Header from "./overview/components/Header/Header";
import Sidebar from "./overview/components/Sidebar/Sidebar";
import Main from "./overview/components/Main/Main";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isSliderClickedState, isUserLoggedInState } from "@/app/recoil/atoms";
import SignIn from "./overview/components/SignIn/SignIn";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CurrentUser, currentUserState } from "@/app/recoil/atoms";
import { signUpWithGoogle } from "../app/firebase/auth";
import { userInfo } from "os";

export default function Home() {
  const [isSliderClicked, setIsSliderClicked] =
    useRecoilState<boolean>(isSliderClickedState);
  const [isUserLoggedIn, setUserLoggedIn] =
    useRecoilState<boolean>(isUserLoggedInState);
  const [currentUser, setCurrentUser] = useRecoilState<CurrentUser | undefined>(
    currentUserState
  );

  return <SignIn />;
}
