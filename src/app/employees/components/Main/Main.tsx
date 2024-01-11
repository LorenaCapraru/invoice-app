"use client";
import "./Main.css";
import Card from "../CardEmployees/Card";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  addEmployeeState,
  employeeState,
  searchState,
} from "@/app/recoil/atoms";
import Image from "next/image";
import { useState } from "react";
import Form from "../Form/Form";
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
  const [addEmployee, setAddEmployee] = useRecoilState(addEmployeeState);
  const search = useRecoilValue(searchState);

  const clickAddEmployee = () => {
    return setAddEmployee(!addEmployee);
  };

  return (
    <div className="employees">
      <button className="add-new-employee" onClick={clickAddEmployee}>
        <Image src="/icons/add.svg" alt="close navbar" width={17} height={17} />
        Add new Employee
      </button>

      {addEmployee === true && (
        <div className="add-employee-form">
          <Form />
        </div>
      )}

      <div
        className={
          addEmployee === true ? "main-employees opacity" : "main-employees"
        }
      >
        {employee.length > 0 ? (
          employee
            .filter(
              (el: Employee) =>
                el.name.toLowerCase().includes(search.toLowerCase()) ||
                el.address
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
            )
            .map((el: Employee) => <Card el={el} key={el.id} />)
        ) : (
          <div className="empty-table">No registered employees</div>
        )}
      </div>
    </div>
  );
};

export default Main;
