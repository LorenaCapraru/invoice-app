import "./CompanyCard.css";
import company from "./company.json";

const CompanyCard = ({ el }) => {
  console.log(company);
  const takeInitials = (input: string) => {
    const initials = input.split(" ");
    return initials[0][0] + initials[1][0];
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
