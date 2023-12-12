import "./Card.css";
type Client = {
  id: number;
  name: string;
  address: string;
};

const Card = ({ el }: { el: Client }) => {
  const takeInitials = (input: string): string => {
    const initials = input.split(" ");
    return initials[0][0] + (initials[1] ? initials[1][0] : "");
  };

  return (
    <div className="card-main">
      <p className="initials">{takeInitials(el.name)}</p>
      <div>
        <div className="card-name">{el.name}</div>
        <div className="card-address">{el.address}</div>
      </div>
    </div>
  );
};

export default Card;
