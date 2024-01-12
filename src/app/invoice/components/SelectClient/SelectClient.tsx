import React, { ChangeEvent, useState } from "react";
import CompanyCard from "../CompanyCard/CompanyCard";
import "./SelectClient.css";
import { useRecoilState } from "recoil";
import { clientsState, siteState } from "@/app/recoilData/atoms";
import { Site } from "@/app/recoilData/atoms";

interface Company {
  id: number;
  name: string;
  address: string;
}

const SelectClient: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [client, setClient] = useRecoilState<Company[]>(clientsState);
  const [site, setSite] = useRecoilState<Site[]>(siteState);
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div>
        <select
          id="selectOption"
          value={selectedOption}
          onChange={handleSelectChange}
          className="select-menu"
        >
          <option value="" className="option">
            Select a client
          </option>
          {client.map((el: Company, index: number) => (
            <option key={index} value={el.id.toString()}>
              {el.name}
            </option>
          ))}
        </select>
      </div>
      {selectedOption && (
        <CompanyCard
          el={
            client.find((el: Company) => el.id.toString() === selectedOption)!
          }
        />
      )}

      <select
        id="selectOption"
        value={selectedOption}
        onChange={handleSelectChange}
        className="job-selector"
      >
        <option value="" className="option">
          Select a job
        </option>
        {site.map((el: Site, index: number) => (
          <option key={index} value={el.id.toString()}>
            {el.site}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectClient;
