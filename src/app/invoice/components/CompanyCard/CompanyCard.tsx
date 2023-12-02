import "./CompanyCard.css";
import company from "./company.json";
import { stringify } from "querystring";

const CompanyCard = () => {
  console.log(company);
  const takeInitials = (input: string) => {
    const initials = input.split(" ");
    return initials[0][0] + initials[1][0];
  };
  return (
    <div className="company-card-main">
      <p className="initials">{takeInitials(company.company[0].name)}</p>
      <div>
        <p className="name">{company.company[0].name}</p>
        <p className="address">{company.company[0].address}</p>
      </div>
    </div>
  );
};
export default CompanyCard;
