import "./Card.css";
import Image from "next/image";

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
      <div className="card-details">
        <p className="initials">{takeInitials(el.name)}</p>
        <div>
          <div className="card-name">{el.name}</div>
          <div className="card-address">{el.address}</div>
        </div>
      </div>
      <div className="icon-wrapper">
        <Image src="/icons/bin.svg" alt="close navbar" width={30} height={30} />
        <Image
          src="/icons/edit.svg"
          alt="close navbar"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default Card;
