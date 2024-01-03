import React, { useState } from "react";
import "../Form/Form.css";
interface FormData {
  name: string;
  address: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    address: "",
  });

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

      <button type="submit" className="submit-form">Submit</button>
    </form>
  );
};

export default Form;
