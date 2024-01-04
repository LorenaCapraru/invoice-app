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
import { addEmployeeState } from "@/app/recoil/atoms";

const Form: React.FC = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        <label htmlFor="nameInput">Name: </label>
        <input
          type="text"
          id="nameInput"
          name="name"
          value={formData.name}
          onChange={handleChange}
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
        <label htmlFor="addressInput">Date of birth: </label>
        <input
          type="text"
          id="addressInput"
          name="address"
          value={formData.dob}
          onChange={handleChange}
          placeholder="Enter date of birth"
          className="input-field-b"
          required
        />
      </div>

      <div className="input-b">
        <label htmlFor="addressInput">Email: </label>
        <input
          type="text"
          id="addressInput"
          name="address"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="input-field-b"
          required
        />
      </div>
      <div className="input-b">
        <label htmlFor="addressInput">UTR: </label>
        <input
          type="text"
          id="addressInput"
          name="address"
          value={formData.UTR}
          onChange={handleChange}
          placeholder="Enter UTR"
          className="input-field-b"
          required
        />
      </div>
      <div className="input-b">
        <label htmlFor="addressInput">NINO: </label>
        <input
          type="text"
          id="addressInput"
          name="address"
          value={formData.NINO}
          onChange={handleChange}
          placeholder="Enter NINO"
          className="input-field-b"
          required
        />
      </div>
      <div className="input-b">
        <label htmlFor="addressInput">Address: </label>
        <input
          type="text"
          id="addressInput"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter address"
          className="input-field-b"
          required
        />
      </div>
      <div className="input-b">
        <label htmlFor="addressInput">Phone number: </label>
        <input
          type="text"
          id="addressInput"
          name="address"
          value={formData.phone_no}
          onChange={handleChange}
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
