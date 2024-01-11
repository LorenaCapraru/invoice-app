"use client";
import Card from "@/app/employees/components/CardEmployees/Card";
import "./Main.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { clientsState, searchState, addClientState } from "@/app/recoil/atoms";
import Image from "next/image";
import { useState } from "react";
import Form from "./components/Form/Form";
type Client = {
  id: number;
  name: string;
  address: string;
};

const Main = () => {
  const [client, setClient] = useRecoilState(clientsState);
  const [addClient, setAddClient] = useRecoilState(addClientState);
  const search = useRecoilValue(searchState);

  const clickAddClient = () => {
    return setAddClient(!addClient);
  };

  return (
    <div className="client-main">
      <button className="add-new-client" onClick={clickAddClient}>
        <Image src="/icons/add.svg" alt="close navbar" width={17} height={17} />
        Add new Client
      </button>
      {addClient === true && (
        <div className="add-client-form">
          <Form />
        </div>
      )}

      <div className={addClient === true ? "cards-main opacity" : "cards-main"}>
        {client.length > 0 ? (
          client
            .filter(
              (el: Client) =>
                el.name.toLowerCase().includes(search.toLowerCase()) ||
                el.address
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
            )
            .map((el, index) => <Card el={el} key={index} />)
        ) : (
          <div className="empty-table">No registered clients</div>
        )}
      </div>
    </div>
  );
};

export default Main;
