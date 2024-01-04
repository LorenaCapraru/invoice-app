import React, { useState } from "react";
import "../Form/Form.css";
import Image from "next/image";
interface FormData {
  name: string;
  address: string;
}
import { useRecoilState } from "recoil";
import { addEmployeeState } from "@/app/recoil/atoms";

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    address: "",
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
    <form onSubmit={handleSubmit}>
      <div className="input">
        <label htmlFor="nameInput">Name: </label>
        <input
          type="text"
          id="nameInput"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter company's name"
          required
          className="input-field"
        />
      </div>
      <div className="close-page" onClick={clickAddEmployee}>
        <Image
          src="/icons/cross.svg"
          alt="close navbar"
          width={20}
          height={20}
        />
      </div>

      <div className="input">
        <label htmlFor="addressInput">Address: </label>
        <input
          type="text"
          id="addressInput"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter client's address"
          className="input-field"
          required
        />
      </div>

      <button type="submit" className="submit-form">
        Submit
      </button>
    </form>
  );
};

export default Form;
