"use client";
import "./Main.css";
import Card from "../components/Card/Card";
import { useRecoilState, useRecoilValue } from "recoil";
import { employeeState, searchState } from "@/app/recoil/atoms";
import Image from "next/image";

type Employee = {
  id: number;
  name: string;
  dob: string;
  email: string;
  UTR: string;
  NINO: string;
  address: string;
  phone_no: string;
};

const Main = () => {
  const [employee, setEmployee] = useRecoilState(employeeState);
  const search = useRecoilValue(searchState);

  return (
    <div>
      <button className="add-new-employee">
        <Image src="/icons/add.svg" alt="close navbar" width={17} height={17} />
        Add new Client
      </button>

      <div className="main-employees">
        {employee
          .filter(
            (el: Employee) =>
              el.name.toLowerCase().includes(search.toLowerCase()) ||
              el.address
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
          )
          .map((el: Employee) => (
            <Card el={el} key={el.id} />
          ))}
      </div>
    </div>
  );
};

export default Main;
