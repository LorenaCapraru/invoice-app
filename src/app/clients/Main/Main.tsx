"use client";
import Card from "./components/Card/Card";
import "./Main.css";
import { useRecoilState } from "recoil";
import { clientsState } from "@/app/recoil/atoms";

const Main = () => {
  const [client, setClient] = useRecoilState(clientsState);
  console.log("lala", client.clients);
  return (
    <div>
      {}
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Main;
