import React, { useState } from "react";
import "../Form/Form.css";
import Image from "next/image";
interface FormData {
  name: string;
  dob: string;
  email: string;
  UTR: string;
  NINO: string;
  address: string;
  phone_no: string;
}

import { useRecoilState } from "recoil";
import { addEmployeeState } from "@/app/recoilData/atoms";

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    dob: "",
    email: "",
    UTR: "",
    NINO: "",
    address: "",
    phone_no: "",
  });

  const [addEmployee, setAddEmployee] = useRecoilState(addEmployeeState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const clickAddEmployee = () => {
    return setAddEmployee(!addEmployee);
  };
  return (
    <form onSubmit={handleSubmit} className="form-b">
      <p className="add-new-title-b">
        Add <span>New</span> Employee
      </p>
      <div className="input-b">
        Name:
        <input
          type="text"
          placeholder="Enter company's name"
          required
          className="input-field-b"
        />
      </div>
      <div className="close-page-b" onClick={clickAddEmployee}>
        <Image
          src="/icons/cross.svg"
          alt="close navbar"
          width={20}
          height={20}
        />
      </div>

      <div className="input-b">
        Date of birth:
        <input
          type="text"
          placeholder="Enter date of birth"
          className="input-field-b"
          required
        />
      </div>

      <div className="input-b">
        Email:
        <input
          type="text"
          placeholder="Enter email"
          className="input-field-b"
          required
        />
      </div>
      <div className="input-b">
        UTR:
        <input
          type="text"
          placeholder="Enter UTR"
          className="input-field-b"
          required
        />
      </div>
      <div className="input-b">
        NINO:
        <input
          type="text"
          placeholder="Enter NINO"
          className="input-field-b"
          required
        />
      </div>
      <div className="input-b">
        Address:
        <input
          type="text"
          placeholder="Enter address"
          className="input-field-b"
          required
        />
      </div>
      <div className="input-b">
        Phone number:
        <input
          type="text"
          placeholder="Enter phone number"
          className="input-field-b"
          required
        />
      </div>

      <button type="submit" className="submit-form-b">
        Submit
      </button>
    </form>
  );
};

export default Form;
