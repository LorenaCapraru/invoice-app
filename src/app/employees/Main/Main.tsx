"use client";
import "./Main.css";
import Card from "../components/Card/Card";
import { useRecoilState, useRecoilValue } from "recoil";
import { employeeState } from "@/app/recoil/atoms";

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

  return (
    <div className="main-employees">
      {employee.map((el: Employee) => (
        <Card el={el} key={el.id} />
      ))}
    </div>
  );
};

export default Main;
