"use client";
import Card from "./components/Card/Card";
import "./Main.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { clientsState, searchState } from "@/app/recoil/atoms";
import Image from "next/image";

type Client = {
  id: number;
  name: string;
  address: string;
};

const Main = () => {
  const [client, setClient] = useRecoilState(clientsState);
  const search = useRecoilValue(searchState);

  console.log("lala", search);
  return (
    <div className="client-main">
      <p className="clients-header">Clients</p>
      <div className="cards-main">
        {client
          .filter(
            (el: Client) =>
              el.name.toLowerCase().includes(search.toLowerCase()) ||
              el.address
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
          )
          .map((el, index) => (
            <Card el={el} key={index} />
          ))}
      </div>
      <button className="add-new-client">
        <Image src="/icons/add.svg" alt="close navbar" width={17} height={17} />
        Add new Client
      </button>
    </div>
  );
};

export default Main;
