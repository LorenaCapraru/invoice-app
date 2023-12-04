// CompanyCard.tsx
import React from "react";
import "./CompanyCard.css";
import company from "./company.json";

interface Company {
  id: number;
  name: string;
  address: string;
}

interface CompanyCardProps {
  el: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ el }) => {
  const takeInitials = (input: string): string => {
    const initials = input.split(" ");
    return initials[0][0] + (initials[1] ? initials[1][0] : "");
  };

  return (
    <div className="company-card-main">
      <p className="initials">{takeInitials(el.name)}</p>
      <div>
        <p className="name">{el.name}</p>
        <p className="address">{el.address}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
