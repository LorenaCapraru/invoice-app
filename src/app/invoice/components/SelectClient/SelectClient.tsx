import React, { ChangeEvent, useState } from "react";
import CompanyCard from "../CompanyCard/CompanyCard";
import "./SelectClient.css";
import company from "../CompanyCard/company.json";

interface Company {
  id: number;
  name: string;
  address: string;
}

const SelectClient: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <p className="address">Client</p>
      <div>
        <select
          id="selectOption"
          value={selectedOption}
          onChange={handleSelectChange}
          className="select-menu"
        >
          <option value="" className="option"></option>
          {company.company.map((el: Company, index: number) => (
            <option key={index} value={el.id.toString()}>
              {el.name}
            </option>
          ))}
        </select>
      </div>
      {selectedOption && (
        <CompanyCard
          el={
            company.company.find(
              (el: Company) => el.id.toString() === selectedOption
            )!
          }
        />
      )}
    </div>
  );
};

export default SelectClient;
