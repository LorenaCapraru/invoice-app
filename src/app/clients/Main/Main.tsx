"use client";
import Card from "./components/Card/Card";
import "./Main.css";
import { useRecoilState } from "recoil";
import { clientsState } from "@/app/recoil/atoms";
import CompanyCard from "@/app/invoice/components/CompanyCard/CompanyCard";

const Main = () => {
  const [client, setClient] = useRecoilState(clientsState);
  console.log("lala", client);
  return (
    <div className="client-main">
      <p className="clients-header">Clients</p>
      <div className="cards-main">
        {client.map((el, index) => (
          <Card el={el} key={index} />
        ))}
      </div>
      <button className="add-new-client">Add new Client</button>
    </div>
  );
};

export default Main;
